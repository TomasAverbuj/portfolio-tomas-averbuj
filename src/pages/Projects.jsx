import { Link } from "react-router-dom";
import Reveal, { ScrollSplit } from "../components/Reveal";
import ProjectRow from "../components/ProjectRow";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="bg-ink text-paper min-h-screen pt-32 pb-24">
      <div className="site-pad mb-12 md:mb-20">
        <p className="eyebrow mb-4">Archivo</p>
        <ScrollSplit
          className="section-title max-w-4xl"
          lines={["Trabajos recientes", "y piezas de archivo."]}
        />
        <Reveal delay={0.15}>
          <p className="mt-6 text-paper/55 max-w-xl text-lg">
            Sitios, tiendas y productos digitales. Cada pieza con el mismo criterio: claridad, oficio y un launch que se sienta premium.
          </p>
        </Reveal>
        <p className="mt-8 font-syne text-xs tracking-[0.2em] uppercase text-muted">
          {String(projects.length).padStart(2, "0")} proyectos
        </p>
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="site-pad mt-20">
        <Link
          to="/contact"
          className="font-syne text-[11px] tracking-[0.2em] uppercase bg-mist text-ink px-7 py-4 hover:bg-paper transition-colors inline-block"
        >
          ¿El siguiente es el tuyo?
        </Link>
      </div>
    </main>
  );
}
