

import React, { useEffect, useState } from "react";
import { Users } from "lucide-react";

import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/teams");
        const data = await res.json();
        if (Array.isArray(data)) {
          setTeam(data);
        } else {
          console.error("Failed to fetch team: response is not an array", data);
        }
      } catch (error) {
        console.error("Failed to fetch team:", error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-b from-bg via-primary/[0.02] to-bg overflow-hidden font-sans border-t border-border">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen dark:mix-blend-normal">
        <div className="absolute top-1/4 left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[150px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-bg-soft border border-border mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wider uppercase">
                Leadership
              </span>
            </div>
          </ScrollReveal>

          <h2 className="text-4xl md:text-7xl font-black text-text mb-6 uppercase tracking-tighter font-heading">
            <TextReveal text="CORE ARCHITECTS." delay={0.2} />
          </h2>

          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <p className="text-text-secondary max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
              The visionary minds engineering the next evolution of global enterprise, technology, and media infrastructure.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {Array.isArray(team) && team.map((member, idx) => (
            <ScrollReveal
              key={member._id}
              variant="3d-unfold"
              delay={idx * 0.08}
              className="h-full"
            >
              <ThreeDTilt
                tiltMax={15}
                scale={1.03}
                glareOpacity={0.08}
                className="h-full cursor-pointer rounded-[2rem]"
              >
                <div className="group relative rounded-[2rem] overflow-hidden bg-[#080808] border border-border hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(108,59,255,0.2)] transition-all duration-700 h-full">
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#111]">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1c1c1c]" />
                    )}
                    {/* Dark gradient overlay to ensure white text is always readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 transition-opacity duration-700 group-hover:opacity-80" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 z-20 flex flex-col justify-end">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-1 drop-shadow-md">
                      {member.name}
                    </h3>

                    <p className="text-[10px] md:text-xs font-bold text-white/70 uppercase tracking-widest drop-shadow-md">
                      {member.role}
                    </p>

                    <div
                      className={`w-0 h-[3px] mt-5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 ease-out rounded-full`}
                    ></div>
                  </div>
                </div>
              </ThreeDTilt>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}