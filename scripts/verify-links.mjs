#!/usr/bin/env node
/** Verify all outbound links return HTTP 200 */
const links = [
  'https://valetfy.com',
  'https://stripe.com/payments/payment-links',
  'https://stripe.com/terminal/tap-to-pay',
  'https://venmo.com/business/profiles',
  'https://squareup.com/us/en/payments/tap-to-pay',
];

async function check(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (res.status >= 200 && res.status < 400) {
      return { url, status: res.status, ok: true };
    }
    const getRes = await fetch(url, { method: 'GET', redirect: 'follow' });
    return { url, status: getRes.status, ok: getRes.status >= 200 && getRes.status < 400 };
  } catch (err) {
    return { url, status: 0, ok: false, error: String(err) };
  }
}

const results = await Promise.all(links.map(check));
let failed = false;
for (const r of results) {
  const mark = r.ok ? 'OK' : 'FAIL';
  console.log(`${mark} ${r.status} ${r.url}${r.error ? ' ' + r.error : ''}`);
  if (!r.ok) failed = true;
}
process.exit(failed ? 1 : 0);
