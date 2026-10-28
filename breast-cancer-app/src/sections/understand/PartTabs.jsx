export default function PartTabs({ parts, activeIndex, onSelect }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {parts.map((part, index) => (
        <button
          key={part.id}
          type="button"
          onClick={() => onSelect(index)}
          className={`border-b-2 pb-2 transition ${
            index === activeIndex
              ? "border-brand text-brand"
              : "border-transparent text-muted hover:text-brand"
          }`}
        >
          {part.tab}
        </button>
      ))}
    </div>
  )
}