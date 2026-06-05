import Hero from "@/sections/Hero";
import dynamic from "next/dynamic";
import { Scroll3DSection } from "@/components/Animations";

const Ecosystem = dynamic(() => import("@/sections/Ecosystem"));
const Architecture = dynamic(() => import("@/sections/Architecture"));
const Services = dynamic(() => import("@/sections/Services"));
const Contact = dynamic(() => import("@/sections/Contact"));
const FAQ = dynamic(() => import("@/sections/FAQ"));
const Supporters = dynamic(() => import("@/sections/Supporters"));
const Team = dynamic(() => import("@/sections/Team"));
const Vision = dynamic(() => import("@/sections/Vision"));
const AboutOverview = dynamic(() => import("@/sections/AboutOverview"));

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

