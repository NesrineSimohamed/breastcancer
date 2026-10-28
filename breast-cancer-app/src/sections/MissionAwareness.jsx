import Button from "../components/Button"
import SectionTitle from "../components/SectionTitle"
import useShare from "../hooks/useShare"
import awarenessImg from "../assets/awareness.jpg"

export default function MissionAwareness() {
  const { share, copied } = useShare()

  return (
    <section id="act" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        {/* First in the code = RIGHT side: the text */}
        <div>
          <SectionTitle
            tag="المهمة الخامسة : الوعي"
            title="الوعي لا يتوقف عند المعرفة"
            subtitle="ما تعلمتِه اليوم يمكن أن يغيّر حياة شخص تحبينه."
          />

          <p className="mb-8 leading-8 text-ink/80">
            شاركي هذه الصفحة مع امرأة تهمّكِ، فقد تساعدها معلومة بسيطة على
            الانتباه إلى صحتها وطلب الرعاية في الوقت المناسب.
          </p>

          <Button onClick={share}>
            {copied ? "تم نسخ الرابط ✓" : "شاركي ما تعلمتِه"}
          </Button>
        </div>

        {/* LEFT side: the photo */}
        <img
          src={awarenessImg}
          alt="مجموعة من النساء يرتدين الوردي دعمًا للتوعية بسرطان الثدي"
          className="w-full rounded-2xl object-cover shadow-xl"
        />
      </div>
    </section>
  )
}