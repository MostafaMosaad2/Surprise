import './style.css'
import { startFlyers } from './flyers'

const EMOJI = '🫰'

document.querySelector<HTMLElement>('#app')!.innerHTML = `
  <p class="emoji" role="img" aria-label="hand with index finger and thumb crossed">${EMOJI}</p>
`

startFlyers()
