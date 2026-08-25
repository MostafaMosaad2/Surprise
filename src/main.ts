import './style.css'
import { startFlyers } from './flyers'

const EMOJI = '🫰'

const LETTER_PARAS = [
  'أيتها الوردة🌷 التي نبتت في أعمق تفاصيل روحي ماذا فعلت بقلب كان يظن أنه اكتفى حتى جئتِ أنتِ وعلمته كيف ينبض من جديد♥️؟',
  'لقد جئت كفجر دافئ يطرد برد السنين حملت إلى عبيراً أعاد صياغة وجودي فما عدت أرى في هذا الكون جمالاً إلا وانعكس من بتلاتك🌸.',
  'كلما اقتربت منك، تلاشت المسافات وأدركت أنني لم أعش حقاً إلا منذ أن تفتحت في عمري🦦.',
  'حتى أشواكك الرقيقة، ما كانت يوماً لتجرحني بل هي حارسة هذا الحب العظيم، تزيدني شغفاً بكِ وتذكرني بأن الجمال النادر يصان بالروح والعين👀🫀.',
  'أنا عاشق يرتوي بأنفاسك، ويسكن في ظلكِ ولا يرى لقلبه موطناً سوى قلبك.',
  'فسبحان من صب الرقة في تفاصيلك وجعلك أميرة👸🏻 على عرش قلبي تملئين دنيتي بالحب والدفء وتزهرين في أعماقي وداً لا يذبل أبداً.',
]

const app = document.querySelector<HTMLElement>('#app')!

function kittyMarkup() {
  return `
    <svg class="kitty" viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g class="kitty-pose kitty-pose--stand">
        <g class="kitty-tail">
          <path d="M148 148 C 186 138, 188 96, 164 88" fill="none" stroke="#E7B48A" stroke-width="14" stroke-linecap="round"/>
          <path d="M148 148 C 186 138, 188 96, 164 88" fill="none" stroke="#F8D2B0" stroke-width="8" stroke-linecap="round"/>
        </g>
        <ellipse cx="110" cy="148" rx="46" ry="40" fill="#F3C49A"/>
        <ellipse cx="110" cy="156" rx="28" ry="24" fill="#FFF1E2"/>
        <ellipse cx="86" cy="184" rx="12" ry="8" fill="#E7B48A"/>
        <ellipse cx="134" cy="184" rx="12" ry="8" fill="#E7B48A"/>
        <g class="kitty-ear kitty-ear--left">
          <polygon points="76,78 70,38 100,66" fill="#F3C49A"/>
          <polygon points="78,74 74,46 96,66" fill="#FFB7C8"/>
        </g>
        <g class="kitty-ear kitty-ear--right">
          <polygon points="144,78 150,38 120,66" fill="#F3C49A"/>
          <polygon points="142,74 146,46 124,66" fill="#FFB7C8"/>
        </g>
        <circle cx="110" cy="96" r="42" fill="#F8D2B0"/>
        <ellipse class="kitty-blush kitty-blush--left" cx="84" cy="108" rx="8" ry="5" fill="#FFB7C8" opacity="0.85"/>
        <ellipse class="kitty-blush kitty-blush--right" cx="136" cy="108" rx="8" ry="5" fill="#FFB7C8" opacity="0.85"/>
        <g class="kitty-eye kitty-eye--left">
          <ellipse cx="94" cy="92" rx="9.5" ry="11.5" fill="#fff"/>
          <circle cx="95" cy="94" r="5.2" fill="#3B2416"/>
          <circle cx="97" cy="91" r="1.8" fill="#fff"/>
        </g>
        <g class="kitty-eye kitty-eye--right">
          <ellipse cx="126" cy="92" rx="9.5" ry="11.5" fill="#fff"/>
          <circle cx="125" cy="94" r="5.2" fill="#3B2416"/>
          <circle cx="127" cy="91" r="1.8" fill="#fff"/>
        </g>
        <g class="kitty-eye-mad" opacity="0">
          <path d="M84 90 Q94 86 104 92" fill="none" stroke="#3B2416" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M116 92 Q126 86 136 90" fill="none" stroke="#3B2416" stroke-width="2.4" stroke-linecap="round"/>
        </g>
        <g class="kitty-eye-furious" opacity="0">
          <path d="M86 88 L102 96 L86 98" fill="#3B2416"/>
          <path d="M134 88 L118 96 L134 98" fill="#3B2416"/>
        </g>
        <g class="kitty-brow" opacity="0">
          <path d="M84 76 L102 84" fill="none" stroke="#3B2416" stroke-width="3.2" stroke-linecap="round"/>
          <path d="M136 76 L118 84" fill="none" stroke="#3B2416" stroke-width="3.2" stroke-linecap="round"/>
        </g>
        <path class="kitty-brow-heavy" d="M80 70 L104 86 M140 70 L116 86" fill="none" stroke="#3B2416" stroke-width="4" stroke-linecap="round" opacity="0"/>
        <ellipse cx="110" cy="108" rx="5" ry="3.6" fill="#F48CA4"/>
        <path class="kitty-smile" d="M102 116 Q110 124 118 116" fill="none" stroke="#C46A7A" stroke-width="2.3" stroke-linecap="round"/>
        <path class="kitty-frown" d="M102 122 Q110 116 118 122" fill="none" stroke="#C46A7A" stroke-width="2.3" stroke-linecap="round" opacity="0"/>
        <ellipse class="kitty-hiss" cx="110" cy="124" rx="9" ry="8" fill="#3B2416" opacity="0"/>
        <g class="kitty-steam" opacity="0">
          <path d="M64 52 Q58 40 66 34" fill="none" stroke="#FF9AB3" stroke-width="3" stroke-linecap="round"/>
          <path d="M156 52 Q162 40 154 34" fill="none" stroke="#FF9AB3" stroke-width="3" stroke-linecap="round"/>
        </g>
        <g fill="none" stroke="#C48A6A" stroke-width="1.4" stroke-linecap="round" opacity="0.7">
          <path d="M70 106 H52 M72 112 H54 M72 100 H56"/>
          <path d="M150 106 H168 M148 112 H166 M148 100 H164"/>
        </g>
      </g>
      <g class="kitty-pose kitty-pose--sleep">
        <g class="kitty-zzz">
          <text x="168" y="58" fill="#FFE7A8" font-size="18" font-family="Cairo, sans-serif">z</text>
          <text x="182" y="40" fill="#FFE7A8" font-size="24" font-family="Cairo, sans-serif">z</text>
          <text x="198" y="22" fill="#FFE7A8" font-size="30" font-family="Cairo, sans-serif">z</text>
        </g>
        <ellipse class="kitty-sleep-body" cx="118" cy="138" rx="70" ry="32" fill="#F3C49A"/>
        <ellipse cx="118" cy="146" rx="48" ry="18" fill="#FFF1E2"/>
        <ellipse cx="54" cy="150" rx="14" ry="9" fill="#E7B48A"/>
        <ellipse cx="78" cy="156" rx="14" ry="8" fill="#E7B48A"/>
        <ellipse cx="168" cy="152" rx="16" ry="9" fill="#E7B48A"/>
        <path d="M180 136 C 206 128, 210 104, 190 98" fill="none" stroke="#E7B48A" stroke-width="12" stroke-linecap="round"/>
        <g transform="translate(18 8)">
          <polygon points="58,96 48,66 76,90" fill="#F3C49A"/>
          <polygon points="58,94 52,74 72,90" fill="#FFB7C8"/>
          <circle cx="78" cy="114" r="30" fill="#F8D2B0"/>
          <polygon points="96,94 110,70 84,92" fill="#F3C49A"/>
          <polygon points="94,93 106,76 86,92" fill="#FFB7C8"/>
          <path d="M66 112 Q74 108 82 112" fill="none" stroke="#3B2416" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M88 112 Q96 108 104 112" fill="none" stroke="#3B2416" stroke-width="2.4" stroke-linecap="round"/>
          <ellipse cx="86" cy="122" rx="4.5" ry="3.2" fill="#F48CA4"/>
          <path d="M78 130 Q86 136 94 130" fill="none" stroke="#C46A7A" stroke-width="2.2" stroke-linecap="round"/>
          <ellipse cx="70" cy="124" rx="6" ry="4" fill="#FFB7C8" opacity="0.8"/>
          <ellipse cx="102" cy="124" rx="6" ry="4" fill="#FFB7C8" opacity="0.8"/>
        </g>
      </g>
    </svg>
  `
}

function bloomMarkup() {
  const layer = (count: number, className: string, offset: number, delay: number) =>
    Array.from({ length: count }, (_, i) => {
      const angle = (360 / count) * i + offset
      return `<span class="${className}" style="--a:${angle};--d:${delay + i * 0.08}s"></span>`
    }).join('')

  const sepals = Array.from({ length: 5 }, (_, i) => {
    const angle = (360 / 5) * i
    return `<span class="sepal" style="--a:${angle}"></span>`
  }).join('')

  return `
    <div class="bloom">
      <div class="bloom-flower">
        ${sepals}
        ${layer(10, 'petal petal--outer', 0, 0)}
        ${layer(8, 'petal petal--mid', 22, 0.45)}
        ${layer(6, 'petal petal--inner', 12, 0.9)}
        <span class="bloom-center" aria-hidden="true"></span>
        <button class="heart" type="button" aria-haspopup="dialog" aria-controls="letter" aria-label="Press On The Heart" disabled>
          <span class="heart-emoji" aria-hidden="true">${EMOJI}</span>
        </button>
      </div>
    </div>
  `
}

function popMessage(el: HTMLElement, text: string, kind: 'wrong' | 'right') {
  el.textContent = text
  el.classList.remove('is-wrong', 'is-right', 'is-pop')
  void el.offsetWidth
  el.classList.add(kind === 'right' ? 'is-right' : 'is-wrong', 'is-pop')
}

function showGate() {
  app.innerHTML = `
    <section class="gate" lang="en" dir="ltr">
      <div class="kitty-wrap">${kittyMarkup()}</div>
      <h1 class="gate-title">I Made Something For You</h1>
      <p class="gate-question">You Want To See It ?</p>
      <div class="gate-actions">
        <button class="choice choice--yes" type="button">Yes</button>
        <button class="choice choice--no" type="button">No</button>
      </div>
      <p class="gate-msg" aria-live="polite"></p>
    </section>
  `

  const gate = app.querySelector<HTMLElement>('.gate')!
  const kitty = app.querySelector<SVGSVGElement>('.kitty')!
  const yes = app.querySelector<HTMLButtonElement>('.choice--yes')!
  const no = app.querySelector<HTMLButtonElement>('.choice--no')!
  const msg = app.querySelector<HTMLElement>('.gate-msg')!
  let noPresses = 0

  yes.addEventListener('click', showSurprise)

  no.addEventListener('click', () => {
    noPresses += 1

    if (noPresses === 1) {
      gate.classList.add('gate--nudge')
      kitty.classList.add('is-mad-1')
      popMessage(msg, 'wrong answer', 'wrong')
      return
    }

    if (noPresses === 2) {
      gate.classList.add('gate--insist')
      kitty.classList.remove('is-mad-1')
      kitty.classList.add('is-mad-2')
      popMessage(msg, 'Wrooooooong Answer', 'wrong')
      return
    }

    gate.classList.remove('gate--nudge', 'gate--insist')
    gate.classList.add('gate--only-yes')
    kitty.classList.remove('is-mad-1', 'is-mad-2')
    kitty.classList.add('is-sleep')
    no.remove()
    popMessage(msg, 'this is the right answer', 'right')
    yes.focus()
  })
}

function showSurprise() {
  app.innerHTML = `
    <div class="surprise" dir="ltr" lang="en">
      <h1 class="page-title">Press On The Heart</h1>
      <div class="stage">
        ${bloomMarkup()}
      </div>
      <dialog class="letter" id="letter" dir="rtl" lang="ar" aria-labelledby="letter-heading">
        <div class="letter-card">
          <button class="letter-close" type="button" aria-label="Close">&times;</button>
          <p class="letter-heading" id="letter-heading">🫰</p>
          <div class="letter-body">
            ${LETTER_PARAS.map((para) => `<p>${para}</p>`).join('')}
          </div>
        </div>
      </dialog>
    </div>
  `

  const surprise = app.querySelector<HTMLElement>('.surprise')!
  const bloom = app.querySelector<HTMLElement>('.bloom')!
  const heart = app.querySelector<HTMLButtonElement>('.heart')!
  const letter = app.querySelector<HTMLDialogElement>('#letter')!
  const closeLetter = app.querySelector<HTMLButtonElement>('.letter-close')!
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const revealHeart = () => {
    surprise.classList.add('is-ready')
    heart.disabled = false
  }

  if (reduceMotion) {
    bloom.classList.add('is-open')
    revealHeart()
  } else {
    window.setTimeout(() => bloom.classList.add('is-open'), 800)
    window.setTimeout(revealHeart, 5200)
  }

  heart.addEventListener('click', () => {
    if (heart.disabled) return
    letter.showModal()
  })

  closeLetter.addEventListener('click', () => {
    letter.close()
  })

  letter.addEventListener('click', (event) => {
    const card = letter.querySelector('.letter-card')
    if (card && event.target instanceof Node && !card.contains(event.target)) {
      letter.close()
    }
  })

  startFlyers()
}

showGate()
