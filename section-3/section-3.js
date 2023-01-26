let pictureBefore = document.querySelector('.explore__before');
let pictureAfter = document.querySelector('.explore__after');
let wrapPicture = document.querySelector('.explore__wrap-picture');
let slideLine = document.querySelector('.explore__slide-column');

let startX, moveX, different = 0;
let permissionLine = false;
let initionalPosition = 421;
let number = initionalPosition;
let currentPosition;
let widthLineSwipe = Math.round(slideLine.offsetWidth / 2);
let widthPicture = wrapPicture.offsetWidth;
let lineCoordinateX;

currentPosition = initionalPosition;
slideLine.addEventListener('mousedown', function (e) {
  permissionLine = true;
  startX = e.pageX;
})

wrapPicture.addEventListener('mousemove', function(e) {
  if (permissionLine == true) {
    if (moveX != e.pageX) {
      moveX = e.pageX;
      different = startX - moveX;
      lineCoordinateX = currentPosition + ((-1) * different);
      slideLine.style.left = (lineCoordinateX) + 'px';
      number = slideLine.style.left;
      number = Number(number.replace('px',''));
      number = number + widthLineSwipe;
      limintChecking();
      halfingPicture(lineCoordinateX);
    }
  }
})

slideLine.addEventListener('mouseup', function() {
  permissionLine = false;
  currentPosition = (currentPosition + ((-1) * different));
})

function limintChecking() {
  if(number > widthPicture - widthLineSwipe){
    permissionLine = false;
    number = widthPicture - widthLineSwipe;
    currentPosition = widthPicture - widthLineSwipe - 20;
    slideLine.style.left = (currentPosition) + 'px';
  }
  else if(number < widthLineSwipe){
    permissionLine = false;
    number = widthLineSwipe;
    currentPosition = 0;
    slideLine.style.left = (currentPosition) + 'px';
  }
}

function halfingPicture(wdth){
  pictureBefore.style.width = (wdth + widthLineSwipe) + 'px';
}
halfingPicture(currentPosition);
// ------------------------ height adapting image -------------------------------

window.addEventListener("resize",function(){
  heighting();
});

function heighting(){
  pictureBefore.style.height = wrapPicture.offsetHeight + 'px';
};
heighting();


