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
    {
      id: 4,
      title: "AI Fundamentals",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "August 2026"
    },
    {
      id: 5,
      title: "AI for App Building",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "August 2026"
    },
    {
      id: 6,
      title: "AI for App Deployment",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "August 2026"
    },
    {
      id: 7,
      title: "AI For Brainstorming and Planning",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "August 2026"
    },
    {
      id: 8,
      title: "AI for Data Analysis",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "Aug 2026"
    },
    {
      id: 9,
      title: "AI for Research and Insights",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "Aug 2026"
    },
    {
      id: 10,
      title: "AI for Writing and Communicating",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "Aug 2026"
    },
    {
      id: 11,
      title: "AI for Content Creation",
      logo: "src/assets/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "",
      date: "Aug 2026"
    }
  ];

  const groupedCertifications = certificationsData.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, Certification[]>)

  return (
    <section id="certifications" className="min-h-[50vh] pt-20 animate-page-in">
      <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">
        Certifications
      </h2>
      
      <div className="flex flex-col gap-10 w-full pb-10">
        {Object.entries(groupedCertifications).map(([category, certs]) => (
          <div key={category} className="w-full">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-2 pb-1">
              {category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {certs.map((cert) => (
                <div 
                  key={cert.id} 
                  className="flex-1 bg-gray-500/20 p-6 rounded-2xl border border-black/20 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow"
                >
                  <div>
                    <div className="mb-4">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-md border border-blue-500/50">
                        {cert.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 mb-2">
                      {cert.title}
                    </h4>
                    <div className="flex flex-row items-center gap-2 border border-black/20 px-3 py-1 w-fit rounded-full">
                      <img src={cert.logo} alt={`${cert.title} logo`} className="w-4 h-4 object-contain" />
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
          </div>
        ))}
      </div>
    </section>
  );
}