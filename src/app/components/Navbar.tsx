import React from "react";
import Image from "next/image";

interface NavbarProps {
    navChild?: React.ReactNode
}

export default function Navbar({navChild}: NavbarProps) {
  return (
    <section>
      <nav className="flex justify-between px-5 py-2.5 lg:px-36 lg:py-8 items-center bg-red">
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} width={50} height={41} alt="logo" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-950">
            Simbi
          </h1>
        </div>
        {/* <div className="border border-[#C9C0D4] rounded-2xl lg:rounded-xl w-[140px] md:w-[306px] lg:w-[346px] flex justify-between items-center px-2.5 py-1 md:p-4 lg:p-4">
          <p>Language</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div> */}

        {navChild && <div className="border border-[#C9C0D4] rounded-2xl lg:rounded-xl w-[140px] md:w-[306px] lg:w-[346px] flex justify-between items-center px-2.5 py-1 md:p-4 lg:p-4" > {navChild}</div>}



      </nav>
    </section>
  )
      }