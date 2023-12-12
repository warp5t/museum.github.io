console.log('section-5')

var galleryContainer = document.querySelector('.gallery__container-images');
const galleryImages = document.querySelectorAll('.gallery__image');

window.addEventListener('scroll', function() {
    const sectionTwoPosition = galleryContainer.getBoundingClientRect();
    const signalHeight = this.innerHeight;
    galleryImages.forEach((image, index) => {
      const topImage = image.getBoundingClientRect().top;
      if (topImage <= window.innerHeight) {
        console.log('CONTACT')
        if(image.className !== 'unroll') {
          image.classList.add('unroll')
        }
      } else {
        image.classList.remove('unroll')
      }
    })
    if (sectionTwoPosition.top < window.innerHeight ) {
        console.log('Section two is in view');
    }
});


function addTopMargin() {
  const galleryWrapImage = document.querySelector('.gallery__container-images');
  const galleryWrapImageTop = galleryWrapImage.getBoundingClientRect().top;
  const galleryImages = document.querySelectorAll('.gallery__image');
  let count = 0;
  galleryImages.forEach((image, index) => {
    const imageTop = image.getBoundingClientRect().top;
    if (imageTop <= galleryWrapImageTop) {
      count++;
      if(count === 1 || count === 3) {
        image.classList.add('margin-top');
      }
      console.log(index, ' - index')
      console.log(count, ' - count')
    }
  });
}

addTopMargin()