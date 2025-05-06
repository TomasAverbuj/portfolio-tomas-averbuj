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

          <div className="z-10 text-center relative bg-[#121212]/80 p-6 rounded-xl">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-[#4fd1c5]">Hi, I’m Tomás,</span>
              <br />
              <span className="text-[#4fd1c5]">web developer / designer</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              Frontend & Backend Developer | WordPress Expert | UI/UX Lover
            </p>
          </div>
        </section>

        {/* Proyectos */}
        <section className="w-full py-16 bg-[#121212]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#4fd1c5] mb-8 text-center">
              Proyectos
            </h2>
            <ImageSliderSwiper />
            <div className="flex justify-center mt-10">
              <Link
                to="/projects"
                className="inline-block px-6 py-3 border border-[#4fd1c5] text-[#4fd1c5] hover:bg-[#4fd1c5] hover:text-black transition rounded-md"
              >
                Ver mis proyectos
              </Link>
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section className="w-full py-16 bg-[#121212]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden">
                  <img
                    src="/images/imagen-cara.png"
                    alt="Tomás, desarrollador y diseñador web"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-[#1a1a1a] p-6 rounded-xl">
                <h2 className="text-4xl font-bold text-[#4fd1c5] mb-4">
                  Sobre mí
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Soy un apasionado desarrollador web y diseñador con más de 5 años de experiencia. Me especializo en crear experiencias digitales únicas, combinando frontend, backend y un amor por el diseño UI/UX. ¡Conoce más sobre mi trabajo y mi pasión por la tecnología!
                </p>
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 text-[#4fd1c5] hover:text-[#38b2ac] transition"
                >
                  Más sobre mí
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="w-full py-16 bg-[#121212]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-[#1a1a1a] p-6 rounded-xl">
              <h2 className="text-4xl font-bold text-[#4fd1c5] mb-8 text-center">
                Habilidades
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={skill.image}
                      alt={`Logo de ${skill.name}`}
                      className="h-16 w-16 md:h-20 md:w-20 object-contain"
                    />
                    <p className="mt-2 text-gray-300 text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  to="/skills"
                  className="inline-block px-6 py-3 text-[#4fd1c5] hover:text-[#38b2ac] transition"
                >
                  Ver todas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="w-full py-20 bg-[#1a1a1a] text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-[#4fd1c5] mb-6">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Si tenés un proyecto o simplemente querés charlar, no dudes en escribirme. Estoy abierto a nuevas oportunidades y colaboraciones creativas.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-[#4fd1c5] text-black font-semibold rounded-md hover:bg-[#38b2ac] transition"
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
