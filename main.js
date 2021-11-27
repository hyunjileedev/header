'use strict';

const toggleBtn = document.querySelector('.header__toggle');
const menu = document.querySelector('.header__menu');
const form = document.querySelector('.header__form');
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('header__menu--active');
  form.classList.toggle('header__form--active');
});
