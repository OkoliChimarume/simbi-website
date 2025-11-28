"use client"; 

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useState } from "react";
import {useRouter} from "next/navigation"

interface Question {
  id: string;
  type: "radio" | "text" | "multi";
  question: string;
  options?: string[];
}


const questions: Question[] = [
  { id: "q1", type: "radio", question: "How old are you?", options: ["Under 13", "13-17", "18-22", "23-30", "30+"] },
  { id: "q2", type: "radio", question: "What level of education are you in?", options: ["Secondary school(JSS/SSS)", "University/Polythecnic", "Vocational or Professional training", "Just preparing for exams (e.g. JAMB, WAEC)", "Other: -----"] },
  { id: "q3", type: "radio", question: "Have you used a study assistant app before?", options: ["Yes", "No"] },
  { id: "q4", type: "multi", question: "How did you hear about SIMBI?", options: ["Social Media", "A friend or classmate", "My school or a teacher", "Blog or article", "Google search", "Other:------"]},
  { id: "q5", type: "multi", question: "What do you hope to achieve with SIMBI?", options: ["Just exploring for now", "Improve my grades", "Build consistent study habits", "Stay motivated", "Feel less stressed about academics", "Other:------"]},
];

const QUESTIONS_PER_PAGE = 2;


export default function PreAssessment() {
    const router = useRouter();

    const [page, setPage] = useState(0);

    const start = page * QUESTIONS_PER_PAGE;
    const end = start + QUESTIONS_PER_PAGE;
    const pageQuestions = questions.slice(start, end);

    //Retrieving the answers
    const [answers, setAnswers] = useState<Record<string, any>>({});


    const handleAnswerChange = (id: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleNext = () => {setPage(p => p + 1);};


  const handlePrev = () => {setPage(p => p - 1);};

  const isLastPage = end >= questions.length;

  const handleSubmit = () => {
    console.log("Final answers:", answers);
    router.push("/congratulations")
  };

    return(
        <div>
            <section>
                <Navbar/>
            </section>
            <main className="flex items-center justify-center flex-col">
                
                <div className="w-[30%] mb-8 lg:mb-16 relative">
                    <div className="w-full h-2.5 bg-[#200B6A] rounded-lg border-2 border-black">
                        
                        <div className="h-full bg-[#957FFF] rounded-full relative"
                        style={{ width: `${((page + 1) / Math.ceil(questions.length / QUESTIONS_PER_PAGE)) * 100}%` }}
                        >
                            <div className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full p-1">

                            <Image src={"/logo-purple.png"} width={28} height={22} alt="simbi icon"/>

                            </div>
                        </div>
                    </div>
                </div>

                <section className="flex justify-between items-stretch w-[70%] md:h-[45%] lg:h-[67%] mb-32 flex-col md:flex-row lg:flex-row rounded-xl shadow-[0px_16.66px_76.18px_rgba(149,127,255,0.53)]">

                    <div className="bg-[#7A5FFF] flex justify-center items-center rounded-xl md:rounded-l-xl w-full md:w-[35%]">
                        <h2 className="text-lg md:text-2xl lg:text-3xl text-white font-semibold text-center">Pre Assessment Test</h2>
                    </div>

                    <div className="text-md md:text-lg lg:text-2xl  rounded-xl md:rounded-r-xl flex-1 p-6 pb-0 flex flex-col">
                        
                        {page === 0 && (
                            <p className="hidden md:inline">This test takes not longer than 5-7 minutes</p>
                        )}
                        
                        <div className="text-md md:text-lg lg:text-xl mt-10 pb-3 rounded-lg">
  {pageQuestions.map(q => (
    <div key={q.id} className="mb-6">

      <p className="font-medium mb-3">{q.question}</p>

      {/* --- RADIO --- */}
{q.type === "radio" &&
  q.options?.map(opt => (
    <label
      key={opt}
      className="flex items-center mb-2 cursor-pointer"
    >
      {/* Hidden native input */}
      <input
        type="radio"
        name={q.id}
        checked={answers[q.id] === opt}
        onChange={() => handleAnswerChange(q.id, opt)}
        className="hidden"
      />

      {/* Custom circle with outer 2px purple ring */}
            <span
        className={`
          w-4 h-4 flex-shrink-0 rounded-full border-[1.8px] mr-3 flex items-center justify-center
          ${((answers[q.id] ?? []).includes(opt)) ? "border-[#7A5FFF] bg-white ring-2 ring-[#D5D4FF]" : "border-gray-400"}
        `}
      >
        {(answers[q.id] ?? []).includes(opt) && (
          <span className="w-2 h-2 bg-[#7A5FFF] rounded-full"></span>
        )}
      </span>

      <span>{opt}</span>
    </label>
  ))}

{/* --- MULTI SELECT --- */}
{q.type === "multi" &&
  q.options?.map(opt => (
    <label
      key={opt}
      className="flex items-center mb-2 cursor-pointer"
    >
      <input
        type="checkbox"
        checked={(answers[q.id] ?? []).includes(opt)}
        onChange={(e) => {
          const checked = e.target.checked;

          setAnswers(prev => {
            const prevArray = prev[q.id] ?? [];
            return {
              ...prev,
              [q.id]: checked
                ? [...prevArray, opt]
                : prevArray.filter((x: string) => x !== opt)
            };
          });
        }}
        className="hidden"
      />

      <span
        className={`
          w-4 h-4 flex-shrink-0 rounded-full border-[1.8px] mr-3 flex items-center justify-center
          ${((answers[q.id] ?? []).includes(opt)) ? "border-[#7A5FFF] bg-white ring-2 ring-[#D5D4FF]" : "border-gray-400"}
        `}
      >
        {(answers[q.id] ?? []).includes(opt) && (
          <span className="w-2 h-2 bg-[#7A5FFF] rounded-full"></span>
        )}
      </span>

      <span>{opt}</span>
    </label>
        ))}
    </div>
  ))}

            {/* BUTTONS */}

          <div className="flex gap-12 lg:gap-48 mt:6 lg:mt-12">
  <button
    disabled={page === 0}
    onClick={handlePrev}
    className="flex-1 py-3 bg-gray-200 rounded-lg disabled:opacity-50"
  >
    Previous
  </button>

  {isLastPage ? (
    <button
      onClick={handleSubmit}
      className="flex-1 bg-[#7A5FFF] text-white py-3 rounded-lg w-[8%] h-[4%]"
    >
      Submit
    </button>
  ) : (
    <button
      onClick={handleNext}
      className="flex-1 bg-[#7A5FFF] text-white py-3 rounded-lg w-[8%] h-[4%]"
    >
      Next
    </button>
  )}
</div>
        </div>

                    </div>
                </section>
            </main>
        </div>
    )
} 


// // HELLO DARKNESS MY OLD FRIEND;











// "use client";

// import Navbar from "../components/Navbar";
// import { useState } from "react";

// // ---------------------------
// // Question Types
// // ---------------------------
// interface Question {
//   id: string;
//   type: "radio" | "text" | "multi";
//   question: string;
//   options?: string[];
// }

// // ---------------------------
// // Questions Array (UNCHANGED)
// // ---------------------------
// const questions: Question[] = [
//   { id: "q1", type: "radio", question: "How old are you?", options: ["Under 13", "13-17", "18-22", "23-30", "30+"] },
//   { id: "q2", type: "radio", question: "What level of education are you in?", options: ["Secondary school(JSS/SSS)", "University/Polythecnic", "Vocational or Professional training", "Just preparing for exams (e.g. JAMB, WAEC)", "Other: -----"] },
//   { id: "q3", type: "radio", question: "Have you used a study assistant app before?", options: ["Yes", "No"] },
//   { id: "q4", type: "multi", question: "How did you hear about SIMBI?", options: ["Social Media", "A friend or classmate", "My school or a teacher", "Blog or article", "Google search", "Other:------"]},
//   { id: "q5", type: "multi", question: "What do you hope to achieve with SIMBI?", options: ["Just exploring for now", "Improve my grades", "Build consistent study habits", "Stay motivated", "Feel less stressed about academics", "Other:------"]},
// ];

// const QUESTIONS_PER_PAGE = 2;


// export default function PreAssessment() {
//   // ---------------------------
//   // Pagination State
//   // ---------------------------
//   const [page, setPage] = useState(0);

//   const start = page * QUESTIONS_PER_PAGE;
//   const end = start + QUESTIONS_PER_PAGE;
//   const pageQuestions = questions.slice(start, end);

//   // ---------------------------
//   // Answers State
//   // ---------------------------
//   const [answers, setAnswers] = useState<Record<string, any>>({});

//   // 🔵 ADDED — works for radio & text
//   const handleAnswerChange = (id: string, value: any) => {
//     setAnswers(prev => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   // Pagination handlers
//   const handleNext = () => setPage(p => p + 1);
//   const handlePrev = () => setPage(p => p - 1);

//   const isLastPage = end >= questions.length;

//   const handleSubmit = () => {
//     console.log("Final answers:", answers);
//     alert("Check console for submitted answers!");
//   };

//   return (
//     <div>
//       {/* NAVBAR */}
//       <section>
//         <Navbar />
//       </section>

//       <main className="flex items-center justify-center flex-col py-10">

//         {/* ---------------------------
//            🔵 PROGRESS BAR (placeholder)
//         --------------------------- */}
//         <div className="w-[70%] mb-6 relative">
//   {/* Background bar */}
//   <div className="w-full h-3 bg-gray-200 rounded-full">
//     {/* Filled portion */}
//     <div
//       className="h-full bg-purple-500 rounded-full relative"
//       style={{
//         width: `${((page + 1) / Math.ceil(questions.length / QUESTIONS_PER_PAGE)) * 100}%`,
//       }}
//     >
//       {/* Icon at the end */}
//       <div
//         className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow"
//       >
//         {/* You can use any icon, here using an emoji for example */}
//         🎯
//       </div>
//     </div>
//   </div>
//   <p className="text-sm text-gray-600 mt-1">
//     Page {page + 1} of {Math.ceil(questions.length / QUESTIONS_PER_PAGE)}
//   </p>
// </div>

//         {/* ---------------------------
//             🔵 TOP SECTION (YOUR DESIGN)
//         --------------------------- */}
//         <section className="flex w-[70%] flex-col md:flex-row lg:flex-row bg-[red]">

//           {/* Left Box */}
//           <div className="bg-[#7A5FFF] flex justify-center items-center rounded-lg w-full md:w-[35%] h-[3rem]">
//             <h2 className="text-l md:text-2xl lg:text-3xl text-white font-semibold lg:font-medium text-center">
//               Pre Assessment Test
//             </h2>
//           </div>

//           {/* Right Box (Description) */}
//           <div className="text-md md:text-lg lg:text-2xl bg-[green] rounded-lg flex items-center px-4">
//             <p className="hidden md:inline">
//               This test takes not longer than 5-7 minutes
//             </p>
//           </div>
//         </section>

//         {/* ---------------------------
//             🔵 QUESTIONNAIRE SECTION
//         --------------------------- */}
//         <div className="w-[70%] mt-10 bg-white p-6 rounded-lg shadow">
//           {pageQuestions.map(q => (
//             <div key={q.id} className="mb-6">

//               <p className="font-semibold mb-3">{q.question}</p>

//               {/* --- RADIO --- */}
//               {q.type === "radio" &&
//                 q.options?.map(opt => (
//                   <label key={opt} className="block mb-1">
//                     <input
//                       type="radio"
//                       name={q.id}
//                       checked={answers[q.id] === opt}
//                       onChange={() => handleAnswerChange(q.id, opt)}
//                       className="mr-2"
//                     />
//                     {opt}
//                   </label>
//                 ))}

//               {/* --- TEXT --- */}
//               {q.type === "text" && (
//                 <input
//                   type="text"
//                   className="border p-2 rounded w-full"
//                   value={answers[q.id] || ""}
//                   onChange={(e) => handleAnswerChange(q.id, e.target.value)}
//                 />
//               )}

//               {/* --- MULTI SELECT --- */}
//               {q.type === "multi" &&
//   q.options?.map(opt => (
//     <label key={opt} className="block">
//       <input
//         type="checkbox"
//         checked={(answers[q.id] ?? []).includes(opt)}
//         onChange={(e) => {
//           const checked = e.target.checked;

//           setAnswers(prev => {
//             const prevArray = prev[q.id] ?? [];

//             return {
//               ...prev,
//               [q.id]: checked
//                 ? [...prevArray, opt]
//                 : prevArray.filter((x: string) => x !== opt)
//             };
//           });
//         }}
//       />
//       {opt}
//     </label>
//   ))}
//             </div>
//           ))}

//           {/* ---------------------------
//               🔵 PAGINATION BUTTONS
//           --------------------------- */}
//           <div className="flex justify-between mt-6">
//             <button
//               disabled={page === 0}
//               onClick={handlePrev}
//               className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
//             >
//               Previous
//             </button>

//             {isLastPage ? (
//               <button
//                 onClick={handleSubmit}
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//               >
//                 Submit
//               </button>
//             ) : (
//               <button
//                 onClick={handleNext}
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//               >
//                 Next
//               </button>
//             )}
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }