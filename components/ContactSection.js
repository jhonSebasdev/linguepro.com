"use client";

import { BadgeCheck, Landmark, Mail, MessageCircle, Phone, ReceiptText, Send, UserRound } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { courses, whatsappUrl } from "@/data/courses";
import ButtonLink from "./ButtonLink";
import SectionHeader from "./SectionHeader";

const modalities = [
  ["online", "Online"],
  ["presencial", "Presencial"],
  ["empresarial", "Empresarial"],
];

const modalityAmounts = {
  Online: "$60",
  Presencial: "$80",
  Empresarial: "A coordinar",
};

const bankTransferInfo = [
  ["Banco", "Produbanco"],
  ["Titular", "Lingue S.A.S B.i.C."],
  ["Tipo de cuenta", "Cuenta Corriente"],
  ["Numero de cuenta", "27059048684"],
  ["RUC", "1793215263001"],
  ["Correo", "linguedesenasyespanol@gmail.com"],
];

export default function ContactSection() {
  const searchParams = useSearchParams();
  const selectedModality = modalities.find(([value]) => value === searchParams.get("modalidad"))?.[1] || "";
  const [modality, setModality] = useState(selectedModality);
  const amount = modalityAmounts[modality] || "Selecciona una modalidad";

  function handleReceiptClick() {
    const receiptMessage = [
      "Hola LinguePro, ya realice mi transferencia y quiero enviar el comprobante para confirmar mi inscripcion.",
      "",
      `Modalidad: ${modality || "Por confirmar"}`,
      `Valor: ${amount}`,
    ].join("\n");

    window.open(`${whatsappUrl}?text=${encodeURIComponent(receiptMessage)}`, "_blank", "noopener,noreferrer");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const modality = formData.get("modality")?.toString().trim();
    const program = formData.get("program")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const whatsappMessage = [
      "Hola LinguePro, quiero recibir informacion.",
      "",
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Telefono: ${phone || "No indicado"}`,
      `Modalidad de interes: ${modality}`,
      `Valor referencial: ${modalityAmounts[modality] || "Por confirmar"}`,
      `Curso de interes: ${program}`,
      `Mensaje: ${message || "Quiero que me orienten sobre los cursos."}`,
    ].join("\n");

    window.open(`${whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
  }

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
                [Mail, "Correo", "linguedesenasyespanol@gmail.com"],
                [Phone, "Telefono", "+593 98 379 4142"],
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

            <div className="mt-8 border-t border-white/10 pt-7">
              <div className="flex items-start gap-3">
                <Landmark className="mt-1 text-brand-red" size={22} />
                <div>
                  <h4 className="text-lg font-black text-white">Datos para transferencia</h4>
                  <p className="mt-2 text-sm leading-6 text-white/62">
                    Realiza tu pago con tranquilidad. Para confirmar tu cupo, envia la foto del comprobante por WhatsApp y el equipo academico validara tu inscripcion.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 text-sm">
                {bankTransferInfo.map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4 border-b border-white/8 pb-2">
                    <span className="text-white/50">{label}</span>
                    <span className="text-right font-bold text-white">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between gap-4 pt-1">
                  <span className="text-white/50">Valor</span>
                  <span className="text-right font-black text-brand-red">{amount}</span>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-red/25 bg-brand-red/10 p-4 text-sm leading-6 text-white/72">
                <BadgeCheck className="mt-0.5 shrink-0 text-brand-red" size={18} />
                <p>
                  Guarda tu comprobante. Puedes enviarlo como foto o captura por WhatsApp para agilizar la activacion del curso.
                </p>
              </div>

              <button type="button" onClick={handleReceiptClick} className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/18 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-brand-red/50 hover:bg-white/15 active:scale-95">
                Enviar comprobante <ReceiptText className="ml-2" size={18} />
              </button>
            </div>
          </aside>

          <form className="platform-card p-5 sm:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-white">Nombre</span>
                <input className="focus-ring rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" type="text" name="name" autoComplete="name" placeholder="Tu nombre" required />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-white">Correo</span>
                <input className="focus-ring rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" type="email" name="email" autoComplete="email" placeholder="tu@email.com" required />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-white">Telefono</span>
                <input className="focus-ring rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white" type="tel" name="phone" autoComplete="tel" placeholder="+593" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-white">Modalidad de interes</span>
                <select className="focus-ring rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white" name="modality" value={modality} onChange={(event) => setModality(event.target.value)} required>
                  <option value="" disabled>Selecciona una modalidad</option>
                  {modalities.map(([value, label]) => (
                    <option key={value} value={label}>{label}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-white">Curso de interes</span>
                <select className="focus-ring rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white" name="program" defaultValue="" required>
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
