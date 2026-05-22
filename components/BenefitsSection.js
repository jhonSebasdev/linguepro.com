"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookMarked,
  CheckCircle2,
  HandHeart,
  Laptop,
  UsersRound,
} from "lucide-react";
import { benefits } from "@/data/courses";
import SectionHeader from "./SectionHeader";

const icons = [Laptop, BookMarked, Award, HandHeart, CheckCircle2, UsersRound];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Por que LinguePro"
          title="Una experiencia online clara, humana y enfocada en resultados"
          description="Combinamos contenido practico, acompanamiento academico y una plataforma virtual organizada para que cada estudiante avance con seguridad."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={benefit}
                className="rounded-3xl border border-black/8 bg-neutral-50 p-6 transition hover:-translate-y-1 hover:border-brand-red/35 hover:bg-white hover:shadow-xl"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
                  <Icon size={23} />
                </span>
                <h3 className="mt-5 text-xl font-black">{benefit}</h3>
                <p className="mt-3 leading-7 text-brand-muted">
                  Recursos disenados para estudiar desde cualquier lugar, con
                  seguimiento y rutas de aprendizaje faciles de entender.
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
