export default function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary:
      "bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-md",

    outline:
      "bg-color-blush border border-brand text-brand hover:bg-white hover:border-brand-dark hover:text-brand-dark",
  };

  return (
    <button
      className={`rounded-full px-7 py-3 font-semibold transition-all duration-200 ease-out active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
