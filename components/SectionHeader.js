export default function SectionHeader({ eyebrow, title, description, dark = true }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-3 text-2xl font-black leading-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-sm leading-7 sm:text-base ${dark ? "text-white/68" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
