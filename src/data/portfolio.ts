import type { Certification, Project, Experience } from "../types";


export const Techstacks = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "Javascript" }, 
            { name: "Typescript" }, 
            { name: "React" }, 
            { name: "Tailwind CSS" }, 
            { name: "Next JS" }, 
            { name: "Vite" },
            { name: "Vue.js" }
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node JS" },
            { name: "Express" }, 
            { name: "REST API" }, 
            { name: "PHP" }, 
            { name: "Laravel" },
            { name: "Python" },
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "MySQL" },
            { name: "Postgre SQL" },
            { name: "SQLite" },
            { name: "Supabase" },
        ]
    },
    {
        category: "AI and Blockchain",
        skills: [
            { name: "Ethereum" },
            { name: "Solidity" },
            { name: "Alchemy" }, 
            { name: "Google Gemini" },
        ]
    },
    {
        category: "Cloud & DevOps",
        skills: [
            { name: "Git" },
            { name: "Github" },
            { name: "Cloudinary" }, 
            { name: "Vercel" },
            { name: "Render" }, 
        ]
    },
    {
        category: "Other Tools",
        skills: [
            { name: "Postman" },
            { name: "Figma" },
            { name: "Canva" },
            { name: "Microsoft Tools" },
            { name: "Visual Studio Code" },
        ]
    }
  ];

export const Projects: Project[] = [
    { 
        id: 1, 
        title: "Verilocal", 
        description: "Blockchain Product Verification Strengthening Artisan's Brand Identity and Integrity.", 
        techStack: ["React", "Node JS", "Express", "MYSQL"], image: "/projects/verilocal.png", 
        date: "November 2025", 
        link: "https://theverilocal.online"
    },
    { 
        id: 2, 
        title: "UTPRAS Portal", 
        description: "UTPRAS Program Compliance Portal for CAR Regional and Provincial Offices.", 
        techStack: ["Vue", "Node JS", "Express", "PostgreSQL"], 
        image: "/projects/utpras.png", 
        date: "June 2026", 
        link: ""
    },
    { 
        id: 3, 
        title: "Recom", 
        description: "An AI Product Discovery Engine that will help online shoppers to lessen their search time, decision fatigue, and shopping friction.", 
        techStack: ["Vue", "Node JS", "Express", "PostgreSQL"], 
        image: "/projects/recom.png", 
        date: "August 2026", 
        link: "https://github.com/jethermasidong/ai-product-discovery-engine"
    }
  ];

export const experiencesData: Experience[] = [
    {
        id: 1,
        role: "Freelance Fullstack Developer",
        date: "August 2026 - Present",
        description: "Freelance Full-Stack Developer currently available for new projects, specializing in modern web applications, scalable APIs, and AI integrations.",
        current: true, 
    },
    {
        id: 2,
        role: "Web Developer Intern",
        date: "June - August 2026",
        description: "Developed a google sheet and web application project for TESDA CAR Regional Office.",
        current: false, 
    },
    {
        id: 3,
        role: "First Hello World!",
        date: "August 2023 - August 2026",
        description: "Executed commission-based graphic design projects and learn about full stack web development.",
        current: false, 
    },
  ];

export const Certifications: Certification[] = [
    {
        id: 1,
        title: "NCIII Web Development",
        logo: "/logo/tesda.png",
        category: "Development",
        issuer: "TESDA",
        link: "",
        date: "August 2026"
    },
    {
        id: 2,
        title: "AI Professional Certificate",
        logo: "/logo/google.png",
        category: "AI",
        issuer: "Google Coursera",
        link: "https://coursera.org/share/dd0fdb0ef228eba17f58a6adaf730246",
        date: "August 2026"
    },
    {
        id: 3,
        title: "Data Analytics Level III",
        logo: "/logo/tesda.png",
        category: "Data Analytics",
        issuer: "Blue Phenix TC / TESDA",
        link: "",
        date: "September 2026"  
    },
  ];

