import Reveal, { ScrollSplit } from "../components/Reveal";
import { useLang } from "../i18n/LanguageContext";

export default function Skills() {
  const { m } = useLang();
  const s = m.skills;

  return (
    <main className="bg-ink text-paper min-h-screen pt-32 pb-28">
      <div className="site-pad">
        <p className="eyebrow mb-4">{s.eyebrow}</p>
        <ScrollSplit className="section-title max-w-4xl" lines={[s.title1, s.title2]} />
        <Reveal>
          <p className="mt-6 max-w-2xl text-lg text-paper/60">{s.lead}</p>
        </Reveal>

        <div className="mt-16 md:mt-24 space-y-16">
          {s.groups.map((group, gi) => (
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
