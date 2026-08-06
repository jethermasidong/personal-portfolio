import { Link, useLocation } from 'react-router-dom';
import { Home, Code, Briefcase, Mail, FileBadge, BookImage, CodeXml} from 'lucide-react';


export default function Sidebar() {
  const location = useLocation();

  const HeroNavItem = [
    { name: 'Home', path: '/', icon: Home},
  ];

  const MainNavItems = [
    { name: 'Skills', path: '/skills', icon: CodeXml},
    { name: 'Projects', path: '/projects', icon: Code },
    { name: 'Experience', path: '/experience', icon: Briefcase },
  ];

  const SecondaryNavItems = [
    { name: 'Certifications', path: '/certifications', icon: FileBadge},
    { name: 'Gallery', path: '/gallery', icon: BookImage},
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <aside className="h-235 border border-slate-200 bg-white/70 backdrop-blur-md rounded-xl shadow-xl flex mx-5 my-6 flex-col overflow-hidden">
      <div className="flex flex-col grow px-4 py-6 overflow-y-auto"> 
       <div className="flex flex-col items-center mb-6 mt-2">
            <div className="relative inline-block mb-3">
                <img 
                    src="/profile-online.png" 
                    alt="Jether Profile" 
                    className="w-20 h-20 border border-slate-200 rounded-full object-cover"
                />  
                <span className="absolute bottom-1 right-1 block w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
        </div>
        <nav className="space-y-2">
          {HeroNavItem.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-xs font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <Icon 
                  className={`w-4 h-4 mr-3 ${isActive ? 'text-blue-700' : 'text-slate-500'}`} 
                  strokeWidth={2}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="border-b border-slate-200 mb-5 mt-5"></div>
        <nav className="space-y-2">
          {MainNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-xs font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <Icon 
                  className={`w-4 h-4 mr-3 ${isActive ? 'text-blue-700' : 'text-slate-500'}`} 
                  strokeWidth={2}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="border-b border-slate-200 mb-5 mt-5"></div>
        <nav className="flex-1 space-y-2">
          {SecondaryNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-4 py-3 text-xs font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <Icon 
                  className={`w-4 h-4 mr-3 ${isActive ? 'text-blue-700' : 'text-slate-500'}`} 
                  strokeWidth={2}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 mt-6 border-t border-slate-200">
          <p className="px-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Socials
          </p>
          <div className="mt-4 space-y-2">
            
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-4 py-2 text-xs text-slate-600 rounded-lg hover:bg-slate-200 flex flex-row items-center">
              <img 
                    src="/logo-github.svg" 
                    alt="Jether Profile" 
                    className="w-5 h-5 mr-3"
                /> 
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-4 py-2 text-xs text-slate-600 rounded-lg hover:bg-slate-200 flex flex-row items-center">
              <img 
                    src="/logo-linkedin.svg" 
                    alt="Jether Profile" 
                    className="w-5 h-5 mr-3"
                /> 
              LinkedIn
            </a>
            <a href="mailto:jethermasidong05@gmail.com" target="_blank" rel="noreferrer" className="px-4 py-2 text-xs text-slate-600 rounded-lg hover:bg-slate-200 flex flex-row items-center">
              <Mail className="w-5 h-5 mr-3 text-slate-500" />
              Email Me
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}