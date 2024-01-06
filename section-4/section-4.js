// -------------------------------- custom player ------------------------------
let videoPlayer = document.getElementById('video');
let controllPannel = document.querySelector('.video__controll-pannel');
let playButton = document.querySelector('.controll-pannel__play-wrap');
let playIcon = document.querySelector('.controll-pannel__play');

videoPlayer.controls = false;

// ---                       --- play/pause ---                        ---
let playIconBig = document.querySelector('.video__circle-icon ');
let playPermission = false;
let bckspPermission;

playIconBig.onclick = function () {
  bckspPermission = true;
  playPausing()
}

videoPlayer.onclick = function () {
  bckspPermission = true;
  playPausing()
}

playButton.onclick = function () {
  bckspPermission = true;
  playPausing()
}

function playPausing() {
  if (playPermission == false) {
    videoPlayer.play()
    playIcon.style.zIndex = 8;
    playIconBig.style.display = 'none';
    playPermission = true;
  } else {
    videoPlayer.pause();
    playIcon.style.zIndex = 10;
    playIconBig.style.display = 'flex';
    playPermission = false;
  }
  setTimeout(function () {
    bckspPermission = false;
  }, 30000);
}

// ---                       --- show/hide control pannel ---                        ---

let switcherHide = false;
let mouseover = false;

function pannelHide() {
  if (mouseover == false) {
    controllPannel.style.bottom = '-85px';
  }
  switcherHide = false;
}

videoPlayer.addEventListener('mousemove', function () {
  switcherHide = true;
  if (switcherHide == true) {
    controllPannel.style.bottom = '0px';
    setTimeout(pannelHide, 5000)
  }
})

controllPannel.addEventListener('mouseover', function () {
  mouseover = true;
  controllPannel.style.bottom = '0px';
})

controllPannel.addEventListener('mouseout', function () {
  mouseover = false;
  setTimeout(pannelHide, 5000)
})

// ---                       --- sound ---                        ---

let soundButton = document.querySelector('.controll-pannel__wrap-volume');
let soundIcon = document.querySelector('.controll-pannel__volume');
let scaleVolume = document.querySelector('.controll-pannel__progress-volume');
let progessVolume = document.querySelector('.controll-pannel__passed_volume');

let permissionVolume = false;
let widthProgress, volumeLevel;

function widthProgressing(progress) {
  if (permissionVolume) {
    widthProgress = progress;
    progessVolume.style.width = progress + 'px';
  }
}

function voluming() {
  if (permissionVolume) {
    volumeLevel = widthProgress / (scaleVolume.offsetWidth - 1);
    videoPlayer.volume = volumeLevel;
    if (volumeLevel <= 0.05) {
      videoPlayer.muted = true;
      soundIcon.style.zIndex = 8;
    } else if (volumeLevel > 0.05) {
      videoPlayer.muted = false;
      soundIcon.style.zIndex = 10;
    }
  }
}

scaleVolume.addEventListener('mousedown', function (e) {
  permissionVolume = true;
  widthProgressing(e.layerX);
  voluming();
});

scaleVolume.addEventListener('mousemove', function (e) {
  widthProgressing(e.layerX);
  voluming();
});

scaleVolume.addEventListener('mouseup', function (e) {
  permissionVolume = false;
});

let soundPermission = false;

soundButton.onclick = function () {
  soundToggling()
}

function soundToggling() {
  if (soundPermission) {
    soundIcon.style.zIndex = 10;
    videoPlayer.muted = false;
    soundPermission = false;
    progessVolume.style.width = ((scaleVolume.offsetWidth - 1) * videoPlayer.volume) + 'px';
  } else {
    soundIcon.style.zIndex = 8;
    videoPlayer.muted = true;
    soundPermission = true;
    progessVolume.style.width = '0px';
  }
}

// ---                       --- fullscreen mode ---                        ---

let playerWrap = document.querySelector('.video__player-wrap');
let fullscreenButton = document.querySelector('.controll-pannel__wrap-screen');
let exitFullscreenBtn = document.querySelector('.controll-pannel__full-screen-exit');

function getFullscreenElement() {
  return document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullscreenElement ||
    document.msFullscreenElement;
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
    exitFullscreenBtn.style.zIndex = 7;
  } else {
    playerWrap.requestFullscreen();
    window.scrollTo(0, 1);
    exitFullscreenBtn.style.zIndex = 11;
  }
}

fullscreenButton.addEventListener('click', function () {
  toggleFullscreen();
  console.log(scaleVideo.offsetWidth);
});

videoPlayer.addEventListener('dblclick', function () {
  toggleFullscreen();
});

// ---                       --- video progress control ---                        ---

let scaleVideo = document.querySelectorAll('.controll-pannel__progress-time');
let progressVideo = document.querySelectorAll('.controll-pannel__passed-time');

let permissionVideo = false;
let pastTime_0,pastTime_1;

// const arrScaleVideo = Array.from(scaleVideo);
// const arrProgressVideo= Array.from(progressVideo);

// arrScaleVideo.forEach((item) => {
//   item.addEventListener('mousedown', function (e) {
//     permissionVideo = true;
//     videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo.offsetWidth;
//     progressVideo.style.width = e.layerX + 'px';
//   })
// })

scaleVideo[0].addEventListener('mousedown', function (e) {
  permissionVideo = true;
  videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo[0].offsetWidth;
  progressVideo[0].style.width = e.layerX + 'px';
})
scaleVideo[1].addEventListener('mousedown', function (e) {
  permissionVideo = true;
  videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo[0].offsetWidth;
  progressVideo[1].style.width = e.layerX + 'px';
})

// arrProgressVideo.forEach((item) => {
//   item.addEventListener('mousemove', function (e) {
//     if (permissionVideo) {
//       videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo.offsetWidth;
//       progressVideo.style.width = e.layerX + 'px';
//       if (videoPlayer.paused) {
//         playIcon.style.zIndex = 10;
//       } else {
//         playIcon.style.zIndex = 8;
//       }
//       playPermission = false;
//     }
//   })
// })

scaleVideo[0].addEventListener('mousemove', function (e) {
  if (permissionVideo) {
    videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo[0].offsetWidth;
    progressVideo[0].style.width = e.layerX + 'px';
    if (videoPlayer.paused) {
      playIcon.style.zIndex = 10;
    } else {
      playIcon.style.zIndex = 8;
    }
    playPermission = false;
  }
})
scaleVideo[1].addEventListener('mousemove', function (e) {
  if (permissionVideo) {
    videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo[1].offsetWidth;
    progressVideo[1].style.width = e.layerX + 'px';
    if (videoPlayer.paused) {
      playIcon.style.zIndex = 10;
    } else {
      playIcon.style.zIndex = 8;
    }
    playPermission = false;
  }
})

// arrScaleVideo.forEach((item) => {
//   item.addEventListener('mouseup', function () {
//     permissionVideo = false;
//   })
// })

scaleVideo[0].addEventListener('mouseup', function () {
  permissionVideo = false;
})
scaleVideo[1].addEventListener('mouseup', function () {
  permissionVideo = false;
})

videoPlayer.addEventListener('timeupdate', function () {

  pastTime_0 = (videoPlayer.currentTime * scaleVideo[0].offsetWidth) / videoPlayer.duration;
  pastTime_1 = (videoPlayer.currentTime * scaleVideo[1].offsetWidth) / videoPlayer.duration;
  
  progressVideo[0].style.width = pastTime_0 + 'px';
  progressVideo[1].style.width = pastTime_1 + 'px';

  if (videoPlayer.ended) {
    progressVideo[0].style.width = '0px';
    progressVideo[1].style.width = '0px';
    playIcon.style.zIndex = 10;
    playIconBig.style.display = 'flex';
  }
})

// ---                       --- keyboard control player ---                        ---

let displaySpeed = document.querySelector('.video__speed-cooficent');
const sectionVideo = document.querySelector('.video__player');
let shift, left, right, spc, mute, fllscr;
let speedCooficent = 1;
let codeCommand;

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('keydown', function (e) {
  if (isElementInViewport(sectionVideo)) {
  if (e.key == 'Shift') {
    shift = true;
  }
  if (e.key == '>') {
    right = true;
  }
  if (e.key == '<') {
    left = true;
  }
  if (e.key == ' ') {
    spc = true;
  }
  if (e.key == 'm') {
    mute = true;
  }
  if (e.key == 'f') {
    fllscr = true;
  }
  comboValidating()
  cooficentSpeedDrawing()
}
});


window.addEventListener('keyup', function (e) {
  if (isElementInViewport(sectionVideo)) {
  if (e.key == 'Shift') {
    shift = false;
  }
  if (e.key == '>') {
    right = false;
  }
  if (e.key == '<') {
    left = false;
  }
  if (e.key == ' ') {
    spc = false;
  }
  if (e.key == 'm') {
    mute = false;
  }
  if (e.key == 'f') {
    fllscr = false;
  }
}
});

function comboValidating() {
  if (shift == true && right == true) {
    if (speedCooficent < 3.5 && speedCooficent >= 1) {
      speedCooficent += 0.5;
      videoPlayer.playbackRate = speedCooficent;
    } else if (speedCooficent >= 0.2 && speedCooficent <= 1) {
      speedCooficent += 0.2;
      speedCooficent = Number(speedCooficent.toFixed(1));
      videoPlayer.playbackRate = speedCooficent;
    }
    console.log(speedCooficent);
  } else if (shift == true && left == true) {
    if (speedCooficent > 1) {
      speedCooficent -= 0.5;
      videoPlayer.playbackRate = speedCooficent;
    } else if (speedCooficent > 0.25 && speedCooficent <= 1) {
      speedCooficent -= 0.2;
      speedCooficent = Number(speedCooficent.toFixed(1));
      videoPlayer.playbackRate = speedCooficent;
    }
    console.log(speedCooficent);
  } else if (spc == true) {
    if (bckspPermission) {
      playPausing()
    }
  } else if (mute == true) {
    soundToggling()
  } else if (fllscr == true) {
    toggleFullscreen()
  }
}

function iconRemoving() {
  displaySpeed.style.display = 'none';
}

function cooficentSpeedDrawing() {
  displaySpeed.style.display = 'flex';
  displaySpeed.innerText = 'x' + speedCooficent;
  setTimeout(iconRemoving, 3000);
}

// ---                 --- postering main video ---                   -----
let videoContainer = {
  videoSrc_1: "section-4/video0.mp4",
  poster_1: "section-4/poster1.jpg",
  videoSrc_2: "section-4/video1.mp4",
  poster_2: "section-4/poster2.jpg",
  videoSrc_3: "section-4/video2.mp4",
  poster_3: "section-4/poster3.jpg",
  videoSrc_4: "section-4/video3.mp4",
  poster_4: "section-4/poster4.jpg",
  videoSrc_5: "section-4/video4.mp4",
  poster_5: "section-4/poster5.jpg"
}

videoPlayer.src = videoContainer.videoSrc_2;
videoPlayer.poster = videoContainer.poster_2;

function mainVideoChanging(dot) {
  if (dot == 0) {
    videoPlayer.src = videoContainer.videoSrc_2;
    videoPlayer.poster = videoContainer.poster_2;
  } else if (dot == 1) {
    videoPlayer.src = videoContainer.videoSrc_3;
    videoPlayer.poster = videoContainer.poster_3;
  } else if (dot == 2) {
    videoPlayer.src = videoContainer.videoSrc_4;
    videoPlayer.poster = videoContainer.poster_4;
  } else if (dot == 3) {
    videoPlayer.src = videoContainer.videoSrc_5;
    videoPlayer.poster = videoContainer.poster_5;
  } else if (dot == 4) {
    videoPlayer.src = videoContainer.videoSrc_1;
    videoPlayer.poster = videoContainer.poster_1;
  }
}

// ---                 --- carousel video  ---                        ---

let videoYouTube = document.querySelectorAll('.video__you-tube');
let leftButton = document.querySelector('.video__darrows-L');
let rightButton = document.querySelector('.video__darrows-R');
let videoMover = document.querySelector('.video__mover');
let videoList = document.querySelector('.video__list-video');
let dotItems = document.querySelectorAll('.video__dot');
let dinamicItemVideo = document.querySelector('.video__list-video').getElementsByClassName("video__you-tube");

let counterSlide = 0;
let marginCommon = parseInt(window.getComputedStyle(videoYouTube[0], "").marginRight);
let direction, sizeStep, result, permissionButton = true;
let timeDelayMaj = 1000,
  timeDelayMin = 5;

let switchIndexDot = 0;
let differentStepDot;
let arrItems = [];

function stepCalculating() {
  sizeStep = ((videoYouTube[0].offsetWidth + marginCommon));
  console.log(videoYouTube[0].offsetWidth, ' - videoYouTube[1].offsetWidth\n', marginCommon, ' - marginCommon');
}
stepCalculating();

window.addEventListener('resize', () => {
  videoYouTube = document.querySelectorAll('.video__you-tube');
  marginCommon = parseInt(window.getComputedStyle(videoYouTube[0], "").marginRight);
  stepCalculating();
});

window.addEventListener('load', () => {
  videoYouTube = document.querySelectorAll('.video__you-tube');
  marginCommon = parseInt(window.getComputedStyle(videoYouTube[0], "").marginRight);
  stepCalculating();
});


function dotRecoloring() {
  if (direction == 'right') {
    switchIndexDot++;
    if (switchIndexDot > 4) {
      switchIndexDot = 0;
      dotItems[switchIndexDot].style.backgroundColor = '#333333';
      dotItems[4].style.backgroundColor = '#999999';
    } else if (switchIndexDot == 0) {
      dotItems[switchIndexDot].style.backgroundColor = '#333333';
      dotItems[4].style.backgroundColor = '#999999';
    } else {
      dotItems[switchIndexDot].style.backgroundColor = '#333333';
      dotItems[switchIndexDot - 1].style.backgroundColor = '#999999';
    }
  } else if (direction == 'left') {
    switchIndexDot--;
    if (switchIndexDot < 0) {
      switchIndexDot = 4;
      dotItems[switchIndexDot].style.backgroundColor = '#333333';
      dotItems[0].style.backgroundColor = '#999999';
    } else if (switchIndexDot == 0) {
      dotItems[switchIndexDot].style.backgroundColor = '#333333';
      dotItems[1].style.backgroundColor = '#999999';
    } else {
      dotItems[switchIndexDot].style.backgroundColor = '#333333';
      dotItems[switchIndexDot + 1].style.backgroundColor = '#999999';
    }
  } else {
    dotItems[switchIndexDot].style.backgroundColor = '#333333';
  }
  mainVideoChanging(switchIndexDot);
}
dotRecoloring();

// ----------------------------- buttons left right ------------------------------------

rightButton.onclick = function () {
  direction = 'right';
  if (permissionButton) {
    dotRecoloring();
    stepRighting(1);
    allStopping();
    permissing();
  }
}

leftButton.onclick = function () {
  direction = 'left';
  if (permissionButton) {
    dotRecoloring();
    stepLefting(-1);
    allStopping();
    permissing();
  }
}

function permissing() {
  permissionButton = false;
  setTimeout(function () {
    permissionButton = true
  }, timeDelayMaj + 500);
}

// ------------------------------ dot click ------------------------------------

dotItems.forEach(function (item, index) {
  item.addEventListener('click', function () {
    if (permissionButton == true) {
      dotItems[switchIndexDot].style.backgroundColor = '#999999';
      item.style.backgroundColor = '#333333';
      differentStepDot = index - switchIndexDot;
      if (differentStepDot == 0) {

      } else if (differentStepDot > 0) {
        stepRighting(differentStepDot)
      } else if (differentStepDot < 0) {
        stepLefting(differentStepDot)
      }
      console.log('975', differentStepDot);
      switchIndexDot = index;
      mainVideoChanging(index);
      allStopping();
      permissing();
    }
  })
})

// ----------------------- right move scenario --------------------------------

function appending(counterSlide) {
  while (counterSlide > 0) {
    videoList.append(dinamicItemVideo[0]);
    counterSlide--;
  }
}

function firstRightActing() {
  for (let i = 0; dinamicItemVideo.length > i; i++) {
    dinamicItemVideo[i].style.transitionDuration = timeDelayMaj + 'ms';
    dinamicItemVideo[i].style.left = 'unset';
    dinamicItemVideo[i].style.right = '0px';
  }
}

function finalRightActing() {
  for (let i = 0; dinamicItemVideo.length > i; i++) {
    dinamicItemVideo[i].style.transitionDuration = 'unset';
    dinamicItemVideo[i].style.left = '0px';
    dinamicItemVideo[i].style.right = 'unset';
  }
}

function stepRighting(countStep) {
  stepCalculating()
  counterSlide = countStep;
  result = sizeStep * counterSlide;
  firstRightActing();
  setTimeout(() => {
    for (let i = 0; dinamicItemVideo.length > i; i++) {
      dinamicItemVideo[i].style.right = result + 'px';
    }
  }, timeDelayMin);
  setTimeout(() => {
    finalRightActing();
    appending(counterSlide);
  }, timeDelayMaj);
}

// ----------------------- left move scenario --------------------------------

function stepLefting(countStep) {
  stepCalculating()
  counterSlide = countStep;
  result = sizeStep * counterSlide;
  for (let i = 0; dinamicItemVideo.length > i; i++) {
    dinamicItemVideo[i].style.transitionDuration = 'unset';
    dinamicItemVideo[i].style.left = result + 'px';
    dinamicItemVideo[i].style.right = 'unset';
  }
  while (counterSlide != 0) {
    videoList.prepend(dinamicItemVideo[dinamicItemVideo.length - 1]);
    counterSlide++;
  }
  setTimeout(() => {
    for (let i = 0; dinamicItemVideo.length > i; i++) {
      dinamicItemVideo[i].style.transitionDuration = timeDelayMaj + 'ms';
    }
    for (let i = 0; dinamicItemVideo.length > i; i++) {
      dinamicItemVideo[i].style.left = '0px';
    }
    counterSlide = 0;
  }, timeDelayMin);
}