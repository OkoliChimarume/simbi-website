"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Congratulations() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("../");
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br 
    from-purple-100 from-[0%] to-[5%]
    via-white via-[6%] via-[90%]
    to-yellow-200 to-[95%] to-[100%]"
    >
      <section className="w-[80%] md:w-[52%] flex flex-col bg-white items-center justify-center py-6 px-4 my-4 mx-auto text-center font-medium rounded-2xl shadow-[0px_16.66px_76.18px_rgba(149,127,255,0.53)]">
        <p className="text-lg md:text-2xl">Simbi Pre Assessment</p>

        <h2 className="text-2xl md:text-4xl my-16" >Thanks for your submission</h2>

        <p className="text-lg md:text-2xl my-4">We are thankful that you put your time and efforts to complete this assessment.</p>

        <p className="text-lg md:text-2xl my-2">Your result will be summarized on your dashboard and you would be directed to our homepage shortly.</p>

        <a href="../" 
        className="text-gray-500 underline"
        >
            Click here if you are not redirected
        </a>
        
      </section>
    </div>
  );
}