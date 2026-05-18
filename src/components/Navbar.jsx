"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Rocket } from "lucide-react";
import Link from "next/link";
import UniqueArrow from "@/components/UniqueArrow";

const navLinks = [
  { name: "About Us", href: "#" },
  { name: "Our Companies", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-300 ${
          isScrolled ? "pt-0" : "pt-2"
        } px-4`}
      >
        <div
          className={`relative flex items-center justify-between w-full px-6 py-4 transition-all duration-500 rounded-2xl ${
            isScrolled
              ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30"
            >
              <Rocket className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white tracking-wide">
              KP<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Global</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => {
              const hasDropdown = link.name === "Our Companies" || link.name === "Resources";
              const isDropdownOpen = activeDropdown === link.name;
              
              return (
                <div
                  key={idx}
                  className="relative px-4 py-2 rounded-full cursor-pointer"
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
                  <span className={`relative z-10 text-sm font-medium transition-colors flex items-center gap-1 ${
                    isDropdownOpen ? "text-blue-500 font-semibold" : "text-gray-300 hover:text-white"
                  }`}>
                    {link.name}
                    {hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-blue-500" : "text-gray-400"}`} />}
                  </span>
                  
                  {/* Dropdown Menu Overlay */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 py-3 backdrop-blur-2xl"
                        >
                          {/* Accent Top Bar */}
                          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"></div>
                          
                          {/* Menu Items */}
                          <div className="flex flex-col gap-1 px-2">
                            {link.name === "Our Companies" ? (
                              <>
                                {[
                                  { name: "KP Global IT Solution", href: "#services" },
                                  { name: "KP Global Skill Academy", href: "#academy" },
                                  { name: "KP Global Media Network", href: "#media" },
                                  { name: "KP Global Business Community", href: "#community" },
                                  { name: "KP Global Jobs", href: "#careers" }
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
                                  { name: "Testimonial", href: "#testimonials" },
                                  { name: "Careers", href: "#contact" },
                                  { name: "Team", href: "#team" },
                                  { name: "Faq", href: "#faq" }
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                  
                  {/* Hover Background Animation */}
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold text-white transition-all"
            >
              Contact Sales
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold text-white shadow-md shadow-blue-500/20 group"
            >
              Get Started <UniqueArrow className="w-4 h-4" direction="up-right" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
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

            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-2xl font-medium text-gray-300 hover:text-white border-b border-white/10 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full py-4 bg-white/10 rounded-xl text-lg font-semibold text-white">
                Contact Sales
              </button>
              <button className="w-full py-4 flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-lg font-semibold text-white group">
                Get Started <UniqueArrow className="w-5 h-5" direction="up-right" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
