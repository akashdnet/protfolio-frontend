"use client"
import { TProject } from "@/action/projectAction";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ projects}: { projects: TProject[]}) {
  return (
    <div>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {projects.map((project, _) => (
          <div
            key={_}
            className="relative  border-slate-900 bg-white shadow-[8px_8px_0px_#000] overflow-hidden rounded-xl border-4  "
          >
            <div
              className={`absolute h-full w-3 bg-gradient-to-b left-0 top-0   from-amber-100 via-pink-100 to-sky-100  `}
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
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className={`h-2 w-16 rounded-full bg-gradient-to-r from-amber-100 via-pink-100 to-sky-100`}
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
                {project.features.map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-[10px] border-2 border-slate-900 bg-white px-3 py-1 text-xs font-bold text-slate-900 shadow-[2px_2px_0px_#000]    rotate-[-2deg]"
                  >
                    <span
                      className={`inline-block h-2 w-2 rounded-full bg-gradient-to-br from-amber-100 via-pink-100 to-sky-100`}
                    />
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full border-2 border-slate-900 bg-white px-4 py-2 font-extrabold text-slate-900 shadow-[3px_3px_0px_#000] hover:bg-slate-100 transition"
                >
                  🐙 GitHub
                </Link>

                <Link
                  href={project.liveSite}
                  target="_blank"
                  className={`inline-flex items-center text-slate-900 justify-center rounded-full border-2 border-slate-900 bg-gradient-to-r from-amber-100 via-pink-100 to-sky-100 px-4 py-2 font-extrabold  shadow-[3px_3px_0px_#000] hover:brightness-105 transition`}
                >
                  🔗 Live
                </Link>
                <Link
                  href={`/projects/${project._id}`}
                  className={`inline-flex items-center text-slate-900 justify-center rounded-full border-2 border-slate-900 bg-gradient-to-r from-amber-100 via-pink-100 to-sky-100 px-4 py-2 font-extrabold  shadow-[3px_3px_0px_#000] hover:brightness-105 transition col-span-2 `}
                >
                  📜 View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
