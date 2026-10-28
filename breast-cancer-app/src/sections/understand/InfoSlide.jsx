export default function InfoSlide({ slide }) {
  const { title, subtitle, image, imageAlt, paragraphs, note } = slide

  return (
    <div>
      <h3 className="text-2xl font-bold text-brand">{title}</h3>
      <p className="mt-2 font-semibold text-brand/60">{subtitle}</p>

      {/* Image first = RIGHT side (RTL), text on the left, like your design */}
      <div className="mt-6 grid items-center gap-8 md:grid-cols-[1fr_1.4fr]">
        <img src={image} alt={imageAlt} className="mx-auto w-full max-w-sm" />

        <div>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-4 leading-8 text-ink/80 first:mt-0">
              {p.label && (
                <strong className="text-brand">{p.label} </strong>
              )}
              {p.text}
            </p>
          ))}
        </div>
      </div>

      {note && (
        <p className="mt-6 leading-8 text-ink/80">
          <strong className="text-brand">{note.label} </strong>
          {note.text}
        </p>
      )}
    </div>
  )
}