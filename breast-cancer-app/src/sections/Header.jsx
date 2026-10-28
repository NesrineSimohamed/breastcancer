import Button from "../components/Button"
import useShare from "../hooks/useShare"
import useScrollProgress from "../hooks/useScrollProgress"
import { pageSections } from "../data/pageSections"

// Defined outside the component so it isn't rebuilt on every render
const sectionIds = pageSections.map((s) => s.id)

export default function Header() {
  const { progress, activeId } = useScrollProgress(sectionIds)
  const { share, copied } = useShare()

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-2">
        {/* RIGHT side: title */}
        <a href="#" className="shrink-0 font-bold text-brand">
          تحدّي الوعي بسرطان الثدي
        </a>

        {/* MIDDLE: links + progress bar */}
        <nav className="min-w-0 flex-1">
          <ul className="hidden justify-center gap-6 text-sm lg:flex">
            {pageSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`transition ${
                    activeId === section.id
                      ? "font-bold text-brand"
                      : "text-ink/70 hover:text-brand"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

         <div className="mt-0.5 flex items-center gap-3">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-brand-light">
              <div
                className="h-full rounded-full bg-brand transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="w-9 text-xs font-semibold text-brand">
              {progress}%
            </span>
          </div>
        </nav>

        {/* LEFT side: share button */}
        <Button variant="outline" onClick={share}>
          {copied ? "تم نسخ الرابط ✓" : "انشري الوعي"}
        </Button>
      </div>
    </header>
  )
}