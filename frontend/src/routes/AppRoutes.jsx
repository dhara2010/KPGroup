import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Partners from "../pages/Partners";
import Team from "../pages/Team";
import Testimonials from "../pages/Testimonials";
import Vision from "../pages/Vision";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/vision" element={<Vision />} />
      <Route path="/:slug" element={<BlogDetail />} />
    </Routes>
  );
}
