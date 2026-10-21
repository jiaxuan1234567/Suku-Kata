import { useMemo, useState } from "react";
import confetti from "canvas-confetti";
import GameHeader from "./components/GameHeader";
import PictureCard from "./components/PictureCard";
import SyllableSlots from "./components/SyllableSlots";
import SyllableOptions from "./components/SyllableOptions";
import FeedbackAnimation from "./components/FeedbackAnimation";
import CompletionScreen from "./components/CompletionScreen";
import { QUESTION_BANK } from "./data/questions";
import { playAudioFile, stopAudio } from "./utils/audio";
import { shuffle } from "./utils/shuffle";
import type { Question, SyllableOption } from "./types";

const QUESTIONS_PER_GAME = 10;

type Slots = [SyllableOption | null, SyllableOption | null];
type FeedbackStatus = "idle" | "wrong" | "correct";

function createGameQuestions(): Question[] {
  return shuffle(QUESTION_BANK)
    .slice(0, Math.min(QUESTIONS_PER_GAME, QUESTION_BANK.length))
    .map((question) => ({
      ...question,
      options: shuffle(question.options),
    }));
}

export default function App() {
  const initialQuestions = useMemo(() => createGameQuestions(), []);
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<Slots>([null, null]);
  const [status, setStatus] = useState<FeedbackStatus>("idle");
  const [locked, setLocked] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = questions[currentIndex];

  function celebrate() {
    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.67 },
      scalar: 1.05,
    });
  }

  function resetSelection() {
    setSelected([null, null]);
    setStatus("idle");
    setLocked(false);
  }

  function evaluate(nextSlots: Slots) {
    const [first, second] = nextSlots;
    if (!first || !second) return;

    setLocked(true);
    const isCorrect =
      first.text === question.syllables[0] &&
      second.text === question.syllables[1];

    if (!isCorrect) {
      setStatus("wrong");
      window.setTimeout(resetSelection, 900);
      return;
    }

    setStatus("correct");
    celebrate();

    window.setTimeout(() => {
      void playAudioFile(question.audio.word, question.word);
    }, 500);

    window.setTimeout(() => {
      const isLast = currentIndex >= questions.length - 1;
      if (isLast) {
        setFinished(true);
        setLocked(false);
        return;
      }

      setCurrentIndex((value) => value + 1);
      setSelected([null, null]);
      setStatus("idle");
      setLocked(false);
    }, 1900);
  }

  function handleChoose(option: SyllableOption) {
    if (locked || selected.some((item) => item?.id === option.id)) return;

    void playAudioFile(question.audio.syllables[option.text], option.text);

    const nextSlots: Slots = [...selected] as Slots;
    const emptyIndex = nextSlots[0] === null ? 0 : nextSlots[1] === null ? 1 : -1;

    if (emptyIndex === -1) return;

    nextSlots[emptyIndex] = option;
    setSelected(nextSlots);

    if (nextSlots[0] && nextSlots[1]) {
      // Lock immediately after slot 2 is filled so a fast third tap cannot add extra audio/input.
      setLocked(true);
      window.setTimeout(() => evaluate(nextSlots), 260);
    }
  }

  function handleRemove(index: 0 | 1) {
    if (locked || !selected[index]) return;
    const nextSlots: Slots = [...selected] as Slots;
    nextSlots[index] = null;
    setSelected(nextSlots);
    setStatus("idle");
  }

  function startNewGame() {
    stopAudio();
    setQuestions(createGameQuestions());
    setCurrentIndex(0);
    setSelected([null, null]);
    setStatus("idle");
    setLocked(false);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="app-shell">
        <div className="background-rainbow" aria-hidden="true">🌈</div>
        <CompletionScreen total={questions.length} onReplay={startNewGame} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="background-rainbow" aria-hidden="true">🌈</div>
      <div className="background-cloud cloud-a" aria-hidden="true">☁️</div>
      <div className="background-cloud cloud-b" aria-hidden="true">☁️</div>

      <main className="game-container">
        <GameHeader current={currentIndex} total={questions.length} />
        <PictureCard question={question} revealWord={status === "correct"} />
        <SyllableSlots
          selected={selected}
          status={status}
          locked={locked}
          onRemove={handleRemove}
        />
        <SyllableOptions
          options={question.options}
          selectedIds={selected.filter(Boolean).map((item) => item!.id)}
          locked={locked}
          onChoose={handleChoose}
        />
        <FeedbackAnimation status={status} />
      </main>
    </div>
  );
}
