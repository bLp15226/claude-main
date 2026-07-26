// Dependency-free generator for the remaining PHC email assets:
// parchment tile, wax seal, and Florentine-ish corner flourishes.
// Pure Node (built-in zlib). Supersampled painter for smooth vector art.
const zlib = require('zlib'), fs = require('fs'), path = require('path');
const OUT = process.argv[2] || '.';

// ---------- PNG encoder ----------
const crcTable = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(b) { let c = 0xFFFFFFFF; for (let i = 0; i < b.length; i++) c = crcTable[(c ^ b[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function chunk(type, data) { const t = Buffer.from(type, 'ascii'); const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0); const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0); return Buffer.concat([len, t, data, crc]); }
function encodePNG(w, h, rgba) { const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]); const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 6; const stride = w * 4; const raw = Buffer.alloc((stride + 1) * h); for (let y = 0; y < h; y++) { raw[y * (stride + 1)] = 0; rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride); } const idat = zlib.deflateSync(raw, { level: 9 }); return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]); }
function writePNG(name, w, h, rgba) { const p = path.join(OUT, name); fs.writeFileSync(p, encodePNG(w, h, rgba)); console.log('wrote', name, w + 'x' + h); }

// ---------- helpers ----------
function mkRng(s) { s >>>= 0; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v;
function distSeg(px, py, ax, ay, bx, by) { const dx = bx - ax, dy = by - ay; const l2 = dx * dx + dy * dy || 1e-9; let t = ((px - ax) * dx + (py - ay) * dy) / l2; t = clamp(t, 0, 1); const cx = ax + t * dx, cy = ay + t * dy; return Math.hypot(px - cx, py - cy); }

// =================== PARCHMENT (seamless, tileable both axes) ===================
function parchment(W, H) {
  const rng = mkRng(20260711);
  const comps = [];
  let ampSum = 0;
  for (let k = 0; k < 20; k++) { const amp = 1 / (1 + k * 0.6); ampSum += amp; comps.push({ fx: 1 + (rng() * 5 | 0), fy: 1 + (rng() * 5 | 0), ph: rng() * Math.PI * 2, amp }); }
  const stain = []; for (let k = 0; k < 4; k++) stain.push({ fx: 1 + (rng() * 2 | 0), fy: 1 + (rng() * 2 | 0), ph: rng() * Math.PI * 2 });
  const rgba = Buffer.alloc(W * H * 4);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    let n = 0; for (const c of comps) n += c.amp * Math.sin(2 * Math.PI * (c.fx * x / W + c.fy * y / H) + c.ph);
    n /= ampSum; // ~[-1,1]
    let s = 0; for (const c of stain) s += Math.sin(2 * Math.PI * (c.fx * x / W + c.fy * y / H) + c.ph);
    s /= stain.length;
    // warm aged-tan paper (per burnt-parchment reference): more warmth, a touch more mottling
    let r = 240 + n * 9 + s * 8 + (rng() - 0.5) * 3;
    let g = 226 + n * 9 + s * 3 + (rng() - 0.5) * 3;
    let b = 197 + n * 10 - s * 6 + (rng() - 0.5) * 3;
    if (rng() < 0.007) { r -= 24; g -= 21; b -= 17; } // sparse darker fibers/age spots
    const o = (y * W + x) * 4; rgba[o] = clamp(r | 0, 0, 255); rgba[o + 1] = clamp(g | 0, 0, 255); rgba[o + 2] = clamp(b | 0, 0, 255); rgba[o + 3] = 255;
  }
  return rgba;
}

// =================== WAX SEAL (embossed "P") ===================
function waxSeal(S) {
  const rng = mkRng(55123);
  const rgba = Buffer.alloc(S * S * 4);
  const cx = S / 2, cy = S / 2, R = S * 0.44;
  const edge = []; for (let i = 0; i < 360; i++) edge.push(1 + 0.045 * Math.sin(i * 0.7 + 1) + 0.03 * Math.sin(i * 1.9));
  const SS = 3; // supersample
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    let ar = 0, ag = 0, ab = 0, aa = 0;
    for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
      const px = x + (sx + 0.5) / SS, py = y + (sy + 0.5) / SS;
      const dx = px - cx, dy = py - cy, d = Math.hypot(dx, dy), ang = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;
      const rr = R * edge[ang | 0];
      if (d > rr) continue; // outside wax
      // radial shading: brighter center, darker rim
      const t = d / rr;
      let base = 1 - t * t * 0.55;
      let r = 168 * base + 12, g = 34 * base + 6, b = 30 * base + 6;
      if (t > 0.9) { r *= 0.7; g *= 0.7; b *= 0.7; } // rim shadow
      // embossed serif P (seal-local coords, normalized to R)
      const lx = dx / R, ly = dy / R; // ~[-1,1]
      const stem = (lx > -0.34 && lx < -0.16 && ly > -0.5 && ly < 0.5);
      const bowlD = Math.hypot(lx - (-0.16), ly - (-0.24));
      const bowl = (bowlD > 0.16 && bowlD < 0.34 && lx > -0.28);
      const serif = (ly > 0.42 && ly < 0.5 && lx > -0.44 && lx < -0.06);
      if (stem || bowl || serif) { // engrave darker, with an up-left raised highlight
        const hi = ((lx + 0.02) < -0.3) || ((ly - 0.02) < -0.42);
        if (hi) { r = Math.min(255, r * 1.25 + 20); g = g * 1.2 + 10; b = b * 1.2 + 10; }
        else { r *= 0.62; g *= 0.6; b *= 0.6; }
      }
      const gr = (rng() - 0.5) * 8; r += gr; g += gr * 0.6; b += gr * 0.5;
      ar += r; ag += g; ab += b; aa += 255;
    }
    const n = SS * SS, o = (y * S + x) * 4;
    rgba[o] = clamp(ar / n | 0, 0, 255); rgba[o + 1] = clamp(ag / n | 0, 0, 255); rgba[o + 2] = clamp(ab / n | 0, 0, 255); rgba[o + 3] = clamp(aa / n | 0, 0, 255);
  }
  return rgba;
}

// =================== CORNER FLOURISH (top-left orientation) ===================
// Gold vine scroll built from tapering polyline strokes + spiral + accent dots.
function cornerLeft(S) {
  const strokes = [];
  const GOLD = [178, 143, 88], GOLDD = [124, 95, 50], RED = [150, 60, 48], TEAL = [47, 104, 104];
  const ax = S * 0.15, ay = S * 0.15;       // anchor near top-left
  const HR = S * 0.66, VR = S * 0.66;        // reach along top / left
  // main double rule along the top edge
  strokes.push({ pts: line(ax, ay, ax + HR, ay), w0: 6.5, w1: 2.5, col: GOLD });
  strokes.push({ pts: line(ax + 2, ay + 8, ax + HR * 0.74, ay + 8), w0: 3, w1: 1.4, col: GOLDD });
  // main double rule along the left edge
  strokes.push({ pts: line(ax, ay, ax, ay + VR), w0: 6.5, w1: 2.5, col: GOLD });
  strokes.push({ pts: line(ax + 8, ay + 2, ax + 8, ay + VR * 0.74), w0: 3, w1: 1.4, col: GOLDD });
  // tight scroll terminal at the elbow (corner)
  strokes.push({ pts: spiral(ax + S * 0.02, ay + S * 0.02, S * 0.028, 1.6, 30, 190), w0: 5, w1: 1.4, col: GOLD });
  // neat curl at the inner end of each rule
  strokes.push({ pts: spiral(ax + HR, ay + S * 0.03, S * 0.03, 1.4, 26, -20), w0: 4, w1: 1.2, col: GOLD });
  strokes.push({ pts: spiral(ax + S * 0.03, ay + VR, S * 0.03, 1.4, 26, 70), w0: 4, w1: 1.2, col: GOLD });
  const dots = [[ax + HR + S * 0.04, ay + S * 0.01, RED], [ax + S * 0.01, ay + VR + S * 0.04, TEAL]];
  return paint(S, S, strokes, dots);

  function line(x0, y0, x1, y1) { const p = []; for (let i = 0; i <= 20; i++) p.push([lerp(x0, x1, i / 20), lerp(y0, y1, i / 20)]); return p; }
  function spiral(cx, cy, a, turns, n, startDeg) { const p = []; const s = (startDeg || 0) * Math.PI / 180; for (let i = 0; i <= n; i++) { const t = i / n * turns * Math.PI; const r = a * Math.exp(0.30 * t); p.push([cx + Math.cos(t + s) * r, cy + Math.sin(t + s) * r]); } return p; }
}
function paint(W, H, strokes, dots) {
  const rgba = Buffer.alloc(W * H * 4);
  const SS = 3;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    let ar = 0, ag = 0, ab = 0, aa = 0;
    for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
      const px = x + (sx + 0.5) / SS, py = y + (sy + 0.5) / SS;
      let best = 1e9, col = null;
      for (const st of strokes) for (let i = 0; i < st.pts.length - 1; i++) {
        const d = distSeg(px, py, st.pts[i][0], st.pts[i][1], st.pts[i + 1][0], st.pts[i + 1][1]);
        const w = lerp(st.w0, st.w1, i / (st.pts.length - 1)) / 2;
        const edge = d - w;
        if (edge < best) { best = edge; col = st.col; }
      }
      for (const dt of dots) { const d = Math.hypot(px - dt[0], py - dt[1]) - 4.5; if (d < best) { best = d; col = dt[2]; } }
      if (best < 0.75 && col) { const cov = clamp(0.75 - best, 0, 1); ar += col[0] * cov; ag += col[1] * cov; ab += col[2] * cov; aa += 255 * cov; }
    }
    const n = SS * SS, o = (y * W + x) * 4, a = aa / n;
    if (a > 0) { rgba[o] = clamp(ar / aa * 255 * (aa / (255 * n)) / (a / 255) | 0, 0, 255); }
    // simpler premultiply-safe write:
    const cov = a / 255;
    if (cov > 0) { rgba[o] = clamp(ar / (aa || 1) * 255 | 0, 0, 255); rgba[o + 1] = clamp(ag / (aa || 1) * 255 | 0, 0, 255); rgba[o + 2] = clamp(ab / (aa || 1) * 255 | 0, 0, 255); rgba[o + 3] = clamp(a | 0, 0, 255); }
  }
  return rgba;
}
function mirrorX(rgba, W, H) { const out = Buffer.alloc(W * H * 4); for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const s = (y * W + x) * 4, d = (y * W + (W - 1 - x)) * 4; for (let k = 0; k < 4; k++) out[d + k] = rgba[s + k]; } return out; }

// ---------- run ----------
writePNG('phc-parchment-bg.png', 600, 600, parchment(600, 600));
writePNG('phc-wax-seal.png', 200, 200, waxSeal(200));
const CS = 300; const cl = cornerLeft(CS);
writePNG('phc-corner-left.png', CS, CS, cl);
writePNG('phc-corner-right.png', CS, CS, mirrorX(cl, CS, CS));
