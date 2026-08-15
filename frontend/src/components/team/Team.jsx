import React, { useEffect, useState } from "react";
import { Users, Loader2 } from "lucide-react";
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";
import { apiFetch } from "../../api/api";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await apiFetch("/api/teams");
        if (Array.isArray(data)) {
          setTeam(data);
        }
      } catch (error) {
        console.error("Failed to fetch team:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section className="relative py-32 bg-transparent overflow-hidden font-sans border-t border-slate-200/50">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 lg:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Leadership
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                CORE <br />
                <span className="text-brand-gradient">ARCHITECTS</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                The visionary minds engineering the next evolution of global enterprise, technology, and media infrastructure.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : team.length === 0 ? (
          <div className="text-center py-12 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-slate-200/60">
            <h3 className="text-xl font-black text-slate-900 uppercase">No team members found</h3>
          </div>
        ) : (
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
                  <div className="group relative rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/30 transition-all duration-700 h-full">
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-200">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200" />
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
        )}
      </div>
    </section>
  );
}