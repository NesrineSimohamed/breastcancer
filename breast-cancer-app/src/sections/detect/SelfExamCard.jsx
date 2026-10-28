import Card from "../../components/Card";
import Button from "../../components/Button";
import { selfExamSteps } from "../../data/selfExamSteps";
import selfExamImg from "../../assets/self-exam.png";
import { scrollToSection } from "../../lib/scrollToSection";
import { SELF_EXAM_VIDEO_URL } from "../../data/links";
export default function SelfExamCard() {
  return (
    <Card className="mx-auto w-full max-w-5xl p-6 md:p-10">
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        {/* First in the code = RIGHT side: the text */}
        <div className="space-y-4">
          {selfExamSteps.map((step) => (
            <p key={step.id} className="leading-8 text-ink/80">
              <strong className="text-brand">{step.label}: </strong>
              {step.text}
            </p>
          ))}
        </div>

        {/* LEFT side: the single illustration */}
        <img
          src={selfExamImg}
          alt="رسوم توضح خطوات الفحص الذاتي: النظر، اللمس، فحص الإبط، والتكرار مستلقية"
          className="mx-auto w-full max-w-xs"
        />
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button variant="outline" onClick={() => scrollToSection("notice")}>
          متى تحتاجين إلى فحص طبي؟
        </Button>
        <Button
          onClick={() =>
            window.open(SELF_EXAM_VIDEO_URL, "_blank", "noopener,noreferrer")
          }
        >
          شاهدي كيف يتم الفحص الذاتي
        </Button>
      </div>
    </Card>
  );
}
