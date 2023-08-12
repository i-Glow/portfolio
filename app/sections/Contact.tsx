"use client";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";

const sendingStates = new Map([
  ["DEFAULT", { text: "SEND" }],
  ["SENDING", { text: "SENDING..." }],
  ["SENT", { text: "SENT" }],
  ["FAILED", { text: "RESEND" }],
]);

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setLoading] = useState("DEFAULT");

  const sendEmail = (e: FormEvent) => {
    setLoading("SENDING");
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_PB_KEY || "";

    emailjs
      .sendForm(serviceId, templateId, form.current as any, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setLoading("SENT");
        },
        (error) => {
          setLoading("FAILED");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center py-24"
    >
      <div className="hidden sm:block absolute top-60 w-10/12 h-[400px] bg-blue-400/30 blur-3xl skew-y-12 rounded-full"></div>
      <h2 className="text-6xl font-black mb-12">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-slate-800/30 flex text-xl flex-col gap-5 justify-center items-center w-full p-5 max-w-3xl border border-cyan-950 drop-shadow-md sm:backdrop-blur-lg rounded-xl"
      >
        <div className="flex gap-5 w-full flex-wrap sm:flex-nowrap">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-cyan-600 font-bold ml-4">Name</label>
            <input
              className="outline-none focus:border-cyan-800 placeholder:focus:text-cyan-800 duration-150 transition-all rounded-lg bg-slate-900 border border-cyan-950 px-4 py-2 placeholder:text-sky-950 placeholder:font-bold"
              type="text"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-cyan-600 font-bold ml-4">Email</label>
            <input
              className="outline-none focus:border-cyan-800 placeholder:focus:text-cyan-800 duration-150 transition-all rounded-lg bg-slate-900 border border-cyan-950 px-4 py-2 placeholder:text-sky-950 placeholder:font-bold"
              type="email"
              name="email"
              placeholder="johndoe@mail.com"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-cyan-600 font-bold ml-4">Message</label>
          <textarea
            className="outline-none focus:border-cyan-800 placeholder:focus:text-cyan-800 duration-150 transition-all h-40 resize-none rounded-lg bg-slate-900 border border-cyan-950 px-4 py-2 placeholder:text-sky-950 placeholder:font-bold"
            maxLength={1024}
            name="message"
            placeholder="Your message"
          />
        </div>
        <button
          type="submit"
          className="border border-cyan-950 py-1.5 bg-slate-800/50 hover:bg-slate-800 duration-150 w-full rounded-lg group flex justify-center items-center"
        >
          <p
            className={`${
              sending === "DEFAULT" && "group-hover:-translate-x-2"
            } duration-300`}
          >
            {sendingStates.get(sending)?.text}
          </p>
          {sending === "DEFAULT" ? (
            <IoSend
              size={16}
              className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-300"
            />
          ) : null}
        </button>
      </form>
    </section>
  );
}
