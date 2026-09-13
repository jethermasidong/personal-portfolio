import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, FileBadge, BookImage } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [activeHash, setActiveHash] = useState('#home');


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
    <header className="sticky top-4 z-50 mx-auto w-[85%] md:w-1/2 mt-4 border border-slate-200 bg-white/70 backdrop-blur-md shadow-lg rounded-2xl">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-6xl">

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
        <div className="flex items-center space-x-1 shrink-0">
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