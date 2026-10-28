import Button from "../../components/Button"
import useShare from "../../hooks/useShare"

export default function QuizResult({ score, total, onRestart }) {
  const { share, copied } = useShare()
  const passed = score >= 4

  return (
    <div className="text-center">
      <p className="text-sm text-muted">النتيجة</p>

      <h3 className="mt-3 text-2xl font-bold text-brand">
        {passed ? "أحسنتِ! أنتِ مستعدة." : "أنتِ على الطريق الصحيح."}
      </h3>

      <p className="mt-4 leading-8 text-ink/80">
        {passed
          ? "أصبحتِ قادرة على فهم الفكرة، ملاحظة التغيرات، والتصرف بشكل واعٍ."
          : "راجعي بعض المهام ثم حاولي التحدي مرة أخرى."}
      </p>

      <p className="mt-6 text-sm text-ink/70">
        الإجابات الصحيحة: {score} من {total}
      </p>

      <div className="mt-6">
        {passed ? (
          <Button onClick={share}>
            {copied ? "تم نسخ الرابط ✓" : "شاركي الاختبار"}
          </Button>
        ) : (
          <Button onClick={onRestart}>أعيدي الاختبار</Button>
        )}
      </div>
    </div>
  )
}