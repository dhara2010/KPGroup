

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Rocket, ArrowRight, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About Us", href: "/about" },
  {
    name: "Our Companies",
    href: "#",
    subItems: [
      { name: "KP Global IT Solution", href: "https://kpgbit.kpglobalbusiness.com/", isExternal: true },
      { name: "KP Global Skill Academy", href: "https://academy.kpglobalbusiness.com/", isExternal: true },
      { name: "KP Global Media Network", href: "https://entrepreneurjouryny.com/", isExternal: true },
      { name: "KP Global Business Community", href: "https://kpgbc.kpglobalbusiness.com/", isExternal: true },
      { name: "KP Global Jobs", href: "https://jobs.kpglobalbusiness.com/", isExternal: true }
    ]
  },
  {
    name: "Resources",
    href: "#",
    subItems: [
      { name: "Testimonials", href: "/testimonials" },
      { name: "Careers", href: "/careers" },
      { name: "Team", href: "/team" },
      { name: "FAQ", href: "/faq" }
    ]
  },
  { name: "Partners", href: "/partners" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" }
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click-outside and Escape key listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Mouse enter/leave handlers with smooth delay buffer
  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Same light-text hero header behavior across ALL pages at scroll position Y=0
  const useLightText = !isScrolled;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-300 ${
          isScrolled ? "pt-0" : "pt-4"
        } px-4 md:px-8`}
      >
        <div
          className={`relative flex items-center justify-between w-full max-w-7xl px-6 py-3.5 transition-all duration-500 rounded-2xl ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-xl shadow-purple-500/5"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md shadow-purple-500/20">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-extrabold tracking-tight transition-colors ${useLightText ? "text-white" : "text-slate-900"}`}>
              KP<span className="text-primary font-bold">Global</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => {
              const hasDropdown = Boolean(link.subItems && link.subItems.length > 0);
              const isDropdownOpen = activeDropdown === link.name;
              
              // Check if parent or any sub-item is active
              const isDirectActive = pathname === link.href;
              const isSubActive = link.subItems?.some((sub) => sub.href === pathname);
              const isActive = isDirectActive || isSubActive;

              // Unified text color logic matching Home page
              let linkTextColor = "";
              if (isActive || isDropdownOpen) {
                linkTextColor = "text-primary font-bold";
              } else if (useLightText) {
                linkTextColor = "text-white/90 hover:text-white font-semibold";
              } else {
                linkTextColor = "text-slate-700 hover:text-primary font-semibold";
              }

              return (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredIndex(idx);
                    if (hasDropdown) handleMouseEnter(link.name);
                    else handleMouseEnter(null);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    handleMouseLeave();
                  }}
                >
                  <div
                    onClick={() => {
                      if (hasDropdown) {
                        setActiveDropdown(isDropdownOpen ? null : link.name);
                      }
                    }}
                    className={`relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 flex items-center gap-1.5 ${
                      hoveredIndex === idx ? (useLightText ? "bg-white/10" : "bg-slate-100/80") : "bg-transparent"
                    }`}
                  >
                    {!hasDropdown ? (
                      <Link to={link.href} className="flex items-center gap-1">
                        <span className={`relative z-10 text-[14px] transition-colors ${linkTextColor}`}>
                          {link.name}
                        </span>
                      </Link>
                    ) : (
                      <span className={`relative z-10 text-[14px] transition-colors flex items-center gap-1 ${linkTextColor}`}>
                        {link.name}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180 text-primary" : ""
                          } ${useLightText && !isDropdownOpen && !isActive ? "text-white/90" : ""}`}
                        />
                      </span>
                    )}

                    {/* Active & Hover Underline Indicator */}
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 rounded-full ${
                        isActive || hoveredIndex === idx ? "w-1/2 opacity-100" : "w-0 opacity-0"
                      }`}
                    ></span>
                  </div>

                  {/* Dropdown Menu Panel with Glassmorphism & Fade Animation */}
                  {hasDropdown && isDropdownOpen && (
                    <div
                      onMouseEnter={() => handleMouseEnter(link.name)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl z-50 py-2 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                    >
                      {/* Gradient Accent Bar */}
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-primary via-purple-400 to-primary rounded-t-2xl"></div>

                      {/* Dropdown Items */}
                      <div className="flex flex-col gap-0.5 px-2 pt-1">
                        {link.subItems.map((subLink, subIdx) => {
                          const isSubItemActive = pathname === subLink.href;

                          if (subLink.isExternal) {
                            return (
                              <a
                                key={subIdx}
                                href={subLink.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setActiveDropdown(null)}
                                className="px-3.5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 flex items-center justify-between group"
                              >
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                  {subLink.name}
                                </span>
                                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-primary transition-colors" />
                              </a>
                            );
                          }

                          return (
                            <Link
                              key={subIdx}
                              to={subLink.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center justify-between group ${
                                isSubItemActive
                                  ? "bg-primary/20 text-primary border border-primary/30"
                                  : "text-slate-300 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              <span className="group-hover:translate-x-1 transition-transform duration-200">
                                {subLink.name}
                              </span>
                              {isSubItemActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              className={`hidden md:block px-5 py-2 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 shadow-sm ${
                useLightText
                  ? "bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md"
                  : "bg-white hover:bg-slate-50 border border-slate-200 text-slate-900"
              }`}
            >
              Contact Sales
            </button>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2.5 px-5 py-2 bg-primary text-white rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-purple-500/25 group transition-all duration-300 hover:bg-primary-dark active:scale-95"
            >
              Let's Talk
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-xl transition-colors ${
                useLightText ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Accordion */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] backdrop-blur-2xl p-6 flex flex-col md:hidden transition-colors duration-300 bg-white/98 text-slate-900 animate-in fade-in">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                KP<span className="text-primary">Global</span>
              </span>
            </Link>
            <button
              className="p-2 rounded-full transition-colors text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-3 overflow-y-auto max-h-[65vh] pr-2">
            {navLinks.map((link, idx) => {
              const hasDropdown = Boolean(link.subItems && link.subItems.length > 0);
              const isExpanded = mobileDropdownOpen === link.name;
              const isDirectActive = pathname === link.href;
              const isSubActive = link.subItems?.some((sub) => sub.href === pathname);
              const isActive = isDirectActive || isSubActive;

              return (
                <div key={idx} className="border-b border-slate-100 pb-3">
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(isExpanded ? null : link.name)}
                        className={`w-full flex items-center justify-between text-lg font-bold transition-colors py-1 ${
                          isActive ? "text-primary" : "text-slate-700 hover:text-primary"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-primary" : "text-slate-400"
                          }`}
                        />
                      </button>

                      {/* Accordion Items */}
                      {isExpanded && (
                        <div className="mt-3 pl-4 flex flex-col gap-2.5 border-l-2 border-primary/30">
                          {link.subItems.map((subLink, subIdx) => {
                            const isSubActiveItem = pathname === subLink.href;

                            if (subLink.isExternal) {
                              return (
                                <a
                                  key={subIdx}
                                  href={subLink.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-sm font-semibold transition-colors flex items-center justify-between text-slate-600 hover:text-primary py-1"
                                >
                                  <span>{subLink.name}</span>
                                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                                </a>
                              );
                            }

                            return (
                              <Link
                                key={subIdx}
                                to={subLink.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm font-semibold transition-colors block text-left py-1 ${
                                  isSubActiveItem ? "text-primary font-bold" : "text-slate-600 hover:text-primary"
                                }`}
                              >
                                {subLink.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-bold transition-colors block text-left py-1 ${
                        isActive ? "text-primary" : "text-slate-700 hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-auto pt-6 flex flex-col gap-3">
            <button
              className="w-full py-3.5 border border-slate-200 rounded-xl text-xs font-bold transition-colors bg-white text-slate-900 hover:bg-slate-50 uppercase tracking-wider shadow-sm"
            >
              Contact Sales
            </button>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 flex justify-center items-center gap-3 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary-dark group shadow-md"
            >
              Let's Talk
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
