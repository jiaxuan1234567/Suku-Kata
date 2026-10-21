type Props = {
  total: number;
  onReplay: () => void;
};

export default function CompletionScreen({ total, onReplay }: Props) {
  return (
    <main className="completion-card">
      <div className="completion-clouds" aria-hidden="true">☁️ ✨ ☁️</div>
      <div className="trophy" aria-hidden="true">🏆</div>
      <h1>SYABAS!</h1>
      <div className="completion-stars" aria-label={`${total} soalan selesai`}>
        ⭐ ⭐ ⭐ ⭐ ⭐
      </div>
      <button type="button" className="replay-button" onClick={onReplay}>
        🔀 Main Lagi
      </button>
    </main>
  );
}
