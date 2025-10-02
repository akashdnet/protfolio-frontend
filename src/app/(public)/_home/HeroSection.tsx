import { Code2Icon } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className=" flex min-h-screen items-center bg-gradient-to-br from-sky-50 via-emerald-50 to-indigo-50 overflow-hidden pt-10 "
    >
      <div className="absolute -top-0 -left-24 h-80 w-80 rounded-full bg-sky-200 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl animate-bounce" />

      <div className="container mx-auto max-w-6xl grid  grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className=" text-center md:order-1 md:text-left">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700 shadow">
            <Code2Icon className="inline mr-2" /> Passionate Programmer
          </span>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-800 drop-shadow-[2px_2px_0px_#a5b4fc] md:text-6xl">
            Hey! I’m{" "}
            <span className="text-indigo-600">MD Imtiaz Khondoker Akash</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-slate-600 md:mt-6">
            Passionate Programmer. Love to solve problems, building ideas throw code.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 md:justify-start justify-center">
            <Link
              href="#projects"
              className="rounded-full bg-emerald-300 px-8 py-3 text-lg font-bold text-slate-800 shadow-[3px_3px_0px_#94a3b8] hover:translate-y-1 transition-transform"
            >
              My Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-indigo-400 px-8 py-3 text-lg font-bold text-white shadow-[3px_3px_0px_#475569] hover:translate-y-1 transition-transform"
            >
              My Blogs
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 md:justify-start justify-center">
            {[
              "C++",
              "Javascript",
              "Typescript",
              "Rect.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "PostgreSql",
              "MongoDB",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white/70 px-4 py-1 text-sm font-semibold text-slate-700 shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className=" md:order-2 flex justify-center">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 shadow-xl backdrop-blur-xl p-6">
            <div className="absolute -top-6 -left-6 h-14 w-14 rotate-6 rounded-xl bg-indigo-200 shadow-[3px_3px_0px_#475569]" />
            <div className="absolute -bottom-6 -right-6 h-16 w-16 -rotate-6 rounded-full bg-emerald-200 shadow-[3px_3px_0px_#94a3b8]" />
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>
            <div className="rounded-2xl p-4 font-mono text-sm text-slate-800 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.08),rgba(16,185,129,0.08))]">
              <pre>
                {`type Bio = {
  name: string
  vibe: "calm"
  stack: string[]
}

const me: Bio = {
  name: "MD Imtiaz Khondoker Akash",
  vibe: "calm",
  stack: [ "C++", "Javascript", "Typescript", 
            "Rect.js", "Next.js", 
            "Node.js", "Express.js", 
            "PostgreSql", "MongoDB" ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
