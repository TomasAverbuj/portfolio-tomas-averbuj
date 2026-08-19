const items = [
  "WordPress",
  "WooCommerce",
  "Google Ads",
  "Brevo",
  "React",
  "UI/UX",
  "Figma",
  "JavaScript",
  "Node.js",
  "PHP",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-line overflow-hidden bg-ink">
      <div className="flex w-max animate-marquee py-5 md:py-6">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="font-syne text-xs md:text-sm tracking-[0.22em] uppercase text-paper/80 px-6 md:px-10">
              {item}
            </span>
            <span className="text-paper/35">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}
