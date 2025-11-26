"use client";

import Image from "next/image";
import Header from "./components/Header";
import Section from "./components/Section";
import Herefor from "./components/Herefor";

export default function Home() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <main>
        <Section>
          <Herefor />
        </Section>
      </main>
    </div>
  );
}
