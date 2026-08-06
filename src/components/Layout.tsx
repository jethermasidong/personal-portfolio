import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout() {


  return (
    <div className="flex h-screen bg-white overflow-hidden">
      
      <div className={`
          md:block w-64 h-full overflow-y-auto
      `}>
          <Sidebar />
      </div>
      
      <div className="flex flex-col flex-1 w-full h-full overflow-hidden">
        
        <main className="flex-1 w-full bg-white overflow-y-auto scroll-smooth">
          <div className="p-4 md:p-8 md:ml-52 h-full mr-52">
            <Outlet />
          </div>
        </main>
        
      </div>
    </div>
  );
}