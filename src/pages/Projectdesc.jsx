import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Gallery from "../components/Gallery";
import Reveal from "../components/Reveal";
import { getAdjacentProjects, getProject, localizeProject } from "../data/projects";
import { useLang } from "../i18n/LanguageContext";

export default function ProjectDesc() {
  const { id } = useParams();
  const { lang, m } = useLang();
  const d = m.projectDetail;
  const raw = getProject(id);
  const project = localizeProject(raw, lang);
  const adj = getAdjacentProjects(id);
  const prev = localizeProject(adj.prev, lang);
  const next = localizeProject(adj.next, lang);

  if (!project) {
    return (
      <main className="min-h-screen bg-ink text-paper flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-6">{d.notFound}</h1>
          <Link to="/projects" className="text-paper">
            {d.backProjects}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-ink text-paper min-h-screen pt-28 pb-24">
      <div className="site-pad">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-syne text-[11px] tracking-[0.2em] uppercase text-muted hover:text-paper transition-colors"
        >
          <FiArrowLeft /> {d.back}
        </Link>

        <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-4">{project.category}</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.92]">{project.title}</h1>
            <p className="mt-6 text-lg md:text-xl text-paper/65 max-w-2xl">{project.shortDescription}</p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end gap-5 text-sm">
            <Meta label={d.year} value={project.year} />
            <Meta label={d.role} value={project.role} />
            <Meta label={d.location} value={project.location} />
            <div className="flex gap-3 pt-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-syne text-[11px] tracking-[0.16em] uppercase bg-mist text-ink px-5 py-3 hover:bg-paper transition-colors"
                >
                  {d.visit} <FiExternalLink />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-line px-4 py-3 hover:border-paper hover:text-paper"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 md:mt-20">
        <Gallery
          images={project.gallery?.length ? project.gallery : project.images}
          url={project.link}
        />
      </div>

      <div className="site-pad mt-16 md:mt-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-4">{d.case}</p>
          <Reveal>
            <p className="text-lg leading-relaxed text-paper/70">{project.longDescription}</p>
          </Reveal>
          {project.testCredentials && (
            <div className="mt-8 border border-line p-5">
              <p className="font-syne text-xs tracking-widest uppercase text-paper mb-2">
                {project.testCredentials.title}
              </p>
              <p className="text-sm text-paper/70">
                {d.user}: <span className="font-mono text-paper">{project.testCredentials.user}</span>
              </p>
              <p className="text-sm text-paper/70">
                {d.password}:{" "}
                <span className="font-mono text-paper">{project.testCredentials.password}</span>
              </p>
            </div>
          )}
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="eyebrow mb-4">{d.stack}</p>
          <ul className="space-y-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="border-b border-line py-2 text-paper/80">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-pad mt-24 grid md:grid-cols-2 gap-4">
        {prev && (
          <Link to={`/project/${prev.id}`} className="group border border-line p-6 md:p-8 hover:border-paper transition-colors">
            <p className="eyebrow mb-3">{d.prev}</p>
            <p className="font-display text-3xl group-hover:text-white transition-colors">{prev.title}</p>
          </Link>
        )}
        {next && (
          <Link to={`/project/${next.id}`} className="group border border-line p-6 md:p-8 hover:border-paper transition-colors md:text-right">
            <p className="eyebrow mb-3">{d.next}</p>
            <p className="font-display text-3xl group-hover:text-white transition-colors">{next.title}</p>
          </Link>
        )}
      </div>
    </main>
  );
}

function Meta({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
      <span className="eyebrow">{label}</span>
      <span>{value}</span>
    </div>
  );
}
