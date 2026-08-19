import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../public/images/work");

const shots = [
  {
    name: "armeria-williams",
    url: "https://armeriawilliams.com/",
    ageGate: true,
    scrolls: [0, 900, 1800],
  },
  {
    name: "abrazo-maternal",
    url: "https://abrazomaternal.com/",
    scrolls: [0, 800, 1600],
  },
  {
    name: "epumps",
    url: "https://epumpspr.com/",
    scrolls: [0, 900, 1800],
  },
];

async function clickAgeGate(page) {
  const candidates = [
    'button:has-text("Sí")',
    'button:has-text("Si")',
    'text=Sí',
    '[class*="age"] button',
  ];
  for (const sel of candidates) {
    try {
      const el = page.locator(sel).first();
      if (await el.isVisible({ timeout: 2500 })) {
        await el.click({ timeout: 2500 });
        await page.waitForTimeout(1200);
        return;
      }
    } catch {
      // try next
    }
  }
}

const browser = await chromium.launch({ headless: true });
await mkdir(outDir, { recursive: true });

for (const site of shots) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 920 },
    deviceScaleFactor: 1,
  });
  await page.goto(site.url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2000);
  if (site.ageGate) await clickAgeGate(page);

  for (let i = 0; i < site.scrolls.length; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), site.scrolls[i]);
    await page.waitForTimeout(900);
    const suffix = i === 0 ? "" : `-${["uno", "dos", "tres"][i]}`;
    const file = path.join(outDir, `${site.name}${suffix}.jpg`);
    await page.screenshot({ path: file, type: "jpeg", quality: 88 });
    console.log("saved", file);
  }
  await page.close();
}

await browser.close();
