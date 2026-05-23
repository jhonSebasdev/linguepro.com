import CTASection from "@/components/CTASection";
import LiveClassCard from "@/components/LiveClassCard";
import SectionHeader from "@/components/SectionHeader";
import { liveClasses } from "@/data/courses";

export const metadata = {
  title: "Live | LinguePro",
};

export default function LivePage() {
  const upcoming = liveClasses.filter((item) => item.status === "proxima");
  const past = liveClasses.filter((item) => item.status === "pasada");

  return (
    <main className="pt-24 sm:pt-28">
      <section className="platform-section">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Live"
            title="Clases en vivo y workshops"
            description="Participa en sesiones con instructores, practica en comunidad y complementa lo aprendido dentro del campus."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {upcoming.map((item) => (
              <LiveClassCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#090f1c] py-14 text-white sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeader eyebrow="Biblioteca live" title="Sesiones pasadas" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {past.map((item) => (
              <LiveClassCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
