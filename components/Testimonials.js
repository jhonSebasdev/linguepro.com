"use client";

import { motion } from "framer-motion";
import { CalendarDays, Quote } from "lucide-react";
import { events, testimonials } from "@/data/courses";
import SectionHeader from "./SectionHeader";
import ButtonLink from "./ButtonLink";

export default function Testimonials() {
  return (
    <>
      <section id="testimonios" className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Testimonios"
            title="Historias de estudiantes que avanzan con LinguePro"
            description="Opiniones de ejemplo para esta primera version visual. Luego pueden conectarse a testimonios reales, videos o redes sociales."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                className="rounded-3xl border border-black/8 bg-neutral-50 p-6 transition hover:border-brand-red/30 hover:bg-white hover:shadow-xl"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.06 }}
              >
                <Quote className="text-brand-red" />
                <p className="mt-5 leading-8 text-brand-muted">&quot;{item.quote}&quot;</p>
                <div className="mt-6 border-t border-black/8 pt-5">
                  <h3 className="font-black">{item.name}</h3>
                  <p className="text-sm text-brand-muted">{item.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="eventos" className="bg-brand-dark py-20 text-white sm:py-24">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Recursos y eventos</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Proximas clases abiertas, seminarios y cursos destacados
              </h2>
            </div>
            <ButtonLink href="#contacto" variant="secondary">
              Solicitar informacion
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {events.map((event, index) => (
              <motion.article
                key={event.title}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition hover:border-brand-red/40 hover:bg-white/[0.11]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="flex items-center gap-3 text-brand-red">
                  <CalendarDays size={20} />
                  <span className="font-black">{event.date}</span>
                </div>
                <h3 className="mt-5 text-xl font-black">{event.title}</h3>
                <p className="mt-3 leading-7 text-white/66">{event.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
