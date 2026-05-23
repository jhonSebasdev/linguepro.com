"use client";

import { Mail, MessageCircle, Phone, Send, UserRound } from "lucide-react";
import { courses, whatsappUrl } from "@/data/courses";
import ButtonLink from "./ButtonLink";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  return (
    <section id="contacto" className="platform-section">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contacto"
          title="Solicita informacion o agenda una demo"
          description="Cuentanos que quieres aprender y el equipo academico te orienta sobre rutas, horarios, modalidad y acceso al campus."
        />

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-8">
          <aside className="platform-card p-5 sm:p-7">
            <h3 className="text-xl font-black text-white sm:text-2xl">LinguePro</h3>
            <p className="mt-4 text-sm leading-7 text-white/64 sm:text-base sm:leading-8">
              Academia online conectada a un campus virtual para cursos, escuelas,
              clases en vivo y acompanamiento academico.
            </p>
            <div className="mt-8 space-y-4">
              {[
                [Mail, "Correo", "info@linguepro.com"],
                [Phone, "Telefono", "+593 000 000 000"],
                [UserRound, "Atencion", "Asesoria academica online"],
              ].map(([Icon, label, value]) => (
                <div key={label} className="flex gap-3">
                  <Icon className="mt-1 text-brand-red" size={20} />
                  <div>
                    <p className="font-bold text-white">{label}</p>
                    <p className="text-white/60">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <ButtonLink href={whatsappUrl} external variant="secondary" className="mt-8 w-full">
              Escribir por WhatsApp
            </ButtonLink>
          </aside>

          <form className="platform-card p-5 sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-white">Nombre</span>
                <input className="focus-ring rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" type="text" name="name" autoComplete="name" placeholder="Tu nombre" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-white">Correo</span>
                <input className="focus-ring rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" type="email" name="email" autoComplete="email" placeholder="tu@email.com" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-white">Telefono</span>
                <input className="focus-ring rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" type="tel" name="phone" autoComplete="tel" placeholder="+593" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-white">Curso de interes</span>
                <select className="focus-ring rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white" name="program" defaultValue="">
                  <option value="" disabled>Selecciona un curso</option>
                  {courses.map((course) => (
                    <option key={course.title} value={course.title}>{course.title}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-5 grid gap-2">
              <span className="text-sm font-bold text-white">Mensaje</span>
              <textarea className="focus-ring min-h-36 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" name="message" placeholder="Cuentanos que quieres aprender" />
            </label>
            <button type="submit" className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-red-600 sm:w-auto">
              Enviar solicitud <Send className="ml-2" size={18} />
            </button>
          </form>
        </div>
      </div>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" className="focus-ring fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-2xl transition hover:-translate-y-1 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14">
        <MessageCircle size={22} />
      </a>
    </section>
  );
}
