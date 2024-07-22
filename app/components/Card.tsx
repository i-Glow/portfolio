import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import type { project } from "../types";
import { useState } from "react";
import { MagicCard } from "./MagicCard";

type Props = {
  project: project;
  onClick: () => any;
};

export default function Card({ project, onClick }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="snap-center flex flex-col rounded-[12px] min-w-[300px] w-80 h-[360px] border border-cyan-950 relative overflow-hidden group">
      {/* <div className="absolute w-full top-12 h-full bg-transparent group-hover:bg-white/[.02] rounded-3xl duration-200 blur-xl"></div> */}
      <div
        className="flex flex-col rounded-lg overflow-hidden w-full cursor-pointer aspect-video"
        onClick={onClick}
      >
        {/* {!isLoaded ? (
          <Image
            src={project.placeholder}
            width={400}
            height={0}
            className={`aspect-video group-hover:scale-105 duration-200 blur-sm`}
            alt={project.title}
          />
        ) : null} */}
        <Image
          src={project.thumbnail}
          width={400}
          height={0}
          className={`aspect-video group-hover:scale-105 duration-200 ${
            isLoaded ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}
          alt={project.title}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <MagicCard
      // className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
      >
        <div className="flex-col gap-2 px-3 mt-2">
          <p>{project.title}</p>
          <p className="font-light">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 px-2 mt-4">
          {project.tools.map((tool, i) => (
            <Chip key={i}>{tool}</Chip>
          ))}
        </div>
        <div className="mt-auto p-2 flex justify-end  gap-2 z-10">
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
      </MagicCard>
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
