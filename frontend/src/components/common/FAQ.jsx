import React, { useState, useEffect } from 'react';
import { HelpCircle, Plus, Loader2 } from 'lucide-react';
import { ScrollReveal, TextReveal, ThreeDTilt } from "@/components/Animations";
import PageHero from "@/components/common/PageHero";

export default function FAQ({ isPage = false }) {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/faqs");
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const content = (
    <section className="relative py-32 bg-transparent overflow-hidden font-sans border-t border-slate-200/50">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="3d-unfold">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Popular Questions
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-heading">
                EVERYTHING YOU <br />
                <span className="text-brand-gradient">NEED TO KNOW.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="text-slate-600 font-medium text-lg max-w-md ml-auto">
                Find clear answers to the most common questions about KP Global
                Group, our services, and the opportunities we create.
              </p>
            </ScrollReveal>
          </div>
        </div>
        {/* Content Layout */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : faqs.length === 0 ? (
          <div className="text-center py-12 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-slate-200/60">
            <h3 className="text-xl font-black text-slate-900 uppercase">No FAQs found</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <ScrollReveal
                  key={idx}
                  variant="3d-unfold"
                  delay={idx * 0.05}
                >
                  <div
                    className={`group rounded-[2rem] border transition-all duration-300 overflow-hidden h-fit ${isOpen
                      ? "bg-white/95 backdrop-blur-md border-primary/40 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
                      : "bg-white/80 backdrop-blur-md border-slate-200/60 hover:border-primary/30 hover:shadow-[0_10px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 shadow-[0_4px_20px_rgb(0,0,0,0.02)]"
                      }`}
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    >
                      <span
                        className={`font-semibold tracking-tight text-base md:text-lg pr-4 transition-colors duration-300 ${isOpen
                          ? "text-primary font-bold"
                          : "text-slate-900 group-hover:text-primary/80"
                          }`}
                      >
                        {faq.question}
                      </span>

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border shrink-0 ${isOpen
                          ? "bg-primary border-primary text-white rotate-45 scale-110 shadow-md"
                          : "bg-slate-50 border-slate-200 text-slate-400 group-hover:border-primary/30 group-hover:text-primary"
                          }`}
                      >
                        <Plus className="w-4 h-4" />
                      </div>
                    </button>

                    <div
                      className={`transition-all duration-500 ease-in-out ${isOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 text-sm md:text-base text-slate-600 font-medium leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );

  if (isPage) {
    return (
      <main className="min-h-screen bg-transparent text-slate-900 pt-0 overflow-x-hidden font-sans">
        <PageHero
          title="FAQ"
          description="Find answers to common questions about KP Global Business solutions, skills academy, recruiting, and partnerships."
        />
        <div className="relative">
          {content}
        </div>
      </main>
    );
  }

  return content;
}
