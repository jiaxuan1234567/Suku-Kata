# Question pictures

Upload your question images into this folder.

Recommended naming: lowercase word + `.png`

Examples:
- `buku.png`
- `baju.png`
- `bola.png`

Then reference it in `src/data/questions.ts`:

```ts
image: "/images/buku.png"
```

If the picture is missing, the game automatically shows `fallbackEmoji`.
