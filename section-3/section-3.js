let pictureBefore = document.querySelector('.explore__before');
let pictureAfter = document.querySelector('.explore__after');
let wrapPicture = document.querySelector('.explore__wrap-picture');
let slideLine = document.querySelector('.explore__slide-column');
let lowerPartLine = document.querySelector('.explore__line-2');
let upperPartLine = document.querySelector('.explore__line-1');

let startX, moveX, different = 0;
let permissionLine = false;
let initionalPosition = 421;
//lineCoodinating();
let number = initionalPosition;
let currentPosition;
let widthLineSwipe = Math.round(slideLine.offsetWidth / 2);
let widthPicture = wrapPicture.offsetWidth;
let lineCoordinateX;

let touch;
let touchobj, touchobj_0;

currentPosition = initionalPosition;

slideLine.addEventListener('mousedown', function(e) {
  touch = false;
  mouseDowning(e);
})

wrapPicture.addEventListener('mousemove', function(e) {
 // touch = false;
  if (permissionLine == true) {
    mouseMoving(e);
  }
})

slideLine.addEventListener('mouseup', function() {
//  touch = false;
  mouseUpping();
})


slideLine.addEventListener('touchstart', function(e) {
  touch = true;
  mouseDowning(e);
})

wrapPicture.addEventListener('touchmove', function(e) {
  if (permissionLine == true) {
    mouseMoving(e);
  }
})

slideLine.addEventListener('touchend', function() {
  mouseUpping();
})


function mouseDowning(e){
  permissionLine = true;
  if(touch == false){
    startX = e.pageX;
  }
  else if(touch == true){
    touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
  }
}

function mouseMoving(e){
  if(touch == false){
    moveX = e.pageX;
  }
  else if(touch == true){
    touchobj_0 = e.changedTouches[0];
			moveX = touchobj.pageX;
  }
  if (moveX != startX || moveX != startX) {console.log(startX);
    different = startX - moveX;
    lineCoordinateX = currentPosition + ((-1) * different);
    slideLine.style.left = (lineCoordinateX) + 'px';
    number = slideLine.style.left;
    number = Number(number.replace('px',''));
    number = number + widthLineSwipe;
    limintChecking();
    pictureHalfing(lineCoordinateX);
  }
}

function mouseUpping(){
  permissionLine = false;
  currentPosition = (currentPosition + ((-1) * different));
}

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

function pictureHalfing(wdth){
  pictureBefore.style.width = (wdth + widthLineSwipe) + 'px';
}

function lineCoodinating(){
  if(body.offsetWidth <= 560){
    initionalPosition = 260;
    slideLine.style.left = (initionalPosition) + 'px';
  }
}

let reHeightLine_U, heightLine_U_prcnt = 47.1, reHeightLine_D;
let initHeightPicture_prcnt = 100;

function slideLineHalfing(){
  let calcHeightPicture = wrapPicture.offsetHeight;

  reHeightLine_U = (heightLine_U_prcnt * calcHeightPicture) / initHeightPicture_prcnt;
  reHeightLine_D = reHeightLine_U + 2;

  lowerPartLine.style.height = Math.round(reHeightLine_D) + 'px';
  upperPartLine.style.height = Math.round(reHeightLine_U ) + 'px';
  console.log(calcHeightPicture);
}

setTimeout(wrapCalling,5);

function wrapCalling(){
  pictureHalfing(currentPosition);
  slideLineHalfing();
 // lineCoodinating();
}

// ------------------------ resize adapting image -------------------------------

window.addEventListener("resize",function(){
   imageResizing();
   pictureHalfing(currentPosition);
   slideLineHalfing();
});

function imageResizing(){
  pictureBefore.style.height = wrapPicture.offsetHeight + 'px';
  pictureBefore.style.width = wrapPicture.offsetWidth + 'px';
};

imageResizing();


