import Hero from "@/sections/Hero";
import { Scroll3DSection } from "@/components/Animations";
import Ecosystem from "@/sections/Ecosystem";
import Architecture from "@/sections/Architecture";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Supporters from "@/sections/Supporters";
import Team from "@/sections/Team";
import Vision from "@/sections/Vision";
import AboutOverview from "@/sections/AboutOverview";

export default function Home() {
  return (
    <main className="overflow-x-hidden ">

      <Hero />

      <Scroll3DSection>
        <AboutOverview />
      </Scroll3DSection>

      <Scroll3DSection>
        <Ecosystem />
      </Scroll3DSection>

      <Scroll3DSection>
        <Architecture />
      </Scroll3DSection>

      <Scroll3DSection>
        <Services />
      </Scroll3DSection>

      <Scroll3DSection>
        <Contact />
      </Scroll3DSection>

      <Scroll3DSection>
        <Vision />
      </Scroll3DSection>

      <Scroll3DSection>
        <FAQ />
      </Scroll3DSection>

      <Scroll3DSection>
        <Supporters />
      </Scroll3DSection>

      <Scroll3DSection>
        <Team />
      </Scroll3DSection>
    </main>
  );
}

