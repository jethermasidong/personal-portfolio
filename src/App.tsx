// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Skill from './pages/main/Skills';
import Projects from './pages/main/Projects';
import Experience from './pages/main/Experience';
import Certifications from './pages/extra/Certifications';
import Gallery from './pages/extra/Gallery';
import Contact from './pages/extra/Contact';


function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Layout />}>
          
          <Route path="/" element={<Homepage />} />

          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />

          <Route path="/certifications" element={<Certifications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;