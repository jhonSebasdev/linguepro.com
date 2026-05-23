"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LogIn, Menu, X } from "lucide-react";
import { campusUrl, navItems } from "@/data/courses";
import ButtonLink from "./ButtonLink";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-brand-dark/82 backdrop-blur-xl">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-3 sm:min-h-20 sm:gap-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex h-11 w-32 items-center overflow-hidden rounded-full bg-white px-3 shadow-[0_10px_10px_rgba(255,255,255,0.14)] sm:h-12 sm:w-40">
            <img
              src="/intro.gif"
              alt="LinguePro"
              className="h-auto w-full object-contain"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-white/10 text-brand-red" : "text-white/72 hover:bg-white/8 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={campusUrl} external variant="secondary">
            <LogIn className="mr-2" size={17} /> Iniciar sesion
          </ButtonLink>
        </div>

        <button
          className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white sm:h-11 sm:w-11 lg:hidden"
          type="button"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-dark px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="rounded-xl px-3 py-3 text-sm font-bold text-white/78 hover:bg-white/8 hover:text-brand-red"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <ButtonLink href={campusUrl} external className="mt-2">
              Ir a la plataforma
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
