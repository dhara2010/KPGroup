import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname]);

  // Handle beforeunload as an extra safety measure to ensure refresh starts at top
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (window.lenis) {
        window.lenis.scrollTo(0);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return null;
}
