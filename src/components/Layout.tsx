import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      
      <Header />
      
      <main className="flex-1 w-full overflow-y-auto scroll-smooth">
        <div className="w-full max-w-7xl mx-auto p-4 md:p-8 h-full">
          <Outlet />
        </div>
      </main>
      
    </div>
  );
}