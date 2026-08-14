import mongoose from "mongoose";
import dotenv from "dotenv";

import Job from "./src/models/Job.js";
import FAQ from "./src/models/FAQ.js";
import Service from "./src/models/Service.js";
import Achievement from "./src/models/Achievement.js";
import Metric from "./src/models/Metric.js";
import Reason from "./src/models/Reason.js";
import Ecosystem from "./src/models/Ecosystem.js";
import Testimonial from "./src/models/Testimonial.js";
import Partner from "./src/models/Partner.js";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const runSeed = async () => {
  await connectDB();
  console.log('Seeding started...');


  try {
    const JOBS_data = [
  {
    id: "tech-1",
    title: "Senior Full Stack Engineer",
    department: "Tech & Engineering",
    type: "Full-Time",
    location: "Remote / Hybrid (Mumbai)",
    experience: "5+ Years",
    salary: "Competitive",
    description: "Lead the development of next-generation infrastructure for our digital global trading platform. Work with React, Next.js, Node.js, and high-performance databases.",
    requirements: [
      "Expertise in modern JavaScript/TypeScript, React/Next.js and Node.js.",
      "Experience with scale, performance optimization, and serverless architectures.",
      "Strong understanding of database design (SQL/NoSQL) and cloud architecture (AWS/GCP)."
    ]
  },
  {
    id: "tech-2",
    title: "AI / ML Integration Specialist",
    department: "Tech & Engineering",
    type: "Full-Time",
    location: "Remote (Global)",
    experience: "3+ Years",
    salary: "Industry Standard",
    description: "Design and implement custom machine learning pipelines and LLM integrations to power smart features across our business ecosystem.",
    requirements: [
      "Practical experience integrating OpenAI, Anthropic, or open-source LLMs.",
      "Proficient in Python, LangChain, vector databases, and REST/GraphQL APIs.",
      "Strong understanding of prompt engineering and model evaluation."
    ]
  },
  {
    id: "academy-1",
    title: "Lead Technical Mentor",
    department: "Skill Academy",
    type: "Full-Time",
    location: "Surat, Gujarat",
    experience: "3+ Years",
    salary: "Competitive",
    description: "Guide and inspire the next cohort of technical graduates. Develop curriculum modules, run hands-on lab sessions, and conduct code reviews.",
    requirements: [
      "Solid background in software engineering (Full-Stack, Mobile, or Data Science).",
      "Passion for teaching, coaching, and mentoring junior talent.",
      "Excellent communication and presentation skills."
    ]
  },
  {
    id: "media-1",
    title: "Creative Video Editor & Producer",
    department: "Media & Marketing",
    type: "Full-Time",
    location: "Hybrid (Mumbai)",
    experience: "2+ Years",
    salary: "Industry Standard",
    description: "Produce highly engaging video content for our global media network. Edit reels, short docs, podcasts, and digital advertisement creatives.",
    requirements: [
      "Mastery of Premiere Pro, After Effects, DaVinci Resolve, or similar tools.",
      "Strong portfolio demonstrating motion graphics, sound design, and pacing.",
      "Ability to thrive in a fast-paced creative environment."
    ]
  },
  {
    id: "media-2",
    title: "Growth Marketing Lead",
    department: "Media & Marketing",
    type: "Full-Time",
    location: "Remote / Mumbai",
    experience: "4+ Years",
    salary: "Competitive",
    description: "Drive user acquisition and engagement campaigns across paid search, social platforms, and community channels.",
    requirements: [
      "Proven track record scaling B2B/B2C SaaS or educational platforms.",
      "Expertise in SEO/SEM, performance marketing, and digital attribution models.",
      "Data-driven mindset with advanced analytical skills."
    ]
  },
  {
    id: "ops-1",
    title: "Business Development Manager",
    department: "Business Operations",
    type: "Full-Time",
    location: "Surat / Remote",
    experience: "3+ Years",
    salary: "Base + High Commissions",
    description: "Build strategic partnerships and expand our global business community. Source new leads, pitch corporate programs, and manage partner relationships.",
    requirements: [
      "Experience in B2B sales, corporate relations, or business development.",
      "Outstanding negotiation, presentation, and contract-management skills.",
      "Self-driven attitude with a focus on hitting growth milestones."
    ]
  }
];
    if (Job !== Partner) {
      await Job.deleteMany({});
    }
    await Job.insertMany(JOBS_data);
    console.log('Job seeded.');
  } catch (e) {
    console.log("Error seeding Job", e.message);
  }

  try {
    const faqs_data = [
  {
    question: "What services does KP Global Business provide?",
    answer: "We offer a comprehensive suite of digital and business services including custom Web Development, Mobile App Engineering, Brand Identity, Strategic Marketing, AI Integrations, Global Placement/Jobs, and Deep Skill Academy Training."
  },
  {
    question: "Who can benefit from your services?",
    answer: "Anyone from early-stage startups and independent entrepreneurs to scaling mid-sized businesses and massive global enterprises looking to modernize their technology stack, build a strong brand presence, or acquire specialized digital talent."
  },
  {
    question: "Do you provide services internationally?",
    answer: "Yes! We are proud to support international clients globally. We have specialized procedures to handle cross-border communication, localized compliance, multi-currency projects, and global delivery standards."
  },
  {
    question: "Do you offer customized solutions for businesses?",
    answer: "Absolutely. Every partnership begins with scoping your specific requirements. We tailor all aspects of our service—including timelines, technology stacks, budgets, and scaling protocols—to your business goals."
  },
  {
    question: "How can I contact your team for inquiries?",
    answer: "The fastest way to reach us is by filling out our interactive 5-Step Contact Funnel right above this section. Alternatively, you can drop us an email, and our strategy team will reach back within 24 hours."
  },
  {
    question: "Are your services suitable for startups and small businesses?",
    answer: "Yes, we are highly startup-friendly. We offer custom, localized, and scaled pricing options starting from budget-friendly levels to help young businesses get off the ground, launch their MVP, and scale without huge upfront capital."
  },
  {
    question: "What makes KP Global Business different from others?",
    answer: "KP Global is a premium business acceleration ecosystem integrating 5 strategic divisions: KP Global IT Solutions, KP Global Media – Entrepreneur Journey, KP Global Jobs, KP Global Academy of Skills, and KP Global Business Community. This allows us to support businesses and professionals holistically across technology, trusted networking, media visibility, talent solutions, and skill development."
  }
];
    if (FAQ !== Partner) {
      await FAQ.deleteMany({});
    }
    await FAQ.insertMany(faqs_data);
    console.log('FAQ seeded.');
  } catch (e) {
    console.log("Error seeding FAQ", e.message);
  }

  try {
    const CAPABILITIES_data = [
  {
    num: "01",
    icon: "Cpu",
    title: "Build stronger digital systems",
    desc: "Custom websites, applications, digital platforms & business automation."
  },
  {
    num: "02",
    icon: "Users",
    title: "Connect with trusted businesses",
    desc: "Pan-India entrepreneur network, referral collaborations & Investor Connect."
  },
  {
    num: "03",
    icon: "Radio",
    title: "Build authority and visibility",
    desc: "Entrepreneur stories, founder interviews, success features & media branding."
  },
  {
    num: "04",
    icon: "Briefcase",
    title: "Find and develop the right talent",
    desc: "Structured talent platform for faster, verified & efficient corporate hiring."
  },
  {
    num: "05",
    icon: "GraduationCap",
    title: "Build future-ready skills",
    desc: "Industry-relevant skill programs & market-aligned practical certifications."
  }
];
    if (Service !== Partner) {
      await Service.deleteMany({});
    }
    await Service.insertMany(CAPABILITIES_data);
    console.log('Service seeded.');
  } catch (e) {
    console.log("Error seeding Service", e.message);
  }

  try {
    const achievements_data = [
    {
      year: "2024",
      title: "1M Entrepreneurs Ecosystem Launch",
      desc: "Successfully launched our flagship community initiative, connecting founders globally."
    },
    {
      year: "2023",
      title: "Top IT Services Provider Award",
      desc: "Recognized for excellence in delivering scalable enterprise digital platforms."
    },
    {
      year: "2022",
      title: "Expansion of Media Division",
      desc: "Entrepreneur Journy crossed major milestones in global readership and founder stories."
    },
    {
      year: "2021",
      title: "Inception of KP Global Group",
      desc: "The unified vision began, integrating technology and talent under one corporate roof."
    }
  ];
    if (Achievement !== Partner) {
      await Achievement.deleteMany({});
    }
    await Achievement.insertMany(achievements_data);
    console.log('Achievement seeded.');
  } catch (e) {
    console.log("Error seeding Achievement", e.message);
  }

  try {
    const METRICS_data = [
  {
    target: 5,
    suffix: "+",
    label: "Years of Operational Excellence",
    sub: "Established corporate track record",
    icon: "Award"
  },
  {
    target: 50,
    suffix: "+",
    label: "Enterprise Projects Delivered",
    sub: "Custom digital & IT systems",
    icon: "Layers"
  },
  {
    target: 5,
    suffix: "",
    label: "Strategic Business Divisions",
    sub: "IT, Media, Jobs, Academy & Community",
    icon: "Building"
  },
  {
    target: 100,
    suffix: "%",
    label: "Pan-India Reach & Growth",
    sub: "Trusted network collaborations",
    icon: "Globe2"
  }
];
    if (Metric !== Partner) {
      await Metric.deleteMany({});
    }
    await Metric.insertMany(METRICS_data);
    console.log('Metric seeded.');
  } catch (e) {
    console.log("Error seeding Metric", e.message);
  }

  try {
    const reasons_data = [
    {
      title: "Integrated Ecosystem",
      desc: "We don't just offer services; we offer a unified framework where technology, talent, and media work together to accelerate your growth.",
      icon: "Target"
    },
    {
      title: "Pan-India Network",
      desc: "Access a verified community of founders, investors, and professionals across India, built on trust and mutual acceleration.",
      icon: "Users2"
    },
    {
      title: "Proven Execution",
      desc: "Over 50+ enterprise platforms delivered and multiple strategic divisions successfully scaled with a focus on tangible ROI.",
      icon: "Rocket"
    },
    {
      title: "Corporate Trust",
      desc: "A secure, transparent, and legally compliant corporate structure ensuring your business partnerships are built on a solid foundation.",
      icon: "ShieldCheck"
    }
  ];
    if (Reason !== Partner) {
      await Reason.deleteMany({});
    }
    await Reason.insertMany(reasons_data);
    console.log('Reason seeded.');
  } catch (e) {
    console.log("Error seeding Reason", e.message);
  }

  try {
    const cards_data = [
    {
      num: "01",
      title: "KP GLOBAL IT SOLUTIONS",
      sub: "Digital Foundation",
      desc: "Custom websites, applications & digital platforms with automated system operations.",
      icon: "MonitorSmartphone",
      className: "md:col-span-2 md:row-span-2",
      image: "/eco_it_bg.webp",
      href: "https://kpgbit.kpglobalbusiness.com/"
    },
    {
      num: "02",
      title: "KP GLOBAL MEDIA",
      sub: "Authority & Visibility",
      desc: "Entrepreneur stories, interviews & personal founder branding.",
      icon: "Radio",
      className: "md:col-span-1",
      image: "/eco_media_bg.webp",
      href: "https://entrepreneurjouryny.com/"
    },
    {
      num: "03",
      title: "KP GLOBAL JOBS",
      sub: "Talent Acquisition",
      desc: "Structured talent platform connecting verified talent with growth businesses.",
      icon: "Briefcase",
      className: "md:col-span-1",
      image: "/eco_careers_bg.webp",
      href: "https://jobs.kpglobalbusiness.com/"
    },
    {
      num: "04",
      title: "KP GLOBAL ACADEMY",
      sub: "Future-Ready Skills",
      desc: "Practical industry skill programs & market-aligned certifications.",
      icon: "GraduationCap",
      className: "md:col-span-1",
      image: "/eco_academy_bg.webp",
      href: "https://academy.kpglobalbusiness.com/"
    },
    {
      num: "05",
      title: "KP GLOBAL BUSINESS COMMUNITY",
      sub: "Trust-Based Networking",
      desc: "Pan-India entrepreneur network, referral collaborations, and Investor Connect.",
      icon: "Network",
      className: "md:col-span-1",
      image: "/eco_community_bg.webp",
      href: "https://kpgbc.kpglobalbusiness.com/"
    }
  ];
    if (Ecosystem !== Partner) {
      await Ecosystem.deleteMany({});
    }
    await Ecosystem.insertMany(cards_data);
    console.log('Ecosystem seeded.');
  } catch (e) {
    console.log("Error seeding Ecosystem", e.message);
  }

  try {
    const REELS_data = [
  { id:1,  name:"Avani Parmar",   role:"Skill Academy Graduate",  videoSrc:"/videos/Avani_parmar.mp4", accent:"#8b5cf6", quote:"KP Global completely transformed my perspective on what's possible. The mentorship and community here are unparalleled — I've never felt more supported." },
  { id:2,  name:"Bhavya Chauhan", role:"IT Solutions, KP Global", videoSrc:"/videos/Bhavya_Chauhan.mp4", accent:"#6c3bff", quote:"Incredible growth. The best decision I ever made for my career." },
  { id:3,  name:"Drashti Sangani",role:"Business Community",      videoSrc:"/videos/Drashti_sangani.mp4", accent:"#8b5cf6", quote:"Joining KP Global Business Community opened doors I never knew existed. I found my network, my mentors, and my purpose here." },
  { id:4,  name:"Gadhvi Dhara",   role:"Skill Academy, KP Global",videoSrc:"/videos/Gadhvi_dhara.mp4", accent:"#6c3bff", quote:"The curriculum is designed by industry leaders. I graduated ready to lead, not just follow. Truly life-changing." },
  { id:5,  name:"Krupa",          role:"Media Network Partner",   videoSrc:"/videos/Krupa-final-video.mp4", accent:"#8b5cf6", quote:"KP Global Media Network helped me reach an audience I only dreamed of." },
  { id:6,  name:"Moksh Shah",     role:"IT Solutions Graduate",   videoSrc:"/videos/Moksh_Shah.mp4", accent:"#6c3bff", quote:"From zero experience to full-stack developer in months. KP Global's IT track is the fastest path forward." },
  { id:7,  name:"Pranjal Chavda", role:"Business Community Lead", videoSrc:"/videos/Pranjal_chavda.mp4", accent:"#8b5cf6", quote:"The collaborative culture at KP Global is infectious. Every interaction teaches me something new about leadership and growth." },
  { id:8,  name:"Suhani Kanani",  role:"Skill Academy Graduate",  videoSrc:"/videos/Suhani_kanani.mp4", accent:"#6c3bff", quote:"KP Global's practical approach ensured I was industry-ready from day one." },
  { id:9,  name:"Tapti Bar",      role:"KP Careers Alumnus",      videoSrc:"/videos/Tapti-Bar.mp4", accent:"#8b5cf6", quote:"Incredible growth. The best partnership we've ever had. KP Global delivered beyond every expectation." },
  { id:10, name:"Vishva Chorela", role:"Business Community",      videoSrc:"/videos/Vishva-Chorela.mp4", accent:"#6c3bff", quote:"The global network and mindset shifts I experienced at KP Global are priceless." },
  { id:11, name:"Sujal",          role:"IT Solutions Graduate",   videoSrc:"/videos/sujal.mp4", accent:"#8b5cf6", quote:"Real projects, real mentors, real results. KP Global prepared me for challenges no textbook ever could." },
];
    if (Testimonial !== Partner) {
      await Testimonial.deleteMany({});
    }
    await Testimonial.insertMany(REELS_data);
    console.log('Testimonial seeded.');
  } catch (e) {
    console.log("Error seeding Testimonial", e.message);
  }

  try {
    const supportersRow1_data = [
  { name: "Zoho Premium Partner", logo: "/logos/Zoho-premium-partner.webp", type: "Ecosystem" },
  { name: "KP Global IT Solutions", logo: "/logos/KP-Global-IT-Solutions-logo.webp", type: "Ecosystem" },
  { name: "KP Global Academy of Skills", logo: "/logos/Untitled-design-4.webp", type: "Ecosystem" },
  { name: "Aequitas Infotech", logo: "/logos/Aequitas-Infotech.webp", type: "Ecosystem" },
  { name: "Weapplinse Technologies", logo: "/logos/Untitled-design-6.webp", type: "Ecosystem" },
  { name: "1 Million Entrepreneurs", logo: "/logos/1MEIF.webp", type: "Ecosystem" },
  { name: "VyapaarJagat", logo: "/logos/vyapaarjagat.webp", type: "Ecosystem" }
];
    if (Partner !== Partner) {
      await Partner.deleteMany({});
    }
    await Partner.insertMany(supportersRow1_data);
    console.log('Partner seeded.');
  } catch (e) {
    console.log("Error seeding Partner", e.message);
  }

  try {
    const supportersRow2_data = [
  { name: "PeersGlobal", logo: "/logos/peersglobal.webp", type: "Ecosystem" },
  { name: "Greenpreneur", logo: "/logos/greenpreneur.webp", type: "Ecosystem" },
  { name: "Fempreneur", logo: "/logos/fempreneur.webp", type: "Ecosystem" },
  { name: "Entrepreneur Journy", logo: "/logos/entrepreneurjouryny.webp", type: "Ecosystem" },
  { name: "KP Global Jobs", logo: "/logos/KP_Global_Jobs-removebg-preview.webp", type: "Ecosystem" },
  { name: "KP Global Business Community", logo: "/logos/KP-Global-Business-Community-Entrepreneurs-3.webp", type: "Ecosystem" },
  { name: "KP Global Network", logo: "/logos/Untitled_design__5_-removebg-preview.webp", type: "Ecosystem" }
];
    if (Partner !== Partner) {
      await Partner.deleteMany({});
    }
    await Partner.insertMany(supportersRow2_data);
    console.log('Partner seeded.');
  } catch (e) {
    console.log("Error seeding Partner", e.message);
  }

  console.log('Seeding complete.');
  process.exit();
};

runSeed();