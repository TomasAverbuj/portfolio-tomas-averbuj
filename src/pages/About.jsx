import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full min-h-screen py-16 bg-[#1e1e1e] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-teal-400 mb-8 text-center"
        >
          Sobre mí
        </motion.h1>

        <div className="space-y-10 text-lg leading-relaxed text-gray-300">
          {/* Sección ¿Quién soy? */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">¿Quién soy?</h2>
            <p>
              Soy desarrollador y diseñador web con un enfoque integral que combina programación, diseño UI/UX y edición multimedia.
              Actualmente trabajo en <strong>Doble Nuez</strong>, donde desarrollo y mantengo sitios web, además de crear contenido audiovisual para grandes marcas como <strong>Tienda New San</strong>.
            </p>
            <p className="mt-2">
              Mi formación abarca desde el desarrollo frontend y backend hasta el diseño visual, lo que me permite abordar los proyectos tanto desde un aspecto técnico como creativo.
              Trabajo activamente con <strong>WordPress</strong> y herramientas modernas como <strong>React</strong>, <strong>Vue.js</strong>, <strong>Node.js</strong> y <strong>MongoDB</strong>.
            </p>
          </motion.div>

          {/* Sección Educación */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">Educación</h2>
            <div className="space-y-4">
              <div className="bg-[#2a2a2a] p-4 rounded-lg">
                <h3 className="font-semibold text-xl text-teal-400">Escuela Multimedial Da Vinci</h3>
                <p className="text-gray-300">Desarrollo y Diseño Web</p>
                <p className="text-gray-400">Cursando las últimas 4 materias – Buenos Aires, Argentina</p>
              </div>
              <div className="bg-[#2a2a2a] p-4 rounded-lg">
                <h3 className="font-semibold text-xl text-teal-400">Escuela Comercial N°26 Enrique De Vedia</h3>
                <p className="text-gray-300">Educación Secundaria Completa</p>
                <p className="text-gray-400">Año de egreso 2021 – Buenos Aires, Argentina</p>
              </div>
            </div>
          </motion.div>

          {/* Sección Línea de tiempo - Experiencia profesional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">Mi camino profesional</h2>

            {/* Línea de tiempo de experiencias */}
            <div className="relative border-l-2 border-teal-400 ml-6 pl-6 space-y-8">
              <div className="flex items-center">
                <div className="absolute -left-3 w-6 h-6 bg-teal-400 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl text-teal-400">2023 - Actualidad</h3>
                  <p className="mt-1 text-lg text-gray-300">Desarrollador Web y Audiovisual en <strong>Doble Nuez</strong></p>
                  <p className="mt-2 text-gray-400">
                    Desarrollo y mantenimiento de sitios web en WordPress, implementación de nuevas funcionalidades,
                    optimización de rendimiento y creación de contenido audiovisual para Tienda New San.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="absolute -left-3 w-6 h-6 bg-teal-400 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl text-teal-400">2023</h3>
                  <p className="mt-1 text-lg text-gray-300">Operador de Sistemas en <strong>Jockey Club, Hipódromo de San Isidro</strong></p>
                  <p className="mt-2 text-gray-400">
                    Operación y manejo del sistema de apuestas, gestión de datos en tiempo real y atención al público.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="absolute -left-3 w-6 h-6 bg-teal-400 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl text-teal-400">2020 - 2023</h3>
                  <p className="mt-1 text-lg text-gray-300">Administración de Edificios <strong>Padilla</strong></p>
                  <p className="mt-2 text-gray-400">
                    Gestión administrativa, atención de consultas y manejo de documentación.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sección Habilidades */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">Habilidades Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#2a2a2a] p-4 rounded-lg">
                <h3 className="font-semibold text-xl text-teal-400 mb-2">Desarrollo</h3>
                <ul className="space-y-2">
                  <li>• JavaScript, PHP</li>
                  <li>• HTML5, CSS3</li>
                  <li>• React, Vue.js, Node.js</li>
                  <li>• Express, Tailwind CSS, Bootstrap</li>
                  <li>• MongoDB, Firebase</li>
                  <li>• API REST, Vite</li>
                  <li>• WordPress, WooCommerce</li>
                </ul>
              </div>
              <div className="bg-[#2a2a2a] p-4 rounded-lg">
                <h3 className="font-semibold text-xl text-teal-400 mb-2">Herramientas</h3>
                <ul className="space-y-2">
                  <li>• Figma, Photoshop, Illustrator</li>
                  <li>• CapCut, After Effects</li>
                  <li>• Git, GitHub</li>
                  <li>• Visual Studio Code</li>
                  <li>• Postman</li>
                  <li>• Render, Vercel, Netlify</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Sección Más allá del código */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">Más allá del código</h2>
            <p>
              Fuera del mundo digital, el <strong>fútbol</strong> es una de mis grandes pasiones (hincha de River ⚽), al igual que el <strong>mundo de los videojuegos</strong>, que siempre me inspiró por su creatividad y dinamismo.
            </p>
            <p className="mt-2">
              Me defino como una persona proactiva, autodidacta y comprometida con cada proyecto en el que participo.
            </p>
          </motion.div>
        </div>

        {/* Sección con botones */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center gap-8 mt-16"
        >
          <Link
            to="/projects"
            className="inline-block px-6 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition rounded-md"
          >
            Ver mis proyectos
          </Link>

          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-teal-400 text-black hover:bg-teal-300 transition rounded-md"
          >
            Contactame
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
