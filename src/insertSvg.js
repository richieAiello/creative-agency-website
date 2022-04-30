import { prevBtn, nextBtn } from "./index";

export const insertBrandBtnIcons = () => {
  
  prevBtn.innerHTML = 
    `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(-1 0 0 1 40 0)" stroke="#F94F4F" 
    fill="none" fill-rule="evenodd" class="brand-icon">
    <circle cx="20" cy="20" r="19.5"/>
    <path stroke-width="2" d="M17.5 15l5 5-5 5"/></g></svg>`

  nextBtn.innerHTML = 
    `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#F94F4F" fill="none" fill-rule="evenodd" class="brand-icon">
    <circle cx="20" cy="20" r="19.5"/>
    <path stroke-width="2" d="M17.5 15l5 5-5 5"/></g></svg>`;
}