import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../public/images/work");

/**
 * Capturas pensadas para mockup de navegador:
 * viewport desktop limpio, 2x DPR, espera fuentes, cierra age/cookie gates.
 * Archivos: name.jpg, name-dos.jpg, name-tres.jpg
 */
const shots = [
  {
    name: "nekodev",
    url: "https://www.nekodev.com.ar/",
    themeGate: "Modo Día",
    scrolls: [0, 700, 1500],
    waitMs: 4500,
  },
  {
    name: "iocus",
    url: "https://www.iocusarteenjuguetes.com.ar/",
    scrolls: [0, 750, 1500],
    waitMs: 4000,
  },
  {
    name: "armeria-williams",
    url: "https://armeriawilliams.com/",
    ageGate: true,
    scrolls: [0, 850, 1700],
    waitMs: 3500,
  },
  {
    name: "abrazo-maternal",
    url: "https://abrazomaternal.com/",
    scrolls: [0, 750, 1500],
    waitMs: 3500,
  },
  {
    name: "epumps",
    url: "https://epumpspr.com/",
    scrolls: [0, 850, 1700],
    waitMs: 3500,
  },
];

async function dismissOverlays(page) {
  const selectors = [
    'button:has-text("Sí")',
    'button:has-text("Si")',
    'button:has-text("Accept")',
    'button:has-text("Aceptar")',
    'button:has-text("Acepto")',
    'button:has-text("Entendido")',
    'button:has-text("Cerrar")',
    '[aria-label="Close"]',
    ".cookie-accept",
    "#cookie-accept",
  ];
  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 900 })) {
        await el.click({ timeout: 1500 });
        await page.waitForTimeout(600);
      }
    } catch {
      // next
    }
  }
}

async function settle(page, waitMs) {
  try {
    await page.waitForLoadState("networkidle", { timeout: 20000 });
  } catch {
    // soft
  }
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.waitForTimeout(waitMs);
  await dismissOverlays(page);
  // hide sticky chat / cookie bars that survive click
  await page.addStyleTag({
    content: `
      iframe[src*="chat"], iframe[src*="tawk"], iframe[src*="whatsapp"],
      .cookie-banner, #cookie-banner, .cky-consent-container,
      [class*="cookie-consent"], [id*="cookie"] {
        display: none !important;
        visibility: hidden !important;
      }
    `,
  });
}

const browser = await chromium.launch({ headless: true });
await mkdir(outDir, { recursive: true });

for (const site of shots) {
  console.log("\n→", site.name, site.url);
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await settle(page, site.waitMs ?? 3500);
    if (site.ageGate) await dismissOverlays(page);
    if (site.themeGate) {
      try {
        await page.locator(`text=${site.themeGate}`).first().click({ timeout: 5000 });
        await page.waitForTimeout(2000);
      } catch {
        console.warn("  theme gate not clicked");
      }
    }

    for (let i = 0; i < site.scrolls.length; i++) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), site.scrolls[i]);
      await page.waitForTimeout(900);
      const suffix = i === 0 ? "" : `-${["uno", "dos", "tres"][i]}`;
      const file = path.join(outDir, `${site.name}${suffix}.jpg`);
      await page.screenshot({
        path: file,
        type: "jpeg",
        quality: 90,
        animations: "disabled",
      });
      console.log("  saved", path.basename(file));
    }
  } catch (err) {
    console.error("  FAIL", site.name, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("\nDone.");
