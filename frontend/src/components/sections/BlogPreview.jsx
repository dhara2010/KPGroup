import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from "@/components/Animations";
import { Section } from "@/components/ui/Section";

export default function BlogPreview() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();
        if (Array.isArray(data)) {
          // Take the first 3 blogs for the preview
          setBlogs(data.slice(0, 3));
        } else {
          console.error("Failed to fetch blogs: response is not an array", data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Section id="blog-preview" variant="default" className="relative overflow-hidden py-32 bg-transparent text-slate-900 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <ScrollReveal variant="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-0.5 bg-blue-500/40"></span>
                <span className="text-sm font-bold text-brand-gradient uppercase tracking-[0.2em]">
                  Insights & News
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                LATEST <br />
                <span className="text-brand-gradient">ARTICLES</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="md:text-right">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="flex flex-col md:items-end">
                <p className="text-slate-600 font-medium text-lg max-w-md mb-6">
                  Explore the latest insights, ideas, and updates from KP Global
                  Group and discover perspectives shaping today's business landscape.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <ScrollReveal
              key={blog.id || blog._id || idx}
              variant="fade-up"
              delay={0.1 * idx}
            >
              <Link
                to={`/${blog.slug || 'blogs'}`}
                className="group flex flex-col h-full bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200/80 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  {blog.image || blog.thumbnail ? (
                    <img
                      src={blog.image || blog.thumbnail}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200" />
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-sm">
                    {blog.category || 'General'}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" />{blog.date || blog.month || "Recent"}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug uppercase tracking-tight transition-colors duration-300 line-clamp-3">
                    {blog.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3 flex-1 font-medium">
                    {blog.excerpt || (blog.content ? blog.content.substring(0, 100) + '...' : '')}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest mt-auto group-hover:text-primary transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </Section>
  );
}
