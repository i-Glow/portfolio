import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import type { project } from "../types";

type Props = {
  project: project;
};

export default function Card({ project }: Props) {
  return (
    <div className="snap-center flex flex-col rounded-[12px] min-w-[300px] w-80 h-[360px] border border-cyan-950 p-1 relative overflow-hidden group">
      <div className="absolute w-full top-12 h-full bg-transparent group-hover:bg-white/[.02] rounded-3xl duration-200 blur-xl"></div>
      <div className="rounded-lg overflow-hidden w-full">
        <Image
          src={project.image}
          width={400}
          height={0}
          className="aspect-video group-hover:scale-105 duration-200"
          alt={project.title}
        />
      </div>
      <div className="flex-col gap-2 px-2 mt-2">
        <p>{project.title}</p>
        <p className="font-light">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 px-2 mt-4">
        {project.tools.map((tool, i) => (
          <Chip key={i}>{tool}</Chip>
        ))}
      </div>
      <div className="mt-auto p-2 flex flex-row-reverse gap-2 z-10">
        {!!project.repository && (
          <Link href={project.repository} target="_blank">
            <BsGithub size={20} />
          </Link>
        )}
        {!!project.link && (
          <Link href={project.link} target="_blank">
            <FiExternalLink size={20} />
          </Link>
        )}
      </div>
    </div>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <div className="rounded-full border border-sky-800 text-xs px-1 bg-cyan-950 font-semibold">
      {children}
    </div>
  );
}
