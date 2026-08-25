import { Link } from "react-router-dom";
import Reveal, { ScrollSplit } from "../components/Reveal";
import Portrait from "../components/Portrait";
import { useLang } from "../i18n/LanguageContext";

/**
 * ═══════════════════════════════════════════════════════════
 *  POSICIÓN DEL NOMBRE (TOMAS / AVERBUJ) — ajustá acá
 *
 *  Solo desktop / notebook (lg+). En mobile y tablet no se muestra.
 *
 *  lineGap / linePull → separación vertical TOMAS ↔ AVERBUJ
 *  showMark → puntito rojo en el ancla
 * ═══════════════════════════════════════════════════════════
 */
const NAME_POS = {
  desktop: {
    top: "100px",
    bottom: "auto",
    left: "100%",
    right: "auto",
  },
  /** Hueco visual entre nombre y apellido */
  lineGap: "48px",
  /** Compensa el padding de la fuente display italic */
  linePull: "-0.28em",
  showMark: false,
};

const nameLineStyle = {
  marginTop: "calc(var(--name-line-pull) + var(--name-line-gap))",
};

const nameVars = {
  "--name-line-gap": NAME_POS.lineGap,
  "--name-line-pull": NAME_POS.linePull,
};

export default function About() {
  const { m } = useLang();
  const a = m.about;

  return (
    <main className="bg-ink text-paper min-h-screen pt-28 md:pt-32 pb-0">
      <section className="relative site-pad pb-20 md:pb-28 min-h-[70vh] md:min-h-[78vh] flex flex-col justify-end overflow-x-clip">
        <div className="relative w-full max-w-xl">
          {/* Solo desktop / notebook (lg+) — absolute, detrás del copy */}
          <div
            className="name-hero-pos hidden lg:block pointer-events-none select-none leading-none z-0"
            style={{
              "--name-top": NAME_POS.desktop.top,
              "--name-bottom": NAME_POS.desktop.bottom,
              "--name-left": NAME_POS.desktop.left,
              "--name-right": NAME_POS.desktop.right,
              ...nameVars,
            }}
            aria-hidden
          >
            {NAME_POS.showMark && (
              <span
                className="absolute -top-1 -left-1 z-20 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-red-500/40"
                title="Ancla NAME_POS (top/left)"
              />
            )}
            <p className="name-outline font-display italic text-[12vw] tracking-tight whitespace-nowrap leading-[0.75] -translate-x-[48%]">
              TOMAS
            </p>
            <p
              className="name-outline font-display italic text-[12vw] tracking-tight whitespace-nowrap leading-[0.75]"
              style={nameLineStyle}
            >
              AVERBUJ
            </p>
          </div>

          {/* Copy del hero: flujo normal abajo (no se ancla al nombre) */}
          <div className="relative z-10">
            <p className="eyebrow mb-4">{a.eyebrow}</p>
            <ScrollSplit
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
              lines={[a.title1, a.title2]}
            />
            <Reveal>
              <p className="mt-8 text-lg md:text-xl text-paper/60 leading-relaxed">{a.lead}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-pad pb-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5 flex justify-center lg:justify-start">
          <Portrait className="w-[220px] sm:w-[280px] md:w-[320px]" />
        </Reveal>
        <div className="lg:col-span-7">
          <p className="eyebrow mb-4">{a.who}</p>
          <p className="text-paper/70 leading-relaxed text-lg max-w-xl">
            {a.p1a}{" "}
            <a href="https://www.nekodev.com.ar/" target="_blank" rel="noreferrer" className="text-paper hover:text-white">
              NekoDev
            </a>{" "}
            {a.p1b}
          </p>
          <p className="mt-6 text-paper/70 leading-relaxed max-w-xl">
            {a.p2a}{" "}
            <a href="https://jrawebdesignllc.com/" target="_blank" rel="noreferrer" className="text-paper hover:text-white">
              JRA Web Design LLC
            </a>
            {a.p2b}
          </p>
        </div>
      </section>

      <section className="bg-paper text-ink py-24 md:py-32">
        <div className="site-pad">
          <p className="eyebrow !text-ink/40 mb-4">{a.path}</p>
          <h2 className="font-display text-4xl md:text-6xl mb-12">{a.experience}</h2>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {a.timeline.map((item) => (
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
              <p className="eyebrow !text-ink/40 mb-3">{a.education}</p>
              <h3 className="font-display text-2xl">{a.davinci}</h3>
              <p className="text-ink/60 mt-1">{a.davinciDetail}</p>
            </div>
            <div>
              <p className="eyebrow !text-ink/40 mb-3">{a.secondary}</p>
              <h3 className="font-display text-2xl">{a.school}</h3>
              <p className="text-ink/60 mt-1">{a.schoolDetail}</p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="font-syne text-[11px] tracking-[0.2em] uppercase bg-ink text-paper px-7 py-4 hover:bg-ink/80"
            >
              {a.ctaWork}
            </Link>
            <Link
              to="/contact"
              className="font-syne text-[11px] tracking-[0.2em] uppercase border border-ink/20 px-7 py-4 hover:border-ink"
            >
              {a.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
