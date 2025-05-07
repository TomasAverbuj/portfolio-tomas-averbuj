import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";

// Base de proyectos
const projectsData = [
  {
    id: 1,
    title: "Sur Marchands",
    shortDescription: "Tienda online de vinos franceses con pasarela de pagos integrada.",
    longDescription: "Sur Marchands es una elegante tienda online especializada en vinos franceses. El proyecto incluye un sistema de gestión de inventario, pasarela de pagos segura, y un diseño responsivo que destaca la calidad de los productos. Implementé un carrito de compras intuitivo y un sistema de filtros avanzado para facilitar la búsqueda de vinos por región, tipo y precio.",
    technologies: ["WordPress","WooCommerce", "HTML + CSS", "PHP"],
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
    title: "Claudia Cestau",
    shortDescription: "Portfolio personal de una artista visual con galería de obras y blog integrado.",
    longDescription: "Portfolio personal para la artista visual Claudia Cestau. El sitio incluye una galería dinámica de sus obras, un blog para compartir su proceso creativo, y una sección de contacto para comisiones. El diseño minimalista y elegante pone el foco en su obra, con una navegación intuitiva y una experiencia de usuario optimizada para dispositivos móviles.",
    technologies: ["WordPress","WooCommerce", "HTML + CSS","JavaScript", "PHP"],
    images: [
      "/images/mariu-cestau.png",
      "/images/mariu-cestau-dos.png",
      "/images/mariu-cestau-tres.png",
    ],
    gallery: [
      "/images/mariu-cestau.png",
      "/images/mariu-cestau-dos.png",
      "/images/mariu-cestau-tres.png",
    ],
    link: "#",
  },
  {
    id: 3,
    title: "Haras Abril",
    shortDescription: "Sitio web para un haras con sistema de reservas y gestión de caballos.",
    longDescription: "Plataforma web completa para Haras Abril, incluyendo un sistema de reservas para clases de equitación, gestión de caballos, y una sección de noticias. El proyecto implementa un panel de administración para gestionar reservas, actualizar información de los caballos, y publicar contenido. El diseño refleja la elegancia y profesionalismo del haras.",
    technologies: ["WordPress", "HTML + CSS", "PHP"],
    images: [
      "/images/haras-abril.png",
      "/images/haras-abril-dos.png",
      "/images/haras-abril-tres.png",
      "/images/haras-abril-cuatro.png",
    ],
    gallery: [
      "/images/haras-abril.png",
      "/images/haras-abril-dos.png",
      "/images/haras-abril-tres.png",
      "/images/haras-abril-cuatro.png",
    ],
    link: "#",
  },
  {
    id: 4,
    title: "EscoPlay",
    shortDescription: "Plataforma educativa interactiva para niños con juegos y actividades.",
    longDescription: "EscoPlay es una plataforma educativa innovadora diseñada para hacer el aprendizaje divertido para los niños. Incluye juegos interactivos, actividades educativas, y un sistema de seguimiento del progreso. La plataforma está optimizada para diferentes dispositivos y edades, con contenido personalizable y un diseño amigable para niños. Implementé un sistema de gamificación para mantener el interés y la motivación de los usuarios.",
    technologies: ["WordPress","WooCommerce", "HTML + CSS", "PHP"],
    images: [
      "/images/escoplay.png",
      "/images/escoplay-dos.png",
      "/images/escoplay-tres.png",
    ],
    gallery: [
      "/images/escoplay.png",
      "/images/escoplay-dos.png",
      "/images/escoplay-tres.png",
    ],
    link: "#",
  },
];

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
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`fade-in-card ${
                visibleCards.includes(index) ? "visible" : ""
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Animaciones */}
      <style>{`
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

// Exportamos el array de proyectos para usarlo en ProjectDesc
export { projectsData as projects };
