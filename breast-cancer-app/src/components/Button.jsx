export default function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary:
      "bg-brand text-white hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-md",

    outline:
      "bg-color-blush border border-brand text-brand hover:bg-white hover:border-brand-dark hover:text-brand-dark",
  };

  return (
    <button
     className={`rounded-full px-6 py-2 font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
