type Props = {
  current: number;
  total: number;
};

export default function GameHeader({ current, total }: Props) {
  return (
    <header className="visual-header" aria-label={`Kemajuan ${current} daripada ${total}`}>
      <div className="mini-mascot" aria-hidden="true">🐰</div>
      <div className="progress-dots" aria-hidden="true">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={index < current ? "progress-star completed" : index === current ? "progress-star current" : "progress-star"}
          >
            {index < current ? "⭐" : "●"}
          </span>
        ))}
      </div>
      <div className="mini-mascot star-mascot" aria-hidden="true">✨</div>
    </header>
  );
}
