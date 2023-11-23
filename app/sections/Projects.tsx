"use client";

import projects from "../assets/projects/projects";
import Card from "../components/Card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-24 mx-10"
    >
      <h2 className="text-5xl font-black mb-12 text-center">Projects</h2>
      <div className="flex flex-col gap-10 w-full mx-auto max-w-[1000px] grid-rows-2">
        <div className="grid gap-x-5 gap-y-8 grid-auto place-items-center overflow-hidden h-[780px]">
          {projects.map((pr, i) => (
            <Card key={i} project={pr} />
          ))}
        </div>
        <div className="text-2xl self-end cursor-pointer px-10 py-3 rounded-full border border-transparent hover:border-white hover:text-white hover:bg-slate-800 duration-100 flex gap-3 group">
          Show All
          <p className="group-hover:tracking-widest duration-100 w-5 flex justify-center items-center">
            ({projects.length})
          </p>
        </div>
      </div>
    </section>
  );
}
