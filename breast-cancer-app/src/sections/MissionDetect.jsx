import SectionTitle from "../components/SectionTitle"
import FlowSteps from "./detect/FlowSteps"
import SelfExamCard from "./detect/SelfExamCard"

export default function MissionDetect() {
  return (
    <section id="detect" className="bg-blush py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          tag="المهمة الثالثة : الكشف المبكر"
          title="تعرفي على ثديك"
          subtitle="تعرفي على شكل ثدييك وملمسهما الطبيعي، حتى تتمكني من ملاحظة أي تغير جديد. يمكنك النظر واللمس بطريقة بسيطة ومنتظمة، وليس بهدف تشخيص السرطان بنفسك."
        />

        <div className="mb-10">
          <FlowSteps />
        </div>

        <SelfExamCard />
      </div>
    </section>
  )
}