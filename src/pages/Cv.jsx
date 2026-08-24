import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { featuredProjects } from "../data/projects";

const STACK = [
  "JavaScript",
  "React",
  "Next.js",
  "Vue.js",
  "PHP",
  "Node.js",
  "MongoDB",
  "MySQL",
  "WordPress",
  "WooCommerce",
  "Google Ads",
  "Brevo",
];

export default function Cv() {
  const { m, lang } = useLang();
  const cv = m.cv;
  const timeline = m.about.timeline;
  const [params] = useSearchParams();
  const autoPrint = params.get("download") === "1";

  useEffect(() => {
    if (!autoPrint) return undefined;
    const id = window.setTimeout(() => window.print(), 450);
    return () => window.clearTimeout(id);
  }, [autoPrint]);

  return (
    <main className="bg-ink text-paper min-h-screen pt-28 pb-24 cv-page">
      <div className="site-pad print:hidden mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          to="/"
          className="font-syne text-[11px] tracking-[0.2em] uppercase text-muted hover:text-paper transition-colors"
        >
          ← {cv.back}
        </Link>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="font-syne text-[11px] tracking-[0.18em] uppercase bg-mist text-ink px-5 py-3 hover:bg-paper transition-colors"
          >
            {cv.download}
          </button>
          <a
            href="mailto:averbujtomas@gmail.com"
            className="font-syne text-[11px] tracking-[0.18em] uppercase border border-paper/30 px-5 py-3 hover:border-paper transition-colors"
          >
            {cv.contact}
          </a>
        </div>
      </div>

      {autoPrint && (
        <p className="site-pad print:hidden mb-8 text-sm text-paper/55">{cv.printHint}</p>
      )}

      <article className="site-pad max-w-4xl mx-auto cv-sheet bg-paper text-ink p-8 md:p-12 lg:p-14 rounded-sm print:max-w-none print:p-0 print:rounded-none">
        <header className="border-b border-ink/10 pb-8">
          <p className="font-syne text-[11px] tracking-[0.22em] uppercase text-ink/45 mb-3">{cv.eyebrow}</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[0.95]">{cv.title}</h1>
          <p className="mt-3 font-syne text-sm tracking-[0.14em] uppercase text-ink/55">{cv.role}</p>
          <p className="mt-2 text-ink/55">{cv.location}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
            <a href="mailto:averbujtomas@gmail.com" className="hover:text-ink underline decoration-ink/20">
              averbujtomas@gmail.com
            </a>
            <a href="tel:+541169729914" className="hover:text-ink">
              +54 11 6972-9914
            </a>
            <a
              href="https://github.com/tomasaverbuj"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink underline decoration-ink/20"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tomas-averbuj-62b47222b/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink underline decoration-ink/20"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section className="py-8 border-b border-ink/10">
          <p className="text-base md:text-lg leading-relaxed text-ink/75 max-w-3xl">{cv.summary}</p>
        </section>

        <section className="py-8 border-b border-ink/10">
          <h2 className="font-display text-2xl md:text-3xl mb-6">{cv.experience}</h2>
          <div className="space-y-7">
            {timeline.map((item) => (
              <div key={item.year + item.place} className="grid md:grid-cols-12 gap-2 md:gap-4">
                <p className="md:col-span-3 font-syne text-[11px] tracking-[0.14em] uppercase text-ink/45 pt-1">
                  {item.year}
                </p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-xl md:text-2xl leading-tight">{item.title}</h3>
                  <p className="text-ink/50 mt-0.5">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="underline decoration-ink/20">
                        {item.place}
                      </a>
                    ) : (
                      item.place
                    )}
                  </p>
                  <p className="mt-2 text-ink/70 text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-ink/10">
          <h2 className="font-display text-2xl md:text-3xl mb-5">{cv.stack}</h2>
          <ul className="flex flex-wrap gap-2">
            {STACK.map((item) => (
              <li
                key={item}
                className="font-syne text-[10px] tracking-[0.14em] uppercase border border-ink/15 px-3 py-2 text-ink/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-8 border-b border-ink/10">
          <h2 className="font-display text-2xl md:text-3xl mb-5">{cv.education}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-xl">{m.about.davinci}</h3>
              <p className="text-ink/60 mt-1 text-sm">{m.about.davinciDetail}</p>
            </div>
            <div>
              <h3 className="font-display text-xl">{m.about.school}</h3>
              <p className="text-ink/60 mt-1 text-sm">{m.about.schoolDetail}</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-syne text-[11px] tracking-[0.16em] uppercase text-ink/45 mb-1">{cv.langs}</p>
            <p className="text-ink/70">{cv.langList}</p>
          </div>
        </section>

        <section className="pt-8">
          <h2 className="font-display text-2xl md:text-3xl mb-5">{cv.selected}</h2>
          <ul className="space-y-3">
            {featuredProjects.slice(0, 5).map((p) => (
              <li key={p.id} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-ink/10 pb-3">
                <div>
                  <span className="font-display text-lg">{p.title}</span>
                  <span className="text-ink/45 text-sm ml-2">{p.year}</span>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-syne text-[10px] tracking-[0.14em] uppercase text-ink/55 hover:text-ink"
                  >
                    {p.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-ink/40 font-syne tracking-[0.12em] uppercase">
            {lang === "es" ? "Portfolio" : "Portfolio"} · tomasaverbuj
          </p>
        </section>
      </article>
    </main>
  );
}
