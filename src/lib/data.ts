export const personalInfo = {
  name: "Naim Uddin Arafat",
  title: "Full-Stack JS & React Native Engineer",
  tagline: "Building fast, scalable products for web and mobile.",
  bio: "I'm a self-taught full-stack developer from Bangladesh, specializing in React Native and Next.js. Over the past 18 months, I've gone from learning JavaScript to shipping production-level e-commerce platforms across web and mobile. I care deeply about performance, clean architecture, and building things that real users actually use. Currently open to remote opportunities and international freelance projects.",
  email: "arfatahsan60@gmail.com",
  github: "https://github.com/ArfatChowdhury",
  linkedin: "https://www.linkedin.com/in/naim-uddin-arafat",
  behance: "https://www.behance.net/arfatChowdhury",
  phone: "+8801624667262",
  availability: "Open to remote opportunities",
  location: "Bangladesh (Remote-first)",
  cvUrl: "/cv-naim-arafat.pdf",
};

export const services = [
  {
    icon: "mobile",
    title: "Mobile Development",
    description: "Cross-platform React Native apps with smooth UX, offline support, and native performance. Expo-ready.",
    tags: ["React Native", "Expo", "TypeScript"],
  },
  {
    icon: "web",
    title: "Web Platforms",
    description: "Full-featured Next.js web apps with SSR, TypeScript, and production-grade architecture.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: "backend",
    title: "Backend & APIs",
    description: "Scalable REST APIs with Node.js, MongoDB, and Firebase. Auth, storage, real-time — covered.",
    tags: ["Node.js", "MongoDB", "Firebase"],
  },
];

export const projects = [
  {
    id: "nemo-ecommerce",
    title: "Nemo E-Commerce Platform",
    shortDesc: "Production MERN e-commerce — 50+ products, role-based auth, admin dashboard. Deployed live.",
    description: "A fully-featured e-commerce platform with product listing, search, filtering, cart, wishlist, role-based access control, and an admin dashboard. Built for real-world use with performance and scalability in mind.",
    image: "/projects/nemo-web.png",
    liveUrl: "https://nemo-e-commerce-web-app.vercel.app/",
    codeUrl: "https://github.com/ArfatChowdhury/nemo-e-commerce-web-app",
    tags: ["Next.js", "TypeScript", "Redux Toolkit", "Firebase", "Tailwind", "DaisyUI"],
    featured: true,
    type: "Web Platform",
    slug: "nemo-ecommerce",
    stats: ["50+ Products", "Role-based Auth", "Admin Dashboard", "Live Deployed"],
  },
  {
    id: "mobile-ecommerce",
    title: "E-Commerce Mobile App",
    shortDesc: "React Native e-commerce with infinite scroll (200+ items) and FlatList performance optimization.",
    description: "A full-stack cross-platform mobile e-commerce app. Built with React Native frontend and Node.js/Express REST API backend. Features infinite scroll product listing, real-time updates, and smooth FlatList performance.",
    image: "/projects/mobile-ecommerce.png",
    liveUrl: null,
    codeUrl: "https://github.com/ArfatChowdhury/nemo-e-commerce-app",
    tags: ["React Native", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    featured: true,
    type: "Mobile App",
    slug: "mobile-ecommerce",
    stats: ["200+ Items", "Infinite Scroll", "Cross-platform", "REST API"],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker — React Native",
    shortDesc: "Cross-platform expense tracker with Google Auth, offline persistence, and analytics dashboard.",
    description: "A cross-platform expense tracking app with add, view, and total expense features. Uses Google Sign-In API with AsyncStorage for offline persistence. Includes an analytics dashboard for spending insights.",
    image: "/projects/expense-tracker.png",
    liveUrl: null,
    codeUrl: "https://github.com/ArfatChowdhury/arafat-native-expense-tracker",
    tags: ["React Native", "Expo", "Firebase", "AsyncStorage", "React Navigation"],
    featured: false,
    type: "Mobile App",
    slug: "expense-tracker",
    stats: ["Google Auth", "Offline Sync", "Analytics", "Multi-category"],
  },
];

export const skills = {
  "Frontend / Mobile": [
    { name: "React Native", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "React", icon: "SiReact" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "DaisyUI", icon: "SiDaisyui" },
    { name: "Redux Toolkit", icon: "SiRedux" },
    { name: "Expo", icon: "SiExpo" },
  ],
  "Backend & Database": [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Firebase", icon: "SiFirebase" },
    { name: "REST APIs", icon: "SiPostman" },
    { name: "GraphQL", icon: "SiGraphql" },
  ],
  "Tools & Workflow": [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
    { name: "Android Studio", icon: "SiAndroidstudio" },
    { name: "Vercel", icon: "SiVercel" },
    { name: "Figma", icon: "SiFigma" },
  ],
};

export const experience = [
  {
    title: "Full-Stack Developer (Self-employed)",
    period: "Sep 2025 — Present",
    projects: "Nemo E-Commerce, Mobile E-Commerce App",
    bullets: [
      "Built and deployed production-grade MERN e-commerce platform with 50+ products, real-time Firebase auth, and admin dashboard",
      "Developed cross-platform React Native mobile app with FlatList-optimized infinite scroll (200+ items)",
      "Implemented role-based access control, cart/wishlist, environment config, and CI/CD via Vercel",
    ],
    stack: ["Next.js", "React Native", "Firebase", "MongoDB", "Redux Toolkit"],
  },
  {
    title: "React Native Developer (Learning & Building)",
    period: "Sep 2025 — Oct 2025",
    projects: "Expense Tracker App",
    bullets: [
      "Built a cross-platform expense tracker with Google Auth, AsyncStorage offline persistence",
      "Designed intuitive UI with category breakdowns and total expense analytics dashboard",
      "Implemented React Navigation with planned EditDelete and analytics screens",
    ],
    stack: ["React Native", "Expo", "Firebase", "AsyncStorage", "React Navigation"],
  },
];
