import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');


const scrollTop = new SmoothScroll('.to-top', {
  speed: 500
});
const toTop = document.querySelector('.to-top')
let heroHeight;

if (document.querySelector('.hero')) {
  heroHeight = document.querySelector('.hero').offsetHeight;
}

if (document.querySelector('.page-hero')) {
  heroHeight = document.querySelector('.page-hero').offsetHeight;
}

const isVisibleToTop = (y = 0) => {
  if (y >= heroHeight) {
    toTop.classList.add('to-top--active')
  } else {
    toTop.classList.remove('to-top--active')
  }
}

isVisibleToTop(window.scrollY)

window.addEventListener('scroll', () => {
  let y = window.scrollY
  isVisibleToTop(y)
})
