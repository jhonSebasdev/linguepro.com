"use client";

import { motion } from "framer-motion";
import { Check, MousePointerClick } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  "Explora los cursos",
  "Elige tu programa",
  "Inscribete",
  "Accede al campus Moodle",
  "Realiza actividades y evaluaciones",
  "Obten tu certificado",
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Como funciona"
          title="De la inscripcion al certificado en una ruta simple"
          description="La landing orienta al estudiante y el campus Moodle concentra el aprendizaje: materiales, tareas, foros, notas y certificados."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-6">
          {steps.map((step, index) => (
            <motion.article
              key={step}
              className="relative rounded-3xl border border-black/8 bg-neutral-50 p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-ink text-white">
                {index === 0 ? <MousePointerClick size={19} /> : <Check size={19} />}
              </span>
              <p className="mt-5 text-sm font-black uppercase leading-6 text-brand-ink">
                {step}
              </p>
              <span className="absolute right-5 top-5 text-4xl font-black text-brand-red/12">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
