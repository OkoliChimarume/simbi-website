import React from "react";
import Image from "next/image";

export default function RealTalk() {
  return (
    <section className="bg-white flex justify-center items-center h-[506px] gap-[90px]">
      <h2 className="text-5xl leading-[60px] text-dark-950 font-medium">
        Real talk <br /> from <br /> Simbi
      </h2>

      <div className="rounded-[20px] shadow-[0px_16.66px_76.18px_rgba(149,127,255,0.53)]">
        <Image
          src="/real-talk-quote.webp"
          width={745}
          height={253}
          alt="simbi quote"
          className=""
        />
      </div>
    </section>
  );
}
