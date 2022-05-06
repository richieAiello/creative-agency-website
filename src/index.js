import { insertBrandBtnIcons } from "./insertSvg";

const navBtnOpen = document.querySelector('.hamburger--open');
const navBtnClose = document.querySelector('.hamburger--close');
const navMenu = document.querySelector('.nav__menu');

export const prevBtn = document.querySelector('.btn--previous');
export const nextBtn = document.querySelector('.btn--next');

insertBrandBtnIcons();

const toggleHidden = () => {
  navBtnOpen.classList.toggle('hidden');
  navBtnClose.classList.toggle('hidden');
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