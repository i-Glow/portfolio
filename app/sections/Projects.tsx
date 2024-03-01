"use client";
import Image from "next/image";
import { useState } from "react";
import projects from "../assets/projects/projects";
import Card from "../components/Card";
import { Portal } from "../_document";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
  IoIosCloseCircle,
} from "react-icons/io";
import useClickOutside from "../lib/useClickOutside";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-24 mx-10"
    >
      <h2 className="text-5xl font-black mb-12 text-center">Projects</h2>
      <StaticGrid />
    </section>
  );
}

function StaticGrid() {
  const [isOpen, setIsOpen] = useState<number>(-1);
  const [isExpaneded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-10 w-full mx-auto max-w-[1000px] grid-rows-2">
      <div
        className={`grid gap-x-5 gap-y-8 grid-auto place-items-center overflow-hidden ${
          isExpaneded ? "" : "h-[760px]"
        }`}
      >
        {projects.map((pr, index) => (
          <Card onClick={() => setIsOpen(index)} key={index} project={pr} />
        ))}
      </div>
      <div
        onClick={() => setIsExpanded(!isExpaneded)}
        className="text-2xl self-end cursor-pointer px-10 py-3 rounded-full border border-transparent hover:border-white hover:text-white hover:bg-slate-800 transition-all duration-100 flex gap-3 group"
      >
        Show All
        <p className="group-hover:tracking-widest duration-100 w-5 flex justify-center items-center">
          ({projects.length})
        </p>
      </div>
      {isOpen >= 0 && <Dialog setIsOpen={setIsOpen} index={isOpen} />}
    </div>
  );
}

function Dialog({
  index,
  setIsOpen,
}: {
  index: number;
  setIsOpen: React.Dispatch<React.SetStateAction<number>>;
}) {
  const dialogRef = useClickOutside(() => setIsOpen(-1));
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <Portal>
      <div className="fixed top-0 left-0 w-full h-full bg-white/5 backdrop-blur-md z-[1000] flex items-center justify-center">
        <div
          ref={dialogRef}
          className="bg-slate-900 max-w-6xl w-full md:w-5/6 aspect-video rounded-3xl p-1 relative group select-none"
        >
          <div className="absolute top-2 right-12">
            <IoIosCloseCircle
              onClick={() => setIsOpen(-1)}
              size={32}
              className="absolute z-10 text-slate-800 md:text-transparent group-hover:text-slate-800 hover:scale-110 cursor-pointer duration-100"
            />
            <div className="absolute top-1 left-1 group-hover:bg-white w-6 aspect-square rounded-full duration-200"></div>
          </div>
          <div className="absolute top-1/2 left-6">
            <IoIosArrowDropleftCircle
              onClick={() =>
                setCarouselIndex((prev) =>
                  prev > 0 ? prev - 1 : projects[index].images.length - 1
                )
              }
              size={32}
              className="absolute text-slate-800 md:text-transparent group-hover:text-slate-800 hover:scale-110 cursor-pointer duration-100 z-10"
            />
            <div className="absolute top-1 left-1 group-hover:bg-white w-6 aspect-square rounded-full duration-200"></div>
          </div>
          <Image
            src={projects[index].images[carouselIndex]}
            alt={projects[index].title}
            width={1920}
            height={1080}
            className="aspect-video w-full rounded-[20px]"
          />
          <div className="absolute top-1/2 right-12">
            <IoIosArrowDroprightCircle
              onClick={() =>
                setCarouselIndex(
                  (prev) => (prev + 1) % projects[index].images.length
                )
              }
              size={32}
              className="absolute text-slate-800 md:text-transparent group-hover:text-slate-800 hover:scale-110 cursor-pointer duration-100 z-10"
            />
            <div className="absolute top-1 left-1 group-hover:bg-white w-6 aspect-square rounded-full duration-200"></div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
