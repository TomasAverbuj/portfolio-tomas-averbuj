import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-line">
      <div className="site-pad py-16 md:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <p className="eyebrow mb-4">Siguiente paso</p>
            <Link
              to="/contact"
              className="font-display italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] hover:text-white transition-colors"
            >
              ¿Hablamos?
            </Link>
            <a
              href="mailto:averbujtomas@gmail.com"
              className="block mt-6 text-lg md:text-2xl text-paper/70 hover:text-paper transition-colors"
            >
              averbujtomas@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap gap-8 text-sm text-paper/60">
            <a href="https://www.linkedin.com/in/tomas-averbuj-62b47222b/" target="_blank" rel="noreferrer" className="hover:text-paper">
              LinkedIn
            </a>
            <a href="https://github.com/tomasaverbuj" target="_blank" rel="noreferrer" className="hover:text-paper">
              GitHub
            </a>
            <a href="tel:+541169729914" className="hover:text-paper">
              +54 11 6972-9914
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted tracking-wide">
          <p>© {new Date().getFullYear()} Tomás Averbuj. Buenos Aires.</p>
          <div className="flex gap-6">
            <Link to="/projects" className="hover:text-paper">Trabajos</Link>
            <Link to="/about" className="hover:text-paper">Estudio</Link>
            <Link to="/contact" className="hover:text-paper">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
