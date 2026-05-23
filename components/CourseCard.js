"use client";

import { motion } from "framer-motion";
import { Clock3, Layers3, MonitorCheck } from "lucide-react";
import ButtonLink from "./ButtonLink";

export default function CourseCard({ course }) {
  const Icon = course.icon;

  return (
    <motion.article
      className="platform-card group flex h-full flex-col overflow-hidden p-4 hover:-translate-y-1 hover:border-brand-red/45 sm:p-5"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/12 p-3 text-brand-red transition group-hover:scale-105">
          <Icon size={25} />
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-white/62">
          {course.tag}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-black leading-tight text-white sm:text-xl">{course.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-white/62 sm:text-base">{course.description}</p>
      <div className="mt-5 grid gap-2 text-sm text-white/58">
        <span className="flex items-center gap-2">
          <Layers3 size={17} className="text-brand-red" /> {course.level}
        </span>
        <span className="flex items-center gap-2">
          <Clock3 size={17} className="text-brand-red" /> {course.duration}
        </span>
        <span className="flex items-center gap-2">
          <MonitorCheck size={17} className="text-brand-red" /> {course.modality}
        </span>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={`/cursos?categoria=${course.category}`} variant="light" className="w-full">
          Ver curso
        </ButtonLink>
        <ButtonLink href="/contacto" className="w-full">
          Inscribirme
        </ButtonLink>
      </div>
    </motion.article>
  );
}
