import { useState } from "react"

export default function useShare() {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const data = {
      title: "تحدّي الوعي بسرطان الثدي",
      text: "اكتشفي معلومات مهمة عن سرطان الثدي والكشف المبكر.",
      url: window.location.href,
    }

    // Phones: open the native share sheet (WhatsApp, Instagram, etc.)
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch {
        // the person closed the share sheet: nothing to do
      }
      return
    }

    // Computers: copy the link instead
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard blocked: ignore
    }
  }

  return { share, copied }
}