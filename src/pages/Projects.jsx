import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";

// Base de proyectos
const projectsData = [
  {
    id: 1,
    title: "Sur Marchands",
    shortDescription: "Catálogo digital de vinos franceses con información detallada de bodegas y puntos de venta en Argentina.",
    longDescription: "Sur Marchands es un catálogo digital elegante especializado en vinos franceses. El proyecto incluye información detallada sobre las bodegas, la historia de cada vino, y los puntos de venta en Argentina donde se pueden encontrar. Implementé un sistema de búsqueda avanzado para facilitar la exploración de vinos por región, tipo y características.",
    technologies: ["WordPress", "HTML + CSS", "PHP"],
    images: [
      "/images/surmarchands.png",
      "/images/surmarchands-dos.png",
      "/images/surmarchands-tres.png",
      "/images/surmarchands-cuatro.png",
    ],
    gallery: [
      "/images/lpgp-galeria-sur.jpg",
      "/images/imagen-galeria-dos.jpg",
      "/images/imagen-galeria-tres.jpg",
      "/images/imagen-galeria.jpg"
    ],
    link: "https://surmarchands.com/",
  },
  {
    id: 2,
    title: "Claudia Cestau",
    shortDescription: "E-commerce de lentes de diseño con carcazas originales y sistema de personalización.",
    longDescription: "E-commerce especializado en la venta de lentes de diseño con carcazas originales de la marca. El sitio incluye un sistema de personalización que permite a los compradores ajustar sus lentes según sus necesidades específicas. Implementé un catálogo interactivo que destaca los diseños únicos y las opciones de personalización disponibles, junto con un sistema de pedidos personalizados para garantizar la satisfacción del cliente.",
    technologies: ["WordPress", "WooCommerce", "HTML + CSS", "JavaScript", "PHP"],
    images: [

      "/images/mariu-cestau.png",
      "/images/mariu-cestau-dos.png",
      "/images/mariu-cestau-tres.png",
    ],
    gallery: [
      "/images/logo-galeria-claudie.jpg",
      "/images/imagen-galeria-lentes.jpg",
      "/images/imagen-galeria-lentes-dos.jpg",
      "/images/imagen-galeria-lentes-tres.jpg"
    ],
    link: "https://claudiacestau.doblenuez.com/",
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
      "/images/logo-galeria-haras.jpg",
      "/images/imagen-galeria-haras.jpg",
      "/images/imagen-galeria-haras-dos.jpg",
      "/images/imagen-galeria-haras-tres.jpg"
    ],
    link: "https://harasabril.com.ar/",
  },
  {
    id: 4,
    title: "EscoPlay",
    shortDescription: "E-commerce de librería, juguetería y regalería con pasarela de pagos integrada.",
    longDescription: "EscoPlay es un e-commerce completo especializado en la venta de productos de librería, juguetería y regalería. El sitio incluye una pasarela de pagos segura y un diseño responsivo que facilita la navegación y compra de productos. Implementé un carrito de compras intuitivo y un sistema de filtros avanzado para facilitar la búsqueda de productos por categoría, precio y disponibilidad.",
    technologies: ["WordPress", "WooCommerce", "HTML + CSS", "PHP"],
    images: [
      "/images/escoplay.png",
      "/images/escoplay-dos.png",
      "/images/escoplay-tres.png",
    ],
    gallery: [
      "/images/imagen-galeria-esco-uno.jpg",
      "/images/imagen-galeria-esco-dos.jpg",
      "/images/imagen-galeria-esco-tres.jpg",
      "/images/logo-galeria-escoplay.jpg"
    ],
    link: "https://escoplay.com/",
  },
  {
    id: 6,
    title: "PokeDex API",
    shortDescription: "Pokedex 100% funcional con todas las generaciones de pokemons",
    longDescription: "Pokedex completa y funcional que integra datos detallados de todos los Pokémon a través de las generaciones. Incluye información exhaustiva sobre estadísticas base, habilidades, evoluciones, tipos y datos de los juegos. La aplicación permite buscar y filtrar Pokémon por múltiples criterios, mostrar sus evoluciones y pre-evoluciones, y acceder a información detallada de cada uno. Implementé una interfaz intuitiva y responsiva que facilita la navegación y consulta de datos.",
    technologies: ["React", "Vite", "Tailwind", "HTML + CSS", "JavaScript", "API REST", "Vercel", "GitHub"],
    images: [
      "/images/logo-pokedex-tarjeta.jpg",
      "/images/poke-card-uno.jpg",
      "/images/poke-card-dos.jpg",
    ],
    gallery: [
      "/images/logo-pokedex.jpg",
      "/images/imagen-galeria-poke-tres.jpg",
      "/images/imagen-galeria-poke.jpg",
      "/images/imagen-galeria-poke-dos.jpg",
    ],
    link: "https://pokedex-fan.vercel.app/",
    github: "https://github.com/TomasAverbuj/PokleDex-Fan",
  },
  {
    id: 7,
    title: "AdmiLink",
    shortDescription: "App para gestión y seguimiento de obras de consorcio para administradores y usuarios.",
    longDescription: "AdmiLink es una aplicación diseñada para la gestión integral de obras en consorcios. Permite tanto a administradores como a usuarios llevar un registro detallado del progreso de las obras, consultar el historial y la documentación, y mantener una comunicación eficiente sobre el estado de cada proyecto y la administración correspondiente. Facilita la transparencia y el control en la administración de consorcios.",
    testCredentials: {
      title: "Credenciales de prueba:",
      user: "admin@admin.com",
      password: "hola123"
    },
    technologies: ["React", "Vite", "Firebase", "Vercel", "HTML + CSS", "JavaScript" , "Tailwind"],
    images: [
      "/images/logo-galeria-admilink.jpg",
      "/images/admilink-uno.jpg",
      "/images/admilink-dos.jpg",
      "/images/admilink-tres.jpg"
    ],
    gallery: [
      "/images/logo-galeria-admilink.jpg",
      "/images/imagen-galeria-admi.jpg",
      "/images/imagen-galeria-admi-dos.jpg",
      "/images/imagen-galeria-admi-tres.jpg",],
    link: "https://admilink.vercel.app/",
    github: "https://github.com/TomasAverbuj/Aprop-Seguimiento",
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
        <div className="flex flex-col gap-48 md:gap-32">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`fade-in-card ${visibleCards.includes(index) ? "visible" : ""
                }`}
            >
              <ProjectCard project={project} shortDescription={project.shortDescription} />
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
