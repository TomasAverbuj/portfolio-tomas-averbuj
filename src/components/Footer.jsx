import { Link } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { EMAIL_PUBLIC } from "../config/email";

export default function Footer() {
  const { m } = useLang();

  return (
    <footer className="bg-ink text-paper border-t border-line print:hidden">
      <div className="site-pad py-16 md:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <p className="eyebrow mb-4">{m.footer.next}</p>
            <Link
              to="/contact"
              className="font-display italic text-5xl md:text-7xl lg:text-8xl leading-[0.9] hover:text-white transition-colors"
            >
              {m.footer.talk}
            </Link>
            <a
              href={`mailto:${EMAIL_PUBLIC}`}
              className="block mt-6 text-lg md:text-2xl text-paper/70 hover:text-paper transition-colors"
            >
              {EMAIL_PUBLIC}
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
            <Link to="/cv" className="hover:text-paper">
              CV
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted tracking-wide">
          <p>
            © {new Date().getFullYear()} Tomás Averbuj. {m.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link to="/projects" className="hover:text-paper">
              {m.footer.work}
            </Link>
            <Link to="/about" className="hover:text-paper">
              {m.footer.about}
            </Link>
            <Link to="/contact" className="hover:text-paper">
              {m.footer.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
