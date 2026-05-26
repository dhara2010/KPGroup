"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Companies", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Partners", href: "/partners" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);



  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? "pt-0" : "pt-2"
          } px-4`}
      >
        <div
          className={`relative flex items-center justify-between w-full px-6 py-4 transition-all duration-500 rounded-2xl ${isScrolled
            ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-transparent border border-transparent"
            }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:rotate-90"
            >
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">
              KP<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Global</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => {
              const hasDropdown = link.name === "Our Companies" || link.name === "Resources";
              const isDropdownOpen = activeDropdown === link.name;

              const linkContent = (
                <div
                  className={`relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${hoveredIndex === idx ? "bg-white/10" : "bg-transparent"
                    }`}
                  onMouseEnter={() => {
                    setHoveredIndex(idx);
                    if (hasDropdown) setActiveDropdown(link.name);
                    else setActiveDropdown(null);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setActiveDropdown(null);
                  }}
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors flex items-center gap-1 ${isDropdownOpen ? "text-blue-500 font-semibold" : "text-gray-300 hover:text-white"
                    }`}>
                    {link.name}
                    {hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-blue-500" : "text-gray-400"}`} />}
                  </span>

                  {/* Dropdown Menu Overlay */}
                  {hasDropdown && isDropdownOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 py-3 backdrop-blur-2xl"
                    >
                      {/* Accent Top Bar */}
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"></div>

                      {/* Menu Items */}
                      <div className="flex flex-col gap-1 px-2">
                        {link.name === "Our Companies" ? (
                          <>
                            {[
                              { name: "KP Global IT Solution", href: "https://kpgbit.kpglobalbusiness.com/" },
                              { name: "KP Global Skill Academy", href: "https://academy.kpglobalbusiness.com/" },
                              { name: "KP Global Media Network", href: "https://entrepreneurjouryny.com/" },
                              { name: "KP Global Business Community", href: "https://kpgbc.kpglobalbusiness.com/" },
                              { name: "KP Global Jobs", href: "https://jobs.kpglobalbusiness.com/" }
                            ].map((subLink, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subLink.href}
                                className="px-4 py-3 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 block text-left leading-tight"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </>
                        ) : (
                          <>
                            {[
                              { name: "Testimonials", href: "/testimonials" },
                              { name: "Careers", href: "/careers" },
                              { name: "Team", href: "/team" },
                              { name: "Faq", href: "/faq" }
                            ].map((subLink, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subLink.href}
                                className="px-4 py-3 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 block text-left"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );

              if (hasDropdown) {
                return <React.Fragment key={idx}>{linkContent}</React.Fragment>;
              }

              return (
                <Link key={idx} href={link.href} className="block">
                  {linkContent}
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              className="hidden md:block px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
            >
              Contact Sales
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 group transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            >
              Let's Talk
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-3xl p-6 flex flex-col md:hidden"
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                KP<span className="text-purple-400">Global</span>
              </span>
            </div>
            <button
              className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto max-h-[60vh] pr-2">
            {navLinks.map((link, idx) => {
              const hasDropdown = link.name === "Our Companies" || link.name === "Resources";
              const isExpanded = mobileDropdownOpen === link.name;

              return (
                <div key={idx} className="border-b border-white/10 pb-4">
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(isExpanded ? null : link.name)}
                        className="w-full flex items-center justify-between text-2xl font-medium text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? "rotate-180 text-blue-500" : "text-gray-400"}`} />
                      </button>

                      {/* Expanded Mobile Submenu */}
                      {isExpanded && (
                        <div className="mt-3 pl-4 flex flex-col gap-3 border-l-2 border-blue-500/30">
                          {link.name === "Our Companies" ? (
                            <>
                              {[
                                { name: "KP Global IT Solution", href: "https://kpgbit.kpglobalbusiness.com/" },
                                { name: "KP Global Skill Academy", href: "https://academy.kpglobalbusiness.com/" },
                                { name: "KP Global Media Network", href: "https://entrepreneurjouryny.com/" },
                                { name: "KP Global Business Community", href: "https://kpgbc.kpglobalbusiness.com/" },
                                { name: "KP Global Jobs", href: "https://jobs.kpglobalbusiness.com/" }
                              ].map((subLink, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={subLink.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-lg font-medium text-gray-400 hover:text-white transition-colors block text-left"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </>
                          ) : (
                            <>
                              {[
                                { name: "Testimonials", href: "/testimonials" },
                                { name: "Careers", href: "/careers" },
                                { name: "Team", href: "/team" },
                                { name: "Faq", href: "/faq" }
                              ].map((subLink, subIdx) => (
                                <Link
                                  key={subIdx}
                                  href={subLink.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-lg font-medium text-gray-400 hover:text-white transition-colors block text-left"
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-2xl font-medium text-gray-300 hover:text-white transition-colors block text-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <button className="w-full py-2 bg-white/10 rounded-xl text-lg font-semibold text-white transition-colors hover:bg-white/20">
              Contact Sales
            </button>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-1 flex justify-center items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl text-lg font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
            >
              Let's Talk
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}