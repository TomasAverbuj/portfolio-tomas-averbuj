import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

export default function Intro() {
  const [show, setShow] = useState(() => {
    try {
      return sessionStorage.getItem("ta-intro") !== "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) return undefined;
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("ta-intro", "1");
    }, 1600);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-display italic text-6xl md:text-8xl text-paper"
            >
              TA.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
