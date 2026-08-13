import Hero from "@/sections/Hero";
import { Scroll3DSection } from "@/components/Animations";
import WhoWeArePreview from "@/sections/WhoWeArePreview";
import AtAGlanceStats from "@/sections/AtAGlanceStats";
import Ecosystem from "@/sections/Ecosystem";
import WhyKPGroup from "@/sections/WhyKPGroup";
import VisionMissionPreview from "@/sections/VisionMissionPreview";
import Supporters from "@/sections/Supporters";
import AchievementsTimeline from "@/sections/AchievementsTimeline";
import LeadershipPreview from "@/sections/LeadershipPreview";
import FAQ from "@/sections/FAQ";
import BlogPreview from "@/sections/BlogPreview";
import FinalCTA from "@/sections/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-slate-900">

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. ABOUT / WHAT WE DO */}
      <Scroll3DSection>
        <WhoWeArePreview />
      </Scroll3DSection>

      {/* 3. KEY STATS */}
      <Scroll3DSection>
        <AtAGlanceStats />
      </Scroll3DSection>

      {/* 4. OUR COMPANIES / SERVICES */}
      <Scroll3DSection>
        <Ecosystem />
      </Scroll3DSection>

      {/* 5. WHY KP GROUP */}
      <Scroll3DSection>
        <WhyKPGroup />
      </Scroll3DSection>
      
      {/* 6. VISION & MISSION */}
      <Scroll3DSection>
        <VisionMissionPreview />
      </Scroll3DSection>

      {/* 7. PARTNERS / CLIENTS */}
      <Scroll3DSection>
        <Supporters />
      </Scroll3DSection>

      {/* 8. ACHIEVEMENTS / AWARDS */}
      <Scroll3DSection>
        <AchievementsTimeline />
      </Scroll3DSection>

      {/* 9. LEADERSHIP / TEAM */}
      <Scroll3DSection>
        <LeadershipPreview />
      </Scroll3DSection>

      {/* 10. FAQ */}
      <Scroll3DSection>
        <FAQ />
      </Scroll3DSection>

      {/* 11. BLOG / INSIGHTS */}
      <Scroll3DSection>
        <BlogPreview />
      </Scroll3DSection>

      {/* 12. FINAL CTA */}
      <Scroll3DSection>
        <FinalCTA />
      </Scroll3DSection>

    </main>
  );
}
