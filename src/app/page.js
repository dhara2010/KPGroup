import Hero from "@/sections/Hero";
import dynamic from "next/dynamic";
import { Scroll3DSection } from "@/components/Animations";

const Ecosystem = dynamic(() => import("@/sections/Ecosystem"));
const Architecture = dynamic(() => import("@/sections/Architecture"));
const Testimonials = dynamic(() => import("@/sections/Testimonials"));
const Contact = dynamic(() => import("@/sections/Contact"));
const FAQ = dynamic(() => import("@/sections/FAQ"));
const Supporters = dynamic(() => import("@/sections/Supporters"));
const Team = dynamic(() => import("@/sections/Team"));

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#020202]">
      
        <Hero />
      
      <Scroll3DSection>
        <Ecosystem />
      </Scroll3DSection>
      
      <Scroll3DSection>
        <Architecture />
      </Scroll3DSection>
      
      <Scroll3DSection>
        <Testimonials />
      </Scroll3DSection>
      
      <Scroll3DSection>
        <Contact />
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

