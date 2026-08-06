// src/pages/Homepage.tsx

export default function Homepage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      
      <section id="home" className="min-h-[80vh] flex flex-col justify-center pt-10">
        <h1 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
          Hi, I'm Jether. <br />
          <span className="text-blue-600">Full-Stack Developer.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-8">
          I specialize in building responsive web applications, backend systems, and Web3 technologies. Based in Baguio City.
        </p>
        <div>
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View My Work
          </a>
        </div>
      </section>


      <section id="about" className="min-h-screen pt-20">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">About Me</h2>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <p className="text-slate-600 mb-4">
            I am an Information Technology student and freelance developer with a strong foundation in modern web frameworks like React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-slate-600">
            I also have experience as a graphic designer and am currently exploring blockchain development.
          </p>
        </div>
      </section>


      <section id="projects" className="min-h-screen pt-20">
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


      <section id="experience" className="min-h-[50vh] pt-20">
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