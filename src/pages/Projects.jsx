import { Link } from "react-router-dom";
import Reveal, { ScrollSplit } from "../components/Reveal";
import ProjectRow from "../components/ProjectRow";
import { localizeProjects, projects } from "../data/projects";
import { useLang } from "../i18n/LanguageContext";

export default function Projects() {
  const { lang, m } = useLang();
  const p = m.projects;
  const list = localizeProjects(projects, lang);

  return (
    <main className="bg-ink text-paper min-h-screen pt-32 pb-24">
      <div className="site-pad mb-12 md:mb-20">
        <p className="eyebrow mb-4">{p.eyebrow}</p>
        <ScrollSplit className="section-title max-w-4xl" lines={[p.title1, p.title2]} />
        <Reveal delay={0.15}>
          <p className="mt-6 text-paper/55 max-w-xl text-lg">{p.lead}</p>
        </Reveal>
        <p className="mt-8 font-syne text-xs tracking-[0.2em] uppercase text-muted">
          {String(list.length).padStart(2, "0")} {p.count}
        </p>
      </div>

      <div>
        {list.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="site-pad mt-20">
        <Link
          to="/contact"
          className="font-syne text-[11px] tracking-[0.2em] uppercase bg-mist text-ink px-7 py-4 hover:bg-paper transition-colors inline-block"
        >
          {p.cta}
        </Link>
      </div>
    </main>
  );
}
