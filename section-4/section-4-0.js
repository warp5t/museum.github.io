
// let videoYouTube = document.querySelectorAll('.video__you-tube');
// let leftButton = document.querySelector('.video__darrows-L');
// let rightButton = document.querySelector('.video__darrows-R');
// let videoMover = document.querySelector('.video__mover');
// let videoList = document.querySelector('.video__list-video');
// let dotItems = document.querySelectorAll('.video__dot');
// let dinamicItemVideo = document.querySelector('.video__list-video').getElementsByClassName("video__you-tube");

// let indexVideo = 0;

// videoYouTube[0].style.backgroundColor = '#7c0964';

// let counterSlide = 0;
// let marginCommon = parseInt(window.getComputedStyle(videoYouTube[0], "").marginRight);
// let direction, sizeStep, result, permissionButton = true;
// let timeDelayMaj = 1000, timeDelayMin = 5;

// let buttonCode;
// let dotCode;
// let switchIndexDot = 0;
// let differentStepDot;
// let indexDinamic = 0;
// let arrItemVideo = [];

// window.addEventListener('resize', () => {
//   marginCommon = parseInt(window.getComputedStyle(videoYouTube[0], "").marginRight);
//   stepCalculating();
// });

// function stepCalculating() {
//   sizeStep = ((videoYouTube[1].offsetWidth + marginCommon));
// }
// stepCalculating();

// function dotRecoloring() {
//   if (direction == 'right') {
//     switchIndexDot++;
//     if (switchIndexDot > 4) {
//       switchIndexDot = 0;
//       dotItems[switchIndexDot].style.backgroundColor = '#333333';
//       dotItems[4].style.backgroundColor = '#999999';
//     } else if (switchIndexDot == 0) {
//       dotItems[switchIndexDot].style.backgroundColor = '#333333';
//       dotItems[4].style.backgroundColor = '#999999';
//     } else {
//       dotItems[switchIndexDot].style.backgroundColor = '#333333';
//       dotItems[switchIndexDot - 1].style.backgroundColor = '#999999';
//     }
//   } else if (direction == 'left') {
//     switchIndexDot--;
//     if (switchIndexDot < 0) {
//       switchIndexDot = 4;
//       dotItems[switchIndexDot].style.backgroundColor = '#333333';
//       dotItems[0].style.backgroundColor = '#999999';
//     } else if (switchIndexDot == 0) {
//       dotItems[switchIndexDot].style.backgroundColor = '#333333';
//       dotItems[1].style.backgroundColor = '#999999';
//     } else {
//       dotItems[switchIndexDot].style.backgroundColor = '#333333';
//       dotItems[switchIndexDot + 1].style.backgroundColor = '#999999';
//     }
//   } else {
//     dotItems[switchIndexDot].style.backgroundColor = '#333333';
//   }
// }
// dotRecoloring();

// rightButton.onclick = function() {
//   direction = 'right';
//   if(permissionButton){
//   drawing();
//   dotRecoloring();
//   permissing();
//   }
// }

// leftButton.onclick = function() {
//   direction = 'left';
//   if(permissionButton){
//     drawing();
//     dotRecoloring();
//     permissing();
//   }
// }

// function permissing(){
//   permissionButton = false;
//   setTimeout(function(){permissionButton = true},timeDelayMaj);
// }

// function clearing(){
//   for(let i = 0; videoYouTube.length > i; i++){
//   arrItemVideo[i] = videoYouTube[i];
//   arrItemVideo[i].remove();
//   console.log(i);
// }
// }
// clearing();

// function correction(){
//   if(step + 1 > videoYouTube.length){
//     step = 0;
//   }
//   else if(step < 0){
//     step = videoYouTube.length -1;
//   }
// }

// let step = 0;
// let offset = 0;
// let visibleAmmounts = 2;
// let counterItem = 3;
// let index = 0;

// function drawing(){
//   let div = document.createElement('div');
//   if(direction == 'left'){
//     step--;
//     correction();
//     div = arrItemVideo[step];
//     videoList.prepend(div);
//   }
//   else if(direction == 'right'){
//     step += 2;
//     step++;
//     correction();
//     div = arrItemVideo[step];
//     videoList.append(div);
//   }
//   else{
//     while(counterItem > 0){
//     console.log(counterItem);
//     counterItem--;
//     div = arrItemVideo[index];
//     index++;
//     videoList.append(div);
//   }
//   }
  
// //  div.style.left = offset * sizeStep + 'px';
// }
// drawing();
// //dinamicItemVideo
//  function left(){
//   let currentItemsVideo = document.querySelectorAll('.video__you-tube');
//   let offset = 0;
//   for(let i = 0; currentItemsVideo.length > i; i++){
//     currentItemsVideo[i].style.left = step * sizeStep + 'px';
//   }
//  }

// function overRighting_2(){
//   counterSlide++;
//   result = sizeStep * counterSlide;
//   for(let i = 0; dinamicItemVideo.length > i; i++){
//     dinamicItemVideo[i].style.left = 'unset';
//     dinamicItemVideo[i].style.transitionDuration = timeDelayMaj + 'ms';
//     dinamicItemVideo[i].style.right = '0px';
//   }
//   setTimeout(function() {
//     for(let i = 0; dinamicItemVideo.length > i; i++){
//       dinamicItemVideo[i].style.right = result + 'px';
//     };
//   }, timeDelayMin);
//   counterSlide--;
// }