import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/dashboardPages/Home';
import About from '../pages/dashboardPages/About';
import Portfolio from '../pages/dashboardPages/Portfolio';
import Blog from '../pages/dashboardPages/Blog';
import Contact from '../pages/dashboardPages/Contact';  
import NotFound from '../pages/dashboardPages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
