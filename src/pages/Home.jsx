import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageSliderSwiper from "../components/ImageSliderSwiper";
import Squares from "../components/Squares";
import TypewriterText from "../components/TypewriterText";

const Home = () => {
  const skills = [
    { name: "React", image: "/images/react.png" },
    { name: "HTML", image: "/images/html-5.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "Photoshop", image: "/images/adobe-photoshop.png" },
    { name: "Illustrator", image: "/images/ilustrador-adobe.png" },
    { name: "Base de Datos", image: "/images/nueva-base-de-datos.png" },
  ];

  return (
    <>
      <div className="w-screen bg-[#121212] text-white flex flex-col items-center overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Squares
              direction="diagonal"
              speed={0.5}
              borderColor="#4fd1c5"
              squareSize={50}
              hoverFillColor="#38b2ac"
            />
          </div>

          <div className="z-10 text-center relative bg-[#121212]/80 p-4 sm:p-8 rounded-xl backdrop-blur-sm max-w-5xl w-full mx-2 sm:mx-4">
            <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 break-words">
              <span className="text-[#4fd1c5] block mb-2">Hola, soy Tomás</span>
              <span className="block">
                <TypewriterText />
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Desarrollador Full Stack | Diseñador Web | Experto en WordPress y React
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <Link
                to="/projects"
                className="px-5 py-2 sm:px-8 sm:py-4 bg-[#4fd1c5] text-black font-semibold rounded-full hover:bg-[#38b2ac] transition transform hover:scale-105 text-sm sm:text-base"
              >
                Ver Proyectos
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2 sm:px-8 sm:py-4 border-2 border-[#4fd1c5] text-[#4fd1c5] font-semibold rounded-full hover:bg-[#4fd1c5] hover:text-black transition transform hover:scale-105 text-sm sm:text-base"
              >
                Contactar
              </Link>
            </div>
          </div>

          {/* Botones de icono para LinkedIn y GitHub */}
          <div className="flex justify-center gap-6 mt-4 sm:mt-8 w-full z-10 relative">
            <a
              href="https://www.linkedin.com/in/tomas-averbuj-62b47222b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-[#222] text-[#4fd1c5] rounded-full shadow-lg transition flex items-center justify-center"
              style={{ width: '56px', height: '56px' }}
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
              </svg>
            </a>
            <a
              href="https://github.com/tomasaverbuj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-[#222] text-[#4fd1c5] rounded-full shadow-lg transition flex items-center justify-center"
              style={{ width: '56px', height: '56px' }}
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Proyectos */}
        <section className="w-full py-20 bg-[#121212]">
          <div className="max-w-8xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-4 text-center">
              Proyectos
            </h2>
            <p className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto">
              Explora algunos de mis trabajos más destacados, donde combino diseño y funcionalidad para crear experiencias digitales únicas.
            </p>
            <div className="relative">
              <ImageSliderSwiper />
             
              
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section className="w-full py-20 bg-[#121212]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4fd1c5] to-[#38b2ac] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <div className="h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-[#4fd1c5]">
                      <img
                        src="/images/imagen-cara.png"
                        alt="Tomas Averbuj"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-xl">
                <h2 className="text-4xl font-bold text-[#4fd1c5] mb-6">
                  Sobre mí
                </h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Soy un desarrollador Full Stack con experiencia en la creación de páginas y apps modernas y funcionales. Me especializo en frontend con React y tecnologías actuales, y también tengo sólidos conocimientos en backend y bases de datos.
                </p>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Me considero una persona autodidacta y siempre en búsqueda de nuevos desafíos. Me entusiasma crear proyectos desde cero, aprender nuevas tecnologías y encarar ideas innovadoras que me permitan crecer profesional y personalmente.
                </p>
                <Link
                  to="/about"
                  className="group inline-flex items-center px-6 py-3 text-[#4fd1c5] hover:text-[#38b2ac] transition"
                >
                  Más sobre mí
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="w-full py-20 bg-[#121212]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-4 text-center">
                Habilidades
              </h2>
              <p className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto">
                Tecnologías y herramientas que utilizo para crear soluciones digitales innovadoras
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group flex flex-col items-center p-6 bg-[#121212] rounded-xl hover:bg-[#1a1a1a] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#4fd1c5] to-[#38b2ac] rounded-full blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
                      <img
                        src={skill.image}
                        alt={`Logo de ${skill.name}`}
                        className="relative h-16 w-16 md:h-20 md:w-20 object-contain transform group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <p className="mt-4 text-gray-300 text-center font-medium group-hover:text-[#4fd1c5] transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-12">
                <Link
                  to="/skills"
                  className="group inline-flex items-center px-8 py-4 bg-[#4fd1c5] text-black font-semibold rounded-full hover:bg-[#38b2ac] transition-all duration-300"
                >
                  Conoce mis habilidades
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="w-full py-24 bg-[#1a1a1a] text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-6">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Si tenés un proyecto o simplemente querés charlar, no dudes en escribirme. Estoy abierto a nuevas oportunidades y colaboraciones creativas.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#4fd1c5] text-black font-semibold rounded-full hover:bg-[#38b2ac] transition transform hover:scale-105"
            >
              Contactame
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
