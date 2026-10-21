import type { SyllableOption } from "../types";

type Props = {
  selected: [SyllableOption | null, SyllableOption | null];
  status: "idle" | "wrong" | "correct";
  locked: boolean;
  onRemove: (index: 0 | 1) => void;
};

export default function SyllableSlots({ selected, status, locked, onRemove }: Props) {
  return (
    <div className={`syllable-slots ${status}`} aria-label="Ruang jawapan">
      {selected.map((option, index) => (
        <button
          key={index}
          type="button"
          className={`syllable-slot ${option ? "filled" : "empty"}`}
          onClick={() => onRemove(index as 0 | 1)}
          disabled={!option || locked}
          aria-label={option ? `${option.text}, tekan untuk buang` : `Ruang ${index + 1} kosong`}
        >
          {option ? option.text : <span className="slot-line" aria-hidden="true" />}
        </button>
      ))}
    </div>
  );
}
