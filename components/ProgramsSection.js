"use client";

import { motion } from "framer-motion";
import { programs } from "@/data/courses";
import CourseCard from "./CourseCard";
import SectionHeader from "./SectionHeader";

export default function ProgramsSection() {
  return (
    <section id="programas" className="bg-brand-dark py-20 text-white sm:py-24">
      <div className="section-shell">
        <SectionHeader
          dark
          eyebrow="Programas academicos"
          title="Cursos para comunicarte, crear y crecer profesionalmente"
          description="Explora rutas de aprendizaje flexibles con materiales, actividades, evaluaciones y acompanamiento desde el campus virtual."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((course, index) => (
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
  );
}
