// ------------------------ recolor arrows -------------------------------
const wrapLeftArrow = document.getElementById("wrap-left");
const wrapRightArrow = document.getElementById("wrap-right");

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

wrapLeftArrow.onmouseover = mouseOver_L;
wrapLeftArrow.onmouseout = mouseOut_L;

wrapRightArrow.onmouseover = mouseOver_R;
wrapRightArrow.onmouseout = mouseOut_R;

function mouseOver_L() {
  leftArrow.src = "section-1/left-recolor.png";
}

function mouseOut_L() {
  leftArrow.src = "section-1/arrow-left.png";
}

function mouseOver_R() {
  rightArrow.src = "section-1/right-recolor.png";
}

function mouseOut_R() {
  rightArrow.src = "section-1/arrow-right.png";
}

// -------------------------------------  carousel-pictures  ------------------------------------

const collectionPictures = document.querySelectorAll('.welcome__picture');
const collectionPictures_1030 = document.querySelectorAll('.welcome__picture-1030');
const collectionPictures_530 = document.querySelectorAll('.welcome__picture-530');

const welcomeCont = document.querySelector('.welcome__container');

let currentItem = 0;
let isEnabled = true;

const breakPoint_1030 = 1030;
const breakPoint_530 = 530;

function changeCurrentItem(n) {
  const collectionPictures = document.querySelectorAll('.welcome__picture');
  const collectionPictures_1030 = document.querySelectorAll('.welcome__picture-1030');
  const collectionPictures_530 = document.querySelectorAll('.welcome__picture-530');
  const widthContainer = welcomeCont.offsetWidth;
  if (widthContainer > breakPoint_1030 &&
    widthContainer > breakPoint_530) {
    currentItem = (n + collectionPictures.length) % collectionPictures.length;
    recoloringItemClick();
  } else if (widthContainer <= breakPoint_1030 &&
    widthContainer > breakPoint_530) {
    currentItem = (n + collectionPictures_1030.length) % collectionPictures_1030.length;
    recoloringItemClick();
  } else if (widthContainer < breakPoint_1030 &&
    widthContainer <= breakPoint_530) {
    currentItem = (n + collectionPictures_530.length) % collectionPictures_530.length;
    recoloringItemClick();
  }
}

function hideItem(direction) {
  isEnabled = false;
  changingCount();
  const collectionPictures = document.querySelectorAll('.welcome__picture');
  const collectionPictures_1030 = document.querySelectorAll('.welcome__picture-1030');
  const collectionPictures_530 = document.querySelectorAll('.welcome__picture-530');
  const widthContainer = welcomeCont.offsetWidth;
  if (widthContainer > breakPoint_1030 &&
    widthContainer > breakPoint_530) {
    collectionPictures[currentItem].classList.add(direction);
    collectionPictures[currentItem].addEventListener('animationend', function () {
      this.classList.remove('active', direction);
    });
  } else if (widthContainer <= breakPoint_1030 &&
    widthContainer > breakPoint_530) {
    collectionPictures_1030[currentItem].classList.add(direction);
    collectionPictures_1030[currentItem].addEventListener('animationend', function () {
      this.classList.remove('active', direction);
    });
  } else if (widthContainer < breakPoint_1030 &&
    widthContainer <= breakPoint_530) {
    collectionPictures_530[currentItem].classList.add(direction);
    collectionPictures_530[currentItem].addEventListener('animationend', function () {
      this.classList.remove('active', direction);
    });
  }
}

function showItem(direction) {
  changingCount();
  const collectionPictures = document.querySelectorAll('.welcome__picture');
  const collectionPictures_1030 = document.querySelectorAll('.welcome__picture-1030');
  const collectionPictures_530 = document.querySelectorAll('.welcome__picture-530');
  const widthContainer = welcomeCont.offsetWidth;
  if (widthContainer > breakPoint_1030 &&
    widthContainer > breakPoint_530) {
    collectionPictures[currentItem].classList.add('next', direction);
    collectionPictures[currentItem].addEventListener('animationend', function () {
      this.classList.remove('next', direction);
      this.classList.add('active');
      isEnabled = true;
    });
  } else if (widthContainer <= breakPoint_1030 &&
    widthContainer > breakPoint_530) {
    collectionPictures_1030[currentItem].classList.add('next', direction);
    collectionPictures_1030[currentItem].addEventListener('animationend', function () {
      this.classList.remove('next', direction);
      this.classList.add('active');
      isEnabled = true;
    });
  } else if (widthContainer < breakPoint_1030 &&
    widthContainer <= breakPoint_530) {
    collectionPictures_530[currentItem].classList.add('next', direction);
    collectionPictures_530[currentItem].addEventListener('animationend', function () {
      this.classList.remove('next', direction);
      this.classList.add('active');
      isEnabled = true;
    });
  }
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

wrapLeftArrow.addEventListener('click', function () {
  if (isEnabled) {
    indexGraficItem = currentItem;
    previousItem(currentItem);
  }
});

wrapRightArrow.addEventListener('click', function () {
  if (isEnabled) {
    indexGraficItem = currentItem;
    nextItem(currentItem);
  }
});

// ---------------------------- swipe-mouse/touch --------------------------------

const swipedetect = (el) => {

  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let startTime = 0;
  let elapsedTime = 0;

  const threshold = 150;
  const restraint = 100;
  const allowedTime = 300;

  surface.addEventListener('mousedown', function (e) {
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  }, false);

  surface.addEventListener('mouseup', function (e) {
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if ((distX > 0)) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
    }
    e.preventDefault();
  }, false);

  surface.addEventListener('touchstart', function (e) {
    var touchobj = e.changedTouches[0];
    startX = touchobj.pageX;
  }, false);

  surface.addEventListener('touchend', function (e) {
    var touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    if (Math.abs(distX) >= threshold) {
      if ((distX > 0)) {
        if (isEnabled) {
          previousItem(currentItem);
        }
      } else {
        if (isEnabled) {
          nextItem(currentItem);
        }
      }
    }
  }, false);
}

// -------------------------------- grafic-counter-carousel --------------------
var indexGraficItem = 0;
var graficItem = document.querySelectorAll('.pannel-swipe__grafic-item');
graficItem.forEach(function (item, index) {
  item.addEventListener('click', function () {
    if (isEnabled) {
      indexGraficItem = index;
      recoloring_swipe_button(indexGraficItem)
      removingClass();
      item.classList.add('recolor-active');
    }
  })
});

function removingClass(item) {
  graficItem.forEach(function (item) {
    item.classList.remove('recolor-active');
  })
}

function recoloringItemClick() {
  removingClass();
  graficItem[currentItem].classList.add('recolor-active');
}

function recoloring_swipe_button(indexGraficItem) {
  if (indexGraficItem > currentItem) {
    hideItem('to-left');
    currentItem = indexGraficItem;
    showItem('from-right');
  } else if (indexGraficItem < currentItem) {
    hideItem('to-right');
    currentItem = indexGraficItem;
    showItem('from-left');
  } else if (indexGraficItem == currentItem) {

  }
}

// -------------------------------- current-count-number --------------------------

const currentCount = document.querySelector('.pannel-swipe__progress-counter');

function changingCount() {
  currentCount.innerText = '0' + (currentItem + 1);
}

// ------------------------------ side-slide-bar ----------------------------

var welcomeInfo_1920 = document.querySelector('.welcome__version-1920px');
var welcomeInfo_1024 = document.querySelector('.welcome__version-1024px');
const welcomeContRePadding = document.querySelector('.container-repadding-768');

let switch_1024 = true;

function slidingSide() {
  if (switch_1024) {
    welcomeInfo_1920.classList.toggle('welcome__info-hide-1920');
    setTimeout(delayingSlide, 500);
  } else {
    welcomeInfo_1024.classList.toggle('welcome__info-show-1024');
    setTimeout(delayingSlide, 500);
  }
}

function delayingSlide() {
  if (switch_1024) {
    welcomeInfo_1024.classList.toggle('welcome__info-show-1024');
    switch_1024 = false;
    welcomeCont.classList.add('stayte-padding-1')
  } else {
    welcomeInfo_1920.classList.toggle('welcome__info-hide-1920');
    switch_1024 = true;
    welcomeCont.classList.remove('stayte-padding-1')
  }
  if (welcomeCont.offsetWidth <= 419) {
    welcomeCont.classList.toggle('margin419')
    welcomeCont.classList.toggle('padding419')
    welcomeCont.classList.remove('stayte-padding-1')
  }
}

// ---------------------- init surface-swipe -------------------------

const surfaceSwipe_1 = document.getElementById('surface-swipe_1');
swipedetect(surfaceSwipe_1);


// ------------------- gallery hide ------------------------------------
const gallery = document.querySelector('.welcome__wrap-gallery');
const controlPannelSwipe = document.querySelector('.welcome__control-pannel-swipe');

function galleryHiding() {
  if (body.offsetWidth <= 1023) {
    gallery.classList.toggle('gallery-hide')
    controlPannelSwipe.classList.toggle('hide-control-pannel')
  }
}

// --------------------- adaptive height 768 slide ---------------------------

let isSideBar = false;
let heightWelcomeCont;
const breakPoint1023 = 1023;
const breakPoint419 = 419;

function heighting() {
  console.log('heighting');
  // const controlPannel = document.getElementById('controllPanner_1');
  const welcomeCont = document.querySelector('.welcome__container');
  const welcomeSideBar = document.querySelector('.welcome__version-1024px');
  if (breakPoint1023 >= welcomeCont.offsetWidth) {
    if (!isSideBar) {
      heightWelcomeCont = welcomeCont.offsetHeight;
      welcomeCont.style.height = welcomeSideBar.offsetHeight + 'px';
      isSideBar = true;
    } else {
      welcomeCont.style.height = heightWelcomeCont + 'px';
      isSideBar = false;
    }
  }
}

// ----------------------- width line decor -----------------------------
const lineDecor = document.querySelector('.welcome__line-decor');
const welcomSocialNet = document.querySelector('.welcome__social-net-768');
const gallery_768 = document.querySelector('.welcome__wrap-768');
const gallery_420 = document.querySelector('.welcome__gallery-420');

function widtingLineDecor() {
  if (body.offsetWidth <= 1023 && body.offsetWidth > 470) {
    lineDecor.style.width = gallery_768.offsetWidth + 'px';
  } else if (body.offsetWidth <= 470 && body.offsetWidth > 420) {
    lineDecor.style.width = (gallery_420.offsetWidth) + 'px';
  }
}