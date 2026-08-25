import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { featuredProjects } from "../data/projects";
import { EMAIL_PUBLIC, SITE_URL } from "../config/email";
import { downloadCvPdf } from "../utils/downloadCvPdf";

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

const PORTFOLIO_LABEL = "portfolio-tomas-averbuj.vercel.app";

export default function Cv() {
  const { m, lang } = useLang();
  const cv = m.cv;
  const timeline = m.about.timeline;
  const [params] = useSearchParams();
  const autoDownload = params.get("download") === "1";
  const sheetRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const didAuto = useRef(false);

  const handleDownload = async () => {
    if (busy || !sheetRef.current) return;
    setBusy(true);
    try {
      const filename =
        lang === "es" ? "Tomas-Averbuj-CV.pdf" : "Tomas-Averbuj-Resume.pdf";
      await downloadCvPdf(sheetRef.current, { filename });
    } catch (err) {
      console.error(err);
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    if (!autoDownload || didAuto.current) return undefined;
    didAuto.current = true;
    const id = window.setTimeout(() => {
      const el = sheetRef.current;
      if (!el) return;
      setBusy(true);
      const filename =
        lang === "es" ? "Tomas-Averbuj-CV.pdf" : "Tomas-Averbuj-Resume.pdf";
      downloadCvPdf(el, { filename })
        .catch((err) => console.error(err))
        .finally(() => setBusy(false));
    }, 600);
    return () => window.clearTimeout(id);
  }, [autoDownload, lang]);

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
            onClick={handleDownload}
            disabled={busy}
            className="font-syne text-[11px] tracking-[0.18em] uppercase bg-mist text-ink px-5 py-3 hover:bg-paper transition-colors disabled:opacity-60"
          >
            {busy ? cv.downloading : cv.download}
          </button>
          <a
            href={`mailto:${EMAIL_PUBLIC}`}
            className="font-syne text-[11px] tracking-[0.18em] uppercase border border-paper/30 px-5 py-3 hover:border-paper transition-colors"
          >
            {cv.contact}
          </a>
        </div>
      </div>

      {autoDownload && (
        <p className="site-pad print:hidden mb-8 text-sm text-paper/55">
          {busy ? cv.downloading : cv.downloadReady}
        </p>
      )}

      <article
        ref={sheetRef}
        className="site-pad max-w-4xl mx-auto cv-sheet bg-paper text-ink p-8 md:p-12 lg:p-14 rounded-sm"
      >
        <header className="border-b border-ink/10 pb-8">
          <p className="font-syne text-[11px] tracking-[0.22em] uppercase text-ink/45 mb-3">{cv.eyebrow}</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[0.95]">{cv.title}</h1>
          <p className="cv-role mt-3 font-syne text-sm tracking-[0.14em] uppercase text-ink/55">{cv.role}</p>
          <p className="mt-2 text-ink/55">{cv.location}</p>
          <div className="cv-meta mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
            <a href={`mailto:${EMAIL_PUBLIC}`} className="hover:text-ink underline decoration-ink/20">
              {EMAIL_PUBLIC}
            </a>
            <a href="tel:+541169729914" className="hover:text-ink">
              +54 11 6972-9914
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink underline decoration-ink/20"
            >
              {PORTFOLIO_LABEL}
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
          <p className="cv-summary text-base md:text-lg leading-relaxed text-ink/75 max-w-3xl">{cv.summary}</p>
        </section>

        <section className="py-8 border-b border-ink/10">
          <h2 className="font-display text-2xl md:text-3xl mb-6">{cv.experience}</h2>
          <div className="cv-jobs space-y-7">
            {timeline.map((item) => (
              <div
                key={item.year + item.place}
                className="cv-job cv-keep grid md:grid-cols-12 gap-2 md:gap-4"
              >
                <p className="cv-job-year md:col-span-3 font-syne text-[11px] tracking-[0.14em] uppercase text-ink/45 pt-1">
                  {item.year}
                </p>
                <div className="cv-job-body md:col-span-9">
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
          <ul className="cv-stack flex flex-wrap gap-2">
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
          <div className="cv-edu grid md:grid-cols-2 gap-6">
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
          <ul className="cv-projects space-y-3">
            {featuredProjects.slice(0, 5).map((p) => (
              <li key={p.id} className="cv-keep flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-ink/10 pb-3">
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
          <p className="cv-footer-link mt-8 text-xs text-ink/50 font-syne tracking-[0.12em] uppercase">
            {cv.portfolioLabel}{" "}
            <a href={SITE_URL} target="_blank" rel="noreferrer" className="underline decoration-ink/25 hover:text-ink">
              {SITE_URL.replace(/\/$/, "")}
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
