type Props = {
  status: "idle" | "wrong" | "correct";
};

export default function FeedbackAnimation({ status }: Props) {
  return (
    <div className={`feedback-layer ${status}`} aria-live="assertive" aria-atomic="true">
      {status === "wrong" && (
        <div className="feedback-pop wrong-pop">
          <span aria-hidden="true">🐻</span>
          <strong>Cuba lagi!</strong>
        </div>
      )}
      {status === "correct" && (
        <div className="feedback-pop correct-pop">
          <span aria-hidden="true">🎉</span>
          <strong>Tahniah!</strong>
          <span aria-hidden="true">⭐</span>
        </div>
      )}
    </div>
  );
}
