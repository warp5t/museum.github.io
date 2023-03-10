// ------------------------ recolor arrows -------------------------------
let wrapLeftArrow = document.getElementById("wrap-left");
let wrapRightArrow = document.getElementById("wrap-right");

let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");

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
let collectionPictures = document.querySelectorAll('.welcome__picture');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + collectionPictures.length) % collectionPictures.length;
	console.log({
		currentItem
	});
	recoloringItemClick();
}

function hideItem(direction) {
	isEnabled = false;
	changingCount();
	collectionPictures[currentItem].classList.add(direction);
	collectionPictures[currentItem].addEventListener('animationend', function () {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	changingCount();
	collectionPictures[currentItem].classList.add('next', direction);
	collectionPictures[currentItem].addEventListener('animationend', function () {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
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

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

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

var surfaceSwipe_0 = document.getElementById('surface-swipe_0');
swipedetect(surfaceSwipe_0);

// -------------------------------- grafic-counter-carousel --------------------
var indexGraficItem = 0;
var graficItem = document.querySelectorAll('.pannel-swipe__grafic-item');
graficItem.forEach(function (item, index) {
	item.addEventListener('click', function () {
		//console.log({item}, {index});
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

let currentCount = document.querySelector('.pannel-swipe__progress-counter');

function changingCount() {
	currentCount.innerText = '0' + (currentItem + 1);
//	console.log('currentItem : ', currentItem);
}

// ------------------------------ side-slide-bar ----------------------------

var welcomeInfo_1920 = document.querySelector('.welcome__version-1920px');
var welcomeInfo_1024 = document.querySelector('.welcome__version-1024px');
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
	} else {
		welcomeInfo_1920.classList.toggle('welcome__info-hide-1920');
		switch_1024 = true;
	}
}

// ---------------------- resizing surface-swipe -------------------------
let gallerySize = document.querySelector('.welcome__gallery');
let body = document.getElementById('body');
let surfaceSwipe_1 = document.getElementById('surface-swipe_1');

function resizingSurfaceSwipe() {
	setTimeout(function () {
		if(body.offsetWidth >= 894){
			surfaceSwipe_0.style.width = gallerySize.offsetWidth + 'px';
		  surfaceSwipe_0.style.height = gallerySize.offsetHeight + 'px';
		//  console.log('resizing');
		 // console.log('|     |');
		}
		else if(body.offsetWidth <= 893){
			swipedetect(surfaceSwipe_1);
		}
	}, 1000);
}

(function wrapResizing(){
	resizingSurfaceSwipe();
}());

window.addEventListener('resize', resizingSurfaceSwipe);

// ------------------- gallery hide ------------------------------------
let gallery = document.querySelector('.welcome__wrap-gallery');
let controlPannelSwipe = document.querySelector('.welcome__control-pannel-swipe');
function galleryHiding(){
	if(body.offsetWidth <= 1024){
		gallery.classList.toggle('gallery-hide')
		controlPannelSwipe.classList.toggle('hide-control-pannel')
	}
}

// --------------------- adaptive height 768 slide ---------------------------

let section_1_768 = document.querySelector('.welcome__container');
let switcher_768 = true;
let breakPoint_0 = {
	 width: 893,
	 height: 949,
};
let breakPoint_1 = {
	width: 470,
	height: 593,
};
let breakPoint_2 = {
	width: 420,
	height: 543,
};
function heighting_768(){
	if(section_1_768.offsetWidth <= breakPoint_0.width && section_1_768.offsetWidth > breakPoint_1.width && switcher_768 == true){
		 let difference = (breakPoint_0.width - section_1_768.offsetWidth) / 2;
		 section_1_768.style.height = breakPoint_0.height + 'px';
		 section_1_768.style.height = (breakPoint_0.height - difference)+ 'px';
		 switcher_768 = false;
	}
	 else if(section_1_768.offsetWidth <= breakPoint_1.width && section_1_768.offsetWidth > breakPoint_2.width && switcher_768 == true){
		let difference = (breakPoint_1.width - section_1_768.offsetWidth) / 2;
		 section_1_768.style.height = breakPoint_1.height + 'px';
		 section_1_768.style.height = (breakPoint_1.height - difference)+ 'px';
		 switcher_768 = false;
	}
	else if(section_1_768.offsetWidth <= breakPoint_2.width && switcher_768 == true){
		let difference = (breakPoint_2.width - section_1_768.offsetWidth) / 2;
		 section_1_768.style.height = breakPoint_2.height + 'px';
		 section_1_768.style.height = (breakPoint_2.height - difference)+ 'px';
		 switcher_768 = false;
	}
	else if(switcher_768 == false){
		section_1_768.style.height = 'auto';
		switcher_768 = true;
	}
}
//console.log(section_1_768.offsetHeight);

// ----------------------- width line decor -----------------------------
let lineDecor = document.querySelector('.welcome__line-decor');
let gallery_768 = document.querySelector('.welcome__wrap-768');
let gallery_420 = document.querySelector('.welcome__gallery-420');

function widtingLineDecor(){
	if(body.offsetWidth <= 1024 && body.offsetWidth > 470){
		lineDecor.style.width = gallery_768.offsetWidth + 'px';
	}
	else if(body.offsetWidth <= 470){
		lineDecor.style.width = (gallery_420.offsetWidth) + 'px';
	}
}