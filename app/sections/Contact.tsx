"use client";

import Link from "next/link";
import React from "react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

function Contact() {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center mb-20 py-24 px-4 no-tap-highlight"
    >
      <h2 className="text-5xl font-black mb-12 text-center">
        Interested? Get in touch now!
      </h2>
      <div className="relative flex items-center cursor-pointer rounded-full group overflow-hidden">
        <div
          className={`${
            copied ? "translate-y-0" : "translate-y-[200%]"
          } absolute group-hover:translate-y-0 duration-200 ease-in-out bg-white/90 w-full h-full flex justify-center items-center`}
          onClick={() => {
            setCopied(true);
            navigator.clipboard.writeText("devmailglow@gmail.com");
          }}
        >
          <p
            className={`${
              copied ? "-translate-y-[200%]" : ""
            } text-blue-950 font-semibold text-lg duration-150`}
          >
            Click to copy
          </p>
          <div
            className={`
            ${copied ? "" : "translate-y-[200%]"}
             absolute duration-100 flex items-center gap-2`}
          >
            <FaCircleCheck size={24} className="text-green-600" />
            <p className="text-blue-950 text-xl font-medium">copied</p>
          </div>
        </div>
        <div className="border rounded-l-full px-4 sm:px-10 py-4">
          <MdOutlineEmail size={24} />
        </div>
        <div className="border rounded-r-full px-4 sm:px-10 py-4">
          <p className="tracking-wide">devmailglow@gmail.com</p>
        </div>
      </div>
      <div className="w-3/4 max-w-[500px] h-[1px] my-12 bg-white"></div>
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <Link
          className="flex items-center gap-2"
          href="https://www.linkedin.com/in/abdelmalek-bouhalassa"
        >
          <BiLogoLinkedin size={28} />
          <h3 className="text-3xl">Linkedin</h3>
        </Link>
        <GoDotFill className="hidden sm:block" />
        <Link
          className="flex items-center gap-2"
          href="https://www.github.com/i-Glow"
        >
          <BiLogoGithub size={28} />
          <h3 className="text-3xl">Github</h3>
        </Link>
        <GoDotFill className="hidden sm:block" />
        <Link
          className="flex items-center gap-2"
          href="https://www.twitter.com/Abdelmalekelele"
        >
          <BsTwitterX size={24} />
          <h3 className="text-3xl">Twitter</h3>
        </Link>
      </div>
    </section>
  );
}

export default Contact;
