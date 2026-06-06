import { Achievements } from "@/components/Achievements";
import { Bio } from "@/components/Bio";
import { Builds } from "@/components/Builds";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { GRC } from "@/components/GRC";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Recommendations } from "@/components/Recommendations";
import { Skills } from "@/components/Skills";
import { TargetRoles } from "@/components/TargetRoles";
import { Timeline } from "@/components/Timeline";
import { WhatISolve } from "@/components/WhatISolve";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bio />
        <Achievements />
        <WhatISolve />
        <Experience />
        <Timeline />
        <Builds />
        <GRC />
        <Recommendations />
        <Skills />
        <TargetRoles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
