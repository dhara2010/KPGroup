import Hero from "@/sections/Hero";
import Ecosystem from "@/sections/Ecosystem";
import Architecture from "@/sections/Architecture";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Supporters from "@/sections/Supporters";
import Team from "@/sections/Team";
import Scroll3DSection from "@/components/Scroll3DSection";

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

