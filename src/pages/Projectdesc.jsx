import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "./Projects";
import Gallery from "../components/Gallery";

export default function ProjectDesc() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center text-white">
        <h2>Proyecto no encontrado</h2>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full bg-[#1e1e1e] text-white py-20 px-4">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-12">
        {/* Galería de imágenes */}
        <Gallery images={project.gallery} />

        {/* Información del proyecto */}
        <div className="w-full flex flex-col gap-8 p-8 bg-[#2a2a2a] rounded-2xl shadow-lg">
          {/* Encabezado */}
          <div>
            <h1 className="text-4xl font-bold text-[#4fd1c5] mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#4fd1c5] text-black px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Descripción */}
          <div className="prose prose-lg prose-invert">
            <h2 className="text-2xl font-semibold text-[#4fd1c5] mb-4">Descripción del Proyecto</h2>
            <div className="text-[#e2e2e2] text-lg leading-relaxed">
              {project.longDescription}
            </div>
          </div>

          {/* Botón de acción */}
          {project.link && (
            <div className="mt-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4fd1c5] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#38b2ac] transition-colors duration-300"
              >
                Visitar proyecto
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
