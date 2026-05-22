"use client";

import { motion } from "framer-motion";
import { Clock3, MonitorCheck } from "lucide-react";
import ButtonLink from "./ButtonLink";

export default function CourseCard({ course }) {
  const Icon = course.icon;

  return (
    <motion.article
      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white p-5 text-brand-ink shadow-sm transition hover:shadow-2xl"
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 p-3 text-brand-red transition group-hover:rotate-3 group-hover:scale-110">
          <Icon size={26} />
        </span>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-brand-muted">
          {course.tag}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-black leading-tight">{course.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-brand-muted">{course.description}</p>
      <div className="mt-5 grid gap-2 text-sm text-brand-muted">
        <span className="flex items-center gap-2">
          <Clock3 size={17} className="text-brand-red" /> {course.duration}
        </span>
        <span className="flex items-center gap-2">
          <MonitorCheck size={17} className="text-brand-red" /> {course.modality}
        </span>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="#contacto" variant="light" className="w-full">
          Ver mas
        </ButtonLink>
        <ButtonLink href="#contacto" className="w-full">
          Inscribirme
        </ButtonLink>
      </div>
    </motion.article>
  );
}
