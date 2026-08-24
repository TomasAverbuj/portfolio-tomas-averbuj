import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Intro from "./components/Intro";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ProjectDesc from "./pages/Projectdesc";
import Cv from "./pages/Cv";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Shell() {
  const { pathname } = useLocation();
  const isCv = pathname === "/cv";

  return (
    <>
      <ScrollToTop />
      <Intro />
      <CustomCursor />
      <div className="grain print:hidden" aria-hidden />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/project/:id" element={<ProjectDesc />} />
      </Routes>
      {!isCv && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Shell />
      </Router>
    </LanguageProvider>
  );
}
