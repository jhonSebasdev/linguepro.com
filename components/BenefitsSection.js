"use client";

import { motion } from "framer-motion";
import { benefits } from "@/data/courses";
import SectionHeader from "./SectionHeader";

export default function BenefitsSection() {
  return (
    <section className="platform-section">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Por que LinguePro"
          title="Una experiencia de aprendizaje pensada como plataforma"
          description="Rutas claras, campus virtual, clases live y acompanamiento para avanzar sin depender de una sola clase aislada."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.article
                key={benefit.title}
                className="platform-card p-6 hover:-translate-y-1 hover:border-brand-red/45"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.04 }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/12 text-brand-red">
                  <Icon size={23} />
                </span>
                <h3 className="mt-5 text-xl font-black text-white">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-white/62">{benefit.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
