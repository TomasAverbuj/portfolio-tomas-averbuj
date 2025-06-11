import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import ImageSliderSwiper from "../components/ImageSliderSwiper";
import Squares from "../components/Squares";
import TypewriterText from "../components/TypewriterText";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Vite", level: 80 }
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "PHP", level: 70 },
      { name: "APIs REST", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "Express", level: 75 },
      { name: "WordPress", level: 85 },
      { name: "WooCommerce", level: 80 }
    ],
  },
  {
    category: "Diseño y Herramientas",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "CapCut", level: 85 },
      { name: "After Effects", level: 75 },
      { name: "Git/GitHub", level: 80 },
      { name: "Visual Studio Code", level: 90 },
      { name: "Postman", level: 75 },
      { name: "Render", level: 80 },
      { name: "Vercel", level: 80 },
      { name: "Netlify", level: 80 }
    ],
  },
];

const Home = () => {
  // Para tabs de skills
  const [activeTab, setActiveTab] = useState(skillsData[0].category);
  // Para formulario de contacto
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w6gn4sg",
        "template_98fap2n",
        form.current,
        "QZF9PN3HZEGWIIr6S"
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito ✅");
        },
        (error) => {
          alert("Ocurrió un error al enviar el mensaje ❌");
        }
      );
    e.target.reset();
  };

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
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center justify-items-center">
              {/* Foto */}
              <div className="flex justify-center md:justify-end items-start">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4fd1c5] to-[#38b2ac] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <div className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-[#4fd1c5]">
                      <img
                        src="/images/imagen-cara.png"
                        alt="Tomas Averbuj"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="bg-[#1a1a1a] p-6 sm:p-8 rounded-xl shadow-xl">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#4fd1c5] mb-4">
                    Sobre mí
                  </h2>
                  <p className="text-gray-300 mb-4 text-base sm:text-lg leading-relaxed max-w-2xl">
                    Soy desarrollador y diseñador web con un enfoque integral que combina programación, diseño UI/UX y edición multimedia. Actualmente trabajo en <strong>Doble Nuez</strong>, donde desarrollo y mantengo sitios web, además de crear contenido audiovisual para grandes marcas como <strong>Tienda New San</strong>.
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                    Mi formación abarca desde el desarrollo frontend y backend hasta el diseño visual, lo que me permite abordar los proyectos tanto desde un aspecto técnico como creativo. Trabajo activamente con <strong>WordPress</strong> y herramientas modernas como <strong>React</strong>, <strong>Vue.js</strong>, <strong>Node.js</strong> y <strong>MongoDB</strong>.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-[#181818] p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg text-[#4fd1c5] mb-1">2023 - Actualidad</h3>
                    <div className="text-gray-200 text-sm font-semibold mb-1">Desarrollador Web y Audiovisual en <span className="text-[#4fd1c5]">Doble Nuez</span></div>
                    <div className="text-gray-400 text-sm">Desarrollo y mantenimiento de sitios web en WordPress, implementación de nuevas funcionalidades, optimización de rendimiento y creación de contenido audiovisual.</div>
                  </div>
                  <div className="flex-1 bg-[#181818] p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg text-[#4fd1c5] mb-1">Más allá del código</h3>
                    <div className="text-gray-300 text-sm">Fuera del mundo digital, el <strong>fútbol</strong> es una de mis grandes pasiones (hincha de River ⚽), al igual que el <strong>mundo de los videojuegos</strong>, que siempre me inspiró por su creatividad y dinamismo. Me defino como una persona proactiva, autodidacta y comprometida con cada proyecto en el que participo.</div>
                  </div>
                </div>
                <div>
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
          </div>
        </section>

        {/* Habilidades en solapas */}
        <section className="w-full py-20 bg-[#121212]">
          <div className="max-w-4xl xl:max-w-6xl mx-auto px-2 sm:px-4">
            <div className="bg-[#1a1a1a] p-4 sm:p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-4 text-center">
                Habilidades
              </h2>
              <p className="text-gray-300 text-base sm:text-lg text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
                Tecnologías y herramientas que utilizo para crear soluciones digitales innovadoras
              </p>
              {/* Tabs */}
              <div className="flex overflow-x-auto no-scrollbar border-b border-gray-600 mb-6 sm:mb-8 gap-2 sm:gap-0 justify-center">
                {skillsData.map((skillSet) => (
                  <button
                    key={skillSet.category}
                    onClick={() => setActiveTab(skillSet.category)}
                    className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium transition-all duration-300 rounded-t-lg focus:outline-none ${
                      activeTab === skillSet.category
                        ? "bg-[#3a3a3a] text-[#4fd1c5] border-b-2 border-[#4fd1c5]"
                        : "bg-transparent text-[#e2e2e2] hover:text-[#4fd1c5]"
                    }`}
                    style={{ minWidth: '160px' }}
                  >
                    {skillSet.category}
                  </button>
                ))}
              </div>
              {/* Contenido de la tab activa */}
              <div className="w-full max-w-md sm:max-w-2xl mx-auto bg-[#232323] p-4 sm:p-8 rounded-2xl shadow-lg">
                {skillsData
                  .filter((skillSet) => skillSet.category === activeTab)
                  .map((skillSet) => (
                    <div key={skillSet.category}>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#4fd1c5] mb-4 sm:mb-6">
                        {skillSet.category}
                      </h3>
                      <div className="space-y-4">
                        {skillSet.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-[#e2e2e2] text-base sm:text-lg">{skill.name}</span>
                              <span className="text-[#4fd1c5] text-sm sm:text-base">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-[#3a3a3a] rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#4fd1c5] rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex justify-center mt-10 sm:mt-12">
                <Link
                  to="/skills"
                  className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#4fd1c5] text-black font-semibold rounded-full hover:bg-[#38b2ac] transition-all duration-300 text-base sm:text-lg"
                >
                  Ver todas mis habilidades
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

        {/* Formulario de contacto estilo línea inferior */}
        <section className="w-full py-24 bg-[#1a1a1a] text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-6">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Si tenés un proyecto o simplemente querés charlar, no dudes en escribirme. Estoy abierto a nuevas oportunidades y colaboraciones creativas.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full max-w-lg mx-auto mb-12"
            >
              <div className="mb-8 text-left">
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#4fd1c5] text-white placeholder-gray-400 py-3 px-0 mb-6 focus:outline-none transition-all duration-300"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-8 text-left">
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#4fd1c5] text-white placeholder-gray-400 py-3 px-0 mb-6 focus:outline-none transition-all duration-300"
                  placeholder="Correo electrónico"
                />
              </div>
              <div className="mb-8 text-left">
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-[#4fd1c5] text-white placeholder-gray-400 py-3 px-0 mb-6 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4fd1c5] to-[#3CE3CB] text-black font-semibold py-4 rounded-lg hover:from-[#38b2ac] hover:to-[#2cd3bc] hover:shadow-lg transition-all duration-300"
              >
                Enviar mensaje
              </button>
            </form>
            {/* Contact info cards */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-lg mx-auto">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=totoaverbuj@gmail.com&su=Propuesta laboral"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#222] text-white rounded-full shadow-lg hover:bg-[#333] transition transform hover:scale-105 w-full sm:w-auto justify-center"
                style={{ minWidth: '220px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>totoaverbuj@gmail.com</span>
              </a>
              <a
                href="tel:+541169729914"
                className="flex items-center gap-2 px-6 py-3 bg-[#222] text-white rounded-full shadow-lg hover:bg-[#333] transition transform hover:scale-105 w-full sm:w-auto justify-center"
                style={{ minWidth: '220px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+54 11 6972-9914</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
