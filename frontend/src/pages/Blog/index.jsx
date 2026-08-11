

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search, User, MessageSquare, Calendar, ArrowRight, Tag, X, Clock, Terminal, Activity, ChevronRight, ArrowLeft, Send, Share2, Sparkles
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
    <div className="relative min-h-screen overflow-hidden font-sans pt-0 pb-20 bg-white text-slate-900">
      {styleTag}

      {/* Moving background grid & ambient light blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,59,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,59,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10">
        <PageHero
          title="Insights Blog"
          description="System journals, software reports, and development notes from our engineering and strategic leads."
        />

        {/* Main Content Layout Grid */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Feed */}
            <div className="lg:col-span-8 space-y-8">

              {/* Active Filter Bar */}
              {isFiltering && (
                <div className="flex flex-wrap items-center gap-3 p-4 bg-white shadow-xl shadow-purple-500/5 border border-slate-200/80 rounded-2xl mb-6 backdrop-blur-xl">
                  <span className="text-xs text-slate-700 font-extrabold tracking-wider flex items-center gap-1.5 uppercase">
                    <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />
                    Filters Active:
                  </span>
                  {activeSearch && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                      Search: "{activeSearch}"
                      <button onClick={() => { setActiveSearch(""); setSearchQuery(""); }} className="hover:text-slate-900 transition-colors">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedCategory && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                      Category: {selectedCategory}
                      <button onClick={() => setSelectedCategory(null)} className="hover:text-slate-900 transition-colors">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedMonth && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                      Archive: {selectedMonth}
                      <button onClick={() => setSelectedMonth(null)} className="hover:text-slate-900 transition-colors">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-xs text-slate-500 hover:text-primary font-bold underline ml-auto transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              )}

              {filteredPosts.length > 0 ? (
                <div className="space-y-10">
                  {(() => {
                    const groupedPosts = {};
                    filteredPosts.forEach((post) => {
                      if (!groupedPosts[post.month]) {
                        groupedPosts[post.month] = [];
                      }
                      groupedPosts[post.month].push(post);
                    });

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

                      const hasFeatured = !isFiltering && monthName === "December 2024" && postsInMonth.some(p => p.id === 2);
                      const monthFeaturedPost = hasFeatured ? postsInMonth.find(p => p.id === 2) : null;
                      const monthGridPosts = hasFeatured ? postsInMonth.filter(p => p.id !== 2) : postsInMonth;

                      const isSelectedMonthBox = selectedMonth === monthName;

                      return (
                        <div
                          key={monthName}
                          className={` space-y-6 border rounded-[2rem] p-6 md:p-8 bg-white shadow-xl shadow-purple-500/5 relative group transition-all duration-500 ${
                            isSelectedMonthBox
                              ? "border-primary/50 bg-primary/5 shadow-2xl shadow-primary/10"
                              : "border-slate-200/80 hover:border-primary/40"
                          }`}
                        >
                          {/* Header for month box */}
                          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-2.5">
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                              <h3 className="text-xs font-black tracking-[0.2em] text-primary uppercase font-mono">
                                {monthName} INDEXED ARCHIVES
                              </h3>
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                              {postsInMonth.length} {postsInMonth.length === 1 ? "entry" : "entries"} detected
                            </span>
                          </div>

                          {/* Featured post (if any) */}
                          {monthFeaturedPost && (
                            <ScrollReveal variant="fade-up">
                              <div
                                id={`post-${monthFeaturedPost.id}`}
                                onClick={() => handlePostClick(monthFeaturedPost)}
                                className={`bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-500 relative overflow-hidden group/featured shadow-lg hover:shadow-[0_20px_50px_rgba(108,59,255,0.18)] hover:border-primary hover:-translate-y-2 ${
                                  activePostId === monthFeaturedPost.id ? "border-primary shadow-2xl" : ""
                                }`}
                              >
                                {/* Top Accent Beam */}
                                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary via-purple-400 to-accent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500" />

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                  <div className="md:col-span-7 relative rounded-2xl overflow-hidden aspect-video max-h-[300px] border border-slate-200 bg-slate-100">
                                    <img
                                      src={monthFeaturedPost.image}
                                      alt={monthFeaturedPost.title}
                                      className="w-full h-full object-cover transition-transform duration-700 group-hover/featured:scale-105 group-hover/featured:brightness-105"
                                    />
                                    <div className="absolute top-3 left-3 px-3.5 py-1 rounded-full bg-primary text-white text-[9px] uppercase tracking-widest font-black shadow-md z-10">
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
                                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] uppercase tracking-wider font-extrabold text-primary group-hover/featured:bg-primary group-hover/featured:text-white transition-all duration-300"
                                    >
                                      <Tag className="w-2.5 h-2.5" />
                                      {monthFeaturedPost.category}
                                    </button>
                                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-slate-900 group-hover/featured:text-primary transition-colors duration-300">
                                      {monthFeaturedPost.title}
                                    </h2>
                                    <p className="text-slate-600 font-normal text-xs md:text-sm leading-relaxed line-clamp-3">
                                      {monthFeaturedPost.excerpt}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold text-slate-500 border-t border-slate-100 pt-3">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setSelectedMonth(monthFeaturedPost.month);
                                          setSelectedCategory(null);
                                        }}
                                        className="flex items-center gap-1 hover:text-primary transition-colors font-bold"
                                      >
                                        <Calendar className="w-3 h-3 text-primary" />{monthFeaturedPost.date}
                                      </button>
                                      <span>•</span>
                                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3 text-primary" />comments ({monthFeaturedPost.commentsCount})</span>
                                    </div>

                                    <button className="inline-flex items-center gap-3 px-6 py-2.5 bg-primary hover:bg-primary-dark rounded-full text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md group-hover/featured:shadow-lg group-hover/featured:shadow-purple-500/30 transition-all duration-300 active:scale-95">
                                      <span>Explore More</span>
                                      <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover/featured:translate-x-1.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </ScrollReveal>
                          )}

                          {/* Grid for standard posts */}
                          {monthGridPosts.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {monthGridPosts.map((post, idx) => (
                                <ScrollReveal key={`grid-post-${post.id || idx}`} variant="fade-up" delay={idx * 0.05}>
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
                <div className="text-center py-16 bg-white border border-slate-200/80 rounded-3xl shadow-xl shadow-purple-500/5 p-8 relative overflow-hidden">
                  <Clock className="w-12 h-12 text-slate-400 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest font-mono">No matching system logs</h3>
                  <p className="text-slate-500 text-xs mt-1 mb-6 font-mono font-semibold">Status: FILTER_EMPTY_RESULT_0x004</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-full text-xs font-extrabold uppercase tracking-wider text-white transition-all shadow-md"
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
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-purple-500/5 relative group">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    SEARCH HUB
                  </h3>
                  <form onSubmit={handleSearchSubmit} className="relative flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter system tag or keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary focus:bg-white transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="px-4 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center shadow-md"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </ScrollReveal>

              {/* Recent Posts Widget */}
              <ScrollReveal variant="fade-left" delay={0.1}>
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-purple-500/5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    RECENT POSTS
                  </h3>
                  <div className="flex flex-col gap-1">
                    {posts.map((post, idx) => (
                      <button
                        key={`recent-post-${post.id || idx}`}
                        onClick={() => handleRecentPostClick(post.id)}
                        className="block text-left text-xs font-semibold text-slate-600 hover:text-primary transition-all duration-200 py-2.5 border-b border-slate-100 last:border-b-0 leading-relaxed hover:pl-1.5 group"
                      >
                        <span className="inline-flex items-center">
                          <ChevronRight className="w-0 h-3 text-primary group-hover:w-3 group-hover:mr-1 transition-all duration-200" />
                          {post.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Recent Comments Widget */}
              <ScrollReveal variant="fade-left" delay={0.2}>
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-purple-500/5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    RECENT COMMENTS
                  </h3>
                  <div className="flex flex-col gap-2">
                    {RECENT_COMMENTS.map((comment, index) => (
                      <div
                        key={`recent-comment-${comment.postId || index}-${index}`}
                        className="text-xs text-slate-600 py-2 border-b border-slate-100 last:border-b-0 leading-relaxed"
                      >
                        <span className="text-slate-900 font-bold">{comment.author}</span> on{" "}
                        <button
                          onClick={() => handleRecentPostClick(comment.postId)}
                          className="text-primary hover:underline font-semibold"
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
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-purple-500/5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    ARCHIVES INDEX
                  </h3>
                  <div className="flex flex-col gap-1">
                    {archivesList.map((month) => {
                      const count = posts.filter((p) => p.month === month).length;
                      return (
                        <button
                          key={`archive-month-${month}`}
                          onClick={() => {
                            setSelectedMonth(selectedMonth === month ? null : month);
                            setSelectedCategory(null);
                          }}
                          className={`block text-left text-xs py-2 border-b border-slate-100 last:border-b-0 transition-all duration-200 group hover:pl-1.5 ${
                            selectedMonth === month
                              ? "text-primary font-bold pl-1.5"
                              : "text-slate-600 hover:text-primary"
                          }`}
                        >
                          <span className="inline-flex items-center w-full justify-between">
                            <span className="inline-flex items-center">
                              <ChevronRight className="w-0 h-3 text-primary group-hover:w-3 group-hover:mr-1 transition-all duration-200" />
                              • {month}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono font-bold">({count})</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* Categories Widget */}
              <ScrollReveal variant="fade-left" delay={0.4}>
                <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-xl shadow-purple-500/5">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    CATEGORIES
                  </h3>
                  <div className="flex flex-col gap-1">
                    {categoriesList.map((cat) => {
                      const count = posts.filter((p) => p.category === cat).length;
                      return (
                        <button
                          key={`category-${cat}`}
                          onClick={() => {
                            setSelectedCategory(selectedCategory === cat ? null : cat);
                            setSelectedMonth(null);
                          }}
                          className={`block text-left text-xs py-2 border-b border-slate-100 last:border-b-0 transition-all duration-200 group hover:pl-1.5 ${
                            selectedCategory === cat
                              ? "text-primary font-bold pl-1.5"
                              : "text-slate-600 hover:text-primary"
                          }`}
                        >
                          <span className="inline-flex items-center w-full justify-between">
                            <span className="inline-flex items-center">
                              <ChevronRight className="w-0 h-3 text-primary group-hover:w-3 group-hover:mr-1 transition-all duration-200" />
                              • {cat}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono font-bold">({count})</span>
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

// Sub-component: Standard Grid Post (3D Lift + Glow + Image Zoom)
function renderStandardGridPost(post, activePostId, handlePostClick, setSelectedCategory, setSelectedMonth) {
  return (
    <div
      id={`post-${post.id}`}
      onClick={() => handlePostClick(post)}
      className={`bg-white border border-slate-200/80 rounded-3xl p-6 shadow-lg shadow-purple-500/5 hover:border-primary/60 hover:shadow-[0_20px_45px_rgba(108,59,255,0.15)] hover:-translate-y-2.5 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-full group/gridcard ${
        activePostId === post.id ? "border-primary shadow-2xl scale-[1.01]" : ""
      }`}
    >
      {/* Top Beam */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/gridcard:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Post Image */}
        {post.image && (
          <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[16/10] bg-slate-100 border border-slate-200">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/gridcard:scale-108"
            />
          </div>
        )}

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-500 mb-3 border-b border-slate-100 pb-3">
          <span className="flex items-center gap-1"><User className="w-3 h-3 text-primary" />{post.author}</span>
          <span>•</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMonth(post.month);
              setSelectedCategory(null);
            }}
            className="flex items-center gap-1 hover:text-primary transition-colors font-bold"
          >
            <Calendar className="w-3 h-3 text-primary" />
            {post.date}
          </button>
        </div>

        {/* Post Title */}
        <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-2 transition-colors duration-300 group-hover/gridcard:text-primary leading-tight">
          {post.title}
        </h3>

        {/* Post Excerpt */}
        <p className="text-slate-600 font-normal text-xs leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedCategory(post.category);
            setSelectedMonth(null);
          }}
          className="inline-flex items-center px-2.5 py-1 rounded-md bg-primary/10 text-[9px] uppercase tracking-wider font-bold text-primary group-hover/gridcard:bg-primary group-hover/gridcard:text-white transition-all duration-300"
        >
          {post.category}
        </button>

        <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-700 group-hover/gridcard:text-primary transition-colors">
          <span>Read Log</span>
          <ArrowRight className="w-3 h-3 text-primary transition-transform duration-300 group-hover/gridcard:translate-x-1.5" />
        </span>
      </div>
    </div>
  );
}

// Sub-component: Terminal styled system update card (Cyber Glow + Scan Sweep)
function renderTerminalPost(post, activePostId, handlePostClick) {
  return (
    <div
      id={`post-${post.id}`}
      onClick={() => handlePostClick(post)}
      className={`bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col justify-between h-full group/terminal hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] hover:-translate-y-1.5 ${
        activePostId === post.id ? "border-cyan-400 shadow-2xl" : ""
      }`}
    >
      {/* Cyber Beam Sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover/terminal:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      <div>
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 font-mono text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 group-hover/terminal:scale-125 transition-transform duration-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 group-hover/terminal:scale-125 transition-transform duration-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 group-hover/terminal:scale-125 transition-transform duration-300" />
          </div>
          <span className="group-hover/terminal:text-cyan-400 transition-colors">shell // kp-bot</span>
        </div>

        {/* Header Title with Terminal prompt style */}
        <div className="flex gap-2 items-start font-mono text-primary font-bold mb-3">
          <span className="group-hover/terminal:text-cyan-400 group-hover/terminal:animate-pulse transition-colors">&gt;_</span>
          <h3 className="text-base uppercase tracking-tight text-white transition-colors duration-300 group-hover/terminal:text-cyan-300">
            {post.title}
          </h3>
        </div>

        <p className="text-slate-300 font-mono text-xs leading-relaxed mb-6">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto border-t border-slate-800 pt-4 font-mono text-[9px] text-slate-400">
        <span className="flex items-center gap-1 text-primary group-hover/terminal:text-cyan-400 transition-colors">
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
  `}} />
);


