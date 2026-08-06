// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Layout />}>
          
          <Route path="/" element={<Homepage />} />
          
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;