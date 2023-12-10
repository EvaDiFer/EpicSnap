import './style.css';
import { headerContent } from './components/header';
import { exploreContainer } from './components/explore';
import { imageContainer } from './components/image';
import { footerContent } from './components/footer';
import { setupExploreButton, foundImages } from './components/searchimage';

document.querySelector('#app').innerHTML = `
  ${headerContent}
  ${exploreContainer}
  ${imageContainer}
  ${footerContent}
`;

window.addEventListener('DOMContentLoaded', () => {
  const inputValue = document.getElementById('input');
  inputValue.value = 'Rome';
  foundImages();
});

setupExploreButton();
