import type { Certification } from '../../types/index';

export default function Certifications() {
  const certificationsData: Certification[] = [
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
      title: "Web Development Fundamentals",
      logo: "/logo/ibm.png",
      category: "Development",
      issuer: "IBM",
      link: "https://www.credly.com/earner/earned/badge/4628e26c-53de-4193-89ea-eddaf3c078e2",
      date: "June 2026"
    },
    {
      id: 4,
      title: "AI Fundamentals",
      logo: "/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "https://coursera.org/verify/MTGS7CD5RGQE",
      date: "August 2026"
    },
    {
      id: 5,
      title: "AI for App Building",
      logo: "/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/VC3O0FYHM8U3",
      date: "August 2026"
    },
    {
      id: 6,
      title: "AI for App Deployment",
      logo: "/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/C44ETAMPEJ0W",
      date: "August 2026"
    },
    {
      id: 7,
      title: "AI For Brainstorming and Planning",
      logo: "/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/81TUBD9U69X6",
      date: "August 2026"
    },
    {
      id: 8,
      title: "AI for Data Analysis",
      logo: "/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/LXMQVP1O7TAZ",
      date: "Aug 2026"
    },
    {
      id: 9,
      title: "AI for Research and Insights",
      logo: "/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/JXMP5VCINCU8",
      date: "Aug 2026"
    },
    {
      id: 10,
      title: "AI for Writing and Communicating",
      logo: "/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/DPFWUYJAFGV4",
      date: "Aug 2026"
    },
    {
      id: 11,
      title: "AI for Content Creation",
      logo: "/logo/google.png",
      category: "AI",
      issuer: "Google Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/32X9VUKNW6O7",
      date: "Aug 2026"
    },
    {
      id: 12,
      title: "Data Analytics Level III",
      logo: "/logo/tesda.png",
      category: "Data Analytics",
      issuer: "Blue Phenix TC / TESDA",
      link: "",
      date: "September 2026"  
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
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white border-b border-gray-300 mb-5 w-fit">
        Certifications<span className="text-blue-600 dark:text-blue-300">.</span>
      </h2>

      <div className="flex flex-col gap-10 w-full pb-10">
        {Object.entries(groupedCertifications).map(([category, certs]) => (
          <div key={category} className="w-full">
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4 pb-1 border-b border-gray-300 w-fit dark:text-white/50">
              {category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {certs.map((cert) => (
                <div 
                  key={cert.id} 
                  className="flex-1 bg-gray-100/50 p-6 rounded-2xl border border-black/20 dark:bg-black dark:border-white shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow"
                >
                  <div>
                    <div className="mb-4">
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 mb-2 dark:text-white">
                      {cert.title}
                    </h4>
                    <div className="flex flex-row items-center gap-2 border border-black/20 px-3 py-1 w-fit rounded-full dark:border-white">
                      <img src={cert.logo} alt={`${cert.title} logo`} className="w-4 h-4 object-contain" />
                      <p className="text-xs text-slate-600 dark:text-white">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-row items-center gap-2 mb-2 mt-4 justify-between">
                    <p className="text-xs text-slate-400 font-medium dark:text-white/50">
                      Issued: {cert.date}
                    </p>
                    <a href={cert.link} className="text-xs text-blue-600 dark:text-blue-300 font-medium transition ease-in-out duration-100 hover:scale-100 hover:-translate-y-1 cursor-pointer">
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