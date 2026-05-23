import { ArrowRight } from "lucide-react";
import ButtonLink from "./ButtonLink";

export default function CTASection() {
  return (
    <section className="bg-brand-dark py-12 text-white sm:py-16">
      <div className="section-shell">
        <div className="rounded-2xl border border-brand-red/25 bg-gradient-to-br from-brand-red/18 via-brand-panel to-brand-red/10 p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="eyebrow">Empieza hoy</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-black sm:text-4xl">
              Construye tu ruta de aprendizaje con cursos, live classes y campus virtual.
            </h2>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <ButtonLink href="/cursos">
              Ver cursos <ArrowRight className="ml-2" size={18} />
            </ButtonLink>
            <ButtonLink href="/contacto" variant="secondary">
              Agendar demo
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
