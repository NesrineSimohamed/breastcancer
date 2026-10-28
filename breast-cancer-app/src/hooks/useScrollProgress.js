import { useEffect, useState } from "react"

export default function useScrollProgress(sectionIds) {
  const [progress, setProgress] = useState(0)
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const update = () => {
      // 1. How far down the page are we? (0 to 100)
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setProgress(Math.min(100, Math.max(0, Math.round(percent))))

      // 2. Which section is the current one?
      // The last section whose top has reached the top of the screen.
      let current = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = id
      }

      // At the very bottom of the page, the last section counts as active
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      if (atBottom) current = sectionIds[sectionIds.length - 1]

      setActiveId(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)

    // Cleanup: stop listening when the component disappears
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [sectionIds])

  return { progress, activeId }
}