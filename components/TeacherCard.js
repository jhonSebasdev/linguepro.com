import { UserRoundCheck } from "lucide-react";

export default function TeacherCard({ teacher }) {
  return (
    <article className="platform-card p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/8 text-brand-red">
        <UserRoundCheck size={26} />
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{teacher.name}</h3>
      <p className="mt-1 text-sm font-bold text-brand-red">{teacher.role}</p>
      <p className="mt-4 leading-7 text-white/62">{teacher.bio}</p>
    </article>
  );
}
