"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Send, UserRound } from "lucide-react";
import { programs } from "@/data/courses";
import ButtonLink from "./ButtonLink";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  return (
    <section id="contacto" className="relative bg-neutral-50 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contacto"
          title="Solicita informacion o empieza tu inscripcion"
          description="Completa el formulario y el equipo academico podra orientarte sobre niveles, horarios, modalidad y acceso al campus."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[.82fr_1.18fr]">
          <motion.aside
            className="rounded-3xl bg-brand-dark p-7 text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <h3 className="text-2xl font-black">LinguePro</h3>
            <p className="mt-4 leading-8 text-white/68">
              Academia online de idiomas, lengua de senas y habilidades
              profesionales, conectada a Moodle como campus virtual.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <Mail className="mt-1 text-brand-red" size={20} />
                <div>
                  <p className="font-bold">Correo</p>
                  <p className="text-white/66">info@linguepro.com</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 text-brand-red" size={20} />
                <div>
                  <p className="font-bold">Telefono</p>
                  <p className="text-white/66">+593 000 000 000</p>
                </div>
              </div>
              <div className="flex gap-3">
                <UserRound className="mt-1 text-brand-red" size={20} />
                <div>
                  <p className="font-bold">Atencion</p>
                  <p className="text-white/66">Asesoria academica online</p>
                </div>
              </div>
            </div>
            <ButtonLink
              href="https://wa.me/593000000000"
              external
              variant="secondary"
              className="mt-8 w-full"
            >
              Escribir por WhatsApp
            </ButtonLink>
          </motion.aside>

          <motion.form
            className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm sm:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold">Nombre</span>
                <input
                  className="focus-ring rounded-2xl border border-black/10 px-4 py-3"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold">Correo</span>
                <input
                  className="focus-ring rounded-2xl border border-black/10 px-4 py-3"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="tu@email.com"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold">Telefono</span>
                <input
                  className="focus-ring rounded-2xl border border-black/10 px-4 py-3"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+593"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold">Programa de interes</span>
                <select
                  className="focus-ring rounded-2xl border border-black/10 px-4 py-3"
                  name="program"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona un programa
                  </option>
                  {programs.map((program) => (
                    <option key={program.title} value={program.title}>
                      {program.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-5 grid gap-2">
              <span className="text-sm font-bold">Mensaje</span>
              <textarea
                className="focus-ring min-h-36 rounded-2xl border border-black/10 px-4 py-3"
                name="message"
                placeholder="Cuentanos que quieres aprender"
              />
            </label>
            <button
              type="submit"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-red-600 sm:w-auto"
            >
              Enviar solicitud <Send className="ml-2" size={18} />
            </button>
            <p className="mt-4 text-sm text-brand-muted">
              Formulario visual de primera version. En la siguiente fase puede
              conectarse a email, CRM, WhatsApp o API.
            </p>
          </motion.form>
        </div>
      </div>

      <a
        href="https://wa.me/593000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="focus-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:-translate-y-1"
      >
        <MessageCircle size={25} />
      </a>
    </section>
  );
}
