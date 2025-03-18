"use client";

import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

function Email() {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);

  return (
    <div className="relative flex items-center cursor-pointer rounded-full group overflow-hidden">
      <div
        className={`${
          copied ? "translate-y-0" : "translate-y-[200%]"
        } absolute group-hover:translate-y-0 duration-200 ease-in-out bg-white/90 w-full h-full flex justify-center items-center`}
        onClick={() => {
          setCopied(true);
          navigator.clipboard.writeText("abouhalassa@gmail.com");
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
        <p className="tracking-wide">abouhalassa@gmail.com</p>
      </div>
    </div>
  );
}

export default Email;
