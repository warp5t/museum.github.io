const initWidthVideoMover = 1440;
const initWidthCardVideo = 452;
const initHeightCardVideo = 254;

const deguBtn = document.getElementById('debug');

function recalcSizeVideoCards() {
  const wrapVideo = document.querySelector('.video__wrap-video');
  const cardVideo = document.querySelectorAll('.video__you-tube');
  let ammountCards = 3;
  const marginRghtCard = parseInt(window.getComputedStyle(cardVideo[0], null).getPropertyValue('margin-right'));
  const arrCardVideo = Array.from(cardVideo)
  const sizeWrapVideo = wrapVideo.offsetWidth;
  console.log(sizeWrapVideo)
  const calcWidth = Math.round((initWidthCardVideo * sizeWrapVideo) / initWidthVideoMover);
  const calcHeight = Math.round((initHeightCardVideo * (calcWidth * 0.98)) / initWidthCardVideo);
  const rawWdhtContainer = (calcWidth * 3) + (2 * marginRghtCard);
  const processedWdthResult = Math.ceil((rawWdhtContainer - sizeWrapVideo) / ammountCards) + 1;
  console.log(processedWdthResult, ' - processedWdth')
  arrCardVideo.forEach((el) => {
    el.style.width = (calcWidth - processedWdthResult) + 'px';
    el.style.height = calcHeight + 'px';
  })
}

// function resizeMainVideo() {
//   const videoPlayer = document.querySelector('.video__player');
//   videoPlayer.classList.add('.height100')
// }

window.addEventListener('resize', () => {
  // resizeMainVideo() 
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