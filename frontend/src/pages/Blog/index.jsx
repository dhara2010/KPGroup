

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Search, User, MessageSquare, Calendar, ArrowRight, Tag, X, Clock, Terminal, Activity, ChevronRight, ArrowLeft, Send, Share2
} from "lucide-react";
import { ScrollReveal } from "@/components/Animations";
import PageHero from "@/components/PageHero";

import { RECENT_COMMENTS } from "@/utils/blogData";

export default function BlogPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [activePostId, setActivePostId] = useState(null);

  // Dynamically compute unique categories and archive months directly from posts database
  const categoriesList = Array.from(new Set(posts.map((post) => post.category)));
  const archivesList = Array.from(new Set(posts.map((post) => post.month))).sort((a, b) => {
    const parseMonth = (mStr) => {
      const [m, y] = mStr.split(" ");
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      return new Date(parseInt(y), months.indexOf(m), 1);
    };
    return parseMonth(b) - parseMonth(a);
  });


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Error fetching blogs: response is not an array", data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);


  // Filter posts based on active search, category, and month selection
  const filteredPosts = (Array.isArray(posts) ? posts : []).filter((post) => {
    const matchesSearch = activeSearch
      ? post.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
      post.content.toLowerCase().includes(activeSearch.toLowerCase())
      : true;
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchesMonth = selectedMonth ? post.month === selectedMonth : true;
    return matchesSearch && matchesCategory && matchesMonth;
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveSearch(searchQuery);
  };

  const handleRecentPostClick = (postId) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      navigate("/" + post.slug);
    }
  };

  const handlePostClick = (post) => {
    navigate("/" + post.slug);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveSearch("");
    setSelectedCategory(null);
    setSelectedMonth(null);
  };

  const isFiltering = !!(activeSearch || selectedCategory || selectedMonth);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans pt-0 pb-20 bg-[#020202] text-[#111827]">
      {styleTag}

      {/* Moving background grid & neon ambient lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40 animate-grid-move"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#064B63]/10 rounded-full blur-[140px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#064B63]/10 rounded-full blur-[140px] animate-pulse duration-[12000ms]" />
      </div>

      <div className="relative z-10">
        {/* Immersive Cyber Header Section */}
        <PageHero
          title="Insights Blog"
          description="System journals, software reports, and development notes from our engineering and strategic leads."
        />

        {/* Main Content Layout Grid */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Bento Grid Feed */}
            <div className="lg:col-span-8 space-y-8">

              {/* Active Filter Bar */}
              {isFiltering && (
                <div className="flex flex-wrap items-center gap-3 p-4 bg-white/[0.02] border border-[#E2E8F0] rounded-2xl mb-6 backdrop-blur-xl">
                  <span className="text-xs text-[#475569] font-semibold tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#064B63] animate-pulse" />
                    FILTERS ACTIVE:
                  </span>
                  {activeSearch && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064B63]/10 border border-[#064B63]/20 text-[10px] font-bold text-[#064B63] uppercase tracking-wider">
                      Search: "{activeSearch}"
                      <button onClick={() => { setActiveSearch(""); setSearchQuery(""); }} className="hover:text-[#111827] transition-colors">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064B63]/10 border border-[#064B63]/20 text-[10px] font-bold text-[#064B63] uppercase tracking-wider">
                      Category: {selectedCategory}
                      <button onClick={() => setSelectedCategory(null)} className="hover:text-[#111827] transition-colors">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedMonth && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064B63]/10 border border-[#064B63]/20 text-[10px] font-bold text-[#064B63] uppercase tracking-wider">
                      Archive: {selectedMonth}
                      <button onClick={() => setSelectedMonth(null)} className="hover:text-[#111827] transition-colors">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-xs text-[#475569] hover:text-[#111827] underline ml-auto transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              )}

              {filteredPosts.length > 0 ? (
                <div className="space-y-10">
                  {(() => {
                    // Group filtered posts by month
                    const groupedPosts = {};
                    filteredPosts.forEach((post) => {
                      if (!groupedPosts[post.month]) {
                        groupedPosts[post.month] = [];
                      }
                      groupedPosts[post.month].push(post);
                    });

                    // Sort months reverse-chronologically
                    const sortedMonths = Object.keys(groupedPosts).sort((a, b) => {
                      const parseMonth = (mStr) => {
                        const [m, y] = mStr.split(" ");
                        const months = [
                          "January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"
                        ];
                        return new Date(parseInt(y), months.indexOf(m), 1);
                      };
                      return parseMonth(b) - parseMonth(a);
                    });

                    return sortedMonths.map((monthName) => {
                      const postsInMonth = groupedPosts[monthName];

                      // Highlight layout: render post ID 2 horizontal featured split if inside December 2024 and filters are inactive
                      const hasFeatured = !isFiltering && monthName === "December 2024" && postsInMonth.some(p => p.id === 2);
                      const monthFeaturedPost = hasFeatured ? postsInMonth.find(p => p.id === 2) : null;
                      const monthGridPosts = hasFeatured ? postsInMonth.filter(p => p.id !== 2) : postsInMonth;

                      const isSelectedMonthBox = selectedMonth === monthName;

                      return (
                        <div
                          key={monthName}
                          className={`space-y-6 border rounded-[2rem] p-6 md:p-8 backdrop-blur-xl relative group transition-all duration-500 ${isSelectedMonthBox
                              ? "border-[#064B63]/20 bg-cyan-950/5 shadow-[0_0_50px_rgba(6,182,212,0.08)]"
                              : "border-[#E2E8F0] bg-[#F7F9FA] hover:border-[#0E7490]"
                            }`}
                        >
                          {/* Corner decorations */}
                          <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-colors ${isSelectedMonthBox ? "border-cyan-400" : "border-[#E2E8F0] group-hover:border-[#0E7490]"}`} />
                          <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-colors ${isSelectedMonthBox ? "border-cyan-400" : "border-[#E2E8F0] group-hover:border-[#0E7490]"}`} />

                          {/* Tech header for the month box */}
                          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                            <div className="flex items-center gap-2.5">
                              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isSelectedMonthBox ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "bg-cyan-500"}`} />
                              <h3 className="text-xs font-black tracking-[0.2em] text-[#064B63] uppercase font-mono">
                                {monthName} INDEXED ARCHIVES
                              </h3>
                            </div>
                            <span className="text-[9px] font-mono text-[#475569] uppercase">
                              {postsInMonth.length} {postsInMonth.length === 1 ? "entry" : "entries"} detected
                            </span>
                          </div>

                          {/* Featured post (if any in this month) */}
                          {monthFeaturedPost && (
                            <ScrollReveal variant="fade-up">
                              <div
                                id={`post-${monthFeaturedPost.id}`}
                                onClick={() => handlePostClick(monthFeaturedPost)}
                                className={`bg-[#F7F9FA] border rounded-3xl p-6 md:p-8 backdrop-blur-2xl cursor-pointer transition-all duration-500 relative overflow-hidden group/featured ${activePostId === monthFeaturedPost.id
                                    ? "border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.2)] scale-[1.01]"
                                    : "border-[#E2E8F0] hover:border-[#0E7490] hover:bg-[#F7F9FA] hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]"
                                  }`}
                              >
                                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#E2E8F0] group-hover/featured:border-cyan-400 transition-colors" />
                                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#E2E8F0] group-hover/featured:border-cyan-400 transition-colors" />
                                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#E2E8F0] group-hover/featured:border-cyan-400 transition-colors" />
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#E2E8F0] group-hover/featured:border-cyan-400 transition-colors" />

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                  <div className="md:col-span-7 relative rounded-2xl overflow-hidden aspect-video max-h-[300px] border border-[#E2E8F0] bg-white/40">
                                    <img
                                      src={monthFeaturedPost.image}
                                      alt={monthFeaturedPost.title}
                                      fill
                                      sizes="(max-width: 768px) 100vw, 50vw"
                                      className="object-cover transition-transform duration-700 group-hover:scale-102"
                                    />
                                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#064B63]/10 backdrop-blur-md text-[9px] uppercase tracking-widest font-black text-[#111827] shadow-lg z-10">
                                      FEATURED INSIGHT
                                    </div>
                                  </div>

                                  <div className="md:col-span-5 space-y-4">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedCategory(monthFeaturedPost.category);
                                        setSelectedMonth(null);
                                      }}
                                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F7F9FA] border border-[#E2E8F0] text-[9px] uppercase tracking-wider font-bold text-[#475569] hover:text-[#0E7490] hover:border-[#0E7490] transition-colors"
                                    >
                                      <Tag className="w-2.5 h-2.5 text-[#0E7490]" />
                                      {monthFeaturedPost.category}
                                    </button>
                                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#111827] transition-all duration-300 group-hover/featured:text-transparent group-hover/featured:bg-clip-text group-hover/featured:bg-gradient-to-r group-hover/featured:from-blue-400 group-hover/featured:to-purple-400">
                                      {monthFeaturedPost.title}
                                    </h2>
                                    <p className="text-[#475569] font-light text-xs md:text-sm leading-relaxed line-clamp-3">
                                      {monthFeaturedPost.excerpt}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold text-[#475569] border-t border-[#E2E8F0] pt-3">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setSelectedMonth(monthFeaturedPost.month);
                                          setSelectedCategory(null);
                                        }}
                                        className="flex items-center gap-1 hover:text-[#064B63] transition-colors"
                                      >
                                        <Calendar className="w-3 h-3 text-[#064B63]" />{monthFeaturedPost.date}
                                      </button>
                                      <span>•</span>
                                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3 text-[#064B63]" />comments ({monthFeaturedPost.commentsCount})</span>
                                    </div>

                                    <button className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#0F172A] hover:bg-[#064B63] rounded-full text-[10px] font-bold uppercase tracking-wider text-[#111827] shadow-lg shadow-blue-500/25 group/btn transition-all hover:scale-105 active:scale-95">
                                      Explore More
                                      <div className="w-4 h-4 rounded-full bg-[#F7F9FA] flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:rotate-45">
                                        <ArrowRight className="w-2.5 h-2.5 text-[#111827]" />
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </ScrollReveal>
                          )}

                          {/* Grid for standard posts of this month */}
                          {monthGridPosts.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {monthGridPosts.map((post, idx) => (
                                <ScrollReveal key={post.id} variant="fade-up" delay={idx * 0.05}>
                                  {post.isTerminalStyle ? (
                                    renderTerminalPost(post, activePostId, handlePostClick)
                                  ) : (
                                    renderStandardGridPost(post, activePostId, handlePostClick, setSelectedCategory, setSelectedMonth)
                                  )}
                                </ScrollReveal>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    });
                  })()}
                </div>
              ) : (
                /* Empty state */
                <div className="text-center py-16 bg-white/[0.01] border border-[#E2E8F0] rounded-3xl backdrop-blur-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#E2E8F0]" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#E2E8F0]" />
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#E2E8F0]" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#E2E8F0]" />
                  <Clock className="w-12 h-12 text-gray-600 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-lg font-bold text-[#111827] uppercase tracking-widest font-mono">No matching system logs</h3>
                  <p className="text-[#475569] text-xs mt-1 mb-6 font-mono">Status: FILTER_EMPTY_RESULT_0x004</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2.5 bg-[#0F172A] hover:bg-[#064B63] rounded-full text-xs font-bold uppercase tracking-wider text-[#111827] transition-all duration-300"
                  >
                    Reset Filter Query
                  </button>
                </div>
              )}

            </div>

            {/* Right Column: Sidebar Widgets */}
            <div className="lg:col-span-4 space-y-6">

              {/* Search Widget */}
              <ScrollReveal variant="fade-left">
                <div className="bg-[#F7F9FA] border border-[#E2E8F0] rounded-3xl p-6 backdrop-blur-2xl relative group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#064B63]/10 rounded-full blur-2xl pointer-events-none" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#111827] border-b border-[#E2E8F0] pb-3 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    SEARCH HUB
                  </h3>
                  <form onSubmit={handleSearchSubmit} className="relative flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter system tag or keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-[#F7F9FA] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-[#111827] placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="px-4 py-3 bg-[#0F172A] hover:bg-[#064B63] text-[#111827] rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center"
                    >
                      <Search className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </ScrollReveal>

              {/* Recent Posts Widget */}
              <ScrollReveal variant="fade-left" delay={0.1}>
                <div className="bg-[#F7F9FA] border border-[#E2E8F0] rounded-3xl p-6 backdrop-blur-2xl relative">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#111827] border-b border-[#E2E8F0] pb-3 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    RECENT POSTS
                  </h3>
                  <div className="flex flex-col gap-1">
                    {posts.map((post) => (
                      <button
                        key={post.id}
                        onClick={() => handleRecentPostClick(post.id)}
                        className="block text-left text-xs font-medium text-[#475569] hover:text-[#064B63] transition-all duration-300 py-2 border-b border-[#E2E8F0]/[0.02] last:border-b-0 leading-relaxed hover:pl-2 group"
                      >
                        <span className="inline-flex items-center">
                          <ChevronRight className="w-0 h-3 text-[#064B63] group-hover:w-3 group-hover:mr-1 transition-all duration-300" />
                          {post.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Recent Comments Widget */}
              <ScrollReveal variant="fade-left" delay={0.2}>
                <div className="bg-[#F7F9FA] border border-[#E2E8F0] rounded-3xl p-6 backdrop-blur-2xl">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#111827] border-b border-[#E2E8F0] pb-3 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    RECENT COMMENTS
                  </h3>
                  <div className="flex flex-col gap-2">
                    {RECENT_COMMENTS.map((comment, index) => (
                      <div
                        key={index}
                        className="text-xs text-[#475569] py-2 border-b border-[#E2E8F0]/[0.02] last:border-b-0 leading-relaxed"
                      >
                        <span className="text-[#475569] font-semibold">{comment.author}</span> on{" "}
                        <button
                          onClick={() => handleRecentPostClick(comment.postId)}
                          className="text-[#064B63] hover:text-[#064B63] transition-colors font-medium text-left hover:underline"
                        >
                          {comment.postTitle}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Archives Widget */}
              <ScrollReveal variant="fade-left" delay={0.3}>
                <div className="bg-[#F7F9FA] border border-[#E2E8F0] rounded-3xl p-6 backdrop-blur-2xl">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#111827] border-b border-[#E2E8F0] pb-3 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    ARCHIVES INDEX
                  </h3>
                  <div className="flex flex-col gap-1">
                    {archivesList.map((month) => {
                      const count = posts.filter((p) => p.month === month).length;
                      return (
                        <button
                          key={month}
                          onClick={() => {
                            setSelectedMonth(selectedMonth === month ? null : month);
                            setSelectedCategory(null);
                          }}
                          className={`block text-left text-xs py-2 border-b border-[#E2E8F0]/[0.02] last:border-b-0 transition-all duration-300 group hover:pl-2 ${selectedMonth === month
                              ? "text-[#064B63] font-bold pl-2"
                              : "text-[#475569] hover:text-[#064B63]"
                            }`}
                        >
                          <span className="inline-flex items-center w-full justify-between">
                            <span className="inline-flex items-center">
                              <ChevronRight className="w-0 h-3 text-[#064B63] group-hover:w-3 group-hover:mr-1 transition-all duration-300" />
                              • {month}
                            </span>
                            <span className="text-[10px] text-[#475569] font-mono">({count})</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* Categories Widget */}
              <ScrollReveal variant="fade-left" delay={0.4}>
                <div className="bg-[#F7F9FA] border border-[#E2E8F0] rounded-3xl p-6 backdrop-blur-2xl">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#111827] border-b border-[#E2E8F0] pb-3 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                    CATEGORIES
                  </h3>
                  <div className="flex flex-col gap-1">
                    {categoriesList.map((cat) => {
                      const count = posts.filter((p) => p.category === cat).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => {
                            setSelectedCategory(selectedCategory === cat ? null : cat);
                            setSelectedMonth(null);
                          }}
                          className={`block text-left text-xs py-2 border-b border-[#E2E8F0]/[0.02] last:border-b-0 transition-all duration-300 group hover:pl-2 ${selectedCategory === cat
                              ? "text-[#064B63] font-bold pl-2"
                              : "text-[#475569] hover:text-[#064B63]"
                            }`}
                        >
                          <span className="inline-flex items-center w-full justify-between">
                            <span className="inline-flex items-center">
                              <ChevronRight className="w-0 h-3 text-[#064B63] group-hover:w-3 group-hover:mr-1 transition-all duration-300" />
                              • {cat}
                            </span>
                            <span className="text-[10px] text-[#475569] font-mono">({count})</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-component: Standard Grid Post (Bento style)
function renderStandardGridPost(post, activePostId, handlePostClick, setSelectedCategory, setSelectedMonth) {
  return (
    <div
      id={`post-${post.id}`}
      onClick={() => handlePostClick(post)}
      className={`bg-[#F7F9FA] border rounded-3xl p-6 backdrop-blur-2xl cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-full group ${activePostId === post.id
          ? "border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.2)] scale-[1.01]"
          : "border-[#E2E8F0] hover:border-[#0E7490] hover:bg-[#F7F9FA]"
        }`}
    >
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#E2E8F0] group-hover:border-[#0E7490] transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#E2E8F0] group-hover:border-[#0E7490] transition-colors" />

      {activePostId === post.id && (
        <div className="absolute inset-0 w-[120%] bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent skew-x-12 animate-pulse-glow pointer-events-none" />
      )}

      <div>
        {/* Post Image */}
        {post.image && (
          <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[16/10] bg-white/40 border border-[#E2E8F0]">
            <img
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-10" />
          </div>
        )}

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold text-[#475569] mb-3 border-b border-[#E2E8F0] pb-3">
          <span className="flex items-center gap-1"><User className="w-3 h-3 text-[#064B63]" />{post.author}</span>
          <span>•</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMonth(post.month);
              setSelectedCategory(null);
            }}
            className="flex items-center gap-1 hover:text-[#064B63] transition-colors"
          >
            <Calendar className="w-3 h-3 text-[#064B63]" />
            {post.date}
          </button>
        </div>

        {/* Post Title */}
        <h3 className="text-lg font-black uppercase tracking-tight text-[#111827] mb-2 transition-all duration-300    group-hover:text-[#064B63]  leading-tight">
          {post.title}
        </h3>

        {/* Post Excerpt */}
        <p className="text-[#475569] font-light text-xs leading-relaxed mb-6 line-clamp-3 font-sans">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto border-t border-[#E2E8F0] pt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedCategory(post.category);
            setSelectedMonth(null);
          }}
          className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#F7F9FA] text-[9px] uppercase tracking-wider font-bold text-[#475569] hover:text-[#064B63] hover:bg-[#F7F9FA] transition-all"
        >
          {post.category}
        </button>

        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#475569] group-hover:text-[#064B63] transition-colors group/btn">
          Read Log
          <ArrowRight className="w-3 h-3 text-[#064B63] transition-transform duration-300 group-hover/btn:translate-x-1" />
        </span>
      </div>
    </div>
  );
}

// Sub-component: Terminal styled system update card
function renderTerminalPost(post, activePostId, handlePostClick) {
  return (
    <div
      id={`post-${post.id}`}
      onClick={() => handlePostClick(post)}
      className={`bg-white/80 border rounded-3xl p-6 backdrop-blur-2xl cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-full group ${activePostId === post.id
          ? "border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
          : "border-[#E2E8F0] hover:border-[#0E7490]"
        }`}
    >
      {activePostId === post.id && (
        <div className="absolute inset-0 w-[120%] bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent skew-x-12 animate-pulse-glow pointer-events-none" />
      )}

      <div>
        {/* Terminal Header simulated */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3 mb-4 font-mono text-[10px] text-[#475569]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#064B63]/10" />
          </div>
          <span>shell // kp-bot</span>
        </div>

        {/* Header Title with Terminal prompt style */}
        <div className="flex gap-2 items-start font-mono text-[#0E7490] font-bold mb-3">
          <span>&gt;_</span>
          <h3 className="text-base uppercase tracking-tight text-[#111827] transition-all duration-300 group-hover:text-emerald-300">
            {post.title}
          </h3>
        </div>

        <p className="text-[#475569] font-mono text-xs leading-relaxed mb-6">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto border-t border-[#E2E8F0] pt-4 font-mono text-[9px] text-[#475569]">
        <span className="flex items-center gap-1 text-[#0E7490]/80">
          <Terminal className="w-3 h-3" />
          SYS_LOG
        </span>
        <span>{post.date}</span>
      </div>
    </div>
  );
}

// Visual CSS adjustments
const styleTag = (
  <style dangerouslySetInnerHTML={{
    __html: `
    @keyframes pulseGlow {
      0% { left: -100%; opacity: 0; }
      50% { opacity: 0.5; }
      100% { left: 100%; opacity: 0; }
    }
    .animate-pulse-glow {
      animation: pulseGlow 1.8s ease-in-out infinite;
    }
    @keyframes gridMove {
      0% { background-position: 0 0; }
      100% { background-position: 50px 50px; }
    }
    .animate-grid-move {
      animation: gridMove 25s linear infinite;
    }
  `}} />
);
