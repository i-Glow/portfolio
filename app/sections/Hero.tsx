"use client";
import Blob from "../assets/blob";
import Link from "next/link";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col gap-24 justify-center items-center">
      <div className="flex flex-col items-center gap-3 text-4xl sm:text-5xl relative">
        <h3 className="font-black text-center">Hey 👋</h3>
        <h3 className="font-black text-center">I&apos;m Abdelmalek</h3>
        <p className="font-black text-gray-300 text-pre-line mt-3 text-center">
          Fullstack developer.
        </p>
        <div className="absolute left-1/2 top-1/2 blur-xl max-h-96 w-full max-w-96 -translate-x-1/2 -translate-y-1/2">
          <Blob />
        </div>
      </div>
      <div className="flex gap-4 z-20">
        <Link href="https://www.linkedin.com/in/abdelmalek-bouhalassa">
          <BiLogoLinkedin size={28} />
        </Link>
        <Link href="https://www.github.com/i-Glow">
          <BiLogoGithub size={28} />
        </Link>
        <Link
          href="https://www.twitter.com/Abdelmalekelele"
          className="mt-[2px]"
        >
          <BsTwitterX size={24} />
        </Link>
      </div>
    </div>
  );
}
