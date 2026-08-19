import Reveal, { ScrollSplit } from "../components/Reveal";

const groups = [
  {
    title: "WordPress",
    items: ["WordPress", "WooCommerce", "Temas a medida", "PHP", "Gutenberg"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS", "Bootstrap", "Vite"],
  },
  {
    title: "Marketing",
    items: ["Google Ads", "Brevo", "E-mail marketing", "Automatizaciones"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "APIs REST", "MongoDB", "Firebase"],
  },
  {
    title: "Diseño",
    items: ["Figma", "Photoshop", "Illustrator", "CapCut", "After Effects"],
  },
  {
    title: "Herramientas",
    items: ["Git / GitHub", "VS Code", "Postman", "Render", "Vercel", "Netlify"],
  },
];

export default function Skills() {
  return (
    <main className="bg-ink text-paper min-h-screen pt-32 pb-28">
      <div className="site-pad">
        <p className="eyebrow mb-4">Oficio</p>
        <ScrollSplit
          className="section-title max-w-4xl"
          lines={["Herramientas,", "no porcentajes."]}
        />
        <Reveal>
          <p className="mt-6 max-w-xl text-lg text-paper/60">
            El stack que uso de verdad. WordPress y WooCommerce en el centro; Google Ads y Brevo para el después del launch; React cuando el producto pide código propio.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24 space-y-16">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.04}>
              <div className="grid lg:grid-cols-12 gap-6 border-t border-line pt-8">
                <h2 className="lg:col-span-3 font-display text-3xl">{group.title}</h2>
                <ul className="lg:col-span-9 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-syne text-xs tracking-[0.14em] uppercase border border-line px-4 py-3 text-paper/80 hover:border-paper hover:text-paper transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
