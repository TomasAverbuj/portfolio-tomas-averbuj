import html2pdf from "html2pdf.js";

/** A4 a 96dpi — el clon debe medir exactamente esto para llenar el PDF */
const A4_WIDTH_PX = Math.round((210 * 96) / 25.4); // ~794

/**
 * Genera y descarga un PDF A4 del CV a ancho completo de hoja.
 */
export async function downloadCvPdf(element, { filename = "Tomas-Averbuj-CV.pdf" } = {}) {
  if (!element) throw new Error("CV sheet not found");

  const clone = element.cloneNode(true);
  clone.classList.add("cv-pdf-export");
  clone.classList.remove(
    "site-pad",
    "max-w-4xl",
    "mx-auto",
    "rounded-sm",
    "md:p-12",
    "lg:p-14",
    "p-8",
  );
  clone.removeAttribute("class");
  clone.className = "cv-sheet cv-pdf-export bg-paper text-ink";
  clone.setAttribute("aria-hidden", "true");

  Object.assign(clone.style, {
    width: `${A4_WIDTH_PX}px`,
    maxWidth: `${A4_WIDTH_PX}px`,
    minWidth: `${A4_WIDTH_PX}px`,
    margin: "0",
    padding: "40px 44px",
    boxSizing: "border-box",
    background: "#f3eee6",
    borderRadius: "0",
    boxShadow: "none",
    color: "#0a0a0a",
  });

  const host = document.createElement("div");
  host.className = "cv-pdf-host";
  Object.assign(host.style, {
    position: "fixed",
    left: "-10000px",
    top: "0",
    width: `${A4_WIDTH_PX}px`,
    background: "#f3eee6",
    pointerEvents: "none",
    zIndex: "-1",
  });
  host.appendChild(clone);
  document.body.appendChild(host);

  // Dejá que el layout aplique el ancho forzado
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  const opt = {
    margin: 0,
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      backgroundColor: "#f3eee6",
      width: A4_WIDTH_PX,
      windowWidth: A4_WIDTH_PX,
      scrollX: 0,
      scrollY: 0,
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak: {
      mode: ["css", "legacy"],
      avoid: [".cv-keep"],
    },
  };

  try {
    await html2pdf().set(opt).from(clone).save();
  } finally {
    host.remove();
  }
}
