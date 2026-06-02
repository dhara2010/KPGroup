import { use } from "react";
import dynamic from "next/dynamic";
import { INITIAL_POSTS } from "../blog/blogData";

const AboutPage = dynamic(() => import("../about/about"), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center text-gray-500 font-mono">LOADING_MODULE...</div>
});
const PartnersPage = dynamic(() => import("../partners/partners"), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center text-gray-500 font-mono">LOADING_MODULE...</div>
});
const ContactPage = dynamic(() => import("../contact/contact"), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center text-gray-500 font-mono">LOADING_MODULE...</div>
});
const BlogPage = dynamic(() => import("../blog/blog"), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center text-gray-500 font-mono">LOADING_MODULE...</div>
});
const SinglePostPage = dynamic(() => import("../blog/SinglePostPage"), {
  loading: () => <div className="min-h-screen bg-black flex items-center justify-center text-gray-500 font-mono">LOADING_MODULE...</div>
});

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

  if (currentSlug === "contact") {
    return <ContactPage />;
  }

  if (currentSlug === "blog") {
    return <BlogPage />;
  }

  // Check if current slug matches any blog post
  const matchedPost = INITIAL_POSTS.find((post) => post.slug === currentSlug);
  if (matchedPost) {
    return <SinglePostPage post={matchedPost} />;
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
