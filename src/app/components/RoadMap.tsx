import React from "react";
import Image from "next/image";
import { RoadMaps } from "../app-constants";

export default function RoadMap() {
  return (
    <section className="bg-[#E4DFFF]">
      <div className="flex flex-col place-items-center py-[107px] px-[174px]">
        <Image
          src="/simbi-black.svg"
          width={216}
          height={199}
          alt="simbi quote"
          className=""
        />
        <button
          type="button"
          className="w-[1089px] -mt-6 bg-[#7A5FFF] text-white text-3xl py-3"
        >
          Get Started
        </button>
      </div>
      <div>
        <Image
          src="/road-map.png"
          width={1438}
          height={958}
          alt="simbi quote"
          className="w-full"
        />
      </div>
      <section className="py-[107px] px-[172px] flex gap-[53px] flex-wrap">
        {RoadMaps.map((item) => (
          <div
            key={item.id}
            className={`w-[296px] h-40 pt-[29px] px-7 text-2xl leading-[22px] ${item.color} bg-white border border-[#1E1E2F] rounded-2xl shadow-[0px_16.66px_76.18px_rgba(149,127,255,0.53)]`}
          >
            {item.id}. {item.description}
          </div>
        ))}
      </section>
    </section>
  );
}
