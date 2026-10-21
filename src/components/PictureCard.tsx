import { useEffect, useState } from "react";
import type { Question } from "../types";

type Props = {
  question: Question;
  revealWord: boolean;
};

export default function PictureCard({ question, revealWord }: Props) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [question.id]);

  return (
    <section className="picture-card" key={question.id}>
      <div className="picture-bubble bubble-one" aria-hidden="true">☁️</div>
      <div className="picture-bubble bubble-two" aria-hidden="true">⭐</div>

      <div className="picture-frame">
        {!imageFailed ? (
          <img
            src={question.image}
            alt=""
            className="question-image"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="fallback-emoji" role="img" aria-label={question.word}>
            {question.fallbackEmoji}
          </span>
        )}
      </div>

      <div className={`revealed-word ${revealWord ? "show" : ""}`} aria-live="polite">
        {revealWord ? question.word : "\u00A0"}
      </div>
    </section>
  );
}
