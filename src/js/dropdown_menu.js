/*Burger menu*/

const burger = document.getElementById('top-menu-burger');
const burgerDropdownMenu = document.getElementById('burger-dropdown-menu');
const burgerLineFirst = document.getElementById("top-menu-burger-line-first");
const burgerLineSecond = document.getElementById("top-menu-burger-line-second");
const burgerLineThird = document.getElementById("top-menu-burger-line-third");

burger.addEventListener('click', () => {
    burgerDropdownMenu.classList.toggle('block');
    burger.classList.toggle('top-menu-burger-press');
    burgerLineFirst.classList.toggle('top-menu-burger-line-first');
    burgerLineSecond.classList.toggle('top-menu-burger-line-second');
    burgerLineThird.classList.toggle('top-menu-burger-line-third');
});