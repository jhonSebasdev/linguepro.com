import { Suspense } from "react";
import CoursesCatalog from "@/components/CoursesCatalog";
import CTASection from "@/components/CTASection";
import SchoolCard from "@/components/SchoolCard";
import SectionHeader from "@/components/SectionHeader";
import { schools } from "@/data/courses";

export const metadata = {
  title: "Cursos | LinguePro",
};

export default function CoursesPage() {
  return (
    <main className="pt-24 sm:pt-28">
      <section className="platform-section">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Cursos"
            title="Catalogo de cursos por categoria"
            description="Filtra por escuela, revisa nivel, duracion y modalidad, y elige la ruta que mejor encaja con tu objetivo."
          />
          <Suspense fallback={<div className="mt-10 text-white/60">Cargando cursos...</div>}>
            <CoursesCatalog />
          </Suspense>
        </div>
      </section>

      <section className="bg-[#090f1c] py-14 text-white sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Escuelas"
            title="Rutas de aprendizaje organizadas"
            description="Explora areas completas para estudiar con continuidad y no solo con cursos aislados."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {schools.map((school) => (
              <SchoolCard key={school.title} school={school} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
