import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SchoolCard({ school }) {
  const Icon = school.icon;

  return (
    <Link
      href={`/cursos?categoria=${school.slug.includes("english") ? "ingles" : school.slug}`}
      className="platform-card group block h-full p-6 hover:-translate-y-1 hover:border-brand-red/45"
    >
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${school.color} text-brand-dark`}>
        <Icon size={26} />
      </div>
      <h3 className="mt-6 text-2xl font-black text-white">{school.title}</h3>
      <p className="mt-3 leading-7 text-white/62">{school.description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
        <span className="font-bold text-white/62">{school.courses} cursos y rutas</span>
        <ArrowRight className="text-brand-red transition group-hover:translate-x-1" size={18} />
      </div>
    </Link>
  );
}
