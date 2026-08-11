

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Companies", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Partners", href: "/partners" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
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
            ? "bg-white/60 backdrop-blur-xl border border-[#E2E8F0] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-transparent border border-transparent"
            }`}
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:rotate-90"
            >
              <Rocket className="w-5 h-5 text-[#111827]" />
            </div>
            <span className={`text-xl font-bold tracking-wide transition-colors ${"text-[#111827]"}`}>
              KP<span className="text-[#0F172A]">Global</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => {
              const hasDropdown = link.name === "Our Companies" || link.name === "Resources";
              const isDropdownOpen = activeDropdown === link.name;

              const linkContent = (
                <div
                  className={`relative px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${hoveredIndex === idx ? ("bg-[#F7F9FA]") : "bg-transparent"
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
                  <span className={`relative z-10 text-sm font-medium transition-colors flex items-center gap-1 ${isDropdownOpen ? "text-[#064B63] font-semibold" : ("text-[#475569] hover:text-[#111827]")
                    }`}>
                    {link.name}
                    {hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#064B63]" : "text-[#475569]"}`} />}
                  </span>

                  {/* Dropdown Menu Overlay */}
                  {hasDropdown && isDropdownOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-[#0a0a0a]/95 border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 py-3 backdrop-blur-2xl"
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
                                to={subLink.href}
                                className="px-4 py-3 text-xs font-semibold text-[#475569] hover:text-[#111827] hover:bg-[#F7F9FA] rounded-xl transition-all duration-200 block text-left leading-tight"
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
                                to={subLink.href}
                                className="px-4 py-3 text-xs font-semibold text-[#475569] hover:text-[#111827] hover:bg-[#F7F9FA] rounded-xl transition-all duration-200 block text-left"
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
                <Link key={idx} to={link.href} className="block">
                  {linkContent}
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            

            <button
              className={`hidden md:block px-6 py-2.5 backdrop-blur-md border rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
                "bg-[#F7F9FA] hover:bg-[#F7F9FA] border-[#E2E8F0] text-[#111827]"
              }`}
            >
              Contact Sales
            </button>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full text-xs font-bold uppercase tracking-wider text-[#111827] shadow-lg shadow-blue-500/25 group transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            >
              Let's Talk
              <div className="w-5 h-5 rounded-full bg-[#F7F9FA] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowRight className="w-3 h-3 text-[#111827]" />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors ${
                "text-[#475569] hover:text-[#111827]"
              }`}
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
          className={`fixed inset-0 z-[60] backdrop-blur-3xl p-6 flex flex-col md:hidden transition-colors duration-300 ${
            "bg-white/95 text-[#111827]"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-[#111827]" />
              </div>
              <span className={`text-xl font-bold tracking-wide ${"text-[#111827]"}`}>
                KP<span className="text-[#064B63]">Global</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              
              <button
                className={`p-2 rounded-full transition-colors ${
                  "text-[#475569] hover:text-[#111827] bg-[#F7F9FA]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto max-h-[60vh] pr-2">
            {navLinks.map((link, idx) => {
              const hasDropdown = link.name === "Our Companies" || link.name === "Resources";
              const isExpanded = mobileDropdownOpen === link.name;

              return (
                <div key={idx} className={`border-b pb-4 ${"border-[#E2E8F0]"}`}>
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileDropdownOpen(isExpanded ? null : link.name)}
                        className={`w-full flex items-center justify-between text-2xl font-medium transition-colors ${
                          "text-[#475569] hover:text-[#111827]"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#064B63]" : "text-[#475569]"}`} />
                      </button>

                      {/* Expanded Mobile Submenu */}
                      {isExpanded && (
                        <div className="mt-3 pl-4 flex flex-col gap-3 border-l-2 border-[#064B63]/20">
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
                                  to={subLink.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`text-lg font-medium transition-colors block text-left ${
                                    "text-[#475569] hover:text-[#111827]"
                                  }`}
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
                                  to={subLink.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`text-lg font-medium transition-colors block text-left ${
                                    "text-[#475569] hover:text-[#111827]"
                                  }`}
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
                      to={link.href}
                      className={`text-2xl font-medium transition-colors block text-left ${
                        "text-[#475569] hover:text-[#111827]"
                      }`}
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
            <button
              className={`w-full py-2 rounded-xl text-lg font-semibold transition-colors ${
                "bg-[#F7F9FA] text-[#111827] hover:bg-[#F7F9FA]"
              }`}
            >
              Contact Sales
            </button>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-1 flex justify-center items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl text-lg font-bold uppercase tracking-wider text-[#111827] transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
            >
              Let's Talk
              <div className="w-5 h-5 rounded-full bg-[#F7F9FA] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowRight className="w-4 h-4 text-[#111827]" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}