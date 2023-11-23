"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky max-w-max mx-auto top-5 z-[100] backdrop-blur-md flex gap-6 p-4 px-12 bg-white/5 rounded-full">
      <Link href="#about">Me</Link>
      {/* <Link href="#about">Skills</Link> */}
      <Link href="#projects">Projects</Link>
      {/* <Link href="#about">About Me</Link> */}
      <Link href="#contact">Contact</Link>
    </header>
  );
}
