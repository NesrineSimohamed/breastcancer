export default function NumberBadge({ children }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light font-semibold text-brand">
      {children}
    </span>
  )
}