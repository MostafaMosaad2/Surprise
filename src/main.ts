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
    <div class="kitty" aria-hidden="true">
      <img class="kitty-photo kitty-photo--cute" src="/kitty/cute.png" alt="">
      <img class="kitty-photo kitty-photo--mad" src="/kitty/mad.png" alt="">
      <img class="kitty-photo kitty-photo--furious" src="/kitty/furious.png" alt="">
      <img class="kitty-photo kitty-photo--sleep" src="/kitty/sleep.png" alt="">
      <span class="kitty-zzz"><span>z</span><span>z</span><span>z</span></span>
    </div>
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
  const kitty = app.querySelector<HTMLElement>('.kitty')!
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
