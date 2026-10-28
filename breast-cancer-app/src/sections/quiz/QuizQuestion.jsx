import Button from "../../components/Button"
import NumberBadge from "../../components/NumberBadge"

export default function QuizQuestion({ question, selected, onSelect, onNext }) {
  return (
    <div>
      {question.scenario && (
        <p className="font-semibold leading-8 text-ink">{question.scenario}</p>
      )}
      <h3 className="font-bold leading-8 text-brand">{question.question}</h3>

      <ul className="mt-6 space-y-3">
        {question.options.map((option, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              aria-pressed={selected === i}
              className={`flex w-full items-center gap-3 rounded-full border px-4 py-3 text-start transition ${
                selected === i
                  ? "border-brand bg-brand-light"
                  : "border-brand/20 bg-white hover:bg-blush"
              }`}
            >
              <NumberBadge>{i + 1}</NumberBadge>
              <span>{option}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button onClick={onNext} disabled={selected === null}>
          التالي
        </Button>
      </div>
    </div>
  )
}