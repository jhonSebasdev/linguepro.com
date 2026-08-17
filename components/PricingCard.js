import { Check } from "lucide-react";
import ButtonLink from "./ButtonLink";

export default function PricingCard({ plan }) {
  return (
    <article className={`platform-card flex h-full flex-col p-6 ${plan.highlighted ? "border-brand-red/60 shadow-glow" : ""}`}>
      {plan.highlighted && (
        <span className="mb-4 w-fit rounded-full bg-brand-red px-3 py-1 text-xs font-black text-white">
          Recomendado
        </span>
      )}
      <h3 className="text-2xl font-black text-white">{plan.name}</h3>
      <p className="mt-3 text-white/62">{plan.description}</p>
      <div className="mt-6 text-3xl font-black text-white sm:text-4xl">
        {plan.price}
        {plan.priceLabel && <span className="text-base font-bold text-white/45"> / {plan.priceLabel}</span>}
      </div>
      <div className="mt-6 grid flex-1 gap-3">
        {plan.features.map((feature) => (
          <span key={feature} className="flex gap-3 text-sm text-white/68">
            <Check className="mt-0.5 text-brand-red" size={17} /> {feature}
          </span>
        ))}
      </div>
      <ButtonLink href={`/contacto?modalidad=${plan.modality}`} className="mt-7">
        {plan.cta}
      </ButtonLink>
    </article>
  );
}
