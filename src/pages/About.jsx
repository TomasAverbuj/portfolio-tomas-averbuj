import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-full min-h-screen py-16 bg-[#1e1e1e] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-teal-400 mb-8 text-center">
          Sobre mí
        </h1>

        <div className="space-y-10 text-lg leading-relaxed text-gray-300">
          {/* Sección ¿Quién soy? */}
          <div>
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">¿Quién soy?</h2>
            <p>
              Soy desarrollador y diseñador web con un enfoque integral que combina programación, diseño UI/UX y edición multimedia.
              Actualmente formo parte de <strong>Doble Nuez</strong>, donde desarrollo y mantengo sitios web, además de crear contenido audiovisual para grandes marcas como <strong>Tienda New San</strong> y <strong>Atma</strong>.
            </p>
            <p className="mt-2">
              Mi formación abarca desde el desarrollo frontend y backend hasta el diseño visual, lo que me permite abordar los proyectos tanto desde un aspecto técnico como creativo.
              Trabajo activamente con <strong>WordPress</strong> y herramientas modernas como <strong>React</strong>, <strong>Node.js</strong> y <strong>MongoDB</strong>.
            </p>
          </div>

          {/* Sección ¿Cómo empezó todo? */}
          <div>
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">¿Cómo empezó todo?</h2>
            <p>
              A mediados de 2021, la curiosidad por entender cómo funcionaban las páginas web me llevó a dar mis primeros pasos en la programación.
              Lo que comenzó como un interés personal pronto se transformó en una vocación.
            </p>
            <p className="mt-2">
              Desde entonces, cada proyecto representa una oportunidad para seguir creciendo, perfeccionar mis habilidades y crear experiencias digitales que realmente marquen la diferencia.
            </p>
          </div>

          {/* Sección Línea de tiempo - Experiencia profesional */}
          <div>
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">Mi camino profesional</h2>

            {/* Línea de tiempo de experiencias */}
            <div className="relative border-l-2 border-teal-400 ml-6 pl-6 space-y-8">
              <div className="flex items-center">
                <div className="absolute -left-3 w-6 h-6 bg-teal-400 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl text-teal-400">2023 - Actualidad</h3>
                  <p className="mt-1 text-lg text-gray-300">Desarrollador Web en <strong>Doble Nuez</strong></p>
                  <p className="mt-2 text-gray-400">
                    Desarrollo y mantengo sitios web, además de crear contenido audiovisual para marcas como Tienda New San y Atma.
                    Mi trabajo se enfoca en el diseño web responsive y la optimización de las experiencias digitales de los clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="absolute -left-3 w-6 h-6 bg-teal-400 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl text-teal-400">2022 - 2023</h3>
                  <p className="mt-1 text-lg text-gray-300">Freelancer en Desarrollo Web y Diseño Gráfico</p>
                  <p className="mt-2 text-gray-400">
                    Trabajé en proyectos freelance para varias empresas, diseñando y desarrollando sitios web en WordPress y creando contenido visual en Adobe Photoshop e Illustrator.
                    Además, gestioné la implementación de soluciones personalizadas para cada cliente.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="absolute -left-3 w-6 h-6 bg-teal-400 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl text-teal-400">2020 - 2021</h3>
                  <p className="mt-1 text-lg text-gray-300">Asistente Administrativo en <strong>Padilla S.A.</strong></p>
                  <p className="mt-2 text-gray-400">
                    Gestioné tareas administrativas, atendí consultas y coordiné procesos internos, contribuyendo a la organización de la oficina y la comunicación eficiente entre los departamentos.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="absolute -left-3 w-6 h-6 bg-teal-400 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl text-teal-400">2018 - 2020</h3>
                  <p className="mt-1 text-lg text-gray-300">Desarrollador Web Freelance</p>
                  <p className="mt-2 text-gray-400">
                    Creé sitios web estáticos y dinámicos para pequeñas empresas, usando tecnologías como HTML, CSS, JavaScript y PHP. Durante este período, comencé a estudiar formalmente desarrollo web.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección Más allá del código */}
          <div>
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">Más allá del código</h2>
            <p>
              Fuera del mundo digital, el <strong>fútbol</strong> es una de mis grandes pasiones (hincha de River ⚽), al igual que el <strong>mundo de los videojuegos</strong>, que siempre me inspiró por su creatividad y dinamismo.
            </p>
            <p className="mt-2">
              Me defino como una persona proactiva, autodidacta y comprometida con cada proyecto en el que participo.
            </p>
          </div>

          {/* Sección ¿Por qué trabajar conmigo? */}
          <div>
            <h2 className="text-3xl font-semibold text-teal-400 mb-2">¿Por qué trabajar conmigo?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Curioso y en constante evolución:</strong> Siempre estoy aprendiendo nuevas tecnologías para mantenerme actualizado.
              </li>
              <li>
                <strong>Compromiso total:</strong> Me involucro de lleno en cada proyecto, buscando siempre superar las expectativas.
              </li>
              <li>
                <strong>Creativo y técnico:</strong> Combino diseño, desarrollo y estrategia para lograr resultados sólidos y atractivos.
              </li>
              <li>
                <strong>Orientado a resultados:</strong> Mi prioridad es crear soluciones funcionales, escalables y alineadas a los objetivos de cada cliente o proyecto.
              </li>
            </ul>
          </div>
        </div>

        {/* Sección con botones */}
        <div className="flex justify-center gap-8 mt-16">
          {/* Botón de Ver Proyectos */}
          <Link
            to="/projects"
            className="inline-block px-6 py-3 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition rounded-md"
          >
            Ver mis proyectos
          </Link>

          {/* Botón de Contactarme */}
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-teal-400 text-black hover:bg-teal-300 transition rounded-md"
          >
            Contactame
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
