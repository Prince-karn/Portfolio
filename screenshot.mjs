// Quick playwright-based screenshot script
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'public', 'projects');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  // --- Hotel Website ---
  console.log('📸 Capturing hotel-eight-vert.vercel.app ...');
  const p1 = await context.newPage();
  await p1.goto('https://hotel-eight-vert.vercel.app', { waitUntil: 'networkidle', timeout: 60000 });
  await p1.waitForTimeout(3000);
  await p1.screenshot({ path: path.join(outDir, 'hotel-preview.png') });
  console.log('  ✅ hotel-preview.png');

  await p1.evaluate(() => window.scrollBy(0, 900));
  await p1.waitForTimeout(1500);
  await p1.screenshot({ path: path.join(outDir, 'hotel-preview-2.png') });
  console.log('  ✅ hotel-preview-2.png');

  // --- Tradafy ---
  console.log('📸 Capturing tradafy.eu ...');
  const p2 = await context.newPage();
  await p2.goto('https://tradafy.eu', { waitUntil: 'networkidle', timeout: 60000 });
  await p2.waitForTimeout(3000);
  await p2.screenshot({ path: path.join(outDir, 'tradafy-preview.png') });
  console.log('  ✅ tradafy-preview.png');

  await p2.evaluate(() => window.scrollBy(0, 900));
  await p2.waitForTimeout(1500);
  await p2.screenshot({ path: path.join(outDir, 'tradafy-preview-2.png') });
  console.log('  ✅ tradafy-preview-2.png');

  await browser.close();
  console.log('\n🎉 All screenshots captured successfully!');
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
