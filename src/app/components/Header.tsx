import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <section>
      <nav className="flex justify-between px-5 py-2.5 lg:px-36 lg:py-8 items-center bg-white">
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} width={50} height={41} alt="logo" />
          <h1 className="text-4xl font-bold text-dark-950">Simbi</h1>
        </div>
        <div className="border border-[#C9C0D4] rounded-xl w-[346px] flex justify-between items-center p-4">
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
        </div>
      </nav>
      <section className="bg-[#E9E8FF] flex justify-center items-center h-[43.3rem]">
        <div className="flex items-center gap-24">
          <Image
            src={"/hero-image.webp"}
            width={245}
            height={389}
            alt="simbi icon"
          />
          <div className="max-w-[532px] p-2 space-y-4 text-center">
            <h2 className="text-5xl text-dark-950 font-medium">
              Meet Simbi! <br /> Your Ai Study Buddy.
            </h2>
            <p className="text-[#6B7280] text-2xl">
              Simbi helps you plan, stay motivated and learn effectively with a
              touch of personality
            </p>
            <div className="space-y-4 mt-12">
              <button
                type="button"
                className="w-[444px] bg-[#7A5FFF] text-white py-3"
              >
                Get Started
              </button>
              <button
                type="button"
                className="w-[444px] border border-[#7A5FFF] text-[#7A5FFF] py-3 rounded-lg"
              >
                Have an Account{" "}
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
