"use client";

import React, { useEffect, useState } from "react";
import { Users } from "lucide-react";
import Image from "next/image";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("/api/teams");
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
    <section className="relative py-32 bg-[#020202] overflow-hidden font-sans border-t border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col text-center items-center">
          <ScrollReveal variant="3d-unfold">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-200 tracking-wider uppercase">
                Leadership
              </span>
            </div>
          </ScrollReveal>

          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter font-heading">
            <TextReveal text="CORE ARCHITECTS." delay={0.2} />
          </h2>

          <ScrollReveal variant="3d-unfold" delay={0.4}>
            <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base">
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
                <div className="group relative rounded-[2rem] overflow-hidden bg-[#080808] border border-white/10 transition-all duration-700 h-full hover:border-white/30">
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#111]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover object-top transition-all duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1c1c1c]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                      {member.name}
                    </h3>

                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {member.role}
                    </p>

                    <div
                      className={`w-0 h-[2px] mt-4 bg-gradient-to-r ${member.color || "from-blue-600 to-cyan-400"
                        } group-hover:w-full transition-all duration-700 ease-out`}
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