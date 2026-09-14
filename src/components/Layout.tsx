import { Outlet } from 'react-router-dom';
import Header from './Header';
import React from 'react';

interface LayoutProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function Layout({ theme, setTheme }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      
      <Header theme={theme} setTheme={setTheme} />
      
      <main className="flex-1 w-full overflow-y-auto scroll-smooth">
        <div className="w-full max-w-7xl mx-auto p-4 md:p-8 h-full">
          <Outlet />
        </div>
      </main>
      
    </div>
  );
}