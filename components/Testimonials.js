"use client";

import { motion } from "framer-motion";
import { Building2, Quote } from "lucide-react";
import { testimonials } from "@/data/courses";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#090f1c] py-14 text-white sm:py-20 lg:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Confian en LinguePro"
          title="Estudiantes y equipos que aprenden con una ruta clara"
          description="La plataforma esta pensada para personas que estudian despues del trabajo, equipos que necesitan capacitacion y estudiantes que buscan avanzar por niveles."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className="platform-card p-6 hover:-translate-y-1 hover:border-brand-red/45"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.06 }}
            >
              <Quote className="text-brand-red" />
              <p className="mt-5 leading-8 text-white/68">&quot;{item.quote}&quot;</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <h3 className="font-black text-white">{item.name}</h3>
                <p className="text-sm text-white/50">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/58 sm:grid-cols-3">
          {["Academias online", "Profesionales en crecimiento", "Equipos de trabajo"].map((label) => (
            <span key={label} className="flex items-center gap-2">
              <Building2 size={17} className="text-brand-red" /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
