let burgerLine_1 = document.querySelector('.header__burger-line-1'),
    burgerLine_2 = document.querySelector('.header__burger-line-2'),
    burgerLine_3 = document.querySelector('.header__burger-line-3');

let burgerMenu = document.querySelector('.header__wrap-burger');

burgerMenu.onclick = burgerEngine;

function burgerEngine(){
  burgerLine_1.classList.toggle('header__burger-line-1_angle');
  burgerLine_2.classList.toggle('header__burger-line-2_angle');
  burgerLine_3.classList.toggle('header__burger-line_del');

 slidingSide();
 galleryHiding();
}