import ribbonImg from "../assets/ribbon.png"
import { pageSections } from "../data/pageSections"

export default function Footer() {
  return (
    <footer className="bg-brand py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        {/* RIGHT column */}
        <div>
          <h2 className="text-lg font-bold">مشروع توعوي عن صحة الثدي</h2>
          <img src={ribbonImg} alt="" className="mt-6 h-32" />
        </div>

        {/* MIDDLE column: same list as the header */}
        <div>
          <h2 className="text-lg font-bold">حول المشروع</h2>
          <ul className="mt-4 space-y-2">
            {pageSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-white/80 transition hover:text-white"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* LEFT column */}
        <div>
          <h2 className="text-lg font-bold">تواصل معنا</h2>
          <p className="mt-4 font-semibold">PartadzClub</p>
          <p className="mt-2 leading-7 text-white/80">
            شاركي الموقع مع امرأة تهتمين بصحتها
          </p>
        </div>
      </div>
    </footer>
  )
}