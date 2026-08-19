import { chromium } from "playwright";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../public/images/work");

const shots = [
  { name: "nekodev", url: "https://www.nekodev.com.ar/", scrolls: [0, 900, 1800], dumpText: true },
  { name: "iocus", url: "https://www.iocusarteenjuguetes.com.ar/", scrolls: [0, 800, 1600] },
];

const browser = await chromium.launch({ headless: true });
await mkdir(outDir, { recursive: true });

for (const site of shots) {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 920 },
    deviceScaleFactor: 1,
  });
  await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(3500);

  if (site.dumpText) {
    const text = await page.evaluate(() => document.body.innerText.slice(0, 6000));
    console.log("\n===== TEXT", site.name, "=====\n");
    console.log(text);
  }

  for (let i = 0; i < site.scrolls.length; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), site.scrolls[i]);
    await page.waitForTimeout(800);
    const suffix = i === 0 ? "" : `-${["uno", "dos", "tres"][i]}`;
    const file = path.join(outDir, `${site.name}${suffix}.jpg`);
    await page.screenshot({ path: file, type: "jpeg", quality: 88 });
    console.log("saved", file);
  }
  await page.close();
}

await browser.close();
