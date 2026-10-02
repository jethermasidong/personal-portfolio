import type { Project } from '../../types/index';
const IonIcon = 'ion-icon' as any;

export default function Projects() {
  const Projects: Project[] = [
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
        description: 
        "An AI Product Discovery Engine that will help online shoppers to lessen their search time, decision fatigue, and shopping friction.", 
        techStack: ["Vue", "Node JS", "Express", "Google Gemini"], 
        image: "/projects/recom.png", 
        date: "August 2026", 
        link: "https://github.com/jethermasidong/ai-product-discovery-engine"
    },
    { 
        id: 4, 
        title: "Centre", 
        description: 
        "An AI Study Assistant that i developed using Google Gemini Free Tier Model", 
        techStack: ["Vue", "Node JS", "Express", "Google Gemini"], 
        image: "/projects/centre.png", 
        date: "August 2026", 
        link: "https://ai-study-assistant-u3sk.onrender.com"
    },
    { 
        id: 5, 
        title: "Protekboto", 
        description: 
        "Polling/Voting System that will enhance electoral/voting transparency and integrity with the help of blockchain.", 
        techStack: ["React", "Node JS", "Express", "PostgreSQL"], 
        image: "/projects/protekboto.png", 
        date: "Feb 2026", 
        link: ""
    },
    {
      id: 6, 
      title: "Outimein",
      description:
      "An Internship Tracker that will track students/trainees time in and time out.",
      techStack: ["NextJS", "Supabase"],
      image: "/projects/outimein.png",
      date: "May 2026",
      link: ""
    },
    {
      id: 7,
      title: "Primal",
      description: "Web information system designed to seamlessly connect students with qualified tutors, streamlining the search and scheduling process.",
      techStack: ["PHP", "MySQL"],
      image: "",
      date: "December 2026",
      link: "https://github.com/jethermasidong/tutoring-service-system"
    },
    {
      id: 8,
      title: "Kwarta",
      description: "Simple. Smart. Secure. A Minimalist Budget Tracker for Everyday Life .",
      techStack: ["PHP", "Laravel", "MySQL"],
      image: "",
      date: "April 2026",
      link: "https://github.com/jethermasidong/finance-budget-tracker"
    }
  ];

  return (
    <section id="certifications" className="min-h-screen pt-20 animate-page-in pb-15 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300 mb-1 block">All of my projects</span>
          <div className="border-b border-gray-300 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
              Projects<span className="text-blue-600 dark:text-blue-300">.</span>
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {Projects.map((project) => {
            const isInfoOnly = project.id >= 7;

            return (
              <div 
                key={project.id} 
                className={`bg-gray-100 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow dark:bg-black p-5 flex ${
                  isInfoOnly ? 'flex-col justify-between' : 'flex-col md:flex-row gap-5 items-center'
                }`}
              >
                {!isInfoOnly && (
                  <div className="relative w-full md:w-1/2 h-48 md:h-56 bg-gray-200 dark:bg-gray-900 rounded-xl overflow-hidden shrink-0">
                    <img 
                      src={project.image} 
                      alt={`Screenshot of ${project.title}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className={`flex flex-col justify-between w-full h-full py-1 ${!isInfoOnly ? 'md:w-1/2' : ''}`}>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-gray-300 font-extralight text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-row items-center justify-between mb-3">
                      <div className="flex flex-row items-center text-xs gap-1 border text-black border-black/20 rounded-md px-2 py-1 w-fit dark:text-white dark:border-white">
                        <IonIcon name="calendar-outline"></IonIcon>
                        <p>{project.date}</p>
                      </div>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs gap-1 border text-blue-600 dark:text-blue-300 rounded-md px-2 py-1 w-fit transition ease-in-out duration-100 hover:scale-105">
                          Check &#8599;
                        </a>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-0.5 text-[11px] rounded-full text-black border border-black/20 dark:text-white dark:border-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}