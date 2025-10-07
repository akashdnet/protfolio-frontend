import ProjectCard from "@/components/modules/projects/ProjectCard";
import { TProject } from "@/constant/types";
import Link from "next/link";




const ProjectShowcase = ({ projects }: { projects: TProject[] }) => {

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

      <ProjectCard projects={projects} />

        <div className="mt-14 flex justify-center">
          <Link
            href={"/projects"}
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
