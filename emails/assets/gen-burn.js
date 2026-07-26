// Dependency-free scorched-edge PNG generator for PHC email template.
// Pure Node: hand-rolled PNG (RGBA) encoder using built-in zlib. No npm installs.
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const OUT = process.argv[2] || '.';

// ---------- PNG encoder ----------
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}
function chunk(type, data) {
  const t = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}
function encodePNG(w, h, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0; // 8-bit RGBA
  const stride = w * 4;
  const raw = Buffer.alloc((stride + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

// ---------- helpers ----------
function mkRng(seed) { let s = seed >>> 0; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v;

// seamless 1D value-noise along `len` (wraps end->start so tiling has no seam)
function seamlessNoise(len, spacing, rng) {
  const n = Math.max(2, Math.round(len / spacing));
  const cp = new Array(n + 1);
  for (let i = 0; i < n; i++) cp[i] = rng();
  cp[n] = cp[0]; // wrap
  const out = new Float64Array(len);
  for (let i = 0; i < len; i++) {
    const f = (i / len) * n, i0 = Math.floor(f), frac = f - i0;
    const s = frac * frac * (3 - 2 * frac); // smoothstep
    out[i] = lerp(cp[i0], cp[i0 + 1], s);
  }
  return out;
}

// Colour of a burn pixel given depth fraction t (0 = outer/charred edge, 1 = paper boundary)
function burnColor(t, rng) {
  // "Fine dark char, luxury not campfire": dark char dominates, muted transition,
  // NO ember/orange flecks, soft feather into the cream.
  let r, g, b, a = 255;
  if (t < 0.55) {                    // charred core: blacker near the outer edge
    const u = t / 0.55; r = lerp(16, 58, u); g = lerp(10, 36, u); b = lerp(8, 20, u);
  } else if (t < 0.86) {             // muted scorch, kept restrained (no fire tones)
    const u = (t - 0.55) / 0.31; r = lerp(60, 104, u); g = lerp(38, 70, u); b = lerp(22, 40, u);
  } else {                           // soft singe, feathering out to the paper
    const u = (t - 0.86) / 0.14; r = lerp(104, 150, u); g = lerp(70, 108, u); b = lerp(40, 66, u);
    a = Math.round(lerp(255, 0, u));
  }
  const n = (rng() * 2 - 1) * 10; r += n; g += n * 0.7; b += n * 0.4;   // fine grain only
  return [clamp(r | 0, 0, 255), clamp(g | 0, 0, 255), clamp(b | 0, 0, 255), clamp(a, 0, 255)];
}

// Build a strip. axis 'v' = vertical strip (burn eats along x), 'h' = horizontal (burn eats along y).
// side controls which end is the charred outer edge.
function makeStrip(w, h, axis, outer, seed) {
  const rng = mkRng(seed);
  const rgba = Buffer.alloc(w * h * 4); // zero = transparent
  const tileLen = axis === 'v' ? h : w;   // the repeating dimension
  const depthMax = axis === 'v' ? w : h;  // how far the burn can reach inward
  const base = depthMax * 0.46;                          // a touch more char
  const n1 = seamlessNoise(tileLen, 46, rng);
  const n2 = seamlessNoise(tileLen, 15, rng);
  const n3 = seamlessNoise(tileLen, 7, rng);
  for (let i = 0; i < tileLen; i++) {
    // irregular boundary (seamless along the tiling axis) — more charred variation
    let bnd = base + (n1[i] - 0.5) * depthMax * 0.34
                   + (n2[i] - 0.5) * depthMax * 0.20
                   + (n3[i] - 0.5) * depthMax * 0.10;
    if (n2[i] > 0.82) bnd += depthMax * 0.20;           // more frequent, deeper charred bites "here and there"
    bnd = clamp(bnd, depthMax * 0.12, depthMax * 0.86);
    const sootMax = Math.min(depthMax, bnd * 2.0);       // soot haze reaches past the char edge
    for (let d = 0; d < depthMax; d++) {
      let r, g, b, a;
      if (d < bnd) {                                     // solid char + feathered singe
        const t = d / bnd; [r, g, b, a] = burnColor(t, rng);
      } else if (d < sootMax) {                          // soft, BROKEN soot bleeding into the paper
        const u = (d - bnd) / (sootMax - bnd);           // 0 at edge -> 1 inward
        const al = 60 * (1 - u) * (1 - u);
        if (al < 3 || rng() < 0.52) continue;            // sparse specks, never a clean band
        const gg = (rng() - 0.5) * 22;
        r = clamp((74 + gg) | 0, 0, 255); g = clamp((54 + gg * 0.7) | 0, 0, 255); b = clamp((42 + gg * 0.5) | 0, 0, 255);
        a = clamp(al | 0, 0, 66);
      } else break;
      // map (depth d, line i) -> (x,y) based on axis/outer
      let x, y;
      if (axis === 'v') { x = outer === 'left' ? d : (w - 1 - d); y = i; }
      else { y = outer === 'top' ? d : (h - 1 - d); x = i; }
      const o = (y * w + x) * 4;
      rgba[o] = r; rgba[o + 1] = g; rgba[o + 2] = b; rgba[o + 3] = a;
    }
  }
  return encodePNG(w, h, rgba);
}

const jobs = [
  ['phc-edge-left.png',   makeStrip(28, 1200, 'v', 'left', 1337)],
  ['phc-edge-right.png',  makeStrip(28, 1200, 'v', 'right', 4242)],
  ['phc-edge-top.png',    makeStrip(1200, 28, 'h', 'top', 8080)],
  ['phc-edge-bottom.png', makeStrip(1200, 28, 'h', 'bottom', 9191)],
];
for (const [name, buf] of jobs) {
  const p = path.join(OUT, name);
  fs.writeFileSync(p, buf);
  console.log('wrote', p, buf.length, 'bytes');
}
