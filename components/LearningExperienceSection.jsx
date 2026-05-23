import Image from "next/image";
import {
  Award,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Languages,
  MonitorSmartphone,
  PlayCircle,
} from "lucide-react";
import celularImage from "../imagenes/celular.png";

const benefits = [
  ["Clases practicas y guiadas", PlayCircle],
  ["Campus virtual disponible 24/7", Clock3],
  ["Cursos de idiomas y habilidades profesionales", Languages],
  ["Educacion inclusiva con lengua de senas", CheckCircle2],
  ["Actividades, tareas y evaluaciones", ClipboardList],
  ["Certificados al completar tus cursos", Award],
  ["Acceso desde celular, tablet o computadora", MonitorSmartphone],
];

export default function LearningExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-14 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_30%_0%,rgba(239,27,22,.22),transparent_58%)]" />
      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-10 xl:grid-cols-[.78fr_1.22fr]">
        <div>
          <p className="eyebrow">Experiencia LinguePro</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Aprende a tu ritmo con una{" "}
            <span className="bg-gradient-to-r from-brand-red via-red-300 to-white bg-clip-text text-transparent">
              experiencia online completa
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
            LinguePro conecta cursos, profesores, recursos y certificaciones en
            un campus virtual disenado para que avances paso a paso desde
            cualquier lugar.
          </p>

          <div className="mt-8 grid gap-3">
            {benefits.map(([label, Icon], index) => {
              const active = index === 0;
              return (
                <div
                  key={label}
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition ${
                    active
                      ? "border-brand-red/55 bg-brand-red/12 text-white shadow-glow"
                      : "border-white/10 bg-white/[0.035] text-white/48 hover:border-brand-red/35 hover:text-white/75"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      active ? "bg-brand-red text-white" : "bg-white/8 text-brand-red"
                    }`}
                  >
                    <Icon size={21} />
                  </span>
                  <span className="text-sm font-bold sm:text-base">{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-[2rem] sm:min-h-[560px] lg:min-h-[650px]">
          <div className="absolute h-[380px] w-[380px] rounded-full bg-brand-red/30 blur-3xl sm:h-[560px] sm:w-[560px] lg:h-[680px] lg:w-[680px]" />
          <div className="absolute h-[280px] w-[280px] rounded-full border border-brand-red/30 bg-[radial-gradient(circle,rgba(239,27,22,.35),rgba(239,27,22,.08)_52%,transparent_72%)] blur-sm sm:h-[440px] sm:w-[440px] lg:h-[560px] lg:w-[560px]" />
          <Image
            src={celularImage}
            alt="Mockup movil del campus LinguePro"
            className="float-soft relative z-10 h-auto w-full max-w-[430px] object-contain drop-shadow-[0_28px_60px_rgba(239,27,22,0.32)] sm:max-w-[620px] lg:max-w-[760px] xl:max-w-[840px]"
            sizes="(min-width: 1280px) 840px, (min-width: 1024px) 760px, 92vw"
          />
        </div>
      </div>
    </section>
  );
}
