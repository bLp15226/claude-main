// Render a matte-black poured-wax seal with the PHC logo embossed in.
// Pure Node: decodes phc-logo.png (its alpha = the stamp), builds a height field
// (poured-wax rim + face + raised logo), shades it matte, encodes a transparent PNG.
const zlib = require('zlib'), fs = require('fs');
const LOGO = process.argv[2], DST = process.argv[3];

// ---- PNG decode (8-bit RGBA) ----
function decodePNG(buf) {
  let o = 8, idat = [], W, H;
  while (o < buf.length) { const len = buf.readUInt32BE(o), type = buf.toString('ascii', o + 4, o + 8), data = buf.slice(o + 8, o + 8 + len);
    if (type === 'IHDR') { W = data.readUInt32BE(0); H = data.readUInt32BE(4); } else if (type === 'IDAT') idat.push(data); else if (type === 'IEND') break; o += 12 + len; }
  const raw = zlib.inflateSync(Buffer.concat(idat)), bpp = 4, stride = W * bpp, out = Buffer.alloc(W * H * bpp);
  const pth = (a, b, c) => { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); return pa <= pb && pa <= pc ? a : pb <= pc ? b : c; };
  for (let y = 0; y < H; y++) { const ft = raw[y * (stride + 1)], ri = y * (stride + 1) + 1, oi = y * stride, poi = (y - 1) * stride;
    for (let x = 0; x < stride; x++) { const rb = raw[ri + x], a = x >= bpp ? out[oi + x - bpp] : 0, b = y > 0 ? out[poi + x] : 0, c = (x >= bpp && y > 0) ? out[poi + x - bpp] : 0;
      let v; switch (ft) { case 1: v = rb + a; break; case 2: v = rb + b; break; case 3: v = rb + ((a + b) >> 1); break; case 4: v = rb + pth(a, b, c); break; default: v = rb; } out[oi + x] = v & 255; } }
  return { W, H, data: out };
}
// ---- PNG encode (RGBA) ----
const ct = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++)c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc = b => { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++)c = ct[(c ^ b[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
const chunk = (ty, d) => { const t = Buffer.from(ty), l = Buffer.alloc(4); l.writeUInt32BE(d.length, 0); const cc = Buffer.alloc(4); cc.writeUInt32BE(crc(Buffer.concat([t, d])), 0); return Buffer.concat([l, t, d, cc]); };
function encode(w, h, rgba) { const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), ih = Buffer.alloc(13); ih.writeUInt32BE(w, 0); ih.writeUInt32BE(h, 4); ih[8] = 8; ih[9] = 6; const st = w * 4, raw = Buffer.alloc((st + 1) * h); for (let y = 0; y < h; y++) { raw[y * (st + 1)] = 0; rgba.copy(raw, y * (st + 1) + 1, y * st, y * st + st); } return Buffer.concat([sig, chunk('IHDR', ih), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]); }

const clamp = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v;
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };

const logo = decodePNG(fs.readFileSync(LOGO));
// blurred logo alpha (soften fine detail so emboss isn't noisy)
function logoAlpha(lx, ly) {
  if (lx < 1 || ly < 1 || lx >= logo.W - 1 || ly >= logo.H - 1) return 0;
  let s = 0; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) s += logo.data[((ly + dy) * logo.W + (lx + dx)) * 4 + 3];
  return s / 9 / 255;
}

const S = 640, cx = S / 2, cy = S / 2, baseR = S * 0.40, rFace = baseR * 0.70, rimW = baseR * 0.18;
const outlineR = th => baseR * (1 + 0.055 * Math.sin(3 * th + 0.6) + 0.045 * Math.sin(2 * th - 1.0) + 0.035 * Math.sin(5 * th + 2.1) + 0.02 * Math.sin(7 * th + 0.3));
// logo placement: fit logo (square) into ~0.92 of the face diameter, centered, nudged up a hair
const fit = (2 * rFace * 0.94) / Math.max(logo.W, logo.H), lcx = cx, lcy = cy;

// ---- height + coverage buffers ----
const Hb = new Float64Array(S * S), Cv = new Float32Array(S * S);
for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
  const dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy), th = Math.atan2(dy, dx), rO = outlineR(th);
  const i = y * S + x;
  if (d > rO + 1.2) continue;
  Cv[i] = clamp(rO - d + 0.6, 0, 1);
  const e = rO - d;                                  // inward distance from the poured edge
  let h = 0.42 + 0.92 * Math.exp(-Math.pow((e - rimW * 0.55) / (rimW * 0.6), 2)); // face plateau + rounded rim bead
  h *= smooth(0, 3.0, e);                            // taper to nothing right at the outline
  if (d < rFace) {                                   // stamped face: raise the logo
    const lx = ((x - lcx) / fit + logo.W / 2) | 0, ly = ((y - lcy) / fit + logo.H / 2) | 0;
    const a = logoAlpha(lx, ly);
    h += 0.60 * a * smooth(rFace, rFace - 10, d);    // fade emboss just inside the face rim
  }
  Hb[i] = h;
}

// ---- shade (matte) + soft contact shadow ----
const out = Buffer.alloc(S * S * 4);
// Relief emboss: flat wax stays dark (matte black); only slopes toward/away from the
// light go lighter/darker. Light from top-left.
const Lh = (() => { const v = [-0.5, -0.62], m = Math.hypot(...v); return [v[0] / m, v[1] / m]; })();
const darkT = [6, 5, 5], baseT = [20, 17, 16], hiT = [96, 87, 82]; // matte-black wax tones
for (let y = 1; y < S - 1; y++) for (let x = 1; x < S - 1; x++) {
  const i = y * S + x, cov = Cv[i], o = i * 4;
  if (cov <= 0) {
    const sx = x - 9, sy = y - 11;                 // soft drop shadow, grounds it on the paper
    if (sx > 1 && sy > 1 && sx < S && sy < S) { const sc = Cv[sy * S + sx]; if (sc > 0) { out[o + 3] = clamp(sc * 58, 0, 58) | 0; } }
    continue;
  }
  const Hx = (Hb[i + 1] - Hb[i - 1]) * 1.5, Hy = (Hb[i + S] - Hb[i - S]) * 1.5;
  const nl = Math.hypot(-Hx, -Hy, 1), nx = -Hx / nl, ny = -Hy / nl;
  let relief = nx * Lh[0] + ny * Lh[1];            // 0 on flat wax, +/- on slopes
  relief += ((-(x - cx) * Lh[0] - (y - cy) * Lh[1]) / baseR) * 0.06; // faint overall dome
  let col;
  if (relief >= 0) { const u = clamp(relief * 2.3, 0, 1); col = [lerp(baseT[0], hiT[0], u), lerp(baseT[1], hiT[1], u), lerp(baseT[2], hiT[2], u)]; }
  else { const u = clamp(-relief * 2.3, 0, 1); col = [lerp(baseT[0], darkT[0], u), lerp(baseT[1], darkT[1], u), lerp(baseT[2], darkT[2], u)]; }
  out[o] = col[0] | 0; out[o + 1] = col[1] | 0; out[o + 2] = col[2] | 0; out[o + 3] = (cov * 255) | 0;
}
fs.writeFileSync(DST, encode(S, S, out));
console.log('wrote', DST, S + 'x' + S, (fs.statSync(DST).size / 1024 | 0) + 'KB');
