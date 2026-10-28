import { detectFlow } from "../../data/detectFlow"

export default function FlowSteps() {
  return (
    <ol className="flex flex-wrap items-center justify-center gap-3">
      {detectFlow.map((step, index) => (
        <li key={step.id} className="flex items-center gap-3">
          <span
            className={`rounded-full border border-brand px-6 py-2 font-semibold ${
              step.filled ? "bg-brand text-white" : "bg-white text-brand"
            }`}
          >
            {step.label}
          </span>

          {/* An arrow after every pill except the last one */}
          {index < detectFlow.length - 1 && <ArrowLeft />}
        </li>
      ))}
    </ol>
  )
}

function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-brand"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )
}