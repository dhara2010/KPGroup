"use client";

import React, { useState, useMemo } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Search, 
  ChevronRight, 
  X, 
  Sparkles, 
  Send, 
  Award, 
  Users, 
  Shield, 
  Zap, 
  CheckCircle2, 
  Paperclip 
} from "lucide-react";

import PageHero from "@/components/PageHero";

// Mock Jobs Database
const JOBS = [
  {
    id: "tech-1",
    title: "Senior Full Stack Engineer",
    department: "Tech & Engineering",
    type: "Full-Time",
    location: "Remote / Hybrid (Mumbai)",
    experience: "5+ Years",
    salary: "Competitive",
    description: "Lead the development of next-generation infrastructure for our digital global trading platform. Work with React, Next.js, Node.js, and high-performance databases.",
    requirements: [
      "Expertise in modern JavaScript/TypeScript, React/Next.js and Node.js.",
      "Experience with scale, performance optimization, and serverless architectures.",
      "Strong understanding of database design (SQL/NoSQL) and cloud architecture (AWS/GCP)."
    ]
  },
  {
    id: "tech-2",
    title: "AI / ML Integration Specialist",
    department: "Tech & Engineering",
    type: "Full-Time",
    location: "Remote (Global)",
    experience: "3+ Years",
    salary: "Industry Standard",
    description: "Design and implement custom machine learning pipelines and LLM integrations to power smart features across our business ecosystem.",
    requirements: [
      "Practical experience integrating OpenAI, Anthropic, or open-source LLMs.",
      "Proficient in Python, LangChain, vector databases, and REST/GraphQL APIs.",
      "Strong understanding of prompt engineering and model evaluation."
    ]
  },
  {
    id: "academy-1",
    title: "Lead Technical Mentor",
    department: "Skill Academy",
    type: "Full-Time",
    location: "Surat, Gujarat",
    experience: "3+ Years",
    salary: "Competitive",
    description: "Guide and inspire the next cohort of technical graduates. Develop curriculum modules, run hands-on lab sessions, and conduct code reviews.",
    requirements: [
      "Solid background in software engineering (Full-Stack, Mobile, or Data Science).",
      "Passion for teaching, coaching, and mentoring junior talent.",
      "Excellent communication and presentation skills."
    ]
  },
  {
    id: "media-1",
    title: "Creative Video Editor & Producer",
    department: "Media & Marketing",
    type: "Full-Time",
    location: "Hybrid (Mumbai)",
    experience: "2+ Years",
    salary: "Industry Standard",
    description: "Produce highly engaging video content for our global media network. Edit reels, short docs, podcasts, and digital advertisement creatives.",
    requirements: [
      "Mastery of Premiere Pro, After Effects, DaVinci Resolve, or similar tools.",
      "Strong portfolio demonstrating motion graphics, sound design, and pacing.",
      "Ability to thrive in a fast-paced creative environment."
    ]
  },
  {
    id: "media-2",
    title: "Growth Marketing Lead",
    department: "Media & Marketing",
    type: "Full-Time",
    location: "Remote / Mumbai",
    experience: "4+ Years",
    salary: "Competitive",
    description: "Drive user acquisition and engagement campaigns across paid search, social platforms, and community channels.",
    requirements: [
      "Proven track record scaling B2B/B2C SaaS or educational platforms.",
      "Expertise in SEO/SEM, performance marketing, and digital attribution models.",
      "Data-driven mindset with advanced analytical skills."
    ]
  },
  {
    id: "ops-1",
    title: "Business Development Manager",
    department: "Business Operations",
    type: "Full-Time",
    location: "Surat / Remote",
    experience: "3+ Years",
    salary: "Base + High Commissions",
    description: "Build strategic partnerships and expand our global business community. Source new leads, pitch corporate programs, and manage partner relationships.",
    requirements: [
      "Experience in B2B sales, corporate relations, or business development.",
      "Outstanding negotiation, presentation, and contract-management skills.",
      "Self-driven attitude with a focus on hitting growth milestones."
    ]
  }
];

const DEPARTMENTS = ["All", "Tech & Engineering", "Skill Academy", "Media & Marketing", "Business Operations"];

const BENEFITS = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "High Growth Environment",
    desc: "Accelerate your career in an ecosystem expanding rapidly across multiple industries globally."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Mentorship & Culture",
    desc: "Work with top-tier professionals who value collaborative coaching and flat hierarchies."
  },
  {
    icon: <Award className="w-6 h-6 text-purple-400" />,
    title: "Skill Academy Perks",
    desc: "Free access to all our executive educational programs, certifications, and workshops."
  },
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    title: "Premium Health Cover",
    desc: "Comprehensive health insurance options for you and your direct family members."
  }
];

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null); // Job currently open in detail modal
  const [isApplying, setIsApplying] = useState(false); // Sub-state to show the form
  const [submitSuccess, setSubmitSuccess] = useState(false); // Submission visual feedback

  // Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formLinkedin, setFormLinkedin] = useState("");
  const [formNote, setFormNote] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return JOBS.filter(job => {
      const matchDept = selectedDept === "All" || job.department === selectedDept;
      const matchSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDept && matchSearch;
    });
  }, [searchQuery, selectedDept]);

  // Handle Form submit
  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    // Simulate server request
    setTimeout(() => {
      setSubmitSuccess(true);
      // Reset form after delay
      setTimeout(() => {
        setIsApplying(false);
        setSelectedJob(null);
        setSubmitSuccess(false);
        // Clear inputs
        setFormName("");
        setFormEmail("");
        setFormLinkedin("");
        setFormNote("");
        setSelectedFile(null);
      }, 3000);
    }, 1200);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white pt-0 pb-20 relative overflow-hidden">
      <PageHero 
        title="Careers" 
        description="KP Global is an immersive ecosystem of technology, education, and media. We're looking for visionary minds, continuous learners, and bold leaders to scale new horizons." 
      />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45%] h-[45%] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-16">

        {/* ── Benefits / Why KP Section ── */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-white/90">
            Why Join Our Ecosystem?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 group hover:translate-y-[-4px]"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Job Board Grid/Section ── */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Open Opportunities</h2>
              <p className="text-gray-400 text-sm">Explore our roles to find where you fit best.</p>
            </div>
            
            {/* Search Box */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all text-white"
              />
            </div>
          </div>



          {/* Jobs Listing */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map(job => (
                <div
                  key={job.id}
                  onClick={() => { setSelectedJob(job); setIsApplying(false); }}
                  className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/[0.05] text-indigo-400 border border-indigo-400/20">
                        {job.department}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-6 font-light">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.04] mt-auto">
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        {job.location}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-blue-600 flex items-center justify-center text-white transition-all">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/[0.01] border border-dashed border-white/10 rounded-2xl">
              <Briefcase className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-1">No vacancies found</h3>
              <p className="text-sm text-gray-400">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Job details & application Drawer / Modal ── */}
      {selectedJob && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-end"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" }}
          onClick={() => { setSelectedJob(null); setIsApplying(false); }}
        >
          <div 
            className="w-full max-w-2xl h-full bg-[#0a0a0a] border-l border-white/10 p-8 overflow-y-auto flex flex-col justify-between"
            onClick={e => e.stopPropagation()}
            style={{ animation: "slideIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards" }}
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {selectedJob.department}
                </span>
                <button 
                  onClick={() => { setSelectedJob(null); setIsApplying(false); }}
                  className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!isApplying ? (
                <>
                  {/* Job Details Screen */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-8 pb-6 border-b border-white/[0.08]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-500" />
                      {selectedJob.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      {selectedJob.experience}
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-bold text-base mb-2">Role Overview</h4>
                      <p className="text-gray-300 text-sm leading-relaxed font-light">
                        {selectedJob.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold text-base mb-2">Key Requirements</h4>
                      <ul className="space-y-3">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2.5 text-gray-300 text-sm font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Application Form Screen */}
                  <h3 className="text-xl font-bold mb-1 text-white">Apply for {selectedJob.title}</h3>
                  <p className="text-xs text-gray-400 mb-6">Complete the details below to submit your profile.</p>

                  {submitSuccess ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center" style={{ animation: "fadeIn 0.3s" }}>
                      <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Application Received!</h4>
                      <p className="text-sm text-gray-400 max-w-sm">
                        Thank you for applying. Our talent acquisition team will review your application and reach out shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleApplySubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={e => setFormName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-400 mb-1.5">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formEmail}
                            onChange={e => setFormEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-400 mb-1.5">LinkedIn Profile</label>
                          <input
                            type="url"
                            value={formLinkedin}
                            onChange={e => setFormLinkedin(e.target.value)}
                            placeholder="https://linkedin.com/in/username"
                            className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Resume / CV *</label>
                        <div className="relative border border-dashed border-white/15 hover:border-blue-500/50 rounded-xl bg-white/[0.02] transition-colors p-6 text-center cursor-pointer">
                          <input
                            type="file"
                            required
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          <Paperclip className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                          <span className="block text-xs font-bold text-gray-300">
                            {selectedFile ? selectedFile.name : "Upload PDF or DOCX file"}
                          </span>
                          <span className="block text-[10px] text-gray-500 mt-1">Max file size 10MB</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1.5">Cover Note / Message</label>
                        <textarea
                          rows={3}
                          value={formNote}
                          onChange={e => setFormNote(e.target.value)}
                          placeholder="Tell us a little about yourself..."
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all"
                      >
                        Submit Application
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>

            {/* Footer Apply CTA */}
            {!isApplying && (
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-gray-500 block">SALARY</span>
                  <span className="text-sm font-bold text-white">{selectedJob.salary}</span>
                </div>
                <button
                  onClick={() => setIsApplying(true)}
                  className="px-6 py-3.5 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all"
                >
                  Apply For This Role
                  <ArrowIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Styled slide animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
