import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../pages/Projects"; // Importás el array
import Gallery from "../components/Gallery";
import { SiWordpress, SiWoocommerce, SiHtml5, SiCss3, SiJavascript, SiPhp, SiReact, SiThreedotjs, SiArxiv } from "react-icons/si";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const iconProps = { size: 36, color: "#fff" };

const techIcons = {
  WordPress: <SiWordpress {...iconProps} title="WordPress" />,
  WooCommerce: <SiWoocommerce {...iconProps} title="WooCommerce" />,
  "HTML + CSS": <><SiHtml5 {...iconProps} title="HTML5" /> <SiCss3 {...iconProps} title="CSS3" /></>,
  JavaScript: <SiJavascript {...iconProps} title="JavaScript" />,
  PHP: <SiPhp {...iconProps} title="PHP" />,
  React: <SiReact {...iconProps} title="React" />,
  "Three.js": <SiThreedotjs {...iconProps} title="Three.js" />,
  "AR.js": <SiArxiv {...iconProps} title="AR.js" />,
};

export default function ProjectDesc() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        <h2>Proyecto no encontrado</h2>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full bg-[#1e1e1e] text-white py-20 px-4 flex items-center justify-center relative">
      {/* Flecha para volver */}
      <a
        href="/projects"
        className="absolute top-6 left-6 z-30 bg-[#2a2a2a] hover:bg-[#23272f] text-[#4fd1c5] p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
        title="Volver a proyectos"
      >
        <FiArrowLeft size={24} />
      </a>
      <div className="w-full max-w-5xl flex flex-col gap-12">

        {/* Galería de imágenes */}
        <Gallery images={project.gallery} />

        {/* Información del proyecto */}
        <div className="w-full flex flex-col gap-6 p-6 bg-[#2a2a2a] rounded-2xl shadow-lg">
          {/* Título */}
          <h3 className="text-3xl font-bold text-[#4fd1c5]">{project.title}</h3>

          {/* Descripción */}
          <p className="text-[#e2e2e2] text-lg">{project.longDescription}</p>

          {/* Credenciales de prueba */}
          {project.testCredentials && (
            <div className="bg-[#23272f] p-4 rounded-xl mt-2">
              <p className="font-bold text-[#4fd1c5] mb-1">{project.testCredentials.title}</p>
              <p className="text-[#e2e2e2] text-sm">Usuario: <span className="font-mono">{project.testCredentials.user}</span></p>
              <p className="text-[#e2e2e2] text-sm">Contraseña: <span className="font-mono">{project.testCredentials.password}</span></p>
            </div>
          )}

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-3 items-center">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[#4fd1c5] text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 transition-transform duration-300 hover:scale-110"
                title={tech}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botón */}
          <div className="flex gap-4 mt-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#4fd1c5] text-black font-semibold p-3 rounded-full text-2xl hover:bg-[#38b2ac] transition-colors"
                title="Ver proyecto"
              >
                <FiExternalLink />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#2a2a2a] text-white font-semibold p-3 rounded-full text-2xl border border-[#4fd1c5] hover:bg-[#23272f] transition-colors"
                title="Ver en GitHub"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
