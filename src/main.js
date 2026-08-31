import logoUrl from '../referencias/assets/Logo/Completa/Vetorizadas/ISLA_Logo-Principal-2.svg';
import './style.css';

const deck = document.querySelector('.deck');
const slides = [...document.querySelectorAll('.slide')];
const logo = document.querySelector('.logo');

const initialViewport = {
  width: window.innerWidth,
  height: window.innerHeight,
};

let currentIndex = 0;
let deckReady = false;
let fallbackTimer;

logo.src = logoUrl;

const viewportEnteredFullscreen = () => {
  const screenWidth = window.screen?.availWidth ?? 0;
  const screenHeight = window.screen?.availHeight ?? 0;
  const fillsScreen = screenWidth > 0
    && screenHeight > 0
    && window.innerWidth >= screenWidth - 2
    && window.innerHeight >= screenHeight - 2;
  const expanded = window.innerWidth >= initialViewport.width * 1.08
    || window.innerHeight >= initialViewport.height * 1.08;

  return fillsScreen && expanded;
};

const syncFullscreenState = () => {
  const displayModeFullscreen = window.matchMedia?.('(display-mode: fullscreen)').matches;
  const active = Boolean(document.fullscreenElement) || displayModeFullscreen || viewportEnteredFullscreen();
  deck.classList.toggle('is-fullscreen', active);
};

const showSlide = (nextIndex) => {
  currentIndex = (nextIndex + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    const active = index === currentIndex;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });

};

document.addEventListener('keydown', (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))) {
    return;
  }

  if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
    event.preventDefault();
    showSlide(currentIndex + 1);
  }

  if (['ArrowLeft', 'PageUp'].includes(event.key)) {
    event.preventDefault();
    showSlide(currentIndex - 1);
  }

  if (event.key === 'Home') showSlide(0);
  if (event.key === 'End') showSlide(slides.length - 1);
});

document.addEventListener('fullscreenchange', syncFullscreenState);
window.addEventListener('resize', syncFullscreenState);
syncFullscreenState();
showSlide(0);

const revealDeck = () => {
  if (deckReady) return;
  deckReady = true;
  window.clearTimeout(fallbackTimer);
  requestAnimationFrame(() => deck.classList.add('is-ready'));
};

const waitForImage = (image) => new Promise((resolve) => {
  if (image.complete) {
    resolve();
    return;
  }

  image.addEventListener('load', resolve, { once: true });
  image.addEventListener('error', resolve, { once: true });
});

const fontsReady = document.fonts?.ready ?? Promise.resolve();
const imagesReady = Promise.all([...document.images].map(waitForImage));

fallbackTimer = window.setTimeout(revealDeck, 1400);
Promise.all([fontsReady, imagesReady]).then(revealDeck);

const requestedSlide = Number.parseInt(window.location.hash.slice(1), 10);
if (Number.isInteger(requestedSlide) && requestedSlide > 0) {
  showSlide(requestedSlide - 1);
}
