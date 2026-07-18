// Each project: id, slug, title, description, image, technologies, features, challenges, github, live
const projects = [
  {
    id: 1,
    slug: "github-ai-analyzer",
    title: "GitHub AI Analyzer",
    description:
      "A full-stack web application that analyzes GitHub profiles using the Gemini API to surface intelligent, structured insights.",
    image:
      "https://res.cloudinary.com/dub1jfilx/image/upload/v1784378094/Screenshot_2026-07-18_180439_f2qcip.png",
    technologies: ["React", "Appwrite", "Gemini API", "REST APIs"],
    features: [
      "AI-powered analysis of GitHub profiles using the Gemini API",
      "Secure user authentication and data persistence with Appwrite",
      "Dashboard for saving usernames and tracking past profile analyses",
      "Dynamic, responsive UI built with React for seamless data rendering",
    ],
    challenges: [
      "Structuring Gemini API responses into consistent, readable insights",
      "Designing a data model in Appwrite to track analysis history per user",
    ],
    github: "https://github.com/svnshsahu/Github-Analyzer",
    live: "https://github-analyzer-zeta-seven.vercel.app/",
    Deploy:true ,
    Demo : true
  },
  {
    id: 2,
    slug: "currency-converter",
    title: "Currency Converter Web Application",
    description:
      "A React-based currency converter supporting real-time conversion between global currencies, such as USD to INR.",
    image:
      "https://res.cloudinary.com/dub1jfilx/image/upload/v1784377831/Screenshot_2026-07-18_175712_gcrxgc.png",
    technologies: ["React", "REST APIs"],
    features: [
      "Real-time conversion between global currencies",
      "Live exchange rate data fetched from a currency exchange API",
      "Responsive interface built for both desktop and mobile use",
    ],
    challenges: [
      "Handling API rate limits and stale data gracefully",
      "Formatting and rounding currency values precisely across locales",
    ],
    github: "https://github.com/svnshsahu/React/tree/main/06currency",
    live: "currency",
    Deploy:false,
    Demo : true
  },
  {
    id: 3,
    slug: "hostel-management-system",
    title: "Hostel Management System",
    description:
      "A robust student record and room allocation system built with Java and JDBC, applying strong OOP principles.",
    image:
      "https://res.cloudinary.com/dub1jfilx/image/upload/v1784382685/Screenshot_2026-07-18_192107_gr1rba.png",
    technologies: ["Java", "JDBC", "SQL", "OOP"],
    features: [
      "Student record management with persistent storage via JDBC",
      "Room allocation logic built around modular OOP design",
      "Scalable architecture designed for long-term maintainability",
    ],
    challenges: [
      "Modeling allocation rules cleanly using object-oriented design",
      "Keeping database access consistent and safe from SQL injection",
    ],
    github: "https://github.com/svnshsahu/Hostel-Management-System",
    live: "",
    Deploy:false,
    Demo:false
  },
  {
    id: 4,
    slug: "weather-checking-webpage",
    title: "Weather Checking Webpage",
    description:
      "A weather application built with JavaScript and REST APIs to fetch and display real-time weather information.",
    image:
      "https://res.cloudinary.com/dub1jfilx/image/upload/v1784378193/Screenshot_2026-07-18_180621_yrxwb5.png",
    technologies: ["JavaScript", "REST APIs", "HTML5", "CSS3"],
    features: [
      "Real-time weather lookup by city using a public weather API",
      "Clean, minimal UI focused on readability of key weather metrics",
    ],
    challenges: [
      "Handling invalid city names and failed API requests gracefully",
    ],
    github: "https://github.com/svnshsahu/javascript-projects/tree/main/WeatherAPI",
    live: "weather",
    Deploy:false ,
    Demo : true
  },
  {
    id: 5,
    slug: "spotify-clone",
    title: "Spotify Clone",
    description:
      "A recreation of Spotify's user interface built with HTML and CSS, focused on responsive layouts and modern UI design.",
    image:
      "https://res.cloudinary.com/dub1jfilx/image/upload/v1784379622/Screenshot_2026-07-18_183005_tvqcjo.png",
    technologies: ["HTML5", "CSS3"],
    features: [
      "Pixel-conscious recreation of Spotify's core layout and navigation",
      "Fully responsive design across mobile, tablet, and desktop",
    ],
    challenges: [
      "Matching complex nested layouts using pure CSS, without a framework",
    ],
    github: "https://github.com/svnshsahu/Spotify",
    live: "https://spotify-jet-nine.vercel.app/",
    Deploy:true,
    Demo : true
  },
  {
    id: 6,
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    description:
      "A modern, fully responsive personal portfolio showcasing projects, technical skills, certifications, and achievements with smooth navigation and an elegant UI.",
    image:
      "https://res.cloudinary.com/dub1jfilx/image/upload/v1784397264/Screenshot_2026-07-18_232405_iqiakg.png", // Replace with your portfolio screenshot
    technologies: [
      "React",
      "Tailwind CSS",
      "React Router",
      "JavaScript",
    ],
    features: [
      "Responsive design optimized for desktop, tablet, and mobile devices",
      "Dedicated project pages with detailed descriptions and live demos",
      "Interactive skills, certifications, and achievements sections",
      "Modern UI with smooth animations and intuitive navigation",
    ],
    challenges: [
      "Designing a professional and visually appealing user interface",
      "Managing routing between internal project pages and externally deployed projects",
    ],
    github: "https://github.com/svnshsahu/Shivansh_Portfolio", // Update with your repository
    live: "https://www.shivanshsahu.website/",        // Update after deployment
    Deploy: true,
    Demo : true
  }
];

export default projects;
