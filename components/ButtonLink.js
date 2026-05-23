import Link from "next/link";

const variants = {
  primary:
    "bg-brand-red text-white shadow-glow hover:-translate-y-0.5 hover:bg-red-600",
  secondary:
    "border border-white/18 bg-white/10 text-white hover:-translate-y-0.5 hover:border-brand-red/50 hover:bg-white/15",
  light:
    "border border-white/10 bg-brand-panel2 text-white hover:-translate-y-0.5 hover:border-brand-red/50 hover:text-brand-red",
  ghost:
    "text-white hover:-translate-y-0.5 hover:bg-white/10",
};

export default function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
  external = false,
}) {
  const classes = `focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-bold transition active:scale-95 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
