import ContactForm from "../components/ContactForm";
import Reveal, { ScrollSplit } from "../components/Reveal";

export default function Contact() {
  return (
    <main className="bg-ink text-paper min-h-screen pt-32 pb-28">
      <div className="site-pad grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">Contacto</p>
          <ScrollSplit
            className="font-display text-5xl md:text-7xl leading-[0.92]"
            lines={["Empecemos", "por un mail."]}
          />
          <Reveal>
            <p className="mt-6 text-paper/60 max-w-sm">
              Contame qué hay que lanzar, en qué punto está y para cuándo. Respondo con alcance y siguiente paso.
            </p>
          </Reveal>
          <div className="mt-12 space-y-4">
            <a href="mailto:averbujtomas@gmail.com" className="block text-xl hover:text-white transition-colors">
              averbujtomas@gmail.com
            </a>
            <a href="tel:+541169729914" className="block text-paper/60 hover:text-paper">
              +54 11 6972-9914
            </a>
            <div className="flex gap-6 pt-4 text-sm text-muted">
              <a href="https://www.linkedin.com/in/tomas-averbuj-62b47222b/" target="_blank" rel="noreferrer" className="hover:text-paper">
                LinkedIn
              </a>
              <a href="https://github.com/tomasaverbuj" target="_blank" rel="noreferrer" className="hover:text-paper">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
