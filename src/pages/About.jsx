import { Link } from "react-router-dom";
import Reveal, { ScrollSplit } from "../components/Reveal";

const timeline = [
  {
    year: "2026 — actualidad",
    title: "Desarrollador web — colaboración",
    place: "JRA Web Design LLC",
    href: "https://jrawebdesignllc.com/",
    text: "Colaboro de forma independiente con el estudio: sitios WordPress, tiendas y piezas para sus clientes. No es relación de dependencia — trabajo con ellos y sigo tomando proyectos propios, incluido NekoDev.",
  },
  {
    year: "2025 — actualidad",
    title: "Co-fundador y desarrollador",
    place: "NekoDev",
    href: "https://www.nekodev.com.ar/",
    text: "Estudio creativo junto a Luna Bianchi. Diseño web, desarrollo, branding y e-commerce para clientes propios. WordPress en el centro, más Google Ads y e-mail marketing con Brevo cuando el launch lo pide.",
  },
  {
    year: "2023 — 2025",
    title: "Desarrollador web y audiovisual",
    place: "Doble Nuez",
    text: "Sitios WordPress, nuevas funcionalidades, performance y contenido para marcas como Tienda New San.",
  },
  {
    year: "2023",
    title: "Operador de sistemas",
    place: "Jockey Club, Hipódromo de San Isidro",
    text: "Operación del sistema de apuestas, datos en tiempo real y atención al público.",
  },
  {
    year: "2020 — 2023",
    title: "Administración de edificios",
    place: "Padilla",
    text: "Gestión administrativa, consultas y documentación. El origen de AdmiLink.",
  },
];

export default function About() {
  return (
    <main className="bg-ink text-paper min-h-screen pt-32 pb-0">
      <section className="site-pad pb-20 md:pb-28">
        <p className="eyebrow mb-4">Estudio</p>
        <ScrollSplit
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-5xl"
          lines={["Diseño, código", "y criterio."]}
        />
        <Reveal>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-paper/60 leading-relaxed">
            Soy desarrollador y diseñador web. Combino programación, UI/UX y edición multimedia para que un sitio no
            solo se vea bien: que se entienda, cargue y convierta. WordPress, Google Ads y e-mail marketing con Brevo
            cuando el proyecto lo pide.
          </p>
        </Reveal>
      </section>

      <section className="site-pad pb-24 max-w-3xl">
        <p className="eyebrow mb-4">Quién soy</p>
        <p className="text-paper/70 leading-relaxed text-lg">
          Co-fundador de{" "}
          <a href="https://www.nekodev.com.ar/" target="_blank" rel="noreferrer" className="text-paper hover:text-white">
            NekoDev
          </a>{" "}
          junto a Luna Bianchi. Formación en la Escuela Multimedial Da Vinci (Desarrollo y Diseño Web). Stack diario:
          WordPress, React, Vue, Node y MongoDB — según lo que el proyecto pida.
        </p>
        <p className="mt-6 text-paper/70 leading-relaxed">
          Desde 2026 colaboro con{" "}
          <a href="https://jrawebdesignllc.com/" target="_blank" rel="noreferrer" className="text-paper hover:text-white">
            JRA Web Design LLC
          </a>
          , sin relación de dependencia. Fuera de la pantalla: fútbol (River) y videojuegos. Lo mismo que busco en el
          trabajo: ritmo, detalle y no dejar nada a medias.
        </p>
      </section>

      <section className="bg-paper text-ink py-24 md:py-32">
        <div className="site-pad">
          <p className="eyebrow !text-ink/40 mb-4">Camino</p>
          <h2 className="font-display text-4xl md:text-6xl mb-12">Experiencia</h2>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {timeline.map((item) => (
              <Reveal key={item.year + item.place} y={20}>
                <article className="grid md:grid-cols-12 gap-4 py-8 md:py-10">
                  <p className="md:col-span-3 font-syne text-xs tracking-[0.18em] uppercase text-ink/45 pt-1">
                    {item.year}
                  </p>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-3xl">{item.title}</h3>
                    <p className="text-ink/50 mt-1">
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-ink underline decoration-ink/20">
                          {item.place}
                        </a>
                      ) : (
                        item.place
                      )}
                    </p>
                    <p className="mt-3 text-ink/70 max-w-xl">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <p className="eyebrow !text-ink/40 mb-3">Educación</p>
              <h3 className="font-display text-2xl">Escuela Multimedial Da Vinci</h3>
              <p className="text-ink/60 mt-1">Desarrollo y Diseño Web — últimas materias.</p>
            </div>
            <div>
              <p className="eyebrow !text-ink/40 mb-3">Secundario</p>
              <h3 className="font-display text-2xl">Escuela Comercial N°26</h3>
              <p className="text-ink/60 mt-1">Enrique De Vedia · Egreso 2021 · Buenos Aires.</p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="font-syne text-[11px] tracking-[0.2em] uppercase bg-ink text-paper px-7 py-4 hover:bg-ink/80"
            >
              Ver trabajos
            </Link>
            <Link
              to="/contact"
              className="font-syne text-[11px] tracking-[0.2em] uppercase border border-ink/20 px-7 py-4 hover:border-ink"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
