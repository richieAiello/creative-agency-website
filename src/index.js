import { insertBrandBtnIcons } from "./insertSvg";

const navBtnOpen = document.querySelector('#hamburger-menu-open');
const navBtnClose = document.querySelector('#hamburger-menu-close');
const navLabelOpen = document.querySelector('.hamburger-open-label');
const navLabelClose = document.querySelector('.hamburger-close-label');
const navMenu = document.querySelector('.nav__menu');

export const prevBtn = document.querySelector('#previous');
export const nextBtn = document.querySelector('#next');

insertBrandBtnIcons();

const toggleHidden = () => {
  navBtnOpen.classList.toggle('hidden');
  navBtnClose.classList.toggle('hidden');
  navLabelOpen.classList.toggle('hidden');
  navLabelClose.classList.toggle('hidden');
  navMenu.classList.toggle('hidden');
}

/*****************************************
  EVENT LISTENERS
*****************************************/

navBtnOpen.addEventListener('click', e => {
  toggleHidden();
});

navBtnClose.addEventListener('click', e => {
  toggleHidden();
});