const initWidthVideoMover = 1440;
const initWidthCardVideo = 452;
const initHeightCardVideo = 254;
const widthCardVideo_768 = 354;
const heightCardVideo_768 = 199;
const widthWrapVideo_768 = 728;

function recalcSizeVideoCards() {
  const videoModule = document.querySelector('.video');
  const widthVideoModule = videoModule.offsetWidth;
  const wrapVideo = document.querySelector('.video__wrap-video');
  const cardVideo = document.querySelectorAll('.video__you-tube');
  const marginRghtCard = parseInt(window.getComputedStyle(cardVideo[0], null).getPropertyValue('margin-right'));
  const arrCardVideo = Array.from(cardVideo)
  const sizeWrapVideo = wrapVideo.offsetWidth;
  let processedWdthResult; 
  let calcWidth, calcHeight, ammountCards;
  if (widthVideoModule > 768) {
    ammountCards = 3;
    calcWidth = Math.round((initWidthCardVideo * sizeWrapVideo) / initWidthVideoMover);
    calcHeight = Math.round((initHeightCardVideo * (calcWidth * 0.98)) / initWidthCardVideo);
    var rawWdhtContainer = (calcWidth * 3) + (2 * marginRghtCard);
    processedWdthResult = Math.ceil((rawWdhtContainer - sizeWrapVideo) / ammountCards) + 1;
  } else if (widthVideoModule <= 768) {
    ammountCards = 2;
    calcWidth = Math.round((widthCardVideo_768 * sizeWrapVideo) / widthWrapVideo_768);
    calcHeight = Math.round((heightCardVideo_768 * calcWidth) / widthCardVideo_768);
    processedWdthResult = 0;
  } 
  arrCardVideo.forEach((el) => {
    el.style.width = (calcWidth - processedWdthResult) + 'px';
    el.style.height = calcHeight + 'px';
  })
  videoYouTube = document.querySelectorAll('.video__you-tube');
}

window.addEventListener('resize', () => {
  console.log('resize ZZzzZZzz ------')
  setTimeout(() => {
    recalcSizeVideoCards()
  }, 500);
})

window.addEventListener('load', () => {
  recalcSizeVideoCards()
})
