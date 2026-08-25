const TWEETY_SVG = `
<svg class="creature tweety" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <g class="tweety-tail">
    <ellipse cx="96" cy="78" rx="16" ry="7" fill="#F3D23C" transform="rotate(18 96 78)"/>
    <ellipse cx="102" cy="70" rx="12" ry="5.5" fill="#FFE14A" transform="rotate(-8 102 70)"/>
  </g>
  <g class="tweety-wing tweety-wing--back">
    <g transform="rotate(-28 28 72)">
      <ellipse cx="28" cy="72" rx="24" ry="11" fill="#F0CC2E"/>
    </g>
  </g>
  <ellipse cx="56" cy="82" rx="30" ry="26" fill="#FFE34E"/>
  <ellipse cx="60" cy="90" rx="18" ry="14" fill="#FFF4B8"/>
  <circle cx="52" cy="48" r="32" fill="#FFE34E"/>
  <g class="tweety-tuft">
    <ellipse cx="50" cy="14" rx="5" ry="9" fill="#FFE34E"/>
    <ellipse cx="58" cy="13" rx="4.5" ry="8" fill="#FFD83D"/>
  </g>
  <g class="tweety-wing tweety-wing--front">
    <g transform="rotate(16 64 76)">
      <ellipse cx="64" cy="76" rx="22" ry="10" fill="#F6D43A"/>
    </g>
  </g>
  <g class="tweety-face">
    <ellipse class="tweety-eye" cx="40" cy="48" rx="13" ry="16" fill="#fff"/>
    <ellipse class="tweety-eye" cx="66" cy="48" rx="13" ry="16" fill="#fff"/>
    <circle cx="43" cy="52" r="5.2" fill="#1A140C"/>
    <circle cx="69" cy="52" r="5.2" fill="#1A140C"/>
    <circle cx="45" cy="49" r="1.8" fill="#fff"/>
    <circle cx="71" cy="49" r="1.8" fill="#fff"/>
    <path d="M32 34 Q38 24 46 30" fill="none" stroke="#1A140C" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M38 32 Q44 22 52 29" fill="none" stroke="#1A140C" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M58 30 Q66 22 74 32" fill="none" stroke="#1A140C" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M66 30 Q74 24 80 34" fill="none" stroke="#1A140C" stroke-width="1.7" stroke-linecap="round"/>
    <ellipse cx="30" cy="60" rx="7" ry="4.5" fill="#FFB7C8" opacity="0.9"/>
    <ellipse cx="76" cy="60" rx="7" ry="4.5" fill="#FFB7C8" opacity="0.9"/>
    <polygon points="51,58 68,63 51,68" fill="#FF9A2E"/>
    <polygon points="51,58 59,63 51,63" fill="#FFC05A"/>
  </g>
  <g fill="none" stroke="#FF9A2E" stroke-width="2.4" stroke-linecap="round">
    <path d="M46 106 l-5 8 M46 106 v9 M46 106 l5 8"/>
    <path d="M64 106 l-5 8 M64 106 v9 M64 106 l5 8"/>
  </g>
</svg>
`

type ButterflyPalette = {
  id: string
  wing0: string
  wing1: string
  wing2: string
  spot: string
  spot2: string
  stroke: string
}

function butterflySvg(p: ButterflyPalette) {
  return `
<svg class="creature butterfly" viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bf-wing-${p.id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${p.wing0}"/>
      <stop offset="45%" stop-color="${p.wing1}"/>
      <stop offset="100%" stop-color="${p.wing2}"/>
    </linearGradient>
  </defs>
  <g class="bf-wing bf-wing--left">
    <path fill="url(#bf-wing-${p.id})" stroke="${p.stroke}" stroke-width="1.2"
      d="M68 46 C 22 8, 2 22, 14 48 C 2 68, 26 86, 68 56 Z"/>
    <ellipse cx="34" cy="38" rx="9" ry="7" fill="${p.spot}" opacity="0.75"/>
    <ellipse cx="30" cy="58" rx="6" ry="5" fill="${p.spot2}" opacity="0.55"/>
  </g>
  <g class="bf-wing bf-wing--right">
    <path fill="url(#bf-wing-${p.id})" stroke="${p.stroke}" stroke-width="1.2"
      d="M72 46 C 118 8, 138 22, 126 48 C 138 68, 114 86, 72 56 Z"/>
    <ellipse cx="106" cy="38" rx="9" ry="7" fill="${p.spot}" opacity="0.75"/>
    <ellipse cx="110" cy="58" rx="6" ry="5" fill="${p.spot2}" opacity="0.55"/>
  </g>
  <ellipse cx="70" cy="54" rx="4.2" ry="20" fill="#1C1917"/>
  <circle cx="70" cy="32" r="5.4" fill="#1C1917"/>
  <path d="M66 28 Q58 12 52 8" fill="none" stroke="#1C1917" stroke-width="1.6" stroke-linecap="round"/>
  <path d="M74 28 Q82 12 88 8" fill="none" stroke="#1C1917" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="52" cy="8" r="2.1" fill="#1C1917"/>
  <circle cx="88" cy="8" r="2.1" fill="#1C1917"/>
</svg>
`
}

const BUTTERFLIES: ButterflyPalette[] = [
  {
    id: 'blue',
    wing0: '#93C5FD',
    wing1: '#2563EB',
    wing2: '#1E3A8A',
    spot: '#DBEAFE',
    spot2: '#93C5FD',
    stroke: '#172554',
  },
  {
    id: 'pink',
    wing0: '#FBCFE8',
    wing1: '#EC4899',
    wing2: '#9D174D',
    spot: '#FCE7F3',
    spot2: '#F9A8D4',
    stroke: '#831843',
  },
  {
    id: 'purple',
    wing0: '#E9D5FF',
    wing1: '#A855F7',
    wing2: '#6B21A8',
    spot: '#F3E8FF',
    spot2: '#D8B4FE',
    stroke: '#4C1D95',
  },
]

type Flyer = {
  el: HTMLElement
  x: number
  y: number
  heading: number
  speed: number
  jitter: number
  phase: number
  bob: number
  size: number
}

function steerFromEdges(flyer: Flyer, width: number, height: number) {
  const margin = 90
  let vx = Math.cos(flyer.heading)
  let vy = Math.sin(flyer.heading)
  const pull = 0.035

  if (flyer.x < margin) vx += pull * (margin - flyer.x)
  if (flyer.x > width - margin - flyer.size) {
    vx -= pull * (flyer.x - (width - margin - flyer.size))
  }
  if (flyer.y < margin) vy += pull * (margin - flyer.y)
  if (flyer.y > height - margin - flyer.size) {
    vy -= pull * (flyer.y - (height - margin - flyer.size))
  }

  flyer.heading = Math.atan2(vy, vx)
}

function placeSky() {
  const sky = document.createElement('div')
  sky.className = 'sky'
  sky.setAttribute('aria-hidden', 'true')
  sky.innerHTML = `
    <div class="flyer flyer--tweety">${TWEETY_SVG}</div>
    ${BUTTERFLIES.map(
      (palette) =>
        `<div class="flyer flyer--butterfly flyer--butterfly-${palette.id}">${butterflySvg(palette)}</div>`,
    ).join('')}
  `
  document.body.append(sky)
  return sky
}

export function startFlyers() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const sky = placeSky()
  const tweetyEl = sky.querySelector<HTMLElement>('.flyer--tweety')!

  const flyers: Flyer[] = [
    {
      el: tweetyEl,
      x: window.innerWidth * 0.12,
      y: window.innerHeight * 0.18,
      heading: 0.4,
      speed: 1.35,
      jitter: 0.05,
      phase: 0.6,
      bob: 7,
      size: 110,
    },
    {
      el: sky.querySelector<HTMLElement>('.flyer--butterfly-blue')!,
      x: window.innerWidth * 0.72,
      y: window.innerHeight * 0.62,
      heading: 3.6,
      speed: 2.15,
      jitter: 0.12,
      phase: 2.1,
      bob: 5,
      size: 72,
    },
    {
      el: sky.querySelector<HTMLElement>('.flyer--butterfly-pink')!,
      x: window.innerWidth * 0.18,
      y: window.innerHeight * 0.58,
      heading: 5.9,
      speed: 1.9,
      jitter: 0.14,
      phase: 0.9,
      bob: 6,
      size: 64,
    },
    {
      el: sky.querySelector<HTMLElement>('.flyer--butterfly-purple')!,
      x: window.innerWidth * 0.58,
      y: window.innerHeight * 0.16,
      heading: 2.2,
      speed: 2.35,
      jitter: 0.11,
      phase: 3.4,
      bob: 8,
      size: 80,
    },
  ]

  let frame = 0

  const tick = (now: number) => {
    frame = requestAnimationFrame(tick)
    const width = window.innerWidth
    const height = window.innerHeight

    for (const flyer of flyers) {
      flyer.heading += (Math.random() - 0.5) * flyer.jitter
      steerFromEdges(flyer, width, height)

      flyer.x += Math.cos(flyer.heading) * flyer.speed
      flyer.y += Math.sin(flyer.heading) * flyer.speed

      flyer.x = Math.min(Math.max(flyer.x, 8), Math.max(8, width - flyer.size))
      flyer.y = Math.min(Math.max(flyer.y, 8), Math.max(8, height - flyer.size))

      const lift = Math.sin(now / 260 + flyer.phase) * flyer.bob
      const facing = Math.cos(flyer.heading) < 0 ? -1 : 1
      const bank = Math.sin(flyer.heading) * 10

      flyer.el.style.transform =
        `translate3d(${flyer.x}px, ${flyer.y + lift}px, 0) rotate(${bank}deg) scaleX(${facing})`
    }
  }

  frame = requestAnimationFrame(tick)

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(frame)
    } else {
      frame = requestAnimationFrame(tick)
    }
  })
}
