import type { Certification, Project, Experience } from "../types";

export const pageSections = ["home", "skills-experience", "projects", "certifications-gallery", "contact"];

export const Techstacks = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML", icon: "logo-html5"},
            { name: "CSS", icon: "logo-css3"},
            { name: "Javascript", icon: "logo-javascript"}, 
            { name: "Typescript", img: "/stack-icons/typescript.png"}, 
            { name: "React", icon: "logo-react" }, 
            { name: "Tailwind CSS", img: "/stack-icons/tailwind.png"}, 
            { name: "Next JS", img: "/stack-icons/nextjs.png"}, 
            { name: "Vite", img: "/stack-icons/vite.png"},
            { name: "Vue.js", img: "/stack-icons/vue.png"}
        ]
    },
    {
        category: "Backend",
        skills: [
            { name: "Node JS", icon: "logo-nodejs" },
            { name: "Express", img: "/stack-icons/express.png" }, 
            { name: "REST API", img: "/stack-icons/restapi.png" }, 
            { name: "PHP", img: "/stack-icons/php.png" }, 
            { name: "Laravel", icon: "logo-laravel" },
            { name: "Python", icon: "logo-python" },
        ]
    },
    {
        category: "Database",
        skills: [
            { name: "MySQL", img: "/stack-icons/mysql.png" },
            { name: "Postgre SQL", img: "/stack-icons/postgre.png" },
            { name: "SQLite", img: "/stack-icons/sqlite.png" },
            { name: "Supabase", img: "/stack-icons/supabase.png" },
        ]
    },
    {
        category: "AI and Blockchain",
        skills: [
            { name: "Ethereum", img: "/stack-icons/ethereum.png" },
            { name: "Solidity", img: "/stack-icons/solidity.png" },
            { name: "Alchemy", img: "/stack-icons/alchemy.png" }, 
            { name: "Google Gemini", img: "/stack-icons/gemini.png"},
        ]
    },
    {
        category: "Cloud & DevOps",
        skills: [
            { name: "Git", icon: "git-branch-outline" },
            { name: "Github", icon: "logo-github" },
            { name: "Cloudinary", img: "/stack-icons/cloudinary.png" }, 
            { name: "Vercel", img: "/stack-icons/vercel.png"},
            { name: "Render", img: "/stack-icons/render.png"}, 
        ]
    },
    {
        category: "Other Tools",
        skills: [
            { name: "Postman", img: "/stack-icons/postman.png" },
            { name: "Figma", icon: "logo-figma" },
            { name: "Canva", img: "/stack-icons/canva.png" },
            { name: "Microsoft Tools", img: "/stack-icons/microsoft.png" },
            { name: "Visual Studio Code", img: "/stack-icons/vscode.png" },
        ]
    }
  ];

export const Projects: Project[] = [
    { 
        id: 1, 
        title: "Verilocal", 
        description: "Blockchain Product Verification Strengthening Artisan's Brand Identity and Integrity.", 
        techStack: ["React", "Node JS", "Express", "MYSQL"], image: "src/assets/projects/verilocal.png", 
        date: "November 2025", 
        link: ""
    },
    { 
        id: 2, 
        title: "UTPRAS Portal", 
        description: "UTPRAS Program Compliance Portal for CAR Regional and Provincial Offices.", 
        techStack: [], 
        image: "src/assets/projects/utpras.png", 
        date: "June 2026", 
        link: ""
    },
    { 
        id: 3, 
        title: "Recom", 
        description: "An AI Product Discovery Engine that will help online shoppers to lessen their search time, decision fatigue, and shopping friction.", 
        techStack: [], 
        image: "src/assets/projects/recom.png", 
        date: "August 2026", 
        link: ""
    }
  ];

export const experiencesData: Experience[] = [
    {
        id: 1,
        role: "Freelance Fullstack Developer",
        date: "August 2026 - Present",
        description: "",
        current: true, 
    },
    {
        id: 2,
        role: "Web Developer",
        date: "June - August 2026",
        description: "Developed a web application for TESDA CAR Regional Office.",
        current: false, 
    },
    {
        id: 3,
        role: "First Hello World!",
        date: "Aug 2023",
        description: "Executed commission-based graphic design projects.",
        current: false, 
    },
  ];

export const Certifications: Certification[] = [
    {
        id: 1,
        title: "NCIII Web Development",
        logo: "src/assets/logo/tesda.png",
        category: "Development",
        issuer: "TESDA",
        link: "",
        date: "August 2026"
    },
    {
        id: 2,
        title: "AI Professional Certificate",
        logo: "src/assets/logo/google.png",
        category: "AI",
        issuer: "Google Coursera",
        link: "https://coursera.org/share/dd0fdb0ef228eba17f58a6adaf730246",
        date: "August 2026"
    },
    {
        id: 3,
        title: "Web Development Fundamentals",
        logo: "src/assets/logo/ibm.png",
        category: "Development",
        issuer: "IBM",
        link: "",
        date: "June 2026"
    },
  ];