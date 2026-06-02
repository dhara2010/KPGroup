import { staticData } from "./staticData";

export const db = {
  partners: {
    get: async () => {
      return staticData.partners;
    }
  },
  testimonials: {
    get: async () => {
      return staticData.testimonials;
    }
  },
  team: {
    get: async () => {
      return staticData.team;
    }
  },
  blogs: {
    get: async () => {
      return staticData.blogs;
    },
    getBySlug: async (slug) => {
      return staticData.blogs.find((b) => b.slug === slug) || null;
    }
  },
  contacts: {
    create: async (item) => {
      return {
        id: Date.now(),
        created_at: new Date().toISOString(),
        ...item
      };
    }
  },
  applications: {
    create: async (item) => {
      return {
        id: Date.now(),
        created_at: new Date().toISOString(),
        ...item
      };
    }
  },
  comments: {
    create: async (postId, item) => {
      const blog = staticData.blogs.find((b) => b.id === Number(postId));
      const newComment = {
        id: Date.now(),
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        ...item
      };
      if (blog) {
        if (!blog.comments) blog.comments = [];
        blog.comments.push(newComment);
        blog.commentsCount = (blog.commentsCount || 0) + 1;
      }
      return newComment;
    }
  }
};
