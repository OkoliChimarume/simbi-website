import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <main>
        <h1 className="text-5xl font-bold">Welcome to Next.js!</h1>
      </main>
    </div>
  );
}
