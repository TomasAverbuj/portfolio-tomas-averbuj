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

const JRA = {
  href: "https://jrawebdesignllc.com/",
  label: "JRA Web Design LLC",
};

/** Campos de texto que se pueden sobreescribir por idioma (URLs / ids / images no). */
export function localizeProject(project, lang = "es") {
  if (!project) return null;
  const { en, ...base } = project;
  if (lang !== "en" || !en) return base;
  return {
    ...base,
    ...en,
    testCredentials: en.testCredentials
      ? { ...(base.testCredentials || {}), ...en.testCredentials }
      : base.testCredentials,
  };
}

export function localizeProjects(list, lang = "es") {
  return list.map((p) => localizeProject(p, lang));
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
    en: {
      category: "Studio — design & development",
      role: "Co-founder & development",
      shortDescription:
        "Custom React design-and-dev studio. Co-founded with Luna Bianchi for brands in Argentina and beyond.",
      longDescription:
        "NekoDev is the creative studio we built with Luna Bianchi — she on graphic design, me on full-stack development. The studio site is custom React: own UI, motion, and a selection of work (Iocus Juguetes, LeveleAr, Nai Nai). From there we take clients: institutional, e-commerce and custom products — React, Next.js or WordPress depending on the brief.",
      technologies: ["React", "JavaScript", "Next.js", "Custom design", "UX/UI", "Branding"],
    },
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
    en: {
      category: "E-commerce",
      role: "Design & development",
      shortDescription:
        "Online store for Montessori Pikler soft play, toys, and kids’ event rentals.",
      longDescription:
        "Iocus brings soft play and Montessori toys to events and homes. The e-commerce organizes collections, highlights bestsellers and makes custom orders easy. Built recently with NekoDev: catalog, brand story and a mobile-first checkout.",
    },
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
    longDescription: [
      "Proyecto desarrollado para ",
      JRA,
      ": ",
      { href: "https://armeriawilliams.com/", label: "Armería Williams" },
      " unifica shop, membresías del Williams Shooting Club, trámites de licencia, cursos, eventos y sorteos en un mismo producto digital. El trabajo cubrió arquitectura de información, diseño de interfaz y desarrollo de un flujo claro: buscar, comprar, unirse al club o iniciar un trámite sin perderse. Incluye catálogo, cuentas de usuario, membresías (day pass y anual) y participación en sorteos desde la compra.",
    ],
    technologies: ["WordPress", "WooCommerce", "JavaScript", "HTML + CSS", "UX/UI"],
    ...deviceSet("armeria-williams"),
    link: "https://armeriawilliams.com/",
    en: {
      category: "Platform + e-commerce",
      role: "Design & development",
      shortDescription:
        "One experience for shop, shooting club, licenses, courses and raffles — built for mobile first.",
      longDescription: [
        "Project built for ",
        JRA,
        ": ",
        { href: "https://armeriawilliams.com/", label: "Armería Williams" },
        " unifies the shop, Williams Shooting Club memberships, license workflows, courses, events and raffles in one product. Scope covered IA, UI and a clear flow: browse, buy, join the club or start a license process without getting lost. Includes catalog, accounts, day-pass/annual memberships and raffle entry from checkout.",
      ],
    },
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
    longDescription: [
      "Proyecto desarrollado para ",
      JRA,
      ". ",
      { href: "https://abrazomaternal.com/", label: "Abrazo Maternal" },
      " necesitaba una web que transmitiera cuidado, profesionalismo y cercanía. Diseñé y desarrollé un sitio institucional con hero claro, servicios, galería y contacto, con una paleta suave y tipografía amable. El objetivo: que una familia entienda en segundos qué ofrece el centro, dónde está y cómo dar el siguiente paso — sin ruido visual ni fricción en mobile.",
    ],
    technologies: ["WordPress", "HTML + CSS", "JavaScript", "UX/UI"],
    ...deviceSet("abrazo-maternal"),
    link: "https://abrazomaternal.com/",
    en: {
      category: "Institutional site",
      role: "Design & development",
      shortDescription:
        "Warm digital identity for a childcare and early-education center (18 months to 5 years).",
      longDescription: [
        "Project built for ",
        JRA,
        ". ",
        { href: "https://abrazomaternal.com/", label: "Abrazo Maternal" },
        " needed a site that felt caring, professional and close. I designed and built an institutional site with a clear hero, services, gallery and contact — soft palette, friendly type. Goal: families understand the offer, location and next step in seconds, without visual noise or mobile friction.",
      ],
    },
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
    longDescription: [
      "Proyecto desarrollado para ",
      JRA,
      ". ",
      { href: "https://epumpspr.com/", label: "ePUMPS Solutions" },
      " es una compañía de venta, reparación y mantenimiento de bombas y sistemas de fluidos, con operación en Puerto Rico, República Dominicana y Colombia. El sitio organiza una oferta técnica compleja —instalación, filtración, skids, mantenimiento— en una narrativa clara: líderes, servicios, líneas representadas y contacto 24/7. Diseño corporativo contemporáneo, jerarquía tipográfica fuerte y llamados a cotización inmediata.",
    ],
    technologies: ["WordPress", "WooCommerce", "HTML + CSS", "JavaScript", "UX/UI"],
    ...deviceSet("epumps"),
    link: "https://epumpspr.com/",
    en: {
      category: "Corporate + catalog",
      role: "Design & development",
      shortDescription:
        "B2B site for a leader in pumps and water treatment — services, catalog and multi-country contact.",
      longDescription: [
        "Project built for ",
        JRA,
        ". ",
        { href: "https://epumpspr.com/", label: "ePUMPS Solutions" },
        " sells, repairs and maintains pumps and fluid systems across Puerto Rico, Dominican Republic and Colombia. The site turns a dense technical offer — install, filtration, skids, maintenance — into a clear story: leadership, services, brands represented and 24/7 contact. Contemporary corporate design, strong type hierarchy and direct quote CTAs.",
      ],
    },
  },
  {
    id: 13,
    title: "YR' Brows & Beauty Studio",
    category: "Sitio institucional",
    year: "2026",
    role: "Diseño y desarrollo",
    location: "Vega Baja, Puerto Rico",
    featured: true,
    shortDescription:
      "Sitio de belleza y bienestar para facial, corporal, láser, micropigmentación y cabello — con reserva clara.",
    longDescription: [
      "Proyecto desarrollado para ",
      JRA,
      ". ",
      { href: "https://yrbrows.jrawebdesignllc.com/", label: "YR' Brows & Beauty Studio" },
      " es el espacio de Yaileen Ríos en Vega Baja: estética facial y corporal, depilación láser, micropigmentación y servicios de cabello. Diseñé y desarrollé una web cálida y ordenada — hero, propósito, servicios y contacto/WhatsApp — para que una clienta entienda la oferta y reserve sin fricción, con tipografía expresiva y foco en la experiencia mobile.",
    ],
    technologies: ["WordPress", "HTML + CSS", "JavaScript", "UX/UI"],
    ...deviceSet("yr-brows"),
    link: "https://yrbrows.jrawebdesignllc.com/",
    en: {
      category: "Institutional site",
      role: "Design & development",
      shortDescription:
        "Beauty and wellness site for facial, body, laser, micropigmentation and hair — with a clear booking path.",
      longDescription: [
        "Project built for ",
        JRA,
        ". ",
        { href: "https://yrbrows.jrawebdesignllc.com/", label: "YR' Brows & Beauty Studio" },
        " is Yaileen Ríos’s studio in Vega Baja: facial and body aesthetics, laser hair removal, micropigmentation and hair services. I designed and built a warm, ordered site — hero, purpose, services and WhatsApp/contact — so clients grasp the offer and book without friction, with expressive type and a mobile-first experience.",
      ],
    },
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
    en: {
      category: "Digital catalog",
      role: "Design & development",
      shortDescription:
        "Digital catalog of French wines with wineries, history and retail points in Argentina.",
      longDescription:
        "Sur Marchands is an elegant digital catalog focused on French wines. It covers wineries, each wine’s story and where to buy in Argentina. I built advanced search so visitors can explore by region, type and traits.",
    },
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
    en: {
      category: "Personal product",
      role: "Design & development",
      location: "Personal",
      shortDescription:
        "Pokédex with 1,025 Pokémon, silhouette quiz, team builder, comparer and type chart.",
      longDescription:
        "Full fan app on PokéAPI: 1,025 Pokémon (gens I–IX) with search, filters by generation, type, legendary/mythical/baby, favorites and sort by number, name or stats. Plus play/analysis tools: “Who’s that Pokémon?” quiz, 6-slot team builder with offensive coverage and defensive gaps, side-by-side comparer (stats, types, weaknesses, shareable link) and an interactive type chart. Frontend only — favorites and team live in the browser.",
    },
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
    en: {
      category: "Institutional site",
      role: "Design & development",
      shortDescription:
        "Site for a horse farm with class bookings and horse information management.",
      longDescription:
        "Full web platform for Haras Abril: riding-class bookings, horse info and news. Includes an admin panel for bookings, horse updates and publishing. Design mirrors the farm’s elegance and professionalism.",
    },
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
    en: {
      category: "E-commerce",
      role: "Design & development",
      shortDescription:
        "Design eyewear e-commerce with original frames and customization.",
      longDescription:
        "E-commerce for design eyewear with the brand’s original frames. Includes customization so buyers can adapt lenses to their needs, an interactive catalog of unique designs, and a custom-order flow.",
    },
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
    en: {
      category: "Web application",
      role: "Design & development",
      shortDescription:
        "App for condo building-works tracking — for admins and residents.",
      longDescription:
        "AdmiLink manages building works in condo associations. Admins and users track progress, history and docs, and stay aligned on each project’s status. Built for transparency and control in property administration.",
      testCredentials: {
        title: "Test credentials:",
      },
    },
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
