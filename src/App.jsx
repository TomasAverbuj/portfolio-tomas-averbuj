// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projecdesc from "./pages/Projectdesc";



import Navbar from "./components/Navbar";
import ImageSliderSwiper from "./components/ImageSliderSwiper";

import { motion } from "framer-motion";
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project/:id" element={<Projecdesc />} />
        
        {/* Puedes agregar más rutas luego */}
      </Routes>
    </Router>
  );
}

export default App;
