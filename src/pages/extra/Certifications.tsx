import type { Certification } from '../../types/index';

export default function Certifications() {
  const certificationsData: Certification[] = [
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
      title: "AI Fundamentals",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
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
    {
      id: 4,
      title: "AI For Brainstorming and Planning",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "August 2026"
    },
    {
      id: 5,
      title: "AI For Data Analysis",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "August 2026"
    },
    {
      id: 6,
      title: "AI for Research and Insights",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "August 2026"
    },
    {
      id: 7,
      title: "AI for Writing and Communicating",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "August 2026"
    },
  ];

  return (
    <section id="certifications" className="min-h-[50vh] pt-20">
      <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        
        {certificationsData.map((cert) => (
          <div 
            key={cert.id} 
            className="flex-1 bg-gray-500/20 p-6 rounded-2xl border border-black/20 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow "
          >
            <div>
              <div className="mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-500/50">
                  {cert.category}
                </span>
              </div>
              <h3 className="font-bold text-md text-slate-900 mb-2">
                {cert.title}
              </h3>
              <div className="flex flex-row items-center gap-2 border border-black/20 px-3 py-1 w-fit rounded-full">
                <img src={cert.logo} alt={`${cert.title} logo`} className="w-5 h-5 object-contain" />
                <p className="text-xs text-slate-600">
                  {cert.issuer}
                </p>
              </div>
            </div>
            
            <div className="flex flex-row items-center gap-2 mb-2 mt-4 justify-between">
              <p className="text-xs text-slate-400 font-medium">
                Issued: {cert.date}
              </p>
              <a href={cert.link} className="text-xs text-blue-600 font-medium transition ease-in-out duration-100 hover:scale-100 hover:-translate-y-1 cursor-pointer">
                Verify &rarr;
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}