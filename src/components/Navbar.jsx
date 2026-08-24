import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";

export default function Navbar() {
  const { lang, setLang, m } = useLang();
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const cvRef = useRef(null);

  const links = [
    { to: "/", label: m.nav.home },
    { to: "/projects", label: m.nav.work },
    { to: "/skills", label: m.nav.skills },
    { to: "/about", label: m.nav.about },
  ];

  useEffect(() => {
    setOpen(false);
    setCvOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onDoc = (e) => {
      if (cvRef.current && !cvRef.current.contains(e.target)) setCvOpen(false);
    };
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 print:hidden ${
          scrolled || open ? "bg-ink/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="site-pad flex items-center justify-between h-[72px] md:h-[84px]">
          <Link to="/" className="relative z-50 group">
            <span className="font-display italic text-[28px] md:text-[32px] leading-none text-paper group-hover:text-white transition-colors">
              TA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-syne text-[11px] tracking-[0.2em] uppercase transition-colors ${
                    isActive ? "text-paper" : "text-paper/55 hover:text-paper"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-1 font-syne text-[11px] tracking-[0.18em] uppercase">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`px-1.5 transition-colors ${lang === "es" ? "text-paper" : "text-paper/40 hover:text-paper/70"}`}
                aria-pressed={lang === "es"}
              >
                ES
              </button>
              <span className="text-paper/25">/</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-1.5 transition-colors ${lang === "en" ? "text-paper" : "text-paper/40 hover:text-paper/70"}`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>

            <div className="relative" ref={cvRef}>
              <button
                type="button"
                onClick={() => setCvOpen((v) => !v)}
                className="font-syne text-[11px] tracking-[0.18em] uppercase text-paper/60 hover:text-paper transition-colors"
                aria-expanded={cvOpen}
              >
                {m.nav.cv}
              </button>
              <AnimatePresence>
                {cvOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-3 min-w-[180px] border border-line bg-ink/95 backdrop-blur-md py-2"
                  >
                    <Link
                      to="/cv"
                      className="block px-4 py-2.5 font-syne text-[11px] tracking-[0.16em] uppercase text-paper/70 hover:text-paper hover:bg-paper/5"
                      onClick={() => setCvOpen(false)}
                    >
                      {m.nav.viewCv}
                    </Link>
                    <Link
                      to="/cv?download=1"
                      className="block px-4 py-2.5 font-syne text-[11px] tracking-[0.16em] uppercase text-paper/70 hover:text-paper hover:bg-paper/5"
                      onClick={() => setCvOpen(false)}
                    >
                      {m.nav.downloadCv}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className="font-syne text-[11px] tracking-[0.18em] uppercase bg-mist text-ink px-5 py-3 hover:bg-paper transition-colors"
            >
              {m.nav.contact}
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3 relative z-50">
            <div className="flex items-center gap-1 font-syne text-[11px] tracking-[0.18em] uppercase">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={lang === "es" ? "text-paper" : "text-paper/40"}
              >
                ES
              </button>
              <span className="text-paper/25">/</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={lang === "en" ? "text-paper" : "text-paper/40"}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? m.nav.closeMenu : m.nav.openMenu}
            >
              <span className={`block h-px w-6 bg-paper transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-paper transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink lg:hidden print:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full flex flex-col justify-end pb-16 pt-28 site-pad">
              <ul className="space-y-2">
                {[...links, { to: "/contact", label: m.nav.contactShort }, { to: "/cv", label: m.nav.viewCv }].map(
                  (link, i) => (
                    <motion.li
                      key={link.to}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `font-display text-5xl italic ${isActive ? "text-paper" : "text-paper/40"}`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.li>
                  ),
                )}
              </ul>
              <Link
                to="/cv?download=1"
                className="mt-12 font-syne text-xs tracking-[0.2em] uppercase text-muted"
              >
                {m.nav.downloadCv}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
