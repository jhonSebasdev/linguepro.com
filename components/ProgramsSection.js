"use client";

import { motion } from "framer-motion";
import { courses, schools } from "@/data/courses";
import CourseCard from "./CourseCard";
import SchoolCard from "./SchoolCard";
import SectionHeader from "./SectionHeader";

export default function ProgramsSection() {
  return (
    <>
      <section id="escuelas" className="platform-section">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Escuelas y rutas"
            title="Elige una escuela y sigue una ruta con sentido"
            description="Organizamos los cursos por areas para que puedas encontrar un camino claro y progresivo."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {schools.map((school) => (
              <SchoolCard key={school.title} school={school} />
            ))}
          </div>
        </div>
      </section>

      <section id="programas" className="border-y border-white/10 bg-[#090f1c] py-14 text-white sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Cursos destacados"
            title="Cursos para comunicarte, crear y crecer profesionalmente"
            description="Explora cursos flexibles con materiales, actividades, evaluaciones y acompanamiento desde el campus virtual."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {courses.slice(0, 6).map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.035 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
