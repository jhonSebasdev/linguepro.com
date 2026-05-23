import { ArrowRight } from "lucide-react";
import { campusUrl } from "@/data/courses";
import ButtonLink from "./ButtonLink";
import HeroVideo from "./HeroVideo";

const stats = [
  ["100%", "online"],
  ["9+", "cursos"],
  ["24/7", "campus"],
  ["6", "escuelas"],
  ["Live", "clases"],
  ["Cert.", "digital"],
];

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-brand-dark pt-24 text-white sm:pt-28">
      <div className="absolute inset-0 -z-10 bg-grid-dark bg-[size:42px_42px] opacity-35" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(239,27,22,.28),transparent_58%)]" />

      <div className="section-shell grid min-h-0 items-center gap-8 pb-12 pt-4 sm:pb-16 lg:min-h-[700px] lg:grid-cols-[.62fr_1.38fr] lg:gap-9 lg:pt-0 xl:grid-cols-[.56fr_1.44fr]">
        <div className="max-w-lg">
          <p className="eyebrow">Plataforma educativa online</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.04] min-[390px]:text-5xl sm:mt-5 sm:text-6xl lg:text-[4rem] xl:text-[4.55rem]">
            Aprende habilidades reales en una experiencia moderna y guiada.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8 xl:text-lg">
            Cursos, rutas de aprendizaje, clases en vivo y campus virtual para estudiar
            idiomas, habilidades digitales y competencias profesionales a tu ritmo.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/cursos" className="w-full sm:w-auto">
              Ver cursos <ArrowRight className="ml-2" size={18} />
            </ButtonLink>
            <ButtonLink href="/precios" variant="secondary" className="w-full sm:w-auto">
              Conocer precios
            </ButtonLink>
            <ButtonLink href={campusUrl} external variant="ghost" className="w-full sm:w-auto">
              Ir a la plataforma
            </ButtonLink>
          </div>

        </div>

        <div className="relative mx-auto w-full max-w-[820px] lg:max-w-[1000px]">
          <HeroVideo />
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {stats.map(([number, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3 text-center sm:px-4 sm:py-4">
                <strong className="block text-xl font-black text-brand-red sm:text-3xl">{number}</strong>
                <span className="text-xs font-bold text-white/58 sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
