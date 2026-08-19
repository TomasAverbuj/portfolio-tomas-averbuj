import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/projects", label: "Trabajos" },
  { to: "/skills", label: "Oficio" },
  { to: "/about", label: "Estudio" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
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

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
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

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="/curriculum-tomas-averbuj.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-syne text-[11px] tracking-[0.18em] uppercase text-paper/60 hover:text-paper transition-colors"
            >
              CV
            </a>
            <Link
              to="/contact"
              className="font-syne text-[11px] tracking-[0.18em] uppercase bg-mist text-ink px-5 py-3 hover:bg-paper transition-colors"
            >
              Hablemos
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className={`block h-px w-6 bg-paper transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-paper transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full flex flex-col justify-end pb-16 pt-28 site-pad">
              <ul className="space-y-2">
                {[...links, { to: "/contact", label: "Contacto" }].map((link, i) => (
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
                ))}
              </ul>
              <a
                href="/curriculum-tomas-averbuj.pdf"
                className="mt-12 font-syne text-xs tracking-[0.2em] uppercase text-muted"
              >
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
