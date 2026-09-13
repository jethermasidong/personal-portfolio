import { useState } from "react";

const imageModules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG}', { 
  eager: true, 
  query: '?url',
  import: 'default' 
});

const IonIcon = 'ion-icon' as any;
import GithubHeatmap from "../components/GithubHeatmap";
import ScrollIndicator from "../components/ScrollIndicator";
import { Techstacks, Projects, experiencesData, Certifications, pageSections } from "../data/portfolio.ts";

export default function Homepage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = Object.keys(imageModules).map((path, index) => {
    const imageUrl = imageModules[path] as string; 
    return {
      id: index + 1,
      src: imageUrl,
      alt: path.split('/').pop()?.split('.')[0] || `Gallery image ${index + 1}`
    };
  });

  const nextSlide = () => {
    if (galleryItems.length <= 5) return;
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    if (galleryItems.length <= 5) return;
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };


  return (
    <div className="flex flex-col gap-20">
      <ScrollIndicator sections={pageSections} />
      
      <section id="home" className="flex flex-col justify-center min-h-[80vh] animate-page-in">
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-center items-center">
            <img src="/profile.png" alt="Profile" className="border px-2 py-2 border-gray-300 w-95 h-102" />
            <div className="flex flex-col ml-5 border border-gray-300 p-5">
              <div className="text-5xl md:text-3xl font-display font-extrabold text-slate-900 mb-2 tracking-tight h-auto">
                <div className="flex flex-row justify-between items-center border border-gray-300 p-5 mb-4">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <h1 className="text-2xl">Jether Masidong</h1>
                    <img src="verified.png" alt="Profile" className="w-4 h-4 mt-1" />
                  </div>
                  <span className="text-blue-600 text-2xl">Full-Stack Developer</span>
                </div>
                <div className="border border-gray-300 p-5 w-157 mt-2 mb-2">
                  <p className="text-slate-600 text-sm font-extralight tracking-wide">
                    I am a Full-Stack Developer with experience building web applications, APIs,
                    and scalable systems. At present, I am learning more about emerging technologies 
                    such as blockchain (Web3) and artificial intelligence (AI). I am particularly 
                    interested in these fields because I want to expand my technical skills and explore
                    innovative solutions for real-world problems.
                  </p>
                  <p className="text-slate-600 text-sm font-extralight tracking-wide mt-1">
                    I am a Full-Stack Developer with experience building web applications, APIs,
                    and scalable systems. At present, I am learning more about emerging technologies 
                    such as blockchain (Web3) and artificial intelligence (AI). I am particularly
                    and scalable systems. At present, I am learning more about emerging technologies 
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center text-black border-black/20 border w-fit px-5 py-2 gap-1">
                  <IonIcon name="pin-outline"></IonIcon>
                  <span className="text-xs">Baguio City, Philippines.</span>
                </div>
                <div className="flex flex-row items-center text-black border-black/20 border w-fit px-5 py-2 gap-1">
                  <IonIcon name="call-outline"></IonIcon>
                  <span className="text-xs">09622635703</span>
                </div>
                <div className="flex flex-row items-center text-black border-blue-600 border w-fit px-5 py-2 transition ease-in-out duration-100 hover:scale-100 hover:-translate-y-1 gap-1">
                  <IonIcon name="logo-linkedin"></IonIcon>
                  <span className="text-xs">LinkedIn</span>
                </div>
                <a href="" className="flex flex-row items-center border text-black border-blue-600 w-fit px-5 py-2 transition ease-in-out duration-100 hover:scale-100 hover:-translate-y-1 gap-1">
                  <IonIcon name="document-text-outline"></IonIcon>
                  <span className="text-xs">Download CV</span>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border border-gray-300 p-4 mt-4 items-center shadow-sm w-full">
            <div className="md:col-span-5 bg-white border border-slate-200 p-4 shadow-sm h-full flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">Education</span>
              <h4 className="text-sm font-bold text-slate-900 leading-tight">Bachelor of Science in Information Technology</h4>
              <p className="text-xs text-slate-600 mt-1">University of the Cordilleras | 2023 – 2026</p>
            </div>
            <div className="md:col-span-7 grid grid-cols-3 gap-3">
              <div className="bg-white border border-slate-200 p-3 flex flex-col items-center justify-center text-center shadow-sm">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-0.5 mt-2.5">
                  8+
                </h4>
                <p className="text-slate-600 text-sm font-medium mb-2.5">Total Projects</p>
              </div>

              <div className="bg-white border border-slate-200 p-3 flex flex-col items-center justify-center text-center shadow-sm">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-0.5 mt-2.5">
                  40+
                </h4>
                <p className="text-slate-600 text-sm font-medium mb-2.5">Github Repos</p>
              </div>
              
              <div className="bg-white border border-slate-200 p-3 flex flex-col items-center justify-center text-center shadow-sm">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-0.5 mt-2.5">
                  33+
                </h4>
                <p className="text-slate-600 text-sm font-medium mb-2.5">Tech Stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills-experience" className="min-h-[80vh] pt-20 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-lg font-display font-bold text-slate-900 mb-4">Expertise & Background</h2>
            <div className="p-4 border border-double border-gray-300 shadow-lg rounded-md grow">
              {Techstacks.map((stack, index) => (
                <div key={index} className={index !== Techstacks.length - 1 ? "mb-4" : ""}>
                  <h3 className="text-sm font-display font-bold mb-2 text-slate-800">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {stack.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-2.5 py-0.5 bg-white text-xs font-medium rounded-full text-slate-600 border border-slate-200 flex flex-row gap-1 items-center justify-center"
                      >
                        {skill.icon && (
                          <span className="flex items-center text-black text-sm">
                            <IonIcon name={skill.icon}></IonIcon>
                          </span>
                        )}
                        {skill.img && (
                          <img 
                            src={skill.img} 
                            alt={`${skill.name} icon`} 
                            className="w-3.5 h-3.5 object-contain" 
                          />
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                  {index !== Techstacks.length - 1 && (
                    <hr className="my-3 border-t border-gray-300/60" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col md:mt-11">
            <div className="w-full">
              <div className="flex flex-col border border-gray-300 p-5 rounded-md shadow-lg bg-gray-100 grow">
                {experiencesData.map((exp, index) => {
                  const isEven = index % 2 === 0; 
                  const isLast = index === experiencesData.length - 1; 

                  return (
                    <div key={exp.id} className="relative w-full pb-8">                 
                      <div 
                        className={`absolute top-0 w-full h-full border-slate-300 border-dotted ${
                          isEven 
                            ? 'border-l-2 border-b-2' 
                            : 'border-r-2 border-b-2' 
                        } ${isLast ? 'border-b-0' : ''}`}
                      ></div>

                      <div className={`relative flex pt-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
                        <div 
                          className={`absolute top-6 w-3 h-3 rounded-full border-2 bg-white z-10 ${
                            exp.current ? 'border-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.4)]' : 'border-slate-300'
                          } ${isEven ? '-left-1.5' : '-right-1.5'}`}
                        ></div>

                        <div className={`w-[70%] sm:w-[55%] bg-white p-4 rounded-xl border border-slate-200 shadow-sm z-10 hover:shadow-md transition-shadow ${
                          isEven ? 'ml-6 text-left' : 'mr-6 text-right'
                        }`}>
                          <h3 className="text-sm font-bold text-slate-900 mb-0.5">{exp.role}</h3>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-2">{exp.date}</p>
                          <p className="text-slate-600 text-xs leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-[80vh] pt-18">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-xl font-display font-bold text-slate-900 mb-3">
            Featured Projects
          </h2>
          <a href="/projects" className="text-sm text-blue-600 px-3 hover:text-blue-300 transition ease-in-out duration-100 hover:scale-100 hover:-translate-y-1">
            All Projects &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`bg-gray-100 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col mt-10 overflow-hidden ${
                index === 0 ? '-rotate-3 translate-y-2' : index === 2 ? 'rotate-3 translate-y-2' : ''
              }`}
            >
              <div className="relative h-56 w-full bg-gray-100 overflow-hidden p-4">
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`} 
                  className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col grow">
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
        <div className="flex flex-col items-center justify-between w-full">
          <div className="flex flex-row items-center justify-between w-full max-w-5xl mt-10 px-10 border-b border-gray-200 p-2">
            <h2 className="text-sm font-display text-slate-900">
              Github
            </h2>
            <h2 className="text-sm font-display italic text-slate-900">
              @jethermasidong
            </h2>
          </div>
          <GithubHeatmap />
        </div>
      </section>

      <section id="certifications-gallery" className="min-h-[80vh] pt-20 pb-20">
        <div className="flex flex-col items-center justify-between w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <h2 className="text-xl font-display font-bold text-slate-900">
              Certifications
            </h2>
            <a href="/certifications" className="text-sm text-blue-600 px-3 hover:text-blue-300 transition ease-in-out duration-100 hover:scale-100 hover:-translate-y-1">
              All Certifications &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {Certifications.map((cert, index) => (
              <div 
                key={cert.id} 
                className="bg-gray-100 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col mt-10 overflow-hidden"
              >
                <div className="flex-1 bg-gray-500/20 p-6 rounded-2xl border border-black/20 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
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
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center justify-between w-full mt-20 mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900">
              Gallery
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full border border-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full border border-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {galleryItems.length === 0 ? (
            <p className="text-slate-500 self-start">No images found in the gallery folder.</p>
          ) : (
            <div className="relative w-full overflow-hidden py-4">
              <div className="flex items-center justify-center gap-4 transition-all duration-500 ease-in-out">
                {[-2, -1, 0, 1, 2].map((offset) => {
                  const itemIndex = (currentIndex + offset + galleryItems.length) % galleryItems.length;
                  const item = galleryItems[itemIndex];
                  const isEdge = Math.abs(offset) === 2;
                  
                  return (
                    <div 
                      key={`${item.id}-${offset}`}
                      onClick={() => {
                        if (offset === 0) setSelectedImage(item.src);
                        else if (offset > 0) nextSlide();
                        else prevSlide();
                      }}
                      className={`relative aspect-square overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-gray-100 cursor-pointer transition-all duration-500 ${
                        offset === 0 
                          ? 'w-1/3 md:w-1/4 z-20 scale-105 shadow-xl opacity-100 filter-none' 
                          : Math.abs(offset) === 1
                          ? 'w-1/4 md:w-1/5 z-10 opacity-75 blur-[1px] hover:blur-none'
                          : 'w-1/5 md:w-1/6 z-0 opacity-40 blur-[3px] hidden md:block'
                      }`}
                    >
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-sm font-medium uppercase tracking-wider">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img 
              src={selectedImage} 
              alt="Preview" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}

      <section id="contact" className="min-h-[80vh] pt-20 pb-20">
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-xl font-display font-bold text-slate-900 mb-8">
            Github Heatmap
          </h2>
          <GithubHeatmap />
        </div>
      </section>
    </div>
  );
}