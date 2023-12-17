const galleryContainer = document.querySelector('.gallery__container-images');
const galleryImages = document.querySelectorAll('.gallery__image');

// function indexIdImg() {
//   let count = 0;
//   const galleryImages = document.querySelectorAll('.gallery__image');
//   galleryImages.forEach((image) => {
//     image.id = `img_${count}`
//     count++;
//   });
// }
// indexIdImg()

function animationImage() {
  const galleryImages = document.querySelectorAll('.gallery__image');
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

// function repositionImg() {
//   const galleryContainerImg = document.querySelector('.gallery__container-images');
//   galleryContainerImg.innerHTML = '';
//   const arrIndImg = [];
//   while (arrIndImg.length !== 15 ) {
//     const randNumer = Math.trunc(Math.random() * 15) + 1;  
//     if(!arrIndImg.includes(randNumer)) {
//       const img = document.createElement('img');
//       img.classList.add('gallery__image');
//       img.src = `section-5/gallery/galery${randNumer}.jpg`;
//       arrIndImg.push(randNumer)
//       img.alt = `image`;
//       if(arrIndImg.length % 5 === 1) {
//         var galleryColumn = document.createElement('div');
//         galleryColumn.classList.add('gallery__column')
//         galleryContainerImg.append(galleryColumn)
//       }
//       galleryColumn.append(img); 
//     }
//   }
//   console.log(arrIndImg)
//   console.log(window.innerWidth)
// }
// repositionImg()

function repositionImg() {
  const galleryContainerImg = document.querySelector('.gallery__container-images');
  galleryContainerImg.innerHTML = '';
  const arrIndImg = [];
  while (arrIndImg.length !== 15 ) {
    const randNumer = Math.trunc(Math.random() * 15) + 1;  
    if(!arrIndImg.includes(randNumer)) {
      const img = document.createElement('img');
      img.classList.add('gallery__image');
      img.src = `section-5/gallery/galery${randNumer}.jpg`;
      arrIndImg.push(randNumer)
      img.alt = `image`;
      if(window.innerWidth > 768) {
        if(arrIndImg.length % 5 === 1) {
          var galleryColumn = document.createElement('div');
          galleryColumn.classList.add('gallery__column')
          galleryContainerImg.append(galleryColumn)
        }
      } else if(window.innerWidth <= 768) {
        console.log('less 768px')
        if(arrIndImg.length === 0 || arrIndImg.length % 8 === 1) {
          var galleryColumn = document.createElement('div');
          galleryColumn.classList.add('gallery__column')
          galleryContainerImg.append(galleryColumn)
        }
      }
      galleryColumn.append(img); 
    }
  }
  console.log(arrIndImg)
  console.log(window.innerWidth)
}
repositionImg()

window.addEventListener('scroll', function () {
  animationImage()
});

window.addEventListener('load', function () {
  animationImage()
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

