import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Presentation from './components/Presentation';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presentation" element={<Presentation />} />
        {/* Add more routes as they are developed */}
        <Route path="/about" element={<div>About Page (Coming Soon)</div>} />
        <Route path="/experience" element={<div>Experience Page (Coming Soon)</div>} />
        <Route path="/skills" element={<div>Skills Page (Coming Soon)</div>} />
        <Route path="/projects" element={<div>Projects Page (Coming Soon)</div>} />
        <Route path="/contact" element={<div>Contact Page (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
