import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";
import Reveal, { ScrollSplit, SplitLines } from "../components/Reveal";
import ProjectRow from "../components/ProjectRow";
import ContactForm from "../components/ContactForm";
import Seal from "../components/Seal";
import Portrait from "../components/Portrait";
import BrowserMockup from "../components/BrowserMockup";
import { featuredProjects, projects } from "../data/projects";
import { useLang } from "../i18n/LanguageContext";

function LocalTime({ locale }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString(locale === "en" ? "en-US" : "es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [locale]);
  return <span>{time}</span>;
}

export default function Home() {
  const { lang, m } = useLang();
  const h = m.home;
  const more = projects.filter((p) => !p.featured).slice(0, 3);
  const stats = [
    { value: "03+", label: h.stats.years },
    { value: "10+", label: h.stats.projects },
    { value: "PR · AR", label: h.stats.markets },
    { value: "100%", label: h.stats.custom },
  ];
  const introDelay = (() => {
    try {
      return sessionStorage.getItem("ta-intro") === "1" ? 0.12 : 1.75;
    } catch {
      return 0.12;
    }
  })();

  return (
    <main className="bg-ink text-paper">
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-28 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-paper/10 blur-[90px] animate-floaty" />
          <div className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-paper/5 blur-[80px]" />
        </div>

        <div className="site-pad relative z-10 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 md:mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: introDelay + 0.05 }}
              className="eyebrow"
            >
              Buenos Aires · <LocalTime locale={lang} />
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: introDelay + 0.18 }}
              className="eyebrow text-paper"
            >
              {h.available}
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <SplitLines
                as="h1"
                className="font-display text-[12vw] md:text-[7.4vw] leading-[0.88] tracking-tight max-w-[16ch]"
                delay={introDelay}
                lines={[h.hero1, h.hero2, h.hero3]}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: introDelay + 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <Seal className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px]" />
            </motion.div>
          </div>

          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: introDelay + 0.55, duration: 0.8 }}
              className="md:col-span-6 text-lg md:text-xl text-paper/65 max-w-xl"
            >
              {h.heroBody}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: introDelay + 0.7, duration: 0.8 }}
              className="md:col-span-6 flex flex-wrap gap-3 md:justify-end"
            >
              <Link
                to="/projects"
                className="font-syne text-[11px] tracking-[0.2em] uppercase bg-mist text-ink px-7 py-4 hover:bg-paper transition-colors"
              >
                {h.ctaWork}
              </Link>
              <Link
                to="/contact"
                className="font-syne text-[11px] tracking-[0.2em] uppercase border border-paper/30 px-7 py-4 hover:border-paper hover:text-paper transition-colors"
              >
                {h.ctaStart}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: introDelay + 0.9 }}
            className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-[11px] tracking-[0.18em] uppercase text-muted font-syne"
          >
            <span>+ est. 2023</span>
            <span>+ Full stack</span>
            <span>+ WordPress / WooCommerce</span>
            <span>+ Google Ads · Brevo</span>
          </motion.div>
        </div>
      </section>

      <Marquee />

      <section id="work" className="pt-24 md:pt-32 pb-8">
        <div className="site-pad mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">{h.selected}</p>
            <ScrollSplit className="section-title" lines={[h.workTitle1, h.workTitle2]} />
          </div>
          <Reveal delay={0.15}>
            <p className="text-paper/55 max-w-sm md:text-right">{h.workAside}</p>
          </Reveal>
        </div>

        <div>
          {featuredProjects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="site-pad mt-16 md:mt-24">
          <div className="flex items-end justify-between mb-8">
            <p className="eyebrow">{h.also}</p>
            <Link
              to="/projects"
              className="font-syne text-[11px] tracking-[0.2em] uppercase text-paper/70 hover:text-paper"
            >
              {h.archive} ({projects.length})
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {more.map((project) => (
              <Link key={project.id} to={`/project/${project.id}`} className="group block">
                <BrowserMockup
                  src={project.images[0]}
                  alt={project.title}
                  url={project.link}
                  aspect="aspect-[4/3]"
                  imgClass="transition-transform duration-700 group-hover:scale-[1.03]"
                  className="transition-transform duration-500 group-hover:-translate-y-0.5"
                />
                <div className="pt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted mt-1">{project.category}</p>
                  </div>
                  <span className="text-xs text-muted mt-2">{project.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="site-pad grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5 flex justify-center lg:justify-start">
            <Portrait className="w-[240px] sm:w-[300px] md:w-[360px]" />
          </Reveal>
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">{h.who}</p>
            <ScrollSplit
              className="font-display text-4xl md:text-6xl leading-[0.95]"
              lines={[h.whoTitle1, h.whoTitle2]}
            />
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg text-paper/65 max-w-xl leading-relaxed">
                {h.whoP1a}{" "}
                <a
                  href="https://www.nekodev.com.ar/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper font-medium hover:text-white"
                >
                  NekoDev
                </a>
                {h.whoP1b}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-lg text-paper/65 max-w-xl leading-relaxed">
                {h.whoP2a}{" "}
                <a
                  href="https://jrawebdesignllc.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper font-medium hover:text-white"
                >
                  JRA Web Design LLC
                </a>
                {h.whoP2b}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl md:text-4xl text-paper">{s.value}</p>
                    <p className="mt-1 text-xs text-muted uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <Link
                to="/about"
                className="inline-block mt-10 font-syne text-[11px] tracking-[0.2em] uppercase border-b border-paper pb-1 text-paper hover:text-white hover:border-white transition-colors"
              >
                {h.moreAbout}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink py-24 md:py-32">
        <div className="site-pad">
          <p className="eyebrow !text-ink/45 mb-4">{h.services}</p>
          <ScrollSplit
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-ink"
            lines={[h.servicesTitle1, h.servicesTitle2]}
          />
          <div className="mt-14 md:mt-20 divide-y divide-ink/10 border-y border-ink/10">
            {h.servicesList.map((service, i) => (
              <Reveal key={service.n} delay={i * 0.06} y={18}>
                <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 group">
                  <p className="md:col-span-2 font-syne text-xs tracking-[0.2em] text-ink/40 pt-2">{service.n}</p>
                  <h3 className="md:col-span-4 font-display text-3xl md:text-4xl group-hover:italic transition-all">
                    {service.title}
                  </h3>
                  <p className="md:col-span-6 text-ink/65 leading-relaxed">{service.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="site-pad grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">{h.contactEyebrow}</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              {h.contactTitle1}
              <br />
              {h.contactTitle2}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
