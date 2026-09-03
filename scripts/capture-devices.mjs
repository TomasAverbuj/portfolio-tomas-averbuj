import { chromium, devices } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../public/images/work");

/**
 * 1 captura desktop (portada) + 1 mobile + 1 tablet por sitio.
 * Archivos: name.jpg | name-mobile.jpg | name-tablet.jpg
 */
const shots = [
  {
    name: "nekodev",
    url: "https://www.nekodev.com.ar/",
    themeGate: "Modo Día",
    waitMs: 4500,
  },
  {
    name: "iocus",
    url: "https://www.iocusarteenjuguetes.com.ar/",
    waitMs: 4000,
  },
  {
    name: "armeria-williams",
    url: "https://armeriawilliams.com/",
    ageGate: true,
    waitMs: 3500,
  },
  {
    name: "abrazo-maternal",
    url: "https://abrazomaternal.com/",
    waitMs: 3500,
  },
  {
    name: "epumps",
    url: "https://epumpspr.com/",
    waitMs: 3500,
  },
  {
    name: "sur-marchands",
    url: "https://surmarchands.com/",
    waitMs: 4000,
  },
  {
    name: "claudia-cestau",
    url: "https://claudiacestau.com/",
    waitMs: 4500,
  },
  {
    name: "haras-abril",
    url: "https://harasabril.com.ar/",
    waitMs: 4000,
  },
  {
    name: "pokedex",
    url: "https://pokedex-fan.vercel.app/",
    waitMs: 3500,
  },
  {
    name: "yr-brows",
    url: "https://yrbrowsbeauty.com/",
    waitMs: 4500,
  },
  {
    name: "admilink",
    url: "https://admi-link.vercel.app/login",
    waitMs: 3500,
  },
];

const VIEWPORTS = [
  { key: "desktop", suffix: "", width: 1440, height: 900, isMobile: false, hasTouch: false },
  { key: "mobile", suffix: "-mobile", width: 390, height: 844, isMobile: true, hasTouch: true },
  { key: "tablet", suffix: "-tablet", width: 820, height: 1180, isMobile: true, hasTouch: true },
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
    'button:has-text("Allow")',
    '[aria-label="Close"]',
    ".cookie-accept",
    "#cookie-accept",
  ];
  for (const sel of selectors) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 700 })) {
        await el.click({ timeout: 1200 });
        await page.waitForTimeout(400);
      }
    } catch {
      // next
    }
  }
}

async function settle(page, waitMs) {
  try {
    await page.waitForLoadState("networkidle", { timeout: 18000 });
  } catch {
    // soft
  }
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  await page.waitForTimeout(waitMs);
  await dismissOverlays(page);
  await page.addStyleTag({
    content: `
      iframe[src*="chat"], iframe[src*="tawk"], iframe[src*="whatsapp"],
      .cookie-banner, #cookie-banner, .cky-consent-container,
      [class*="cookie-consent"], [id*="cookie"],
      .fixed.bottom-0, [class*="whatsapp-float"] {
        display: none !important;
        visibility: hidden !important;
      }
    `,
  }).catch(() => {});
}

const browser = await chromium.launch({ headless: true });
await mkdir(outDir, { recursive: true });

for (const site of shots) {
  console.log("\n→", site.name, site.url);

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
      isMobile: vp.isMobile,
      hasTouch: vp.hasTouch,
      userAgent: vp.isMobile
        ? devices["iPhone 13"].userAgent
        : undefined,
    });
    const page = await context.newPage();

    try {
      await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 90000 });
      await settle(page, site.waitMs ?? 3500);
      if (site.ageGate) await dismissOverlays(page);
      if (site.themeGate) {
        try {
          await page.locator(`text=${site.themeGate}`).first().click({ timeout: 4000 });
          await page.waitForTimeout(1800);
        } catch {
          // already past gate or not present
        }
      }

      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
      await page.waitForTimeout(600);

      const file = path.join(outDir, `${site.name}${vp.suffix}.jpg`);
      await page.screenshot({
        path: file,
        type: "jpeg",
        quality: 90,
        animations: "disabled",
      });
      console.log("  saved", path.basename(file), `(${vp.key})`);
    } catch (err) {
      console.error("  FAIL", site.name, vp.key, err.message);
    } finally {
      await context.close();
    }
  }
}

await browser.close();
console.log("\nDone.");
