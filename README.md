# Jom Belajar Suku Kata — Mini Game

A visual Bahasa Melayu syllable-combination game for young children.

The child sees a picture, selects two syllables, and the game checks the answer only after both slots are filled.

## Run the game

You need Node.js installed.

Open Terminal inside this folder and run:

```bash
npm install
npm run dev
```

Vite will show a local address, normally:

```text
http://localhost:5173
```

Open that address in Chrome, Safari, or another browser.

## Build the game

```bash
npm run build
```

The production files will be created in `dist/`.

---

# How the game works

Example: BUKU

1. The child sees the picture only.
2. Two empty slots appear.
3. The child taps a syllable button. Its audio plays and it fills slot 1.
4. The child taps another syllable. Its audio plays and it fills slot 2.
5. Only now does the game check the complete answer.
6. Wrong answer: `Cuba lagi!`, gentle shake, then both slots clear.
7. Correct answer: `Tahniah!`, confetti, the full word is revealed, and the full-word audio plays.
8. The next question appears automatically.

A selected slot can be tapped before checking to remove that selection.

---

# Add a new question

Open:

```text
src/data/questions.ts
```

Copy one question object and edit it.

Example:

```ts
{
  id: "baju",
  word: "BAJU",
  image: "/images/baju.png",
  fallbackEmoji: "👕",
  syllables: ["BA", "JU"],
  options: [
    { id: "baju-ba", text: "BA" },
    { id: "baju-ju", text: "JU" },
    { id: "baju-bu", text: "BU" },
    { id: "baju-ku", text: "KU" },
  ],
  audio: {
    syllables: {
      BA: "/audio/syllables/ba.mp3",
      JU: "/audio/syllables/ju.mp3",
      BU: "/audio/syllables/bu.mp3",
      KU: "/audio/syllables/ku.mp3",
    },
    word: "/audio/words/baju.mp3",
  },
}
```

Important:

- `syllables` is the correct answer and order.
- `options` contains the four buttons.
- Every option `id` must be unique.
- The same syllable text can appear twice if the word needs it.

Example for SUSU:

```ts
syllables: ["SU", "SU"],
options: [
  { id: "susu-su-1", text: "SU" },
  { id: "susu-su-2", text: "SU" },
  { id: "susu-sa", text: "SA" },
  { id: "susu-si", text: "SI" },
]
```

This lets the child physically select SU twice.

---

# Add a picture

Put your image inside:

```text
public/images/
```

Example:

```text
public/images/buku.png
```

Then use:

```ts
image: "/images/buku.png"
```

If the image is missing or fails to load, the game displays `fallbackEmoji` instead.

Recommended image style:

- PNG
- square or near-square
- simple object
- transparent or clean background
- consistent cartoon style

---

# Add syllable audio

Put manually recorded MP3 files inside:

```text
public/audio/syllables/
```

Examples:

```text
public/audio/syllables/bu.mp3
public/audio/syllables/ku.mp3
```

Reference them in the question:

```ts
BU: "/audio/syllables/bu.mp3",
KU: "/audio/syllables/ku.mp3",
```

When the child taps BU, `bu.mp3` plays.

The manually uploaded MP3 is the primary audio. If it cannot play, the game falls back to browser speech synthesis.

---

# Add full-word audio

Put the MP3 inside:

```text
public/audio/words/
```

Example:

```text
public/audio/words/buku.mp3
```

Then set:

```ts
word: "/audio/words/buku.mp3"
```

This audio plays only after the child forms the correct word.

---

# Main folders

```text
src/
├── components/
│   ├── GameHeader.tsx
│   ├── PictureCard.tsx
│   ├── SyllableSlots.tsx
│   ├── SyllableOptions.tsx
│   ├── FeedbackAnimation.tsx
│   └── CompletionScreen.tsx
├── data/
│   └── questions.ts
├── utils/
│   ├── audio.ts
│   └── shuffle.ts
├── App.tsx
├── types.ts
└── styles.css

public/
├── images/
└── audio/
    ├── syllables/
    └── words/
```
