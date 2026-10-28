import Button from "../components/Button";
import heroImg from "../assets/hero.jpg";
import useShare from "../hooks/useShare";
import { scrollToSection } from "../lib/scrollToSection";
export default function Hero() {
  const { share, copied } = useShare();
  return (
    <section className="relative overflow-hidden bg-brand-light">
      {/* Big light blob behind the photo (decoration only) */}
      <div className="absolute -bottom-32 -left-24 h-[32rem] w-[32rem] rounded-[63%_37%_54%_46%/55%_48%_52%_45%] bg-white/40" />

      {/* Two columns on desktop, stacked on mobile */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        {/* Column 1 (appears on the RIGHT because the page is RTL): text */}
        <div>
          <span className="inline-block rounded-full border border-brand/30 bg-white px-4 py-1 text-sm text-brand">
            أكتوبر الوردي 2026
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.4] text-ink md:text-5xl md:leading-[1.4]">
            كم تعرفين عن <span className="text-brand">سرطان الثدي؟</span>
          </h1>

          <p className="mt-6 max-w-md leading-8 text-ink/80">
            خوضي رحلة قصيرة لاكتشاف أهم المعلومات عن سرطان الثدي، من العلامات
            التي تستحق الانتباه إلى أهمية الكشف المبكر. وفي النهاية، اختبري
            معلوماتك وشاهدي نتيجتك.
          </p>

          <div className="mt-10 flex gap-3">
            <Button onClick={() => scrollToSection("understand")}>ابدئي الرحلة</Button>
            <Button variant="outline" onClick={share}>
              {copied ? "تم نسخ الرابط ✓" : "انشري الوعي"}
            </Button>
          </div>
        </div>

        {/* Column 2 (appears on the LEFT): photo in blob shape */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="شريط وردي رمز التوعية بسرطان الثدي"
            className="h-72 w-72 rounded-[63%_37%_54%_46%/55%_48%_52%_45%] object-cover md:h-96 md:w-96"
          />
        </div>
      </div>
    </section>
  );
}
