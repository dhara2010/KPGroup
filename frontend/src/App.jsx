import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { FloatingActionIcon } from "./components/common/FloatingActionIcon";

import ScrollToTop from "./components/common/ScrollToTop";

// You may need to adapt your ClientProviders if they used Next.js specifics
import { InteractiveCanvas, ScrollProgress, CustomCursor, SmoothScroll } from "./components/layout/LayoutWrappers";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Use requestAnimationFrame for smoother performance if needed, or just passive listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* GLOBAL GEOMETRIC CUBE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
        <div 
          className="absolute w-full h-[120%] -top-[10%] opacity-100"
          style={{ 
            backgroundImage: 'url("/cube-bg.jpg")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // Very slow, subtle parallax movement (max 15px over typical scroll distance)
            transform: `translateY(${scrollY * 0.015}px)` 
          }}
        />
      </div>

      <ScrollToTop />
      <SmoothScroll>
        <InteractiveCanvas />
        <ScrollProgress />
        <CustomCursor />
        
        {/* We keep all sections slightly transparent to allow the global background to show through */}
        <div className="relative z-10">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
        
        <FloatingActionIcon />
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;