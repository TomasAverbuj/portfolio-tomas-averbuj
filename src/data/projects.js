function deviceSet(slug) {
  return {
    images: [
      `/images/work/${slug}.jpg`,
      `/images/work/${slug}-mobile.jpg`,
      `/images/work/${slug}-tablet.jpg`,
    ],
    gallery: [
      `/images/work/${slug}.jpg`,
      `/images/work/${slug}-mobile.jpg`,
      `/images/work/${slug}-tablet.jpg`,
    ],
  };
}

export const projects = [
  {
    id: 11,
    title: "NekoDev",
    category: "Estudio — diseño y desarrollo",
    year: "2025",
    role: "Co-fundador y desarrollo",
    location: "Buenos Aires",
    featured: true,
    shortDescription:
      "Estudio de diseño y desarrollo a medida en React. Co-fundado con Luna Bianchi para marcas de Argentina y el resto del mundo.",
    longDescription:
      "NekoDev es el estudio creativo que armamos con Luna Bianchi. Ella desde el diseño gráfico; yo desde el desarrollo full stack. El sitio del estudio es React a medida — interfaz propia, motion y un recorte de piezas (Iocus Juguetes, LeveleAr, Nai Nai). Desde ahí tomamos clientes: institucionales, e-commerce y productos a medida, en React, Next.js o WordPress según lo que el proyecto pida.",
    technologies: ["React", "JavaScript", "Next.js", "Diseño a medida", "UX/UI", "Branding"],
    ...deviceSet("nekodev"),
    link: "https://www.nekodev.com.ar/",
  },
  {
    id: 12,
    title: "Iocus Juguetes",
    category: "E-commerce",
    year: "2026",
    role: "Diseño y desarrollo",
    location: "Argentina",
    featured: true,
    shortDescription:
      "Tienda online de plazas Pikler Montessori, juguetes y alquiler para eventos infantiles.",
    longDescription:
      "Iocus lleva plazas blandas y juguetes Montessori a eventos y a la casa. El e-commerce organiza colecciones (cositas locas, juegos, plazas blandas), destaca los más vendidos y deja un contacto claro para pedidos personalizados. Lo desarrollamos hace poco desde NekoDev: catálogo, narrativa de marca y una compra pensada para celular.",
    technologies: ["WordPress", "WooCommerce", "HTML + CSS", "JavaScript", "UX/UI"],
    ...deviceSet("iocus"),
    link: "https://www.iocusarteenjuguetes.com.ar/",
  },
  {
    id: 8,
    title: "Armería Williams",
    category: "Plataforma + e-commerce",
    year: "2026",
    role: "Diseño y desarrollo",
    location: "Puerto Rico",
    featured: true,
    shortDescription:
      "Una sola experiencia para tienda, club de tiro, licencias, cursos y sorteos — pensada para usarse desde el celular.",
    longDescription:
      "Armería Williams unifica shop, membresías del Williams Shooting Club, trámites de licencia, cursos, eventos y sorteos en un mismo producto digital. El trabajo cubrió arquitectura de información, diseño de interfaz y desarrollo de un flujo claro: buscar, comprar, unirse al club o iniciar un trámite sin perderse. Incluye catálogo, cuentas de usuario, membresías (day pass y anual) y participación en sorteos desde la compra.",
    technologies: ["WordPress", "WooCommerce", "JavaScript", "HTML + CSS", "UX/UI"],
    ...deviceSet("armeria-williams"),
    link: "https://armeriawilliams.com/",
  },
  {
    id: 9,
    title: "Abrazo Maternal",
    category: "Sitio institucional",
    year: "2026",
    role: "Diseño y desarrollo",
    location: "Cidra, Puerto Rico",
    featured: true,
    shortDescription:
      "Identidad digital cálida para un centro de cuido y desarrollo educativo de 18 meses a 5 años.",
    longDescription:
      "Abrazo Maternal necesitaba una web que transmitiera cuidado, profesionalismo y cercanía. Diseñé y desarrollé un sitio institucional con hero claro, servicios, galería y contacto, con una paleta suave y tipografía amable. El objetivo: que una familia entienda en segundos qué ofrece el centro, dónde está y cómo dar el siguiente paso — sin ruido visual ni fricción en mobile.",
    technologies: ["WordPress", "HTML + CSS", "JavaScript", "UX/UI"],
    ...deviceSet("abrazo-maternal"),
    link: "https://abrazomaternal.com/",
  },
  {
    id: 10,
    title: "ePUMPS Solutions",
    category: "Corporativo + catálogo",
    year: "2026",
    role: "Diseño y desarrollo",
    location: "Puerto Rico · RD · Colombia",
    featured: true,
    shortDescription:
      "Sitio B2B para un líder en bombas y tratamiento de agua, con servicios, catálogo y contacto multi-país.",
    longDescription:
      "ePUMPS Solutions es una compañía de venta, reparación y mantenimiento de bombas y sistemas de fluidos, con operación en Puerto Rico, República Dominicana y Colombia. El sitio organiza una oferta técnica compleja —instalación, filtración, skids, mantenimiento— en una narrativa clara: líderes, servicios, líneas representadas y contacto 24/7. Diseño corporativo contemporáneo, jerarquía tipográfica fuerte y llamados a cotización inmediata.",
    technologies: ["WordPress", "WooCommerce", "HTML + CSS", "JavaScript", "UX/UI"],
    ...deviceSet("epumps"),
    link: "https://epumpspr.com/",
  },
  {
    id: 1,
    title: "Sur Marchands",
    category: "Catálogo digital",
    year: "2024",
    role: "Diseño y desarrollo",
    location: "Argentina",
    featured: false,
    shortDescription:
      "Catálogo digital de vinos franceses con bodegas, historia y puntos de venta en Argentina.",
    longDescription:
      "Sur Marchands es un catálogo digital elegante especializado en vinos franceses. El proyecto incluye información detallada sobre las bodegas, la historia de cada vino, y los puntos de venta en Argentina donde se pueden encontrar. Implementé un sistema de búsqueda avanzado para facilitar la exploración de vinos por región, tipo y características.",
    technologies: ["WordPress", "HTML + CSS", "PHP"],
    ...deviceSet("sur-marchands"),
    link: "https://surmarchands.com/",
  },
  {
    id: 6,
    title: "PokéDex Fan",
    category: "Producto personal",
    year: "2025",
    role: "Diseño y desarrollo",
    location: "Personal",
    featured: false,
    shortDescription:
      "Pokédex con 1025 Pokémon, quiz de siluetas, armado de equipo, comparador y tabla de tipos.",
    longDescription:
      "App fan completa sobre PokéAPI: catálogo de 1025 Pokémon (gens I–IX) con búsqueda, filtros por generación, tipo, legendarios/míticos/bebés, favoritos y orden por número, nombre o stats (BST, PS, ataque, velocidad). Sumé herramientas de juego y análisis: quiz “¿Quién es ese Pokémon?”, armado de equipo de 6 con cobertura ofensiva y huecos defensivos, comparador lado a lado (stats, tipos y debilidades, con link compartible) y tabla de tipos interactiva con matriz de efectividad. Todo frontend, sin base de datos: favoritos y equipo viven en el navegador.",
    technologies: ["React", "Vite", "Tailwind", "JavaScript", "API REST", "PokéAPI", "Vercel", "GitHub"],
    ...deviceSet("pokedex"),
    link: "https://pokedex-fan.vercel.app/",
    github: "https://github.com/TomasAverbuj/PokleDex-Fan",
  },
  {
    id: 3,
    title: "Haras Abril",
    category: "Sitio institucional",
    year: "2024",
    role: "Diseño y desarrollo",
    location: "Argentina",
    featured: false,
    shortDescription:
      "Sitio para un haras con reservas y gestión de información de caballos.",
    longDescription:
      "Plataforma web completa para Haras Abril, incluyendo un sistema de reservas para clases de equitación, gestión de caballos, y una sección de noticias. El proyecto implementa un panel de administración para gestionar reservas, actualizar información de los caballos, y publicar contenido. El diseño refleja la elegancia y profesionalismo del haras.",
    technologies: ["WordPress", "HTML + CSS", "PHP"],
    ...deviceSet("haras-abril"),
    link: "https://harasabril.com.ar/",
  },
  {
    id: 2,
    title: "Claudia Cestau",
    category: "E-commerce",
    year: "2024",
    role: "Diseño y desarrollo",
    location: "Argentina",
    featured: false,
    shortDescription:
      "E-commerce de lentes de diseño con carcazas originales y personalización.",
    longDescription:
      "E-commerce especializado en la venta de lentes de diseño con carcazas originales de la marca. El sitio incluye un sistema de personalización que permite a los compradores ajustar sus lentes según sus necesidades específicas. Implementé un catálogo interactivo que destaca los diseños únicos y las opciones de personalización disponibles, junto con un sistema de pedidos personalizados para garantizar la satisfacción del cliente.",
    technologies: ["WordPress", "WooCommerce", "HTML + CSS", "JavaScript", "PHP"],
    ...deviceSet("claudia-cestau"),
    link: "https://claudiacestau.com/",
  },
  {
    id: 7,
    title: "AdmiLink",
    category: "Aplicación web",
    year: "2024",
    role: "Diseño y desarrollo",
    location: "Argentina",
    featured: false,
    shortDescription:
      "App para gestión y seguimiento de obras de consorcio, para administradores y usuarios.",
    longDescription:
      "AdmiLink es una aplicación diseñada para la gestión integral de obras en consorcios. Permite tanto a administradores como a usuarios llevar un registro detallado del progreso de las obras, consultar el historial y la documentación, y mantener una comunicación eficiente sobre el estado de cada proyecto y la administración correspondiente. Facilita la transparencia y el control en la administración de consorcios.",
    testCredentials: {
      title: "Credenciales de prueba:",
      user: "admin@admin.com",
      password: "hola123",
    },
    technologies: ["React", "Vite", "Firebase", "Vercel", "HTML + CSS", "JavaScript", "Tailwind"],
    ...deviceSet("admilink"),
    link: "https://admi-link.vercel.app/login",
    github: "https://github.com/TomasAverbuj/Aprop-Seguimiento",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(id) {
  return projects.find((p) => p.id === Number(id));
}

export function getAdjacentProjects(id) {
  const index = projects.findIndex((p) => p.id === Number(id));
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[index === 0 ? projects.length - 1 : index - 1],
    next: projects[index === projects.length - 1 ? 0 : index + 1],
  };
}
