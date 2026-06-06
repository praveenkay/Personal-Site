import { Achievements } from "@/components/Achievements";
import { Bio } from "@/components/Bio";
import { Builds } from "@/components/Builds";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Bio />
        <Timeline />
        <Builds />
        <Achievements />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
