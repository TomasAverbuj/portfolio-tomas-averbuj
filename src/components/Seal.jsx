import { useId } from "react";

const PHRASE =
  "WORDPRESS  ·  DISEÑO  ·  DESARROLLO  ·  WOOCOMMERCE  ·  GOOGLE ADS  ·  BREVO  ·  UX UI  ·  NEKODEV  ·  ";

export default function Seal({ className = "" }) {
  const uid = useId().replace(/:/g, "");
  const pathId = `ta-seal-${uid}`;
  const circumference = 2 * Math.PI * 80;

  return (
    <div className={`relative aspect-square ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow" aria-hidden>
        <defs>
          <path
            id={pathId}
            d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
            fill="none"
          />
        </defs>
        <circle cx="100" cy="100" r="64" fill="none" stroke="#f3eee6" strokeOpacity="0.16" />
        <text
          fill="#f3eee6"
          fontSize="9"
          style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}
        >
          <textPath
            href={`#${pathId}`}
            textLength={circumference}
            lengthAdjust="spacing"
          >
            {PHRASE}
          </textPath>
        </text>
      </svg>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-display italic text-[42px] sm:text-5xl md:text-6xl leading-none text-paper">
          TA
        </span>
      </div>
    </div>
  );
}
