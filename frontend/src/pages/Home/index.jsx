import Hero from "@/sections/Hero";
import { Scroll3DSection } from "@/components/Animations";
import WhoWeArePreview from "@/sections/WhoWeArePreview";
import Ecosystem from "@/sections/Ecosystem";
import AtAGlanceStats from "@/sections/AtAGlanceStats";
import FeaturedHighlight from "@/sections/FeaturedHighlight";
import LeadershipPreview from "@/sections/LeadershipPreview";
import FinalCTA from "@/sections/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-slate-900">

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Who We Are Preview (Gateway to /about) */}
      <Scroll3DSection>
        <WhoWeArePreview />
      </Scroll3DSection>

      {/* 3. Our Businesses / Group Areas (Gateway to Division Platforms) */}
      <Scroll3DSection>
        <Ecosystem />
      </Scroll3DSection>

      {/* 4. KP Global Group at a Glance (Animated Counter Metrics) */}
      <Scroll3DSection>
        <AtAGlanceStats />
      </Scroll3DSection>

      {/* 5. Featured Highlight (Flagship Showcase) */}
      <Scroll3DSection>
        <FeaturedHighlight />
      </Scroll3DSection>

      {/* 6. Leadership Preview (Gateway to /team) */}
      <Scroll3DSection>
        <LeadershipPreview />
      </Scroll3DSection>

      {/* 7. Final Corporate CTA (Gateway to /contact & Footer) */}
      <Scroll3DSection>
        <FinalCTA />
      </Scroll3DSection>

    </main>
  );
}
