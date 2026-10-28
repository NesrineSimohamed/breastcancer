import SectionTitle from "../components/SectionTitle";
import { warningSigns } from "../data/warningSigns";
import NumberBadge from "../components/NumberBadge";

export default function MissionNotice() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          tag="المهمة الثانية : الانتباه"
          title="اعرفي ما هو طبيعي بالنسبة لكِ"
          subtitle='لا يوجد شكل واحد "طبيعي" للثدي. ما يهم هو ملاحظة التغير الجديد أو غير المعتاد بالنسبة لكِ.'
        />

        {/* 1 column on phones, 2 columns on larger screens */}
        <ul className="grid gap-4 md:grid-cols-2">
          {warningSigns.map((sign) => (
            <li
              key={sign.id}
              className="flex items-center gap-3 rounded-full border border-brand/20 bg-white px-5 py-3 shadow-sm"
            >
              <NumberBadge>{sign.id}</NumberBadge>
              <span className="text-ink/80">{sign.text}</span>
            </li>
          ))}
        </ul>

        {/* Reassurance note */}
        <p className="mt-6 rounded-full bg-brand-light px-6 py-3 Ctext-sm text-brand">
          وجود إحدى هذه العلامات لا يعني تلقائيًا وجود سرطان، لكنها تستحق
          التقييم الطبي إذا كانت جديدة أو غير معتادة.
        </p>
      </div>
    </section>
  );
}
