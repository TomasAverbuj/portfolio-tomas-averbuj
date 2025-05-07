import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

// Base de proyectos (la vas a usar en ProjectDesc también)
const projects = [
  {
    id: 1,
    title: "Tienda de Vinos",
    description: "Una tienda online para vinos franceses, conectada con pasarela de pagos.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    images: [
      "/images/surmarchands.png",
      "/images/surmarchands-dos.png",
      "/images/surmarchands-tres.png",
    ],
    gallery: [
      "/images/lpgp-galeria-sur.jpg",
      "/images/imagen-galeria.jpg",
      "/images/imagen-galeria-dos.jpg",
      "/images/imagen-galeria-tres.jpg",
    ],
    link: "https://surmarchands.com/",
  },
  {
    id: 2,
    title: "Blog Personal",
    description: "Un blog moderno para compartir artículos y recursos.",
    technologies: ["Vue", "Laravel", "MySQL"],
    images: [
      "/images/mariu-cestau.png",
      "/images/mariu-cestau-dos.png",
      "/images/mariu-cestau-tres.png",
    ],
    link: "#",
  },
  {
    id: 3,
    title: "Blog Personal",
    description: "Un blog moderno para compartir artículos y recursos.",
    technologies: ["Vue", "Laravel", "MySQL"],
    images: [
      "/images/haras-abril.png",
      "/images/haras-abril-dos.png",
      "/images/haras-abril-tres.png",
      "/images/haras-abril-cuatro.png",
    ],
    link: "#",
  },
  {
    id: 4,
    title: "Blog Personal",
    description: "Un blog moderno para compartir artículos y recursos.",
    technologies: ["Vue", "Laravel", "MySQL"],
    images: [
      "/images/escoplay.png",
      "/images/escoplay-dos.png",
      "/images/escoplay-tres.png",
    ],
    link: "#",
  },
];

// 👉 Exporto projects aparte para usar en ProjectDesc
export { projects };

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          } else {
            setVisibleCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-[#1e1e1e] text-white py-20 px-4 flex justify-center"
    >
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-[#4fd1c5] mb-16">
          Proyectos
        </h2>
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`fade-in-card ${
                visibleCards.includes(index) ? "visible" : ""
              }`}
            >
              {/* 👇 El Link ahora se pasará DENTRO del botón Ver Detalle, no acá */}
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Animaciones */}
      <style >{`
        .fade-in-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
