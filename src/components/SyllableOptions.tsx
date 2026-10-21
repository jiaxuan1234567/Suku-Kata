import type { SyllableOption } from "../types";

type Props = {
  options: SyllableOption[];
  selectedIds: string[];
  locked: boolean;
  onChoose: (option: SyllableOption) => void;
};

export default function SyllableOptions({ options, selectedIds, locked, onChoose }: Props) {
  return (
    <div className="syllable-options" aria-label="Pilihan suku kata">
      {options.map((option) => {
        const selected = selectedIds.includes(option.id);

        return (
          <button
            key={option.id}
            type="button"
            className={`syllable-button ${selected ? "selected" : ""}`}
            onClick={() => onChoose(option)}
            disabled={locked || selected}
            aria-label={option.text}
          >
            <span>{option.text}</span>
            <span className="tiny-speaker" aria-hidden="true">🔊</span>
          </button>
        );
      })}
    </div>
  );
}
