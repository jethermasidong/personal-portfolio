// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import More from './pages/main/More';
import Projects from './pages/main/Projects';
import Certifications from './pages/main/Certifications';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return ( 
    <Router>
      <Routes>
        <Route element={<Layout theme={theme} setTheme={setTheme} />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/more" element={<More />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;