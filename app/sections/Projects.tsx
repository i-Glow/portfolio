"use client";

import { projects, personalProjects } from "../assets/projects/projects";
import Card from "../components/Card";

export default function Projects({ type }: { type: "Freelance" | "Personal" }) {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-24"
    >
      <h2 className="text-5xl font-black mb-12 text-center">{type} projects</h2>
      <div className="flex gap-5 max-w-full overflow-x-scroll no-scrollbar px-8 snap-x">
        {type === "Freelance"
          ? projects.map((pr, i) => <Card key={i} project={pr} />)
          : personalProjects.map((pr, i) => <Card key={i} project={pr} />)}
      </div>
    </section>
  );
}
