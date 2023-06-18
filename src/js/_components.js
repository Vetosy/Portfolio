import './components/vanilla-tilt';

const tiltElements = document.querySelectorAll('.portfolio__image');

tiltElements.forEach((element) => {
  VanillaTilt.init(element, {
    glare: true,
    maxGlare: 1,
  });
});
