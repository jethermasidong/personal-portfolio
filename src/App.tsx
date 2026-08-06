// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import Skill from './pages/main/Skills';
import Projects from './pages/main/Projects';
import Experience from './pages/main/Experience';


function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Layout />}>
          
          <Route path="/" element={<Homepage />} />

          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;