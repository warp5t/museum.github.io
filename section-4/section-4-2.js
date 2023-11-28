
const initWidthVideoMover = 1440;
const initWidthCardVideo = 452;
const initHeightCardVideo = 254;

const deguBtn = document.getElementById('debug');

function recalcSizeVideoCards() {
	const videoMover = document.querySelector('.video__mover');
	const cardVideo = document.querySelectorAll('.video__you-tube');
	const arrCardVideo = Array.from(cardVideo)
	const sizeVideoMover = videoMover.offsetWidth;
	const calcWidth = Math.round((initWidthCardVideo * sizeVideoMover) / initWidthVideoMover);
  const calcHeight = Math.round((initHeightCardVideo * calcWidth) / initWidthCardVideo);
	arrCardVideo.forEach((el) => {
		el.style.width = calcWidth + 'px';
    el.style.height = calcHeight + 'px';
	})
}

window.addEventListener('resize', () => {
	console.log('resize ZZzzZZzz ------')
  setTimeout(() => {
    recalcSizeVideoCards()
  }, 500);
})

window.addEventListener('load', () => {
	console.log('load  ------')
	recalcSizeVideoCards()
})

deguBtn.addEventListener('click', () => {
	console.log('DEBUG')
	recalcSizeVideoCards()
})
