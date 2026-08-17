import React from 'react';

const IonIcon = 'ion-icon' as any;
export default function Homepage() {


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
      category: "AI and Web3 Integrations",
      skills: [
        { name: "Ethereum", img: "/stack-icons/ethereum.png" },
        { name: "Solidity", img: "/stack-icons/solidity.png" },
        { name: "Alchemy", img: "/stack-icons/alchemy.png" }, 
        { name: "GeminiAI API", img: "/stack-icons/gemini.png"},
      ]
    },
    
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Git", icon: "git-branch-outline" },
        { name: "Github", icon: "logo-github" },
        { name: "Figma", icon: "logo-figma" },
        { name: "Cloudinary", img: "/stack-icons/cloudinary.png" }, //
        { name: "Vercel", img: "/stack-icons/vercel.png"},
        { name: "Render", img: "/stack-icons/render.png"}, //
      ]
    },
    {
      category: "Other Tools",
      skills: [
        { name: "Postman", img: "/stack-icons/postman.png" },
        { name: "Canva", img: "/stack-icons/canva.png" },
        { name: "Microsoft Tools", img: "/stack-icons/microsoft.png" },
        { name: "Visual Studio Code", img: "/stack-icons/vscode.png" },
      ]
    }
  ];




  return (
    <div className="flex flex-col gap-24 pb-24 mt-20">
      
      <section id="home" className="min-h-[80vh] flex flex-col justify-center pt-10 -mt-20">
        <div className="flex flex-row justify-center items-center">
          <img src="/profile.png" alt="Profile" className="border-dashed px-2 py-2 border border-gray-300 rounded-md w-75 h-75" />
          <div className="flex flex-col ml-1">
            <h1 className="text-7xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
              Hi, I'm Jether Masidong. <br />
              <span className="text-blue-600">Full-Stack Developer.</span>
            </h1>
          </div>
          
        </div>
        <h2 className="text-xl font-display font-bold text-slate-900 mt-10">About Me</h2>
        <div className=" p-8 rounded-2xl border border-slate-300 mt-5">
          <p className="text-slate-600 mb-4">
            I am a Full-Stack Developer with experience building web applications, APIs, and scalable systems. I am currently a third-year Information Technology student majoring in Web Development at the University of the Cordilleras.
          </p>
          <p className="text-slate-600">
            At present, I am learning more about emerging technologies such as blockchain (Web3) and artificial intelligence (AI). I am particularly interested in these fields because I want to expand my technical skills and explore innovative solutions for real-world problems.
          </p>
        </div>
      </section>


      <section id="skills" className="min-h-[80vh] pt-28">
        <h2 className="text-xl font-display font-bold text-slate-900 mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Techstacks.map((stack, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-400 shadow-xl hover:shadow-md transition-shadow">
                <h3 className="text-lg font-display font-bold mb-4 text-slate-800">{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-slate-100 text-sm font-medium rounded-full text-slate-600 border border-slate-200 flex flex-row gap-1 items-center justify-center"
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
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-display font-bold mb-2">VeriLocal</h3>
            <p className="text-slate-600 text-sm mb-4">
              A blockchain-based capstone system designed to register and verify physical products efficiently.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-100 text-xs font-medium rounded-full text-slate-600">React</span>
              <span className="px-3 py-1 bg-slate-100 text-xs font-medium rounded-full text-slate-600">Solidity</span>
            </div>
          </div>
        </div>
      </section>


      <section id="experience" className="min-h-[80vh] pt-20">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Experience</h2>
        <div className="border-l-2 border-slate-200 pl-6 ml-3 space-y-8">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full left-[-1.95rem] top-1.5 border-4 border-white"></div>
            <h3 className="text-lg font-bold text-slate-900">Freelance Web Developer</h3>
            <p className="text-sm text-slate-500 mb-2">Present</p>
            <p className="text-slate-600">Developing custom responsive sites and applications.</p>
          </div>
          <div className="relative">
            <div className="absolute w-3 h-3 bg-slate-300 rounded-full left-[-1.95rem] top-1.5 border-4 border-white"></div>
            <h3 className="text-lg font-bold text-slate-900">Freelance Creative Designer</h3>
            <p className="text-sm text-slate-500 mb-2">Previous</p>
            <p className="text-slate-600">Executed commission-based graphic design projects.</p>
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