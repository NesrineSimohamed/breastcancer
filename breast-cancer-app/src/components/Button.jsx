export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    outline: "border border-brand text-brand hover:bg-brand-light",
  }
  const sizes = {
    md: "px-6 py-2",
    sm: "whitespace-nowrap px-4 py-1 text-sm",
  }

  return (
    <button
      className={`rounded-full font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}