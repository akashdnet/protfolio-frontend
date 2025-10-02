import { Link } from "lucide-react";


export default function ButtonType1() {
  return (
    <div className="mt-14 flex justify-center">
  <Link
    href={"#"}
    className="relative inline-flex items-center gap-3 rounded-[999px] border-4 border-slate-900 bg-gradient-to-r from-amber-200 via-pink-200 to-sky-200 text-slate-900 shadow-[6px_6px_0px_#000] transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] px-9 py-3 text-lg font-extrabold"
  >
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-900 bg-white text-slate-900 shadow-[2px_2px_0px_#000]">★</span>
    See My All Blogs
    <span className="absolute inset-0 -z-10 translate-y-1 translate-x-1 rounded-[999px] border-4 border-slate-900 bg-transparent"></span>
    <span className="pointer-events-none absolute right-3 top-1/2 h-1 w-10 -translate-y-1/2 rounded-full bg-white/40"></span>
  </Link>
</div>

  )
}
