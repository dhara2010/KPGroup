

import React, { useState } from "react";
import { INITIAL_POSTS } from "@/utils/blogData";
import { Link, useParams } from "react-router-dom";
import PageHero from "@/components/PageHero";

import { 
  User, MessageSquare, Calendar, ArrowLeft, Link2, Check, Share2, 
  Tag, Terminal, Key, Activity, ChevronRight, Send, Heart, Sparkles, Shield
} from "lucide-react";

// Formats long date (e.g. "December 19, 2024" to "Dec 19, 2024")
const formatShortDate = (dateStr) => {
  if (!dateStr) return "";
  const parts = dateStr.split(" ");
  if (parts.length >= 3) {
    const month = parts[0];
    const shortMonth = month.substring(0, 3);
    return `${shortMonth} ${parts[1]} ${parts[2]}`;
  }
  return dateStr;
};

export default function SinglePostPage({ params }) {
  const routerParams = useParams();
  const slug = routerParams.slug || params?.slug;
  
  // Find the post by slug
  const post = INITIAL_POSTS.find((p) => p.slug === slug || p.slug.replace(/-a-/g, "-") === slug);
  
  // If no post is found, return 404 block
  if (!post) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center pt-24 pb-20">
        <div className="text-center space-y-4 max-w-md px-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
            <Terminal className="w-8 h-8" />
          </div>
          <h1 className="text-6xl font-black text-slate-900 font-heading">404</h1>
          <p className="text-slate-500 uppercase tracking-widest text-xs font-extrabold">Article Not Found</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors shadow-md mt-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  // Comments state starting with the post's preset comments
  const [comments, setComments] = useState(post.comments || []);
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(12);
  const [isLiked, setIsLiked] = useState(false);

  // Handle new comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    const newComment = {
      id: Date.now(),
      author: form.name,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      content: form.message
    };

    setComments([...comments, newComment]);
    setForm({ name: "", email: "", website: "", message: "" });
  };

  // Copy article link to clipboard
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative bg-white text-slate-900 min-h-screen overflow-hidden font-sans pt-0 pb-20">
      
      {/* Light Laser Grid Background & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
        <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10">
        
        {/* 1. Standard PageHero Banner (Matching rest of website) */}
        <PageHero 
          title={post.title} 
          description={post.excerpt || `Published on ${formatShortDate(post.date)} by ${post.author}`}
          parentPage="Insights"
          parentHref="/blog"
        />

        {/* 2. Main Content Grid Section */}
        <div className="max-w-6xl mx-auto px-6 mt-12 md:mt-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: Main Post Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Big Featured Image Frame */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] w-full border border-slate-200/80 bg-white p-2 shadow-2xl shadow-purple-500/5 group/cover">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src={post.image || "/blog_3d_fluid.webp"} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/cover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
                    {post.category || "INSIGHTS"}
                  </div>
                </div>
              </div>

              {/* Main Body Content Sections */}
              <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-sans space-y-6 text-sm md:text-base">
                {post.contentSections ? (
                  post.contentSections.map((sec, i) => {
                    if (sec.type === "paragraph") {
                      return (
                        <p 
                          key={i} 
                          className={i === 0 ? "text-base md:text-lg font-medium text-slate-900 leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]" : "font-normal text-slate-700"}
                        >
                          {sec.text}
                        </p>
                      );
                    }
                    if (sec.type === "heading") {
                      return (
                        <h2 
                          key={i} 
                          className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mt-10 mb-4 flex items-center gap-3 border-l-4 border-primary pl-4 font-heading"
                        >
                          {sec.text}
                        </h2>
                      );
                    }
                    if (sec.type === "list") {
                      return (
                        <ul key={i} className="space-y-3.5 pl-1 my-6 list-none">
                          {sec.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700 group/list transition-transform duration-300 hover:translate-x-1">
                              <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                <Check className="w-3 h-3" />
                              </div>
                              <span className="font-semibold text-slate-800">{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (sec.type === "quote") {
                      return (
                        <div 
                          key={i} 
                          className="border-l-4 border-primary border border-purple-100 bg-purple-50/60 p-8 rounded-2xl my-8 relative overflow-hidden group/quote shadow-lg shadow-purple-500/5"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                          <span className="text-primary/20 text-7xl font-serif font-black leading-none select-none absolute top-2 left-4">“</span>
                          <p className="text-slate-900 font-extrabold relative z-10 uppercase tracking-wider text-xs md:text-sm leading-relaxed pl-4">
                            {sec.text}
                          </p>
                          {sec.author && (
                            <p className="text-primary font-bold text-[10px] mt-4 uppercase tracking-widest pl-4">
                              — {sec.author}
                            </p>
                          )}
                        </div>
                      );
                    }
                    if (sec.type === "gallery") {
                      return (
                        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                          {sec.images.map((imgSrc, idx) => (
                            <div key={idx} className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200/80 bg-white p-1.5 shadow-md group/gal">
                              <div className="w-full h-full rounded-xl overflow-hidden">
                                <img 
                                  src={imgSrc} 
                                  alt={`gallery-img-${idx}`} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover/gal:scale-105" 
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })
                ) : (
                  <p className="text-slate-700 font-normal leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>
                )}
              </article>

              {/* Article Footer Stats Panel */}
              <div className="flex items-center gap-6 border-y border-slate-200/80 py-4 my-8">
                <button 
                  onClick={toggleLike}
                  className={`flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                    isLiked ? "text-primary scale-105" : "text-slate-600 hover:text-primary"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current text-primary" : ""}`} />
                  Like ({likes})
                </button>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-2 text-xs font-extrabold text-slate-600 uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Comments ({comments.length})
                </span>
              </div>

              {/* Comments Display List */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xs font-black tracking-[0.2em] text-slate-900 uppercase border-b border-slate-200/80 pb-3 flex items-center gap-2 font-mono">
                  <Terminal className="w-4 h-4 text-primary" />
                  FEEDBACK_LOG // {comments.length} RECORDS_FOUND
                </h3>

                {comments.length > 0 ? (
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div 
                        key={comment.id} 
                        className="p-6 bg-white border border-slate-200/80 rounded-2xl text-xs text-slate-700 relative overflow-hidden shadow-xl shadow-purple-500/5 hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-slate-900 font-extrabold uppercase tracking-wider text-xs">
                              {comment.author}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">[{comment.date}]</span>
                        </div>
                        <div className="pl-4 border-l-2 border-primary/30 py-1 text-slate-700 font-sans text-xs md:text-sm whitespace-pre-line leading-relaxed font-medium">
                          {comment.content}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center bg-white border border-slate-200/80 rounded-2xl shadow-sm">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">No comments yet. Be the first to share your thoughts!</p>
                  </div>
                )}
              </div>

              {/* Comment Submission Form Console */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-2xl shadow-purple-500/5 relative overflow-hidden">
                <div className="space-y-2 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Join the Discussion
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight font-heading">
                    Register Feedback
                  </h3>
                </div>
                
                <form onSubmit={handleCommentSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">Full Name <span className="text-primary">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Oliver Roston"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">Email Address <span className="text-primary">*</span></label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">Comment Message <span className="text-primary">*</span></label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your thoughts or questions..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_20px_rgba(108,59,255,0.15)] transition-all resize-none duration-300 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full font-black text-white bg-gradient-to-r from-primary via-purple-600 to-accent hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 active:scale-[0.985] hover:scale-[1.01] shadow-md cursor-pointer group"
                  >
                    Submit Feedback
                    <Send className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar Actions (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Back to Blog Action Widget */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xl shadow-purple-500/5">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2.5 text-xs font-black text-slate-700 hover:text-primary transition-all duration-300 uppercase tracking-wider group"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:-translate-x-1">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                  Back to Insights
                </Link>
              </div>

              {/* Author Bio Widget */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-purple-500/5 relative overflow-hidden group/author">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  AUTHOR PROFILE
                </h3>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50 shrink-0 shadow-md">
                    <img 
                      src="/team/Parth-Kanjariya-Founder-CEO.webp" 
                      alt="Parth Kanjariya" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/author:scale-105" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-none mb-1 font-heading">
                      {post.author}
                    </h4>
                    <span className="text-[10px] font-mono text-primary uppercase font-extrabold">CEO & FOUNDER</span>
                  </div>
                </div>
                
                <p className="text-slate-600 font-medium text-xs leading-relaxed">
                  Leading next-gen technical architecture, SEO expansion, and corporate software ecosystems at KP Global Group.
                </p>
              </div>

              {/* Share & Actions Widget */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-purple-500/5 relative">
                <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  SHARE ARTICLE
                </h3>
                
                <div className="space-y-4">
                  {/* Clipboard Copier */}
                  <button 
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-2xl text-xs font-bold text-slate-700 hover:text-slate-900 transition-all cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <Link2 className="w-4 h-4 text-primary" />
                      Copy Share Link
                    </span>
                    {copied ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-primary font-black">
                        <Check className="w-3.5 h-3.5" />
                        COPIED
                      </span>
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </button>

                  {/* Social Buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-center p-3 bg-slate-50 hover:bg-primary/10 border border-slate-200 hover:border-primary/40 rounded-2xl text-[9px] font-black text-slate-700 hover:text-primary uppercase tracking-wider transition-all duration-300 gap-1.5"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                      </svg>
                      Facebook
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-center p-3 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 rounded-2xl text-[9px] font-black text-slate-700 uppercase tracking-wider transition-all duration-300 gap-1.5"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      X / Twitter
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-center p-3 bg-slate-50 hover:bg-primary/10 border border-slate-200 hover:border-primary/40 rounded-2xl text-[9px] font-black text-slate-700 hover:text-primary uppercase tracking-wider transition-all duration-300 gap-1.5"
                    >
                      <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Taxonomy metadata list */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-purple-500/5">
                <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  METADATA INDEX
                </h3>
                
                <div className="space-y-4 font-mono text-[11px] text-slate-600">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <span className="flex items-center gap-1.5 uppercase font-bold text-slate-400"><Tag className="w-3.5 h-3.5 text-primary" /> Category</span>
                    <span className="text-slate-900 font-extrabold">{post.category || "Uncategorized"}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <span className="flex items-center gap-1.5 uppercase font-bold text-slate-400"><Calendar className="w-3.5 h-3.5 text-primary" /> Published</span>
                    <span className="text-slate-900 font-extrabold">{formatShortDate(post.date)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <span className="flex items-center gap-1.5 uppercase font-bold text-slate-400"><User className="w-3.5 h-3.5 text-primary" /> Author</span>
                    <span className="text-slate-900 font-extrabold">{post.author}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 uppercase font-bold text-slate-400"><Activity className="w-3.5 h-3.5 text-primary" /> Status</span>
                    <span className="text-primary font-extrabold">PUBLISHED</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}


// Inline CSS for tech animations matching main layout styles
const styleTag = (
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes gridMove {
      0% { background-position: 0 0; }
      100% { background-position: 50px 50px; }
    }
    .animate-grid-move {
      animation: gridMove 25s linear infinite;
    }
  `}} />
);
