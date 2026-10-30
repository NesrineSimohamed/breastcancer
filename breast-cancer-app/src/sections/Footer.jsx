import ribbonImg from "../assets/ribbon.png"
import logoImg from "../assets/partadz-logo.jpg"
import { pageSections } from "../data/pageSections"
import { PARTADZ_INSTAGRAM_URL } from "../data/links"

export default function Footer() {
  return (
    <footer className="bg-brand py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        {/* RIGHT column */}
        <div>
          <h2 className="text-lg font-bold">مشروع توعوي عن صحة الثدي</h2>
          <img src={ribbonImg} alt="" className="mt-6 h-32" />
        </div>

        {/* MIDDLE column */}
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

          {/* White circle: the white logo background blends in perfectly */}
          <a
            href={PARTADZ_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PartADZ Club على إنستغرام"
            className="mt-4 block h-28 w-28 overflow-hidden rounded-full bg-white p-2 shadow-lg transition hover:scale-105"
          >
            <img
              src={logoImg}
              alt="شعار نادي PartADZ"
              className="h-full w-full object-contain"
            />
          </a>

          <a
            href={PARTADZ_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold hover:underline"
          >
            <InstagramIcon />
            PartadzClub
          </a>

          <p className="mt-2 leading-7 text-white/80">
            شاركي الموقع مع امرأة تهتمين بصحتها
          </p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}