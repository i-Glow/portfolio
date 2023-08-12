"use client";

import projects from "../assets/projects/projects";
import Card from "../components/Card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-24"
    >
      <h2 className="text-6xl font-black mb-12">My Projects</h2>
      <div className="flex gap-5 max-w-full overflow-x-scroll no-scrollbar px-8 snap-x">
        {projects.map((pr, i) => (
          <Card key={i} project={pr} />
        ))}
      </div>
    </section>
  );
}
