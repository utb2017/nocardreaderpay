import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const logo = readFileSync(join(root, 'public', 'logo.png'));

const width = 1200;
const height = 630;

const svgOverlay = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#eff6ff"/>
      <stop offset="100%" style="stop-color:#ffffff"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="60" y="60" width="1080" height="510" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <text x="600" y="200" text-anchor="middle" font-family="system-ui, sans-serif" font-size="52" font-weight="700" fill="#0f172a">
    Take Payments Without a Card Reader
  </text>
  <text x="600" y="270" text-anchor="middle" font-family="system-ui, sans-serif" font-size="28" fill="#475569">
    No terminal · No hardware · No customer app
  </text>
  <text x="600" y="420" text-anchor="middle" font-family="system-ui, sans-serif" font-size="24" font-weight="600" fill="#2563eb">
    valetfy.com
  </text>
  <text x="600" y="470" text-anchor="middle" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">
    nocardreaderpay.com · Updated 2026
  </text>
</svg>`;

async function generate() {
  const logoResized = await sharp(logo)
    .resize(120, 120, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const base = sharp(Buffer.from(svgOverlay));

  await base
    .composite([
      { input: logoResized, top: 280, left: 540 - 60 },
    ])
    .png()
    .toFile(join(root, 'public', 'og-image.png'));

  console.log('Generated public/og-image.png');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
