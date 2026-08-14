import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Blog from "../pages/Blog.jsx";
import BlogDetail from "../pages/BlogDetail.jsx";
import Careers from "../pages/Careers.jsx";
import Contact from "../pages/Contact.jsx";
import FAQ from "../pages/FAQ.jsx";
import Partners from "../pages/Partners.jsx";
import Team from "../pages/Team.jsx";
import Testimonials from "../pages/Testimonials.jsx";
import Vision from "../pages/Vision.jsx";

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
