import type { Project } from '../../types/index';
const IonIcon = 'ion-icon' as any;

export default function Projects() {
  const Projects: Project[] = [
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
        techStack: ["Vue", "Node JS", "Express", "PostgreSQL"], 
        image: "src/assets/projects/utpras.png", 
        date: "June 2026", 
        link: ""
    },
    { 
        id: 3, 
        title: "Recom", 
        description: 
        "An AI Product Discovery Engine that will help online shoppers to lessen their search time, decision fatigue, and shopping friction.", 
        techStack: ["Vue", "Node JS", "Express", "Google Gemini"], 
        image: "src/assets/projects/recom.png", 
        date: "August 2026", 
        link: ""
    },
    { 
        id: 4, 
        title: "Centre", 
        description: 
        "An AI Study Assistant that i developed using Google Gemini Free Tier Model", 
        techStack: ["Vue", "Node JS", "Express", "Google Gemini"], 
        image: "src/assets/projects/centre.png", 
        date: "August 2026", 
        link: ""
    },
    { 
        id: 5, 
        title: "Protekboto", 
        description: 
        "Polling/Voting System that will enhance electoral/voting transparency and integrity with the help of blockchain.", 
        techStack: ["React", "Node JS", "Express", "PostgreSQL"], 
        image: "src/assets/projects/protekboto.png", 
        date: "Feb 2026", 
        link: ""
    },
  ];

  return (
    <section id="certifications" className="min-h-screen pt-20 animate-page-in pb-15">
      <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        
        {Projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-100 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col overflow-hidden"
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
                      className="px-3 py-1 text-xs rounded-full text-black border border-black/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}