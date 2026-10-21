let activeAudio: HTMLAudioElement | null = null;

function speechFallback(text: string) {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.toLowerCase());
  utterance.lang = "ms-MY";
  utterance.rate = 0.78;
  utterance.pitch = 1.06;
  window.speechSynthesis.speak(utterance);
}

/**
 * Primary: manually uploaded MP3 file.
 * Fallback: browser Speech Synthesis when the file is missing/cannot play.
 */
export async function playAudioFile(path: string | undefined, fallbackText: string) {
  if (!path) {
    speechFallback(fallbackText);
    return;
  }

  try {
    activeAudio?.pause();
    activeAudio = new Audio(path);

    await new Promise<void>((resolve, reject) => {
      if (!activeAudio) {
        reject(new Error("Audio unavailable"));
        return;
      }

      const audio = activeAudio;
      const cleanup = () => {
        audio.removeEventListener("error", onError);
        audio.removeEventListener("playing", onPlaying);
      };
      const onError = () => {
        cleanup();
        reject(new Error(`Could not play ${path}`));
      };
      const onPlaying = () => {
        cleanup();
        resolve();
      };

      audio.addEventListener("error", onError, { once: true });
      audio.addEventListener("playing", onPlaying, { once: true });
      audio.play().catch(onError);
    });
  } catch {
    speechFallback(fallbackText);
  }
}

export function stopAudio() {
  activeAudio?.pause();
  activeAudio = null;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}
