import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import { blogPosts } from "@/data/courses";

export const metadata = {
  title: "Blog | LinguePro",
};

export default function BlogPage() {
  const featured = blogPosts.filter((post) => post.featured);
  const rest = blogPosts.filter((post) => !post.featured);

  return (
    <main className="pt-24 sm:pt-28">
      <section className="platform-section">
        <div className="section-shell">
          <SectionHeader
            eyebrow="Blog"
            title="Articulos educativos para aprender mejor"
            description="Guias, tendencias y recursos para estudiantes, profesionales y equipos que quieren avanzar con criterio."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {featured.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#090f1c] py-14 text-white sm:py-20 lg:py-24">
        <div className="section-shell">
          <SectionHeader eyebrow="Mas articulos" title="Contenido reciente" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
