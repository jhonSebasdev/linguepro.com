"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { courses } from "@/data/courses";
import CourseCard from "./CourseCard";

const filters = [
  ["todos", "Todos"],
  ["ingles", "Ingles"],
  ["programacion", "Programacion"],
  ["marketing", "Marketing"],
  ["diseno", "Diseno"],
  ["negocios", "Negocios"],
  ["habilidades", "Habilidades"],
];

export default function CoursesCatalog() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("categoria") || "todos";
  const [active, setActive] = useState(initial);

  const filtered = useMemo(
    () => (active === "todos" ? courses : courses.filter((course) => course.category === active)),
    [active]
  );

  return (
    <>
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:mt-10 sm:flex-wrap sm:overflow-visible sm:pb-0">
        {filters.map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setActive(value)}
            className={`focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
              active === value
                ? "border-brand-red bg-brand-red text-white"
                : "border-white/10 bg-white/[0.04] text-white/68 hover:border-brand-red/45 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </>
  );
}
