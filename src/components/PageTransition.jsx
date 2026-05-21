"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    if (pathname !== displayChildren.props?.childProp?.segment) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 550);
      return () => clearTimeout(timer);
    } else {
      setDisplayChildren(children);
    }
  }, [pathname, children]);
  return (
    <div className="relative w-full flex-1 flex flex-col">
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: ["100%", "0%", "-100%"], transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }}
            exit={{ y: "-100%" }}
            className="fixed inset-0 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 z-[99999] pointer-events-none flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], transition: { duration: 1.0, ease: "easeInOut" } }}
              className="text-white text-2xl md:text-4xl font-black tracking-[0.35em] uppercase font-heading select-none filter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              KP GLOBAL
            </motion.div>
            <motion.div initial={{ width: 0 }} animate={{ width: ["0%", "40%", "100%", "100%"], transition: { duration: 1.0, ease: "easeInOut" } }} className="h-[1px] bg-white/40 mt-6" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div key={pathname} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="w-full flex-1 flex flex-col z-10">
        {displayChildren}
      </motion.div>
    </div>
  );
}
