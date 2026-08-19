import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageReveal } from "./Reveal";

export default function ProjectRow({ project, index }) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <Link to={`/project/${project.id}`} className="group block border-t border-line last:border-b">
      <article className="site-pad py-10 md:py-16 grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-4 text-muted">
            <span className="font-syne text-xs tracking-[0.22em]">{n}</span>
            <span className="h-px w-8 bg-muted/50" />
            <span className="font-syne text-xs tracking-[0.18em] uppercase">{project.year}</span>
          </div>
          <h3 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[0.95] text-paper group-hover:text-white transition-colors duration-500">
            {project.title}
          </h3>
          <p className="mt-4 text-paper/60 max-w-md">{project.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="font-syne text-[10px] tracking-[0.16em] uppercase border border-line px-3 py-1.5 text-paper/70">
              {project.category}
            </span>
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="font-syne text-[10px] tracking-[0.16em] uppercase border border-line px-3 py-1.5 text-paper/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden aspect-[16/10]">
            <ImageReveal
              src={project.images[0]}
              alt={project.title}
              className="absolute inset-0"
              imgClass="transition-transform duration-700 group-hover:scale-105"
            />
            <motion.div
              className="absolute inset-0 bg-paper/0 group-hover:bg-paper/10 transition-colors duration-500"
              aria-hidden
            />
            <span className="absolute bottom-4 right-4 font-syne text-[10px] tracking-[0.2em] uppercase bg-ink/80 text-paper px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Ver caso →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
