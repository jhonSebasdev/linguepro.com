import BenefitsSection from "@/components/BenefitsSection";
import BlogCard from "@/components/BlogCard";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import LearningExperienceSection from "@/components/LearningExperienceSection";
import LiveClassCard from "@/components/LiveClassCard";
import ProgramsSection from "@/components/ProgramsSection";
import SectionHeader from "@/components/SectionHeader";
import TeacherCard from "@/components/TeacherCard";
import Testimonials from "@/components/Testimonials";
import { blogPosts, liveClasses, teachers } from "@/data/courses";

export default function Home() {
  return (
    <main>
      <Hero />
      <LearningExperienceSection />
      <BenefitsSection />
      <ProgramsSection />

      <section className="platform-section">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Instructores"
            title="Profesores enfocados en practica y acompanamiento"
            description="Cada ruta combina contenido estructurado con orientacion academica para que avances con claridad."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.name} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#090f1c] py-14 text-white sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Live"
            title="Clases en vivo para practicar con instructores"
            description="Sesiones abiertas y talleres que complementan el aprendizaje dentro del campus."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {liveClasses.slice(0, 3).map((item) => (
              <LiveClassCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="platform-section">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Blog"
            title="Recursos para aprender mejor"
            description="Ideas, guias y articulos para estudiar online, mejorar tu perfil y elegir rutas con criterio."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <BlogCard key={post.title} post={post} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
      <ContactSection />
    </main>
  );
}
