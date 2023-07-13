import VanillaTilt from 'vanilla-tilt';
import {
  isMobile,
} from '../functions/check-viewport';

const tiltElements = document.querySelectorAll('[data-tilt]');

if (isMobile()) {
  tiltElements.forEach(element => {
    element.removeAttribute('data-tilt')
  })
} else {
  tiltElements.forEach(element => {
    VanillaTilt.init(element)
  });
}
