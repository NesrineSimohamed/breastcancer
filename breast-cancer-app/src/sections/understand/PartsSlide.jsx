import { useState } from "react"
import { breastParts } from "../../data/breastParts"
import PartTabs from "./PartTabs"
import BreastImage from "./BreastImage"

export default function PartsSlide() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePart = breastParts[activeIndex]

  return (
    <div>
      <p className="mb-8 text-center text-sm text-muted/70">
        اضغطي على النقاط واكتشفي ما يوجد داخل الثدي
      </p>

      <div className="grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
        <BreastImage
          parts={breastParts}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        <div>
          <PartTabs
            parts={breastParts}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />

          <div key={activePart.id} className="mt-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-brand">{activePart.title}</h3>
            <p className="mt-2 font-semibold text-brand/60">{activePart.subtitle}</p>
            {activePart.paragraphs.map((text, i) => (
              <p key={i} className="mt-4 leading-8 text-ink/80">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}