import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Code, Briefcase, Mail, FileBadge, BookImage, CodeXml } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [activeHash, setActiveHash] = useState('#home');


  const NavItems = [
    { name: 'Home', path: '#home', icon: Home },
    { name: 'Skills', path: '#skills', icon: CodeXml },
    { name: 'Projects', path: '#projects', icon: Code },
    { name: 'Experience', path: '#experience', icon: Briefcase },
  ];

  const SoloNavItems = [
    { name: 'Certifications', path: '/certifications', icon: FileBadge },
    { name: 'Gallery', path: '/gallery', icon: BookImage },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  useEffect(() => {
    if (location.hash) {
      setActiveHash(location.hash);
    } else if (location.pathname === '/') {
      setActiveHash('#home');
    } 
  }, [location]);


  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    path: string
  ) => {
    e.preventDefault();

    if (location.pathname !== '/') {
    navigate(`/${path}`);
    return;
  }

  const targetId = path.replace('#', '');
  const element = document.getElementById(targetId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth'});
    window.history.pushState(null, '', path);
    setActiveHash(path);
  }
};

  return (
    <header className="sticky top-4 z-50 mx-auto w-[95%] md:w-2/3 mt-4 border border-slate-200 bg-white/70 backdrop-blur-md shadow-lg rounded-2xl">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">

        <div className="flex items-center shrink-0 pl-2">
          <div className="relative inline-block" onClick={(e) => handleScroll(e, '#home')}>
            <img 
              src="/profile-online.png" 
              alt="Jether Profile" 
              className="w-10 h-10 border border-slate-200 rounded-full object-cover"
            />  
            <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
        </div>


        <nav className="flex items-center flex-1 justify-center gap-1 px-4 overflow-x-auto no-scrollbar">
          {NavItems.map((item) => {
            const isActive = activeHash === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className={`flex items-center px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <Icon 
                  className={`w-4 h-4 mr-2 ${isActive ? 'text-blue-700' : 'text-slate-500'}`} 
                  strokeWidth={2}
                />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center space-x-1 shrink-0">
          <nav className="flex items-center flex-1 justify-center gap-1 px-4 overflow-x-auto no-scrollbar">
            {SoloNavItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <Icon 
                    className={`w-4 h-4 mr-2 ${isActive ? 'text-blue-700' : 'text-slate-500'}`} 
                    strokeWidth={2}
                  />
                  <span className="hidden md:inline">{item.name}</span>
                </Link>
              );
            })}
          </nav>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
            title="GitHub"
          >
            <img 
              src="/logo-github.svg" 
              alt="GitHub" 
              className="w-5 h-5"
            /> 
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
            title="LinkedIn"
          >
            <img 
              src="/logo-linkedin.svg" 
              alt="LinkedIn" 
              className="w-5 h-5"
            /> 
          </a>
          <a 
            href="mailto:jethermasidong05@gmail.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
            title="Email Me"
          >
            <Mail className="w-5 h-5 text-slate-500" />
          </a>
        </div>
      </div>
    </header>
  );
}