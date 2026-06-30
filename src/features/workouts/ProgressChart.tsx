import { useMemo } from 'react'
import type { ProgressPoint } from './progress'

// Fixed coordinate space; the SVG scales responsively via viewBox.
const W = 720
const H = 240
const PAD = { top: 16, right: 16, bottom: 28, left: 56 }

/** Round a max value up to a clean axis bound (1, 2, 5 × 10ⁿ). */
function niceCeil(v: number): number {
  if (v <= 0) return 1
  const mag = 10 ** Math.floor(Math.log10(v))
  const n = v / mag
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10
  return step * mag
}

function fmtDate(key: string): string {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  })
}

interface ProgressChartProps {
  points: ProgressPoint[]
  selected: number
  onSelect: (i: number) => void
}

export function ProgressChart({ points, selected, onSelect }: ProgressChartProps) {
  const geom = useMemo(() => {
    const plotW = W - PAD.left - PAD.right
    const plotH = H - PAD.top - PAD.bottom
    const yMax = niceCeil(Math.max(...points.map((p) => p.value), 1))

    let tMin = points[0].time
    let tMax = points[points.length - 1].time
    if (tMin === tMax) {
      // Single point — give it room so it centers.
      tMin -= 43_200_000
      tMax += 43_200_000
    }

    const x = (t: number) => PAD.left + ((t - tMin) / (tMax - tMin)) * plotW
    const y = (v: number) => PAD.top + plotH - (v / yMax) * plotH

    const dots = points.map((p, i) => ({ i, cx: x(p.time), cy: y(p.value), p }))
    const line = dots
      .map((d, i) => `${i === 0 ? 'M' : 'L'} ${d.cx.toFixed(1)} ${d.cy.toFixed(1)}`)
      .join(' ')

    const yTicks = [0, yMax / 2, yMax].map((v) => ({ v, y: y(v) }))
    const xIdx = [
      ...new Set([0, Math.floor((points.length - 1) / 2), points.length - 1]),
    ]
    const xTicks = xIdx.map((i) => ({ x: x(points[i].time), label: fmtDate(points[i].date) }))

    return { dots, line, yTicks, xTicks }
  }, [points])

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      role="img"
      aria-label="Exercise volume over time"
    >
      {/* Gridlines + y-axis labels */}
      {geom.yTicks.map((t) => (
        <g key={t.v}>
          <line
            x1={PAD.left}
            y1={t.y}
            x2={W - PAD.right}
            y2={t.y}
            stroke="var(--border)"
            strokeOpacity={0.5}
          />
          <text
            x={PAD.left - 8}
            y={t.y}
            textAnchor="end"
            dominantBaseline="middle"
            fill="var(--muted-foreground)"
            fontSize={10}
          >
            {Math.round(t.v).toLocaleString()}
          </text>
        </g>
      ))}

      {/* Trend line (gold accent) */}
      <path
        d={geom.line}
        fill="none"
        stroke="var(--primary)"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Data points — hover or tap to inspect that day */}
      {geom.dots.map((d) => (
        <g
          key={d.i}
          onMouseEnter={() => onSelect(d.i)}
          onClick={() => onSelect(d.i)}
          style={{ cursor: 'pointer' }}
        >
          <circle cx={d.cx} cy={d.cy} r={14} fill="transparent" />
          <circle
            cx={d.cx}
            cy={d.cy}
            r={d.i === selected ? 5 : 3.5}
            fill="var(--primary)"
            fillOpacity={d.i === selected ? 1 : 0.75}
            stroke="var(--background)"
            strokeWidth={1.5}
          />
        </g>
      ))}

      {/* X-axis date labels */}
      {geom.xTicks.map((t, i) => (
        <text
          key={i}
          x={t.x}
          y={H - 8}
          textAnchor="middle"
          fill="var(--muted-foreground)"
          fontSize={10}
        >
          {t.label}
        </text>
      ))}
    </svg>
  )
}
