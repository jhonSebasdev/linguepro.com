"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import { campusUrl } from "@/data/courses";
import ButtonLink from "./ButtonLink";

const navItems = [
  ["Inicio", "#inicio"],
  ["Programas", "#programas"],
  ["Campus Virtual", "#campus"],
  ["Recursos", "#eventos"],
  ["Testimonios", "#testimonios"],
  ["Contacto", "#contacto"],
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-red/35 bg-brand-dark/95 shadow-[0_12px_38px_rgba(0,0,0,0.38)] backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="#inicio" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex h-12 w-36 items-center overflow-hidden rounded-full bg-white px-3">
            <Image
              src="/linguepro-logo.png"
              alt="LinguePro"
              width={180}
              height={70}
              className="h-auto w-full"
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="focus-ring rounded-full px-1 text-sm font-bold text-white transition hover:text-brand-red"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href={campusUrl} external>
            Acceder al Campus
          </ButtonLink>
        </div>

        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          type="button"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-red/25 bg-brand-dark px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="rounded-xl px-3 py-3 text-sm font-bold text-white hover:bg-white/8 hover:text-brand-red"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <ButtonLink href={campusUrl} external className="mt-2">
              Acceder al Campus
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
