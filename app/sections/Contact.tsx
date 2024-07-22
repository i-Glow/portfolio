"use client";

import Link from "next/link";
import React from "react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import Lottie from "lottie-react";
import BreathingDot from "../assets/animations/breathing-dot.json";
import Email from "../components/Email";
import Ripple from "../components/Ripple";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden flex flex-col justify-center items-center mb-20 py-24 px-4 no-tap-highlight"
    >
      <Ripple />
      <h2 className="text-5xl font-black mb-4 text-center">
        Interested? Get in touch now!
      </h2>
      <p className="text-center max-w-lg mb-8 text-gray-300">
        I&apos;m thrilled to connect with you. Whether you have a project in
        mind, want to discuss collaboration opportunities, or just want to say
        hello, feel free to reach out. Looking forward to hearing from you!
      </p>
      <Email />
      <div className="text-xs h-10 flex justify-center items-center">
        <Lottie animationData={BreathingDot} loop={true} />
        <p>Available now</p>
      </div>
      <div className="w-3/4 max-w-[500px] h-[1px] mb-12 mt-6 bg-white"></div>
      <div className="z-50 flex flex-col md:flex-row items-center gap-8">
        <Link
          className="flex items-center gap-2 group hover:border-green-500 duration-100 border-2 border-transparent px-6 py-2 rounded-full"
          href="https://wa.me/%2B213559716726"
          target="_blank"
        >
          <BsWhatsapp
            size={24}
            className="group-hover:translate-y-[-5px] group-hover:text-green-500 duration-100"
          />
          <h3 className="text-3xl">Whatsapp</h3>
        </Link>
        <GoDotFill className="hidden md:block" />
        <Link
          className="flex items-center gap-2 group hover:border-blue-500 duration-100 border-2 border-transparent px-6 py-2 rounded-full"
          href="https://www.linkedin.com/in/abdelmalek-bouhalassa"
          target="_blank"
        >
          <BiLogoLinkedin
            size={28}
            className="group-hover:translate-y-[-5px] group-hover:text-blue-500 duration-100"
          />
          <h3 className="text-3xl">Linkedin</h3>
        </Link>
        <GoDotFill className="hidden md:block" />
        <Link
          className="flex items-center gap-2 group hover:border-white duration-100 border-2 border-transparent px-6 py-2 rounded-full"
          href="https://www.github.com/i-Glow"
          target="_blank"
        >
          <BiLogoGithub
            size={28}
            className="group-hover:translate-y-[-5px] duration-100"
          />
          <h3 className="text-3xl">Github</h3>
        </Link>
      </div>
    </section>
  );
}

export default Contact;
