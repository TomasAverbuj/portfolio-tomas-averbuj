import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";

const SHOW_AFTER = 480;

export default function ScrollTopButton() {
  const { m } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollUp}
          aria-label={m.nav.scrollTop}
          className="fixed bottom-6 right-5 md:bottom-8 md:right-10 z-40 print:hidden group flex h-11 w-11 md:h-12 md:w-12 items-center justify-center border border-line bg-ink/85 backdrop-blur-md text-paper transition-colors duration-300 hover:bg-mist hover:text-ink hover:border-paper/20"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            <path
              d="M7 2.5L7 11.5M7 2.5L3.5 6M7 2.5L10.5 6"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
