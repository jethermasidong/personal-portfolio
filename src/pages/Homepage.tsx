
const IonIcon = 'ion-icon' as any;
import type { Project } from "../types";
import type { Experience  } from "../types";
import GithubHeatmap from "../components/GithubHeatmap";
import ScrollIndicator from "../components/ScrollIndicator";
export default function Homepage() {

  const pageSections = ["home", "skills", "projects", "experience", "contact"];

  const Techstacks = [
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


  const Projects: Project[] = [
    { id: 1, title: "Verilocal", description: "Blockchain Product Verification Strengthening Artisan's Brand Identity and Integrity.", techStack: ["React", "Node JS", "Express", "MYSQL"], image: "src/assets/projects/verilocal.png", date: "November 2025", link: ""},
    { id: 2, title: "UTPRAS Portal", description: "UTPRAS Program Compliance Portal for CAR Regional and Provincial Offices.", techStack: [], image: "src/assets/projects/utpras.png", date: "June 2026", link: ""},
    { id: 1, title: "Recom", description: "An AI Product Discovery Engine that will help online shoppers to lessen their search time, decision fatigue, and shopping friction.", techStack: [], image: "src/assets/projects/recom.png", date: "August 2026", link: ""}
  ];

  const experiencesData: Experience[] = [
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




  return (
    <div className="flex flex-col gap-20">
      <ScrollIndicator sections={pageSections} />
      
      <section id="home" className="flex flex-col justify-center min-h-[80vh]">
        <div className="flex flex-row justify-center items-center">
          <img src="/profile.png" alt="Profile" className="border-dashed px-2 py-2 border border-gray-300 rounded-md w-95 h-105" />
          <div className="flex flex-col ml-5">
            <h1 className="text-7xl md:text-5xl font-display font-extrabold text-slate-900 mb-2 tracking-tight">
              Hi, I'm Jether Masidong. <br />
              <span className="text-blue-600 text-2xl">Full-Stack Developer</span>
              <p className="text-slate-600 text-lg font-light mt-2">
                I am a Full-Stack Developer with experience building web applications, APIs,<br /> 
                and scalable systems. At present, I am learning more about emerging technologies <br />
                such as blockchain (Web3) and artificial intelligence (AI). I am particularly <br />
                interested in these fields because I want to expand my technical skills and explore <br />
                innovative solutions for real-world problems.
              </p>
            </h1>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row items-center text-black border-black/20 border w-fit px-3 py-1 rounded-full">
              <IonIcon name="pin-outline"></IonIcon>
              <span className="text-xs">Baguio City, Philippines.</span>
              </div>
              <a href="" className="flex flex-row items-center border text-blue-600 w-fit px-3 py-1 rounded-full transition ease-in-out duration-100 hover:scale-100 hover:-translate-y-1">
                <IonIcon name="document-text-outline"></IonIcon>
                <span className="text-xs">Download CV</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-2 flex flex-col items-center justify-center text-center shadow-sm">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-1">
                  8+
                </h4>
                <p className="text-slate-600 text-sm font-medium">Total Projects</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-2 flex flex-col items-center justify-center text-center shadow-sm">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-1">
                  40+
                </h4>
                <p className="text-slate-600 text-sm font-medium">Github Repositories</p>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-2 flex flex-col items-center justify-center text-center shadow-sm">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-1">
                  33+
                </h4>
                <p className="text-slate-600 text-sm font-medium">Tech Stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="skills" className="min-h-[80vh] pt-28">
        <h2 className="text-xl font-display font-bold text-slate-900 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Techstacks.map((stack, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl border border-double border-gray-400 shadow-xl hover:shadow-md transition-shadow">
                <h3 className="text-lg font-display font-bold mb-4 text-slate-800">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-white text-sm font-medium rounded-full text-slate-600 border border-slate-200 flex flex-row gap-1 items-center justify-center"
                  >
                    {skill.icon && (
                      <span className="flex items-center text-black text-base">
                        <IonIcon name={skill.icon}></IonIcon>
                      </span>
                    )}
                    {skill.img && (
                      <img 
                        src={skill.img} 
                        alt={`${skill.name} icon`} 
                        className="w-4 h-4 object-contain" 
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section id="projects" className="min-h-[80vh] pt-28">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-xl font-display font-bold text-slate-900 mb-8">
            Featured Projects
          </h2>
          <a href="/projects" className="text-sm text-blue-600 px-3 hover:text-blue-300 transition ease-in-out duration-100 hover:scale-100 hover:-translate-y-1">
            All Projects &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-100 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
            >
              <div className="relative h-56 w-full bg-gray-100 overflow-hidden p-4">
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`} 
                  className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-display font-bold mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 font-extralight text-sm mb-4 grow">
                  {project.description}
                </p>

                <div className="flex flex-row items-center justify-between mb-3">
                  <div className="flex flex-row items-center text-xs gap-1 border text-black border-black/20 rounded-md px-2 py-1 w-fit">
                    <IonIcon name="calendar-outline"></IonIcon>
                    <p>{project.date}</p>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs gap-1 border text-blue-600 rounded-md px-2 py-1 w-fit transition ease-in-out duration-100 hover:scale-100 hover:-translate-y-1">
                    Check &rarr;
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium rounded-full text-black border border-black/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <GithubHeatmap />
        </div>
      </section>


      <section id="experience" className="min-h-[80vh] pt-20">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col">
            
            {experiencesData.map((exp, index) => {
              const isEven = index % 2 === 0; 
              const isLast = index === experiencesData.length - 1; 

              return (
                <div key={exp.id} className="relative w-full pb-16">                  
                  <div 
                    className={`absolute top-0 w-full h-full border-slate-300 border-dotted ${
                      isEven 
                        ? 'border-l-2 border-b-2' 
                        : 'border-r-2 border-b-2' 
                    } ${isLast ? 'border-b-0' : ''}`}
                  ></div>

                  <div className={`relative flex pt-8 ${isEven ? 'justify-start' : 'justify-end'}`}>
                    
                    <div 
                      className={`absolute top-12 w-4 h-4 rounded-full border-4 bg-white z-10 ${
                        exp.current ? 'border-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]' : 'border-slate-300'
                      } ${isEven ? '-left-2.25' : '-right-2.25'}`}
                    ></div>

                    <div className={`w-[85%] sm:w-[70%] bg-white p-6 rounded-2xl border border-slate-200 shadow-sm z-10 hover:shadow-md transition-shadow ${
                      isEven ? 'ml-8 text-left' : 'mr-8 text-right'
                    }`}>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{exp.role}</h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">{exp.date}</p>
                      <p className="text-slate-600 text-sm">{exp.description}</p>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>


      <section id="contact" className="min-h-[50vh] pt-20 pb-20">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Get In Touch</h2>
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
          <p className="text-slate-700 mb-6">
            Currently looking for new opportunities and internships. My inbox is always open!
          </p>
          <a href="mailto:your-email@example.com" className="inline-flex px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Say Hello
          </a>
        </div>
      </section>

    </div>
  );
}