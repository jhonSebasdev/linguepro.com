"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, FileCheck2, MessagesSquare, Smartphone } from "lucide-react";
import { campusUrl } from "@/data/courses";
import ButtonLink from "./ButtonLink";

const features = [
  ["Cursos y materiales", FileCheck2],
  ["Tareas y evaluaciones", BarChart3],
  ["Foros y acompanamiento", MessagesSquare],
  ["Acceso multidispositivo", Smartphone],
];

export default function CampusSection() {
  return (
    <section id="campus" className="overflow-hidden bg-neutral-50 py-20 sm:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="eyebrow">Campus Virtual Moodle</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Tu aula online conectada con todo el proceso academico
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-muted">
            Desde nuestro campus virtual podras acceder a tus cursos,
            materiales, tareas, evaluaciones, foros, calificaciones y
            certificados desde cualquier dispositivo.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map(([label, Icon]) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <Icon size={19} />
                </span>
                <span className="font-bold">{label}</span>
              </div>
            ))}
          </div>
          <ButtonLink href={campusUrl} external className="mt-8">
            Entrar al Campus Virtual
          </ButtonLink>
        </motion.div>

        <motion.div
          className="relative rounded-[2rem] bg-brand-dark p-5 shadow-2xl"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          aria-hidden="true"
        >
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-red/35 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.4rem] bg-white">
            <div className="flex items-center gap-2 border-b border-black/8 bg-neutral-100 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-brand-red" />
              <span className="h-3 w-3 rounded-full bg-neutral-300" />
              <span className="h-3 w-3 rounded-full bg-neutral-300" />
            </div>
            <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
              <aside className="bg-brand-ink p-5 text-white">
                <Image
                  src="/linguepro-logo.png"
                  alt=""
                  width={150}
                  height={62}
                  className="rounded-xl bg-white p-2"
                />
                <div className="mt-6 space-y-3 text-sm text-white/68">
                  <p className="rounded-xl bg-white/10 p-3 text-white">Mis cursos</p>
                  <p className="rounded-xl p-3">Calificaciones</p>
                  <p className="rounded-xl p-3">Certificados</p>
                </div>
              </aside>
              <div className="p-5">
                <h3 className="text-xl font-black">Ingles conversacional</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {["Modulo 01", "Tarea activa", "Foro semanal", "Evaluacion"].map(
                    (item) => (
                      <div key={item} className="rounded-2xl border border-black/8 bg-neutral-50 p-4">
                        <p className="font-bold">{item}</p>
                        <div className="mt-4 h-2 rounded-full bg-neutral-200">
                          <div className="h-full w-2/3 rounded-full bg-brand-red" />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
