import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserMockup, PhoneMockup, TabletMockup } from "./BrowserMockup";

/**
 * Galería de proyecto:
 * 1 — desktop (browser)  ·  2 — mobile  ·  3 — tablet
 */
export default function Gallery({ images = [], url }) {
  const desktop = images[0];
  const mobile = images[1];
  const tablet = images[2];
  const [lightbox, setLightbox] = useState(null);

  if (!desktop) return null;

  return (
    <section className="site-pad">
      <button
        type="button"
        className="block w-full max-w-4xl mx-auto text-left"
        onClick={() => setLightbox("desktop")}
      >
        <p className="mb-3 text-center font-syne text-[10px] tracking-[0.2em] uppercase text-muted">
          Desktop
        </p>
        <BrowserMockup
          url={url}
          aspect="aspect-[16/10]"
          reveal={
            <motion.img
              src={desktop}
              alt=""
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          }
        />
      </button>

      {(mobile || tablet) && (
        <div className="mt-10 md:mt-14 grid grid-cols-2 gap-6 md:gap-12 items-end justify-items-center max-w-3xl mx-auto">
          {mobile && (
            <button type="button" className="w-full" onClick={() => setLightbox("mobile")}>
              <p className="mb-3 text-center font-syne text-[10px] tracking-[0.2em] uppercase text-muted">
                Mobile
              </p>
              <PhoneMockup src={mobile} alt="Vista mobile" />
            </button>
          )}
          {tablet && (
            <button type="button" className="w-full" onClick={() => setLightbox("tablet")}>
              <p className="mb-3 text-center font-syne text-[10px] tracking-[0.2em] uppercase text-muted">
                Tablet
              </p>
              <TabletMockup src={tablet} alt="Vista tablet" />
            </button>
          )}
        </div>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-8 text-3xl text-paper/70 hover:text-paper"
              type="button"
            >
              ×
            </button>
            <div
              className={`w-full ${lightbox === "desktop" ? "max-w-5xl" : "max-w-sm"}`}
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox === "desktop" && (
                <BrowserMockup
                  src={desktop}
                  url={url}
                  aspect="aspect-[16/9]"
                  imgClass="object-contain bg-ink"
                />
              )}
              {lightbox === "mobile" && mobile && <PhoneMockup src={mobile} />}
              {lightbox === "tablet" && tablet && <TabletMockup src={tablet} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
