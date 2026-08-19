import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery({ images = [] }) {
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    setSelected(0);
  }, [images]);

  useEffect(() => {
    if (!images.length) return undefined;
    const timer = setInterval(() => {
      setSelected((i) => (i + 1) % images.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [images]);

  if (!images.length) return null;

  return (
    <section className="site-pad">
      <button
        type="button"
        className="block w-full overflow-hidden aspect-[16/9] bg-raised"
        onClick={() => setLightbox(true)}
      >
        <motion.img
          key={images[selected]}
          src={images[selected]}
          alt=""
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover object-top"
        />
      </button>
      <div className="mt-3 grid grid-cols-4 md:grid-cols-6 gap-2">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setSelected(i)}
            className={`aspect-[16/10] overflow-hidden border ${
              selected === i ? "border-paper" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover object-top" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(false)}
          >
            <button className="absolute top-6 right-8 text-3xl text-paper/70 hover:text-paper" type="button">
              ×
            </button>
            <img src={images[selected]} alt="" className="max-h-[88vh] max-w-full object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
