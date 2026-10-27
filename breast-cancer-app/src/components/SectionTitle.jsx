export default function SectionTitle({ tag, title, subtitle }) {
  return (
    <header className="mb-8">
      {tag && (
        <span className="inline-block rounded-full border border-brand/40 px-4 py-1 text-sm text-brand">
          {tag}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold text-ink">{title}</h2>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
    </header>
  )
}