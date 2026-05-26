"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  User, MessageSquare, Calendar, ArrowLeft, Link2, Check, Share2, 
  Tag, Terminal, Key, Activity, ChevronRight, Send, Heart
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

// High-fidelity custom comment avatar matching the main cyber theme
const CustomCommentAvatar = () => (
  <div className="w-10 h-10 rounded-full bg-[#fcd34d] flex items-center justify-center border border-amber-200 shadow-sm overflow-hidden shrink-0">
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Eyes with glasses */}
      <rect x="6" y="11" width="8" height="6" rx="3" fill="#1e293b" />
      <rect x="18" y="11" width="8" height="6" rx="3" fill="#1e293b" />
      <path d="M14 14H18" stroke="#1e293b" strokeWidth="2" />
      {/* Smiling Mouth */}
      <path d="M10 20C10 20 12 23 16 23C20 23 22 20 22 20" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
      {/* Blue Headphones */}
      <path d="M6 15C6 11 9 8 16 8C23 8 26 11 26 15" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="4" y="14" width="3" height="6" rx="1.5" fill="#3b82f6" />
      <rect x="25" y="14" width="3" height="6" rx="1.5" fill="#3b82f6" />
    </svg>
  </div>
);

export default function SinglePostPage({ post }) {
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
    <div className="relative min-h-screen overflow-hidden font-sans pt-24 pb-20 bg-[#020202] text-white">
      {styleTag}

      {/* Moving background grid & neon ambient lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40 animate-grid-move"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[140px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/5 rounded-full blur-[140px] animate-pulse duration-[12000ms]" />
      </div>

      <div className="relative z-10">
        
        {/* 1. Immersive Cyber Header Section */}
        <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden mb-12 border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-[#020202]"></div>
          
          <div className="max-w-6xl w-full mx-auto px-6 relative text-center z-10 space-y-6 flex flex-col items-center">
            
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[9px] font-bold text-cyan-300 tracking-[0.2em] uppercase">
                {post.category || "INSIGHTS"} // RECORD_00{post.id}
              </span>
            </div>
            
            {/* Main Page Title */}
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight max-w-4xl text-center">
              {post.title}
            </h1>
            
            {/* Horizontal Breadcrumbs */}
            <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span className="text-gray-700">•</span>
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">Insights</Link>
              <span className="text-gray-700">•</span>
              <span className="text-cyan-400">{post.title}</span>
            </div>
          </div>
        </div>

        {/* 2. Split Column Grid Section */}
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: Main Post Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Big Featured Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] w-full border border-white/10 bg-black/40 shadow-[0_0_50px_rgba(0,0,0,0.8)] group/cover">
                <img 
                  src={post.image || "/blog_3d_fluid.png"} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover/cover:scale-103" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 w-2.5 h-2.5 border-t-2 border-l-2 border-white/30" />
                <div className="absolute top-4 right-4 w-2.5 h-2.5 border-t-2 border-r-2 border-white/30" />
                <div className="absolute bottom-4 left-4 w-2.5 h-2.5 border-b-2 border-l-2 border-white/30" />
                <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border-b-2 border-r-2 border-white/30" />
              </div>

              {/* Main Body Content Sections */}
              <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed font-sans space-y-6 text-sm md:text-base">
                {post.contentSections ? (
                  post.contentSections.map((sec, i) => {
                    if (sec.type === "paragraph") {
                      return (
                        <p 
                          key={i} 
                          className={i === 0 ? "text-base md:text-lg font-medium text-white leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-cyan-400 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]" : "font-light"}
                        >
                          {sec.text}
                        </p>
                      );
                    }
                    if (sec.type === "heading") {
                      return (
                        <h2 
                          key={i} 
                          className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-10 mb-4 flex items-center gap-3 border-l-4 border-cyan-400 pl-4 font-sans"
                        >
                          {sec.text}
                        </h2>
                      );
                    }
                    if (sec.type === "list") {
                      return (
                        <ul key={i} className="space-y-4 pl-1 my-6 list-none">
                          {sec.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300 group/list transition-transform duration-300 hover:translate-x-1">
                              <Key className="w-4 h-4 text-cyan-400 shrink-0 mt-1 transition-transform group-hover/list:rotate-45" />
                              <span className="font-light">{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (sec.type === "quote") {
                      return (
                        <div 
                          key={i} 
                          className="border-l-4 border-l-orange-500 border border-white/5 bg-orange-950/15 p-8 rounded-2xl my-8 relative overflow-hidden group/quote backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.03)]"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
                          <span className="text-orange-500/20 text-7xl font-serif font-black leading-none select-none absolute top-2 left-4">“</span>
                          <p className="text-white font-bold relative z-10 uppercase tracking-wider text-xs md:text-sm leading-relaxed pl-4">
                            {sec.text}
                          </p>
                          {sec.author && (
                            <p className="text-gray-400 font-bold text-[10px] mt-4 uppercase tracking-widest pl-4">
                              // {sec.author}
                            </p>
                          )}
                        </div>
                      );
                    }
                    if (sec.type === "gallery") {
                      return (
                        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                          {sec.images.map((imgSrc, idx) => (
                            <div key={idx} className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/5 bg-black/40 shadow-lg group/gal">
                              <img 
                                src={imgSrc} 
                                alt={`gallery-img-${idx}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/gal:scale-103" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/gal:opacity-100 transition-opacity duration-300" />
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })
                ) : (
                  <p className="text-gray-300 font-light leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>
                )}
              </article>

              {/* Article Footer Stats Panel */}
              <div className="flex items-center gap-6 border-y border-white/5 py-4 my-8">
                <button 
                  onClick={toggleLike}
                  className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isLiked ? "text-pink-500 scale-105" : "text-gray-400 hover:text-pink-400"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                  Like ({likes})
                </button>
                <span className="text-gray-700">|</span>
                <span className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  Comments ({comments.length})
                </span>
              </div>

              {/* Dynamic Comments Section */}
              <div className="space-y-6 pt-6">
                <h3 className="text-xs font-black tracking-[0.2em] text-white uppercase border-b border-white/5 pb-3 flex items-center gap-2 font-mono">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  ACCESS_LOG // {comments.length} RECORDS_FOUND
                </h3>

                {comments.length > 0 ? (
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <div 
                        key={comment.id} 
                        className="p-5 bg-black/50 border border-white/5 rounded-2xl font-mono text-xs text-gray-400 relative overflow-hidden group hover:border-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.05)] transition-all duration-300"
                      >
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-400 font-black uppercase tracking-wider text-[10px]">
                              stdout // {comment.author.toLowerCase().replace(/\s+/g, "_")}
                            </span>
                          </div>
                          <span className="text-[9px] text-gray-500">[{comment.date}]</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="text-gray-500 flex gap-2">
                            <span className="text-cyan-400 font-bold">$</span>
                            <span className="text-gray-400">cat feedback_payload.json</span>
                          </div>
                          <div className="pl-4 border-l border-white/5 py-1 text-gray-300 font-sans text-xs md:text-sm whitespace-pre-line leading-relaxed">
                            {comment.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center bg-white/[0.01] border border-white/5 rounded-2xl">
                    <p className="text-xs text-gray-500 font-mono">NO STAKEHOLDER FEEDBACK REGISTERED ON THIS NODE</p>
                  </div>
                )}
              </div>

              {/* Comment Submission Form Console */}
              <div className="bg-[#050505]/60 border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl relative">
                <h3 className="text-sm font-black text-white uppercase tracking-wider border-b border-white/5 pb-3 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  REGISTER FEEDBACK
                </h3>
                
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest font-mono block">FIRST_NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Oliver Roston"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest font-mono block">EMAIL_ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="info@kpglobalbusiness.co.uk"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest font-mono block">MESSAGE_BODY</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Comment content..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
                  >
                    Transmit Feedback
                    <Send className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Sidebar Actions (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Back to Blog Action Widget */}
              <div className="bg-[#050505]/40 border border-white/5 rounded-3xl p-5 backdrop-blur-2xl">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2.5 text-xs font-black text-gray-400 hover:text-cyan-400 transition-all duration-300 uppercase tracking-wider group"
                >
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:-translate-x-1">
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </div>
                  Back to Insights
                </Link>
              </div>

              {/* Author Bio Widget */}
              <div className="bg-[#050505]/60 border border-white/5 rounded-3xl p-6 backdrop-blur-2xl relative overflow-hidden group/author">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-[10px] font-black uppercase tracking-wider text-white border-b border-white/5 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  AUTHOR PROFILE
                </h3>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/15 bg-white/5 shrink-0 shadow-md">
                    <img 
                      src="/team/Parth-Kanjariya-Founder-CEO.webp" 
                      alt="Parth Kanjariya" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/author:scale-105" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-tight leading-none mb-1">
                      {post.author}
                    </h4>
                    <span className="text-[9px] font-mono text-cyan-400 uppercase font-black">CEO & FOUNDER</span>
                  </div>
                </div>
                
                <p className="text-gray-400 font-light text-xs leading-relaxed">
                  Leading next-gen technical architecture, SEO expansion, and corporate software ecosystems at KP Global Group.
                </p>
              </div>

              {/* Share & Actions Widget */}
              <div className="bg-[#050505]/60 border border-white/5 rounded-3xl p-6 backdrop-blur-2xl relative">
                <h3 className="text-[10px] font-black uppercase tracking-wider text-white border-b border-white/5 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  TRANSMISSION HUB
                </h3>
                
                <div className="space-y-4">
                  {/* Clipboard Copier */}
                  <button 
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-between p-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-bold text-gray-300 hover:text-white transition-all cursor-pointer group"
                  >
                    <span className="flex items-center gap-2">
                      <Link2 className="w-4 h-4 text-cyan-400" />
                      Copy Share Link
                    </span>
                    {copied ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-black">
                        <Check className="w-3 h-3" />
                        COPIED
                      </span>
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </button>

                  {/* Visual Social Share Links */}
                  <div className="grid grid-cols-3 gap-3">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center justify-center p-3 bg-white/5 hover:bg-blue-600/10 border border-white/10 hover:border-blue-500/30 rounded-2xl text-[9px] font-black text-gray-400 hover:text-blue-400 uppercase tracking-wider transition-all duration-300 gap-1.5"
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
                      className="flex flex-col items-center justify-center p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl text-[9px] font-black text-gray-400 hover:text-white uppercase tracking-wider transition-all duration-300 gap-1.5"
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
                      className="flex flex-col items-center justify-center p-3 bg-white/5 hover:bg-pink-600/10 border border-white/10 hover:border-pink-500/30 rounded-2xl text-[9px] font-black text-gray-400 hover:text-pink-400 uppercase tracking-wider transition-all duration-300 gap-1.5"
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
              <div className="bg-[#050505]/60 border border-white/5 rounded-3xl p-6 backdrop-blur-2xl">
                <h3 className="text-[10px] font-black uppercase tracking-wider text-white border-b border-white/5 pb-3 mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  METADATA INDEX
                </h3>
                
                <div className="space-y-4 font-mono text-[10px] text-gray-400">
                  <div className="flex items-center justify-between border-b border-white/[0.02] pb-2">
                    <span className="flex items-center gap-1.5 uppercase"><Tag className="w-3.5 h-3.5 text-cyan-400" /> Category</span>
                    <span className="text-white font-bold">{post.category || "Uncategorized"}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/[0.02] pb-2">
                    <span className="flex items-center gap-1.5 uppercase"><Calendar className="w-3.5 h-3.5 text-blue-400" /> Published</span>
                    <span className="text-white font-bold">{formatShortDate(post.date)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/[0.02] pb-2">
                    <span className="flex items-center gap-1.5 uppercase"><User className="w-3.5 h-3.5 text-purple-400" /> Access Node</span>
                    <span className="text-white font-bold">{post.author}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 uppercase"><Activity className="w-3.5 h-3.5 text-pink-400" /> Status</span>
                    <span className="text-emerald-400 font-bold">ONLINE // INDEXED</span>
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
