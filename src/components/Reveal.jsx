import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SplitLines({
  lines,
  className = "",
  lineClass = "",
  delay = 0,
  as: Tag = "h1",
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClass}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.05, delay: delay + i * 0.12, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function ScrollSplit({
  lines,
  className = "",
  lineClass = "",
  delay = 0,
  as: Tag = "h2",
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClass}`}
            initial={{ y: "115%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.95, delay: delay + i * 0.1, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function ImageReveal({ src, alt, className = "", imgClass = "" }) {
  return (
    <motion.div
      className={`overflow-hidden h-full w-full ${className}`}
      initial={{ clipPath: "inset(18% 12% 18% 12%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.15, ease }}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover object-top ${imgClass}`}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.35, ease }}
      />
    </motion.div>
  );
}
