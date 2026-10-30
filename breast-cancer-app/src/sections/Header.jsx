import Button from "../components/Button"
import useShare from "../hooks/useShare"
import useScrollProgress from "../hooks/useScrollProgress"
import { pageSections } from "../data/pageSections"

const sectionIds = pageSections.map((s) => s.id)

export default function Header() {
  const { progress, activeId } = useScrollProgress(sectionIds)
  const { share, copied } = useShare()

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 py-2">
          {/* RIGHT: title */}
          <a
            href="#"
            className="text-sm font-bold leading-tight text-brand sm:text-base"
          >
            تحدّي الوعي بسرطان الثدي
          </a>

          {/* Computers only: links, with the bar exactly as wide as the links */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6 text-sm">
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
            <ProgressBar progress={progress} className="mt-1" />
          </nav>

          {/* LEFT: small share button */}
          <Button variant="outline" size="sm" onClick={share}>
            {copied ? "تم نسخ الرابط ✓" : "انشري الوعي"}
          </Button>
        </div>

        {/* Phones and tablets only: full-width bar under the title row */}
        <ProgressBar progress={progress} className="pb-2 lg:hidden" />
      </div>
    </header>
  )
}

function ProgressBar({ progress, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-1 flex-1 overflow-hidden rounded-full bg-brand-light">
        <div
          className="h-full rounded-full bg-brand transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="w-9 text-xs font-semibold text-brand">{progress}%</span>
    </div>
  )
}