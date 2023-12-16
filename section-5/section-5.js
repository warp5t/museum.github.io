const galleryContainer = document.querySelector('.gallery__container-images');
const galleryImages = document.querySelectorAll('.gallery__image');

// function addTopMargin() {
//   const galleryWrapImage = document.querySelector('.gallery__container-images');
//   const galleryWrapImageTop = galleryWrapImage.getBoundingClientRect().top;
//   const galleryImages = document.querySelectorAll('.gallery__image');
//   let count = 0;
//   galleryImages.forEach((image) => {
//     const imageTop = image.getBoundingClientRect().top;
//     if (imageTop <= galleryWrapImageTop) {
//       if (count === 0 || count === 2) { 
//         if (!image.classList.contains('margin-top')) { 
//           image.classList.add('margin-top');
//         }
//       }
//       count++;
//     } 
//   });
// }

// function checkTopContact() {
//   const galleryWrapImage = document.querySelector('.gallery__container-images');
//   const galleryWrapImageTop = galleryWrapImage.getBoundingClientRect().top;
//   const galleryImages = document.querySelectorAll('.gallery__image');
// galleryImages.forEach((image) => {
//   const imageTop = image.getBoundingClientRect().top;
//   if (imageTop <= galleryWrapImageTop) {
//     if (image.classList.contains('margin-top')) { 
//       console.log('contact-top')
//     }
//   }
// });
// }

// function indexIdImg() {
//   let count = 0;
//   const galleryImages = document.querySelectorAll('.gallery__image');
//   galleryImages.forEach((image) => {
//     image.id = `img_${count}`
//     count++;
//   });
// }
// indexIdImg()




// addTopMargin()
// checkTopContact()

function animationImage() {
  const sectionTwoPosition = galleryContainer.getBoundingClientRect();
  const signalHeight = this.innerHeight;
  let counter = 0;
  galleryImages.forEach((image) => {
    const topImage = image.getBoundingClientRect().top;
    if (topImage <= window.innerHeight) {
      counter++
      if (image.className !== 'unroll') {
        image.classList.add('unroll')
      }
    } else {
      image.classList.remove('unroll')
    }
  })
}

function repositionImg() {
  const arrIndImg = [];
  while (arrIndImg.length !== 15 ) {
    const randNumer = Math.trunc(Math.random() * 16) - 1;  
    const img = document.createElement("img");
    img.classList.add("gallery-img");
    if(!arrIndImg.includes(randNumer)) {
      img.src = `section-5/gallery/galery${randNumer}.jpg`;
      arrIndImg.push(randNumer)
    }
    img.alt = `image`;
    galleryContainer.append(img); 
  }
}

window.addEventListener('scroll', function () {
  animationImage()
});

window.addEventListener('load', function () {
  // addTopMargin()
  // animationImage()
});

// function calcHeight() {
//   let summaryHeight = 0;
//   const galleryImages = document.querySelectorAll('.gallery__image');
//   galleryImages.forEach((el) => {
//     summaryHeight += el.offsetHeight;
//     console.log(el.offsetHeight)
//   })
//   console.log(summaryHeight, ' - summaryHeight')
// }

