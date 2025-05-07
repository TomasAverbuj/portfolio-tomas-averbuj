import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImageSliderSwiper from "../components/ImageSliderSwiper";
import Squares from "../components/Squares";

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

          <div className="z-10 text-center relative bg-[#121212]/80 p-8 rounded-xl backdrop-blur-sm max-w-4xl mx-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[#4fd1c5] block mb-2">Hi, I'm Tomás,</span>
              <span className="text-[#4fd1c5] block">web developer / designer</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 mb-8">
              Frontend & Backend Developer | WordPress Expert | UI/UX Lover
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="px-8 py-4 bg-[#4fd1c5] text-black font-semibold rounded-md hover:bg-[#38b2ac] transition transform hover:scale-105"
              >
                Ver Proyectos
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-[#4fd1c5] text-[#4fd1c5] font-semibold rounded-md hover:bg-[#4fd1c5] hover:text-black transition transform hover:scale-105"
              >
                Contactar
              </Link>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section className="w-full py-20 bg-[#121212]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-4 text-center">
              Proyectos
            </h2>
            <p className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto">
              Explora algunos de mis trabajos más destacados, donde combino diseño y funcionalidad para crear experiencias digitales únicas.
            </p>
            <div className="relative">
              <ImageSliderSwiper />
              <div className="flex justify-center mt-12">
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-8 py-4 bg-[#4fd1c5] text-black font-semibold rounded-md hover:bg-[#38b2ac] transition-all duration-300"
                >
                  Ver todos los proyectos
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
                  Soy un apasionado desarrollador web y diseñador con más de 5 años de experiencia. Me especializo en crear experiencias digitales únicas, combinando frontend, backend y un amor por el diseño UI/UX.
                </p>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Mi enfoque se centra en crear soluciones que no solo se vean bien, sino que también funcionen de manera eficiente y proporcionen una excelente experiencia de usuario.
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
                  className="group inline-flex items-center px-8 py-4 bg-[#4fd1c5] text-black font-semibold rounded-md hover:bg-[#38b2ac] transition-all duration-300"
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
        <section className="w-full py-24 bg-[#1a1a1a] text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Squares
              direction="diagonal"
              speed={0.3}
              borderColor="#4fd1c5"
              squareSize={30}
              hoverFillColor="#38b2ac"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-6">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Si tenés un proyecto o simplemente querés charlar, no dudes en escribirme. Estoy abierto a nuevas oportunidades y colaboraciones creativas.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#4fd1c5] text-black font-semibold rounded-md hover:bg-[#38b2ac] transition transform hover:scale-105"
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
