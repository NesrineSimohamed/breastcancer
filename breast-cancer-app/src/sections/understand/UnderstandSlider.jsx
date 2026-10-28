import { useState } from "react"
import Card from "../../components/Card"
import { cancerSlides } from "../../data/cancerSlides"
import PartsSlide from "./PartsSlide"
import InfoSlide from "./InfoSlide"

// 1 slide with tabs + the slides from the data file
const TOTAL = 1 + cancerSlides.length

export default function UnderstandSlider() {
  // The ONE number: which slide is showing (0, 1 or 2)
  const [slideIndex, setSlideIndex] = useState(0)

  const goNext = () => setSlideIndex((i) => Math.min(i + 1, TOTAL - 1))
  const goPrev = () => setSlideIndex((i) => Math.max(i - 1, 0))

  return (
    <Card className="p-6 md:p-10">
      <div className="flex items-center gap-4">
        {/* First in the code = RIGHT side: "previous" */}
        <ArrowButton direction="prev" onClick={goPrev} hidden={slideIndex === 0} />

        {/* key makes the fade animation replay on every slide change */}
        <div key={slideIndex} className="min-w-0 flex-1 animate-fade-in">
          {slideIndex === 0 ? (
            <PartsSlide />
          ) : (
            <InfoSlide slide={cancerSlides[slideIndex - 1]} />
          )}
        </div>

        {/* LEFT side: "next" */}
        <ArrowButton direction="next" onClick={goNext} hidden={slideIndex === TOTAL - 1} />
      </div>

      {/* Dots: one per slide */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`الشريحة ${i + 1}`}
            onClick={() => setSlideIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === slideIndex ? "bg-brand" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </Card>
  )
}

// A small helper used only in this file
function ArrowButton({ direction, onClick, hidden }) {
  const path = direction === "next" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "next" ? "التالي" : "السابق"}
      // "invisible" hides it but keeps its space, so the content doesn't jump
      className={`shrink-0 text-brand transition hover:scale-110 ${
        hidden ? "invisible" : ""
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={path} />
      </svg>
    </button>
  )
}
