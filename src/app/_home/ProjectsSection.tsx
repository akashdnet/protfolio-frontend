import Image from "next/image";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    image: "/blog.jpg",
    description:
      "A retro‑styled developer portfolio with animations and glassmorphism.",
    tech: ["Next.js", "TailwindCSS", "GSAP"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "E‑Commerce Platform",
    image: "/blog.jpg",
    description:
      "Full‑stack e‑commerce app with cart, checkout, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://yourecommerce.com",
  },
  {
    id: 3,
    title: "Chat Application",
    image: "/blog.jpg",
    description:
      "Real‑time chat app with authentication and WebSocket messaging.",
    tech: ["Next.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/chatapp",
    demo: "https://yourchatapp.com",
  },
];

const accent = "from-amber-100 via-pink-100 to-sky-100";

const ProjectShowcase = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-sky-50 via-emerald-50 to-indigo-50 py-20"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-[3px_3px_0px_#facc15]">
          🚀 Project Showcase
        </h2>
        <p className="mt-4 text-lg text-slate-700 font-medium text-center   ">
          These are some of my projects. These projects show my skills in both
          frontend and backend.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {projects.map((project, _) => (
            <div
              key={_}
              className="relative  border-slate-900 bg-white shadow-[8px_8px_0px_#000] overflow-hidden rounded-xl border-4  "
            >
              <div
                className={`absolute h-full w-3 bg-gradient-to-b left-0 top-0   ${accent}  `}
              />
              <div className="px-6 pt-6 pb-5 md:px-7 md:pt-7">
                <div className="inline-block -skew-x-6 rounded-md border-2 border-slate-900 bg-gradient-to-r from-white via-white to-white px-4 py-1 shadow-[3px_3px_0px_#000]">
                  <span className="skew-x-6 text-base md:text-lg  text-slate-900   font-extrabold">
                    {project.title}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="relative mx-auto w-full rounded-lg border-2 border-slate-900 bg-gradient-to-br from-white via-white to-white p-2 shadow-[4px_4px_0px_#000]">
                    <div className="relative h-48 md:h-56 overflow-hidden rounded-md border-2 border-slate-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span
                        className={`h-2 w-16 rounded-full bg-gradient-to-r ${accent}`}
                      />
                      <span className="text-[11px] font-bold text-slate-700">
                        Site View
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-slate-700 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-[10px] border-2 border-slate-900 bg-white px-3 py-1 text-xs font-bold text-slate-900 shadow-[2px_2px_0px_#000]    rotate-[-2deg]"
                    >
                      <span
                        className={`inline-block h-2 w-2 rounded-full bg-gradient-to-br ${accent}`}
                      />
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border-2 border-slate-900 bg-white px-4 py-2 font-extrabold text-slate-900 shadow-[3px_3px_0px_#000] hover:bg-slate-100 transition"
                  >
                    🐙 GitHub
                  </Link>

                  <Link
                    href={project.demo}
                    target="_blank"
                    className={`inline-flex items-center text-slate-900 justify-center rounded-full border-2 border-slate-900 bg-gradient-to-r ${accent} px-4 py-2 font-extrabold  shadow-[3px_3px_0px_#000] hover:brightness-105 transition`}
                  >
                    🔗 Live
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href={"#"}
            className="relative inline-flex items-center gap-3 rounded-full border-4 border-slate-900 
               bg-gradient-to-r from-amber-200 via-pink-200 to-sky-200 text-slate-900 
               shadow-[6px_6px_0px_#000] px-9 py-3 text-lg font-extrabold 
               transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]"
          >
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full 
                     border-2 border-slate-900 bg-white text-slate-900 
                     shadow-[2px_2px_0px_#000]"
            >
              🔥
            </span>
            See My All Projects
            <span
              className="pointer-events-none absolute right-3 top-1/2 h-1 w-10 
                     -translate-y-1/2 rounded-full bg-white/40"
            ></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
