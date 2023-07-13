const showMore = document.querySelector('.portfolio__btn')
const portfolioLength = document.querySelectorAll('.portfolio__item').length
let items = 3;

showMore.addEventListener('click', () => {
  items += 2;
  const array = Array.from(document.querySelector('.portfolio__list').children)
  const visItems = array.slice(0, items)

  visItems.forEach(el => el.classList.add('is-visible'))

  if (visItems.length === portfolioLength) {
    showMore.style.display = 'none'
  }
})
