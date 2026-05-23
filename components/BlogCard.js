import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ post, featured = false }) {
  return (
    <article className={`platform-card flex h-full flex-col p-6 ${featured ? "lg:col-span-2" : ""}`}>
      <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
        <span className="rounded-full bg-brand-red/12 px-3 py-1 text-brand-red">{post.category}</span>
        <span className="text-white/45">{post.date}</span>
      </div>
      <h3 className="mt-5 text-2xl font-black leading-tight text-white">{post.title}</h3>
      <p className="mt-4 flex-1 leading-7 text-white/62">{post.summary}</p>
      <Link href="/blog" className="mt-6 inline-flex items-center text-sm font-black text-brand-red">
        Leer mas <ArrowRight className="ml-2" size={17} />
      </Link>
    </article>
  );
}
