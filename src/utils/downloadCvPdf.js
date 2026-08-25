import html2pdf from "html2pdf.js";

/**
 * Genera y descarga un PDF A4 del nodo del CV.
 * Usa un clon compacto (sin acortar texto) para aprovechar mejor la hoja
 * y evitar cortes feos a mitad de bloque.
 */
export async function downloadCvPdf(element, { filename = "Tomas-Averbuj-CV.pdf" } = {}) {
  if (!element) throw new Error("CV sheet not found");

  const clone = element.cloneNode(true);
  clone.classList.add("cv-pdf-export");
  clone.classList.remove("site-pad", "max-w-4xl", "mx-auto", "rounded-sm", "md:p-12", "lg:p-14", "p-8");
  clone.setAttribute("aria-hidden", "true");

  const host = document.createElement("div");
  host.className = "cv-pdf-host";
  host.appendChild(clone);
  document.body.appendChild(host);

  const opt = {
    margin: [8, 8, 8, 8],
    filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      backgroundColor: "#f3eee6",
      scrollX: 0,
      scrollY: 0,
      windowWidth: clone.scrollWidth,
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
