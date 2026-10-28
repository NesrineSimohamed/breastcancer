import Button from "../../components/Button"

export default function QuizIntro({ onStart }) {
  return (
    <div className="text-center">
      <p className="text-sm text-muted">أحسنتِ، اكتملت الرحلة</p>
      <h3 className="mt-3 text-2xl font-bold text-brand">
        التحدي النهائي: هل أصبحتِ مستعدة؟
      </h3>
      <p className="mt-4 text-ink/80">
        اختبري ما تعلمتِه خلال رحلتك، وأجيبي عن الأسئلة التالية.
      </p>
      <p className="mt-6 text-sm text-ink/70">5 أسئلة، اختيار واحد لكل سؤال</p>
      <div className="mt-6">
        <Button onClick={onStart}>ابدئي الاختبار</Button>
      </div>
    </div>
  )
}