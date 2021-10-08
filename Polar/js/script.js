const burger = document.querySelector('.burger__icon');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active-bu');
});