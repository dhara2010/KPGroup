// Simulated Blog Database with dynamic content and initial comments
export const INITIAL_POSTS = [
  {
    id: 1,
    title: "Hello world!",
    slug: "hello-world",
    date: "February 24, 2026",
    month: "February 2026",
    author: "kpglobalbusiness",
    commentsCount: 1,
    category: "Uncategorized",
    isTerminalStyle: true,
    excerpt: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    content: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing! We are thrilled to launch this news terminal to document developer breakthroughs, updates, and ecosystem guides.",
    comments: [
      {
        id: 1,
        author: "A WordPress Commenter",
        date: "February 24, 2026",
        content: "Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard. Commenter avatars come from Gravatar."
      }
    ]
  },
  {
    id: 2,
    title: "How to a Organize Files at a Design Agency",
    slug: "how-to-a-organize-files-at-a-design-agency",
    date: "December 19, 2024",
    month: "December 2024",
    author: "kpglobalbusiness",
    commentsCount: 0,
    category: "Blog",
    image: "/blog_3d_fluid.png",
    excerpt: "Many business owners and marketing teams find themselves overwhelmed with their files and assets. If you are struggling to keep track of your brand assets, design agencies...",
    content: "Many business owners and marketing teams find themselves overwhelmed with their files and assets. If you are struggling to keep track of your brand assets, design agencies can help you establish a structured directory layout. In this guide, we dive into the folder naming conventions, cloud asset storage solutions, version control structures, and tagging mechanisms that keep modern corporate environments clean, optimized, and productive.",
    tags: ["SEO Strategy", "Agency Operations"],
    comments: [],
    contentSections: [
      {
        type: "paragraph",
        text: "Many business owners and marketing teams find themselves overwhelmed with their files and assets. If you are struggling to keep track of your brand assets, design agencies can help you establish a structured directory layout. In this guide, we dive into the folder naming conventions, cloud asset storage solutions, version control structures, and tagging mechanisms that keep modern corporate environments clean, optimized, and productive."
      },
      {
        type: "heading",
        text: "Understanding the Founder's Vision"
      },
      {
        type: "paragraph",
        text: "No story starts with a perfect plan for building business, but the vision for our partnering brands is always clear. It can be difficult to balance scaling growth with productivity, which is why a structured layout is crucial."
      },
      {
        type: "list",
        items: [
          "To help brands transition through various stages of growth",
          "To solve their architectural, design and engineering challenges",
          "To capture the dynamic synergy between different parts of the business models in play"
        ]
      },
      {
        type: "quote",
        text: "THE RADICAL TRANSFORMATION OF HEALTHCARE BY ARTIFICIAL INTELLIGENCE WILL BE DRIVEN BY TWO CRITICAL REALITIES: DIAGNOSIS ACCURACY AND VALUE GENERATION FOR SYSTEMATIC HEALTH SYSTEM STAKEHOLDERS.",
        author: "Robert Murphy"
      },
      {
        type: "gallery",
        images: ["/blog_designing.png", "/blog_meeting.png"]
      },
      {
        type: "heading",
        text: "Be Specific in Your Terms and Conditions"
      },
      {
        type: "paragraph",
        text: "Every project has specific requirements and limits. Clear boundaries avoid scope creep, design changes, and unnecessary iterations. It is crucial to have written parameters to define what is included and what is not in the scope of the design agency's work. Make sure all files are tagged correctly to avoid search delays."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "paragraph",
        text: "Starting your business venture is filled with complexities, from determining a brand's strategy to navigating through financial hurdles and team recruitment. However, by building strong architectural asset directories, and focusing on practical solutions, design agencies can make a significant impact on operations efficiency."
      }
    ]
  },
  {
    id: 3,
    title: "Designing Experiences that Leave a Lasting Impression",
    slug: "designing-experiences-that-leave-lasting-impression",
    date: "December 19, 2024",
    month: "December 2024",
    author: "kpglobalbusiness",
    commentsCount: 1,
    category: "Feature Presentation",
    image: "/blog_designing.png",
    excerpt: "Many business owners and marketing teams find themselves overwhelmed with their files and assets. If you are struggling to keep track of your brand assets, design agencies...",
    content: "Many business owners and marketing teams find themselves overwhelmed with their files and assets. If you are struggling to keep track of your brand assets, design agencies know how to design user interfaces and physical branding materials that stick in a client's memory. From immersive color palettes to unified animation behaviors, discover the strategies to build customer journeys that leave an impact.",
    comments: [
      {
        id: 1,
        author: "Design Enthusiast",
        date: "December 20, 2024",
        content: "Outstanding insights! The importance of cohesive animation behaviors is often underestimated."
      }
    ]
  },
  {
    id: 4,
    title: "Empowering Businesses with Cuttingedge Technology",
    slug: "empowering-businesses-with-cuttingedge-technology",
    date: "December 19, 2024",
    month: "December 2024",
    author: "kpglobalbusiness",
    commentsCount: 1,
    category: "Predictive Analytics",
    image: "/blog_meeting.png",
    excerpt: "Many business owners and marketing teams find themselves overwhelmed with their files and assets. If you are struggling to keep track of your brand assets, design agencies...",
    content: "Many business owners and marketing teams find themselves overwhelmed with their files and assets. If you are struggling to keep track of your brand assets, design agencies leverage automated integration platforms, AI predictions, and cloud computing. We explain how adopting software-first practices reduces overhead, accelerates delivery pipelines, and positions startup teams to scale securely.",
    comments: [
      {
        id: 1,
        author: "Tech Explorer",
        date: "December 21, 2024",
        content: "The scalability aspects discussed here are very helpful for early stage SaaS startups."
      }
    ]
  }
];

export const RECENT_COMMENTS = [
  { author: "A WordPress Commenter", postTitle: "Hello world!", postId: 1 },
  { author: "Design Enthusiast", postTitle: "Designing Experiences that Leave a Lasting Impression", postId: 3 },
  { author: "Tech Explorer", postTitle: "Empowering Businesses with Cuttingedge Technology", postId: 4 }
];
