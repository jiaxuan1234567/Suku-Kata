# Syllable audio

Upload your manually recorded Bahasa Melayu syllable MP3 files here.

Examples:
- `bu.mp3`
- `ku.mp3`
- `ba.mp3`
- `ju.mp3`

Recommended: short, clear recordings with little background noise.

Then reference them in `src/data/questions.ts`, for example:

```ts
BU: "/audio/syllables/bu.mp3"
```

The game tries the MP3 first. If it cannot play the file, it falls back to browser speech synthesis.
