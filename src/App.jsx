import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark text-cream relative selection:bg-cream selection:text-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
