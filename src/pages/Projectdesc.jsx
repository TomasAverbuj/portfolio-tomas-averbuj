import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../pages/Projects"; // Importás el array
import Gallery from "../components/Gallery";

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
    <section className="min-h-screen w-full bg-[#1e1e1e] text-white py-20 px-4 flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-12">

        {/* Galería de imágenes */}
        <Gallery images={project.gallery} />

        {/* Información del proyecto */}
        <div className="w-full flex flex-col gap-6 p-6 bg-[#2a2a2a] rounded-2xl shadow-lg">
          {/* Título */}
          <h3 className="text-3xl font-bold text-[#4fd1c5]">{project.title}</h3>

          {/* Descripción */}
          <p className="text-[#e2e2e2] text-lg">{project.description}</p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[#4fd1c5] text-black px-3 py-1 rounded-full text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botón */}
          <div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4fd1c5] text-black font-semibold px-4 py-2 rounded-lg"
            >
              Ver proyecto
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
