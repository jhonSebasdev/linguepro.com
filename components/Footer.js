import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Music2 } from "lucide-react";
import { campusUrl, schools } from "@/data/courses";
import ButtonLink from "./ButtonLink";

const columns = [
  ["Cursos", [["Todos los cursos", "/cursos"], ["English Academy", "/cursos?categoria=ingles"], ["Programacion", "/cursos?categoria=programacion"], ["Marketing", "/cursos?categoria=marketing"]]],
  ["Comunidad", [["Blog", "/blog"], ["Clases en vivo", "/live"], ["Testimonios", "/#testimonios"], ["Contacto", "/contacto"]]],
  ["Soporte", [["Precios", "/precios"], ["Agendar demo", "/contacto"], ["Campus virtual", campusUrl], ["Preguntas frecuentes", "/precios#faq"]]],
  ["Legal", [["Privacidad", "#"], ["Terminos", "#"], ["Cookies", "#"], ["Accesibilidad", "#"]]],
];

const socialLinks = [
  ["Facebook", "https://www.facebook.com/share/14eVhnKQ8Dy/?mibextid=wwXIfr", Facebook],
  ["Instagram", "https://www.instagram.com/lingue_senasespec?igsh=MWQ4eHdzdTQ4YzRmZw==", Instagram],
  ["TikTok", "https://www.tiktok.com/@lingue_ec?_r=1&_t=ZS-974b5m2Q005", Music2],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050812] py-10 text-white sm:py-14">
      <div className="section-shell">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,.75fr)] lg:gap-10">
          <div>
            <Image
              src="/linguepro-logo.png"
              alt="LinguePro"
              width={190}
              height={76}
              className="w-40 rounded-2xl bg-white p-3 sm:w-[190px]"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62 sm:text-base">
              Plataforma educativa online para aprender idiomas, habilidades digitales
              y competencias profesionales con rutas, clases en vivo y campus virtual.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {schools.slice(0, 3).map((school) => (
                <span key={school.title} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/62">
                  {school.title}
                </span>
              ))}
            </div>
          </div>

          {columns.map(([title, links]) => (
            <div key={title}>
              <h3 className="font-black">{title}</h3>
              <div className="mt-4 grid gap-3">
                {links.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="focus-ring rounded-full text-sm text-white/60 hover:text-brand-red"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/72 hover:border-brand-red hover:text-brand-red"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-sm text-white/48 sm:flex-row sm:items-center">
            <span>(c) {new Date().getFullYear()} LinguePro. Todos los derechos reservados.</span>
            <ButtonLink href={campusUrl} external variant="secondary" className="w-full sm:w-auto">
              Plataforma
            </ButtonLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
