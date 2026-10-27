export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl bg-white p-6 shadow-md ${className}`}>
      {children}
    </div>
  )
}