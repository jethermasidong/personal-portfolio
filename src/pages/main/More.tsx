import type { Contact } from '../../types/index';

export default function More() {
  const Contacts: Contact[] = [
    { 
        id: 1,
        name: "GitHub",
        description: "Explore my source code and repositories",
        social: "@jethermasidong",
        link: "https://github.com/jethermasidong",
    },
    { 
        id: 2,
        name: "LinkedIn",
        description: "Connect with me professionally",
        social: "Jether Masidong",
        link: "https://www.linkedin.com/in/jethermasidong/",
    },
    { 
        id: 3,
        name: "Email",
        description: "Direct inquiries and opportunities",
        social: "jethermasidong05@gmail.com",
        link: "mailto:jethermasidong05@gmail.com",
    },
    {
        id: 4, 
        name: "Facebook",
        description: "Connect or drop a message socially",
        social: "Jether Masidong",
        link: "https://www.facebook.com/jetherjet.masidong",
    }
  ];

  return (
    <section id="more" className="min-h-screen pt-20 animate-page-in pb-16 w-full">
        <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-300 mb-1 block">Additional</span>
            <div className="border-b border-gray-300 mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
                    More<span className="text-blue-600 dark:text-blue-300">.</span>
                </h2>
            </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="mb-5">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Contacts
            </h2>
        </div>
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800">
          {Contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-900/40 px-2"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors flex items-center gap-2">
                  {contact.name} 
                  <span className="text-xs font-normal text-slate-400 font-mono hidden sm:inline">&rarr;</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">
                  {contact.description}
                </p>
              </div>
              
              <span className="text-xs font-mono text-slate-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-full w-fit">
                {contact.social}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}