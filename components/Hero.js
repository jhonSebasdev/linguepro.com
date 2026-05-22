"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpenCheck, GraduationCap, MonitorPlay } from "lucide-react";
import { campusUrl } from "@/data/courses";
import ButtonLink from "./ButtonLink";

const stats = [
  ["100%", "online"],
  ["7+", "programas"],
  ["24/7", "campus"],
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-brand-dark pt-28 text-white sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-grid-dark bg-[size:42px_42px] opacity-45" />
      <div className="absolute left-1/2 top-0 -z-10 h-[640px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(239,27,22,.32),transparent_62%)] blur-3xl" />

      <div className="section-shell grid min-h-[760px] items-center gap-12 pb-20 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Academia online + campus Moodle</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Aprende sin limites. Crece sin barreras.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
            Formacion online en idiomas, lengua de senas y habilidades
            profesionales, con acceso a un campus virtual disenado para aprender
            a tu ritmo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#programas">
              Explorar programas <ArrowRight className="ml-2" size={18} />
            </ButtonLink>
            <ButtonLink href={campusUrl} external variant="secondary">
              Acceder al campus
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.map(([number, label]) => (
              <motion.div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition hover:-translate-y-1 hover:border-brand-red/45 hover:bg-white/[0.11]"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <strong className="block text-2xl font-black">{number}</strong>
                <span className="text-sm text-white/58">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[540px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute right-0 top-6 w-full max-w-lg rounded-[2rem] border border-white/12 bg-white/[0.08] p-5 shadow-2xl backdrop-blur"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-[1.35rem] bg-white p-5 text-brand-ink">
              <div className="flex items-center justify-between border-b border-black/8 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-red">
                    LinguePro Campus
                  </p>
                  <h2 className="mt-1 text-xl font-black">Panel de aprendizaje</h2>
                </div>
                <MonitorPlay className="text-brand-red" />
              </div>
              <div className="mt-5 space-y-3">
                {["Ingles conversacional", "Lengua de Senas", "Excel aplicado"].map(
                  (course, index) => (
                    <div
                      key={course}
                      className="flex items-center gap-4 rounded-2xl border border-black/8 bg-neutral-50 p-4"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-bold">{course}</p>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200">
                          <div
                            className="h-full rounded-full bg-brand-red"
                            style={{ width: `${74 - index * 13}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-0 top-24 rounded-3xl border border-white/12 bg-white p-5 text-brand-ink shadow-glow"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <BookOpenCheck className="text-brand-red" />
            <p className="mt-3 text-sm font-bold">Actividades, tareas y foros</p>
          </motion.div>
          <motion.div
            className="absolute bottom-16 right-8 rounded-3xl border border-white/12 bg-brand-red p-5 text-white shadow-glow"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <GraduationCap />
            <p className="mt-3 text-sm font-bold">Certificados digitales</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
