export type SyllableOption = {
  /** Unique button id. Keep this unique even when the text is repeated (e.g. su-1, su-2). */
  id: string;
  text: string;
};

export type Question = {
  id: string;
  word: string;
  image: string;
  fallbackEmoji: string;
  syllables: [string, string];
  options: SyllableOption[];
  audio: {
    syllables: Record<string, string>;
    word: string;
  };
};
