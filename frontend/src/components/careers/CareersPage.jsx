import React, { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Banknote, 
  Clock, 
  ChevronRight, 
  Users, 
  Award, 
  Shield, 
  Zap, 
  CheckCircle2, 
  Paperclip,
  Loader2
} from "lucide-react";

import PageHero from "@/components/common/PageHero";

const DEPARTMENTS = ["All", "Tech & Engineering", "Skill Academy", "Media & Marketing", "Business Operations"];

const BENEFITS = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "High Growth Environment",
    desc: "Accelerate your career in an ecosystem expanding rapidly across multiple industries globally."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Mentorship & Culture",
    desc: "Work with top-tier professionals who value collaborative coaching and flat hierarchies."
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
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
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null); 
  const [isApplying, setIsApplying] = useState(false); 
  const [submitSuccess, setSubmitSuccess] = useState(false); 

  // Form State
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formLinkedin, setFormLinkedin] = useState("");
  const [formNote, setFormNote] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchDept = selectedDept === "All" || job.department === selectedDept;
      const matchSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDept && matchSearch;
    });
  }, [searchQuery, selectedDept, jobs]);

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
    <div className="min-h-screen bg-transparent text-slate-900 pt-0 pb-20 relative overflow-hidden">
      <PageHero 
        title="Careers" 
        description="KP Global is an immersive ecosystem of technology, education, and media. We're looking for visionary minds, continuous learners, and bold leaders to scale new horizons." 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-16">

        {/* ── Benefits / Why KP Section ── */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-slate-800">
            Why Join Our Ecosystem?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-[2.5rem] bg-white/90 backdrop-blur-md border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/30 transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Open Opportunities</h2>
              <p className="text-slate-600 font-medium text-sm">Explore our roles to find where you fit best.</p>
            </div>
            
            {/* Search Box */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all text-slate-900 shadow-sm"
              />
            </div>
          </div>

          {/* Department Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-8 pb-2">
            {DEPARTMENTS.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  selectedDept === dept
                    ? "bg-primary text-white shadow-md"
                    : "bg-white/90 text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-primary/30"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <div 
                    key={job.id} 
                    className="group flex flex-col justify-between p-7 rounded-[2.5rem] bg-white/90 backdrop-blur-md border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/40 transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedJob(job)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">
                          {job.department}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                        {job.title}
                      </h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-slate-600 font-medium">
                          <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 font-medium">
                          <Briefcase className="w-4 h-4 mr-3 text-slate-400" />
                          {job.type} • {job.experience}
                        </div>
                        <div className="flex items-center text-sm text-slate-600 font-medium">
                          <Banknote className="w-4 h-4 mr-3 text-slate-400" />
                          {job.salary}
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-slate-100">
                      <button className="w-full py-3 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-slate-700 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-slate-200/60">
                  <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">No roles found</h3>
                  <p className="text-slate-500 font-medium">Try adjusting your filters or check back later.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Modal: Job Details & Apply Flow ── */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          {/* Click away area */}
          <div className="absolute inset-0" onClick={() => !submitSuccess && setSelectedJob(null)} />
          
          <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            
            {/* Header (Sticky) */}
            <div className="shrink-0 px-8 py-6 border-b border-slate-100 flex items-start justify-between bg-white z-10">
              <div>
                <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">
                  {selectedJob.department}
                </span>
                <h2 className="text-2xl font-bold text-slate-900">{selectedJob.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                disabled={submitSuccess}
              >
                <ChevronRight className="w-5 h-5 text-slate-400 rotate-180" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-8 py-6 bg-slate-50/50">
              {submitSuccess ? (
                <div className="py-16 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
                  <p className="text-slate-600 font-medium max-w-sm">
                    Thank you for applying to the <strong>{selectedJob.title}</strong> role. Our talent team will review your profile and reach out shortly.
                  </p>
                </div>
              ) : isApplying ? (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Submit Your Application</h3>
                  
                  <form onSubmit={handleApplySubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Full Name *</label>
                      <input 
                        required
                        type="text"
                        value={formName}
                        onChange={e=>setFormName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Email Address *</label>
                      <input 
                        required
                        type="email"
                        value={formEmail}
                        onChange={e=>setFormEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">LinkedIn URL</label>
                      <input 
                        type="url"
                        value={formLinkedin}
                        onChange={e=>setFormLinkedin(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>

                    {/* File Upload UI */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Resume / CV</label>
                      <label className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-slate-200 rounded-xl bg-white hover:bg-slate-50 hover:border-primary/50 transition-colors cursor-pointer group">
                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                        <div className="flex flex-col items-center text-center">
                          <Paperclip className="w-6 h-6 text-slate-400 group-hover:text-primary mb-2 transition-colors" />
                          {selectedFile ? (
                            <span className="text-sm font-bold text-primary">{selectedFile.name}</span>
                          ) : (
                            <>
                              <span className="text-sm font-bold text-slate-700">Click to upload or drag & drop</span>
                              <span className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX up to 5MB</span>
                            </>
                          )}
                        </div>
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Additional Notes</label>
                      <textarea 
                        rows={3}
                        value={formNote}
                        onChange={e=>setFormNote(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                        placeholder="Tell us why you're a great fit..."
                      />
                    </div>
                  </form>
                </div>
              ) : (
                <div className="animate-in fade-in duration-300">
                  {/* Job Overview tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 flex items-center text-sm font-medium text-slate-700">
                      <MapPin className="w-4 h-4 mr-2 text-primary" /> {selectedJob.location}
                    </div>
                    <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 flex items-center text-sm font-medium text-slate-700">
                      <Briefcase className="w-4 h-4 mr-2 text-primary" /> {selectedJob.type}
                    </div>
                    <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 flex items-center text-sm font-medium text-slate-700">
                      <Clock className="w-4 h-4 mr-2 text-primary" /> {selectedJob.experience}
                    </div>
                    <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 flex items-center text-sm font-medium text-slate-700">
                      <Banknote className="w-4 h-4 mr-2 text-primary" /> {selectedJob.salary}
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">About the Role</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">{selectedJob.description}</p>

                    <h3 className="text-lg font-bold text-slate-900 mb-4">Requirements</h3>
                    <ul className="space-y-3 mb-8">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-slate-600 leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions (Sticky) */}
            <div className="shrink-0 px-8 py-5 bg-white border-t border-slate-100 flex items-center justify-end gap-4">
              {!submitSuccess && (
                <>
                  <button 
                    onClick={() => {
                      if (isApplying) setIsApplying(false);
                      else setSelectedJob(null);
                    }}
                    className="px-6 py-3 rounded-full text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    {isApplying ? "Back to Details" : "Close"}
                  </button>
                  
                  {isApplying ? (
                    <button 
                      onClick={handleApplySubmit}
                      className="px-8 py-3 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-[0_4px_15px_rgba(108,59,255,0.3)] transition-all"
                    >
                      Submit Application
                    </button>
                  ) : (
                    <button 
                      onClick={() => setIsApplying(true)}
                      className="px-8 py-3 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 shadow-[0_4px_15px_rgba(108,59,255,0.3)] transition-all"
                    >
                      Apply Now
                    </button>
                  )}
                </>
              )}
              {submitSuccess && (
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="w-full px-8 py-3 rounded-full bg-slate-100 text-slate-700 text-sm font-bold hover:bg-slate-200 transition-all"
                >
                  Close Window
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
