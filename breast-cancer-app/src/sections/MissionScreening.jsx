import SectionTitle from "../components/SectionTitle"
import RiskFactors from "./screening/RiskFactors"
import ScreeningTypes from "./screening/ScreeningTypes"

export default function MissionScreening() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          tag="المهمة الرابعة : الفحص"
          title="اعرفي كيف يتم الفحص"
          subtitle="ليس كل شخص يحتاج إلى نفس جدول الفحص. يحدد العمر، والتاريخ العائلي، وبعض عوامل الخطورة ما إذا كنت بحاجة إلى فحص دوري أو إلى متابعة مختلفة."
        />

        <RiskFactors />

        <p className="mb-6 mt-12 leading-8 text-ink/80">
          لا يوجد فحص واحد يناسب الجميع. يختار الطبيب الطريقة المناسبة حسب
          حالتك، وقد يبدأ بالفحص السريري أو يطلب تصويرًا للثدي، ثم فحوصًا
          إضافية إذا لزم الأمر.
        </p>

        <ScreeningTypes />
      </div>
    </section>
  )
}