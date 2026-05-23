import { CalendarDays, Clock3, UserRound } from "lucide-react";
import ButtonLink from "./ButtonLink";

export default function LiveClassCard({ item }) {
  const past = item.status === "pasada";

  return (
    <article className="platform-card flex h-full flex-col p-6">
      <span className={`w-fit rounded-full px-3 py-1 text-xs font-black ${past ? "bg-white/8 text-white/55" : "bg-brand-red text-white"}`}>
        {past ? "Sesion pasada" : "Proxima sesion"}
      </span>
      <h3 className="mt-5 text-2xl font-black text-white">{item.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-white/62">{item.description}</p>
      <div className="mt-5 grid gap-2 text-sm text-white/58">
        <span className="flex items-center gap-2"><CalendarDays size={17} className="text-brand-red" /> {item.date}</span>
        <span className="flex items-center gap-2"><Clock3 size={17} className="text-brand-red" /> {item.time}</span>
        <span className="flex items-center gap-2"><UserRound size={17} className="text-brand-red" /> {item.instructor}</span>
      </div>
      <ButtonLink href="/contacto" variant={past ? "secondary" : "primary"} className="mt-6">
        {past ? "Solicitar grabacion" : "Registrarme"}
      </ButtonLink>
    </article>
  );
}
