import CTASection from "@/components/CTASection";
import PricingCard from "@/components/PricingCard";
import SectionHeader from "@/components/SectionHeader";
import { faqs, pricingPlans } from "@/data/courses";

export const metadata = {
  title: "Precios | LinguePro",
};

export default function PricingPage() {
  return (
    <main className="pt-24 sm:pt-28">
      <section className="platform-section">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Precios"
            title="Planes de estudio para cada modalidad"
            description="Elige entre cursos online, clases presenciales o capacitacion para equipos. Todos los planes incluyen orientacion academica y acceso a recursos de aprendizaje."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>
      <section id="faq" className="bg-[#090f1c] py-14 text-white sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeader eyebrow="FAQ" title="Preguntas frecuentes" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {faqs.map(([question, answer]) => (
              <article key={question} className="platform-card p-6">
                <h3 className="text-lg font-black text-white">{question}</h3>
                <p className="mt-3 leading-7 text-white/62">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
