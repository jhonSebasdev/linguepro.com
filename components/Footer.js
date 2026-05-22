import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { campusUrl } from "@/data/courses";
import ButtonLink from "./ButtonLink";

const links = [
  ["Inicio", "#inicio"],
  ["Programas", "#programas"],
  ["Campus Virtual", "#campus"],
  ["Recursos", "#eventos"],
  ["Testimonios", "#testimonios"],
  ["Contacto", "#contacto"],
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
          <div>
            <Image
              src="/linguepro-logo.png"
              alt="LinguePro"
              width={190}
              height={76}
              className="rounded-2xl bg-white p-3"
            />
            <p className="mt-5 max-w-sm leading-7 text-white/66">
              LinguePro es una academia online enfocada en idiomas, lengua de
              senas y habilidades profesionales con campus virtual Moodle.
            </p>
          </div>

          <div>
            <h3 className="font-black">Links rapidos</h3>
            <div className="mt-4 grid gap-3">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="focus-ring rounded-full text-sm text-white/66 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black">Contacto</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/66">
              <p>info@linguepro.com</p>
              <p>+593 000 000 000</p>
              <p>Academia online</p>
            </div>
          </div>

          <div>
            <h3 className="font-black">Redes sociales</h3>
            <div className="mt-4 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label="Red social LinguePro"
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/72 hover:border-brand-red hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <ButtonLink href={campusUrl} external className="mt-6 w-full">
              Campus Virtual
            </ButtonLink>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/48">
          © {new Date().getFullYear()} LinguePro. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
