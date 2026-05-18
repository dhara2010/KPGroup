import { use } from "react";
import AboutPage from "../about/about";
import PartnersPage from "../partners/partners";

export default function CatchAllPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const currentSlug = slug?.[0];

  if (currentSlug === "about") {
    return <AboutPage />;
  }

  if (currentSlug === "partners") {
    return <PartnersPage />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-mono">404</h1>
        <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Page Not Found</p>
      </div>
    </div>
  );
}
