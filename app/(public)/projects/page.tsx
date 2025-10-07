import type { Metadata } from "next";
import ProjectCard from "@/components/modules/projects/ProjectCard";
import { getProjectData } from "@/action/projectAction";



export const metadata: Metadata = {
  title: "My Projects | Md Imtiaz Khondoker Akash",
  description: "These are some of my projects. These projects show my skills in both frontend and backend.",
};



const page = async () => {
  const data = await getProjectData({ limit: 999, page: 1 }).then((res)=>res.data.data);;
  // console.log(`blog page`,data)
  return (
    <section
      className="relative bg-gradient-to-br from-sky-50 via-emerald-50 to-indigo-50 pt-5 pb-10 "
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-slate-900 drop-shadow-[3px_3px_0px_#facc15]">
          🚀 Project Showcase
        </h2>
        <p className="mt-4 text-lg text-slate-700 font-medium text-center   ">
          These are some of my projects. These projects show my skills in both frontend and backend.
        </p>

        <ProjectCard projects={data}  />
      </div>
    </section>
  );
};

export default page;
