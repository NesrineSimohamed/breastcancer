import breastImg from "../../assets/breast.png"

export default function BreastImage({ parts, activeIndex, onSelect }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <img
        src={breastImg}
        alt="رسم توضيحي لتشريح الثدي"
        className="block w-full rounded-2xl"
      />

      {parts.map((part, index) => (
        <button
          key={part.id}
          type="button"
          aria-label={part.title}
          onClick={() => onSelect(index)}
          style={{ left: `${part.dot.x}%`, top: `${part.dot.y}%` }}
          className={`absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition ${
            index === activeIndex
              ? "scale-125 bg-brand ring-4 ring-brand/20"
              : "bg-gray-400 hover:bg-brand/60"
          }`}
        />
      ))}
    </div>
  )
}