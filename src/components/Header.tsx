import React from 'react';

interface HeaderProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ theme, setTheme }: HeaderProps) {
  const isDark = theme === 'dark';

  const toggleDarkMode = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="sticky top-4 z-50 mx-auto w-[92%] md:w-1/2 mt-4 border border-slate-200 dark:border-white/80 backdrop-blur-md shadow-lg rounded-2xl transition-colors duration-300">
      <div className="flex items-center justify-between px-3 md:px-4 py-2.5 mx-auto max-w-6xl">
        
        <div className="font-extrabold text-sm md:text-base text-slate-900 dark:text-white">
          Jether
        </div>

        <div className="flex flex-row text-[11px] sm:text-xs gap-2 sm:gap-4 text-blue-600 dark:text-blue-300 font-medium">
          <a 
            className="hover:text-black dark:hover:text-blue-600 transition-colors" 
            href="/"
            onMouseEnter={() => import('../pages/Homepage')}
          >
            Home
          </a>
          <a 
            className="hover:text-black dark:hover:text-blue-600 transition-colors" 
            href="/projects" 
            onMouseEnter={() => import('../pages/main/Projects')}
          >
            Projects
          </a>
          <a 
            className="hover:text-black dark:hover:text-blue-600 transition-colors" 
            href="/certifications"
            onMouseEnter={() => import('../pages/main/Certifications')}
          >
            Certifications
          </a>
          <a 
            className="hover:text-black dark:hover:text-blue-600 transition-colors" 
            href="/more"
            onMouseEnter={() => import('../pages/main/More')}
          >
            More
          </a>
        </div>

        <div className="flex items-center shrink-0">
          <button
            onClick={toggleDarkMode}
            className="group relative inline-flex items-center justify-center p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
            aria-label="Toggle theme"
          >
            <svg
              className={`w-4 h-4 md:w-5 md:h-5 text-black transition-transform duration-500 absolute ${
                isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>

            <svg
              className={`w-4 h-4 md:w-5 md:h-5 text-blue-600 transition-transform duration-500 absolute ${
                isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>

            <span className="absolute inset-0 rounded-xl bg-amber-400/20 dark:bg-indigo-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-4 h-4 md:w-5 md:h-5 opacity-0" />
          </button>
        </div>

      </div>
    </header>
  );
}