import Hero from "@/sections/Hero";
import Ecosystem from "@/sections/Ecosystem";
import Architecture from "@/sections/Architecture";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Supporters from "@/sections/Supporters";
import Team from "@/sections/Team";
import FAQ from "@/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Ecosystem/>
      <Architecture/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <FAQ/>
      <Supporters/>

      <Team/>
    </main>
  );
}
