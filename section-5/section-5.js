console.log('section-5')

// // Get the section element
// var sectionTwo = document.querySelector('.section_two');

// // Add a scroll event listener to the window
// window.addEventListener('scroll', function() {
//     // Get the position of the section relative to the viewport
//     var sectionTwoPosition = sectionTwo.getBoundingClientRect();

//     // Check if the top of the section is within the viewport
//     if (sectionTwoPosition.top < window.innerHeight && sectionTwoPosition.bottom >= 0) {
//         // The section is in the viewport, so you can start your desired action here
//         console.log('Section two is in view');
//     }
// });


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