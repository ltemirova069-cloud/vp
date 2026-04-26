let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  actions.classList.toggle('active');
});