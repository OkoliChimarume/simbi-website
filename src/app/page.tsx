"use client";

import Image from "next/image";
import Header from "./components/Header";
import Section from "./components/Section";
import Herefor from "./components/Herefor";
import Why from "./components/Why";
import RealTalk from "./components/RealTalk";

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
        <Section>
          <Why />
        </Section>
        <Section>
          <RealTalk />
        </Section>
      </main>
    </div>
  );
}
