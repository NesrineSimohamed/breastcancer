import SectionTitle from "../components/SectionTitle";
import UnderstandSlider from "./understand/UnderstandSlider";

export default function MissionUnderstand() {
  return (
    
    <section id="understand" className="bg-blush py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          tag="المهمة الأولى : المعرفة"
          title="افهمي ما نتحدث عنه"
          subtitle="سرطان الثدي يبدأ داخل الثدي. لنتعرف أولًا على أجزائه، ثم نفهم كيف يبدأ المرض."
        />
        <UnderstandSlider />
      </div>
    </section>
  );
}
