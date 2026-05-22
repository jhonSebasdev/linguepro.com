export default function SectionHeader({ eyebrow, title, description, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-brand-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 ${dark ? "text-white/68" : "text-brand-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
