

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Calendar, ArrowRight, Clock, Activity, X } from "lucide-react";
import { ScrollReveal } from "@/components/Animations";
import PageHero from "@/components/common/PageHero";

export default function BlogPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Compute categories and archives
  const categoriesList = Array.from(new Set(posts.map((post) => post.category).filter(Boolean)));
  const archivesList = Array.from(new Set(posts.map((post) => post.month).filter(Boolean))).sort((a, b) => {
    const parseMonth = (mStr) => {
      const [m, y] = mStr.split(" ");
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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

  const filteredPosts = (Array.isArray(posts) ? posts : []).filter((post) => {
    const matchesSearch = activeSearch
      ? (post.title || "").toLowerCase().includes(activeSearch.toLowerCase()) ||
        (post.content || "").toLowerCase().includes(activeSearch.toLowerCase())
      : true;
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchesMonth = selectedMonth ? post.month === selectedMonth : true;
    return matchesSearch && matchesCategory && matchesMonth;
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveSearch(searchQuery);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveSearch("");
    setSelectedCategory(null);
    setSelectedMonth(null);
  };

  const isFiltering = !!(activeSearch || selectedCategory || selectedMonth);
  const featuredPost = !isFiltering && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="relative min-h-screen overflow-hidden font-sans pt-0 pb-32 bg-transparent text-slate-900">
      


      <div className="relative z-10">
        <PageHero
          title="Insights Hub"
          description="Corporate intelligence, strategic reports, and industry analysis from KP Global Group."
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-8 md:-mt-12">
          
          {/* Horizontal Filter Bar */}
          <ScrollReveal variant="fade-up">
            <div className="bg-white/90 backdrop-blur-md rounded-[2rem] md:rounded-full shadow-lg border border-slate-200/80 p-2 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto px-4 py-2 md:py-0 scrollbar-hide">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`px-5 py-2.5 rounded-full text-xs font-black tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${!selectedCategory ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  All
                </button>
                {categoriesList.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-xs font-black tracking-widest uppercase whitespace-nowrap transition-all duration-300 ${selectedCategory === cat ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              {/* Archives & Search */}
              <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:gap-0 px-4 pb-4 md:pb-0 md:px-6">
                <select 
                  value={selectedMonth || ""}
                  onChange={(e) => setSelectedMonth(e.target.value || null)}
                  className="w-full md:w-auto bg-transparent text-xs font-bold text-slate-600 uppercase tracking-widest outline-none cursor-pointer border-b md:border-b-0 md:border-r border-slate-200 pb-2 md:pb-0 md:pr-6 md:mr-6 hover:text-slate-900 transition-colors"
                >
                  <option value="">All Archives</option>
                  {archivesList.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-3 w-full md:w-48 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-0" />
                  <input 
                    type="text" 
                    placeholder="Search insights..." 
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm pl-8 py-1 placeholder-slate-400 text-slate-900 font-medium" 
                  />
                </form>
              </div>

            </div>
          </ScrollReveal>

          {/* Active Filters Display */}
          {isFiltering && (
            <div className="flex flex-wrap items-center gap-3 mb-10 pl-4">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-primary" /> Active Filters:
              </span>
              {activeSearch && (
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                  Search: "{activeSearch}"
                  <button onClick={() => { setActiveSearch(""); setSearchQuery(""); }} className="hover:text-slate-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedMonth && (
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                  Archive: {selectedMonth}
                  <button onClick={() => setSelectedMonth(null)} className="hover:text-slate-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button onClick={clearFilters} className="text-xs text-slate-400 hover:text-primary font-bold transition-colors ml-2 underline">
                Clear All
              </button>
            </div>
          )}

          {/* Featured Post (Only if not filtering and exists) */}
          {featuredPost && (
            <ScrollReveal variant="fade-up">
              <Link 
                to={`/${featuredPost.slug}`} 
                className="group block relative rounded-[2.5rem] overflow-hidden bg-slate-900 aspect-[4/5] md:aspect-[21/9] mb-16 shadow-xl border border-slate-200/50 hover:shadow-2xl hover:border-primary/50 transition-all duration-700"
              >
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full md:w-3/4 p-8 md:p-16 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center px-4 py-1.5 bg-primary text-white text-[10px] uppercase font-black tracking-widest rounded-full shadow-lg">
                      Featured Insight
                    </span>
                    <span className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest rounded-full border border-white/20">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.1] mb-6 transition-colors duration-300 drop-shadow-md">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-slate-300 md:text-lg mb-8 line-clamp-2 md:line-clamp-3 font-medium max-w-3xl">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary"/>{featuredPost.date || featuredPost.month}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary"/>{featuredPost.readTime || "5 Min Read"}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Grid Posts */}
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post, idx) => (
                <ScrollReveal key={post.id || idx} variant="fade-up" delay={idx * 0.05}>
                  <Link 
                    to={`/${post.slug}`} 
                    className="group flex flex-col h-full bg-white/90 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" />{post.date || post.month}</span>
                      </div>
                      
                      <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug uppercase tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-3">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3 flex-1 font-medium">
                        {post.excerpt}
                      </p>
                      
                      <div className="inline-flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest mt-auto group-hover:text-primary transition-colors">
                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            /* Empty State */
            <ScrollReveal variant="fade-up">
              <div className="text-center py-24 bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">No Insights Found</h3>
                <p className="text-slate-500 font-medium mb-8">We couldn't find any articles matching your current filters.</p>
                <button
                  onClick={clearFilters}
                  className="px-8 py-4 bg-slate-950 hover:bg-brand-violet rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  Clear All Filters
                </button>
              </div>
            </ScrollReveal>
          )}

        </div>
      </div>
      
      {/* Global Style Override for scrollbar hiding in filter bar */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}


