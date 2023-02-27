let button = document.getElementById('button');
let playListArr = ['Qifmo4r1nFY', '0UUK4VDblXM', 'yx-HYerClEA'];

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '650',
    width: '100%',
    videoId: 'zp1BXPX8jcU',
    playerVars: {
      'playsinline': 1,
      'controls': 0,
      'modestbranding': 1,
      'showinfo': 0,
      'autohide': 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  // event.target.loadPlaylist(playlist,index,startSeconds);
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo() {
  player.stopVideo();
}
// let index = 0;
// button.onclick = function(){
// player.seekTo(300,true);
//player.loadVideoById("0UUK4VDblXM", 300, "large")
//  player.cuePlaylist(playListArr,index,0);
//    player.playVideo();
//    index++;
//   console.log('current time',player.getCurrentTime());

// }

// -------------------------------- custom player ------------------------------
let videoPlayer = document.getElementById('video');
let controllPannel = document.querySelector('.video__controll-pannel');
let playButton = document.querySelector('.controll-pannel__play-wrap');
let playIcon = document.querySelector('.controll-pannel__play');


videoPlayer.controls = false;

// video.addEventListener('durationchange',function(e){
//   console.log(e);
// })
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

// scaleVolume.addEventListener('mouseout',function(e){
//   permissionVolume = false;
// })

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
    window.scrollTo(0,1);
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

let scaleVideo = document.querySelector('.controll-pannel__progress-time');
let progressVideo = document.querySelector('.controll-pannel__passed-time');

let permissionVideo = false;
let pastTime;


scaleVideo.addEventListener('mousedown', function (e) {
  permissionVideo = true;
  videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo.offsetWidth;
  progressVideo.style.width = e.layerX + 'px';
})

scaleVideo.addEventListener('mousemove', function (e) {
  if (permissionVideo) {
    videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo.offsetWidth;
    progressVideo.style.width = e.layerX + 'px';
    if (videoPlayer.paused) {
      playIcon.style.zIndex = 10;
    } else {
      playIcon.style.zIndex = 8;
    }
    playPermission = false;
  }
})

scaleVideo.addEventListener('mouseup', function () {
  permissionVideo = false;
})

videoPlayer.addEventListener('timeupdate', function () {

  pastTime = (videoPlayer.currentTime * scaleVideo.offsetWidth) / videoPlayer.duration;
  progressVideo.style.width = pastTime + 'px';

  if (videoPlayer.ended) {
    progressVideo.style.width = '0px';
    playIcon.style.zIndex = 10;
    playIconBig.style.display = 'flex';
  }
})

// ---                       --- keyboard control player ---                        ---

let displaySpeed = document.querySelector('.video__speed-cooficent');
let shift, left, right, bcksp, mute, fllscr;
let speedCooficent = 1;
let codeCommand;

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 16) {
    shift = true;
  }
  if (e.keyCode == 190) {
    right = true;
  }
  if (e.keyCode == 188) {
    left = true;
  }
  if (e.keyCode == 32) {
    bcksp = true;
  }
  if (e.keyCode == 77) {
    mute = true;
  }
  if (e.keyCode == 32) {
    bcksp = true;
  }
  if (e.keyCode == 70) {
    fllscr = true;
  }
  comboValidating()
  cooficentSpeedDrawing()
});


window.addEventListener('keyup', function (e) {
  if (e.keyCode == 16) {
    shift = false;
  }
  if (e.keyCode == 190) {
    right = false;
  }
  if (e.keyCode == 188) {
    left = false;
  }
  if (e.keyCode == 32) {
    bcksp = false;
  }
  if (e.keyCode == 77) {
    mute = false;
  }
  if (e.keyCode == 32) {
    bcksp = false;
  }
  if (e.keyCode == 70) {
    fllscr = false;
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
  } else if (bcksp == true) {
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

// ---                 --- carousel video  ---                        ---

let videoYouTube = document.querySelectorAll('.video__you-tube');
let leftButton = document.querySelector('.video__darrows-L');
let rightButton = document.querySelector('.video__darrows-R');
let videoMover = document.querySelector('.video__mover');
let videoList = document.querySelector('.video__list-video');
let dotItems = document.querySelectorAll('.video__dot');
let dinamicItemVideo = document.querySelector('.video__list-video').getElementsByClassName("video__you-tube");

let indexVideo = 0;

videoYouTube[0].style.backgroundColor = 'rgb(96, 191, 0)';

let counterSlide = 0;
let marginCommon = parseInt(window.getComputedStyle(videoYouTube[0], "").marginRight);
let direction, sizeStep, result, permissionButton = true;
let timeDelayMaj = 1000, timeDelayMin = 5;

let buttonCode;
let dotCode;
let switchIndexDot = 0;
let differentStepDot;
let indexDinamic = 0;
let indexDotClick;
let arrItems = [];

window.addEventListener('resize', () => {
  marginCommon = parseInt(window.getComputedStyle(videoYouTube[0], "").marginRight);
  stepCalculating();
});

function stepCalculating() {
  sizeStep = ((videoYouTube[1].offsetWidth + marginCommon));
}
stepCalculating();

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
}
dotRecoloring();

// ----------------------------- buttons left right ------------------------------------

rightButton.onclick = function() {
  direction = 'right';
  if(permissionButton){
  dotRecoloring();
  oneStepRighting();
  permissing();
  }
}

leftButton.onclick = function() {
  direction = 'left';
  if(permissionButton){
  dotRecoloring();
  oneStepLefting()
  permissing();
  }
}

function permissing(){
  permissionButton = false;
  setTimeout(function(){permissionButton = true},timeDelayMaj + 500);
}

// ------------------------------ dot click ------------------------------------

dotItems.forEach(function(item,index){
let dotIndex;
  item.addEventListener('click',function(){
   if(permissionButton == true){
   dotItems[switchIndexDot].style.backgroundColor = '#999999';
   item.style.backgroundColor = '#333333';
   differentStepDot = index - switchIndexDot;
   if(differentStepDot == 0){

   }
   else if(differentStepDot == 1){
    oneStepRighting();
   }
   else if(differentStepDot == 2){
    twoStepRighting();
   }
   else if(differentStepDot == 3){
    threeStepRighting();
   }
   else if(differentStepDot == 4){
    fourStepRighting();
   }
   else if(differentStepDot == -1){
    oneStepLefting();
   }
   else if(differentStepDot == -2){
    twoStepLefting();
   }
   else if(differentStepDot == -3 || differentStepDot == -4){
    threeFourStepLefting(differentStepDot);
   }
   console.log('975',differentStepDot);
   switchIndexDot = index;
   permissing();
   }
   })
   })

// ----------------------- right move scenario --------------------------------

   function appending(counterSlide){
    while(counterSlide > 0){
      videoList.append(dinamicItemVideo[0]);
      counterSlide--;
      }
   }

   function firstRightActing(){
    for(let i = 0; dinamicItemVideo.length > i; i++){
      dinamicItemVideo[i].style.transitionDuration = timeDelayMaj + 'ms';
      dinamicItemVideo[i].style.left = 'unset';
      dinamicItemVideo[i].style.right = '0px';
    }
   }

  function finalRightActing(){
    for(let i = 0; dinamicItemVideo.length > i; i++){
      dinamicItemVideo[i].style.transitionDuration = 'unset';
      dinamicItemVideo[i].style.left = '0px';
      dinamicItemVideo[i].style.right = 'unset';
    }
   }

   function oneStepRighting(){
    counterSlide = 1;
     result = sizeStep * counterSlide;
    firstRightActing();
    setTimeout(() => {
      for(let i = 0; dinamicItemVideo.length > i; i++){
        dinamicItemVideo[i].style.right = result + 'px';
      }
    }, timeDelayMin);
    setTimeout(() => {
      finalRightActing();
    appending(counterSlide);
    }, timeDelayMaj);
  }

   function twoStepRighting(){
    counterSlide = 2;
    result = sizeStep * counterSlide;
    firstRightActing();
    setTimeout(() => {
      for(let i = 0; dinamicItemVideo.length > i; i++){
        dinamicItemVideo[i].style.right = result + 'px';
      }
    }, timeDelayMin);
    setTimeout(() => {
      finalRightActing();
      appending(counterSlide);
    }, timeDelayMaj);
  }

   function threeStepRighting(){
    arrItems.length = 0;
    counterSlide = 3;
    arrItems.push(dinamicItemVideo[0].cloneNode(true));
    videoList.append(arrItems[0]);
    result = sizeStep * counterSlide;
    firstRightActing();
    setTimeout(() => {
      for(let i = 0; dinamicItemVideo.length > i; i++){
        dinamicItemVideo[i].style.right = result + 'px';
      }
    }, timeDelayMin);
    setTimeout(() => {
      dinamicItemVideo[0].remove();
      counterSlide -= 1;
      appending(counterSlide);
      finalRightActing();
    }, timeDelayMaj);
   }

   function fourStepRighting(){
    arrItems.length = 0;
    let counter = 2;
    let index = 0;
    counterSlide = 4;
    result = sizeStep * counterSlide;
    while(counter != 0){
      arrItems.push(videoYouTube[index].cloneNode(true));
      videoList.append(arrItems[index]);
      counter--;
      index++;
    }
    firstRightActing();
    setTimeout(() => {
      for(let i = 0; dinamicItemVideo.length > i; i++){
        dinamicItemVideo[i].style.right = result + 'px';
      }
    }, timeDelayMin);
    setTimeout(() => {
      while(index != 0){
        dinamicItemVideo[0].remove();
        index--;
      }
      counterSlide -= 2;
      appending(counterSlide);
      finalRightActing();
    }, timeDelayMaj);
   }

// ----------------------- left move scenario --------------------------------

function firstLeftActing(){
  for(let i = 0; dinamicItemVideo.length > i; i++){
    dinamicItemVideo[i].style.transitionDuration = 'unset';
    dinamicItemVideo[i].style.left = '0px';
    dinamicItemVideo[i].style.right = 'unset';
  }
}

function oneStepLefting(){
  counterSlide = -1;
  result = sizeStep * counterSlide;
  for(let i = 0; dinamicItemVideo.length > i; i++){
    dinamicItemVideo[i].style.transitionDuration = 'unset';
    dinamicItemVideo[i].style.left = result + 'px'; 
    dinamicItemVideo[i].style.right = 'unset';
  }
  videoList.prepend(dinamicItemVideo[dinamicItemVideo.length -1]);

 setTimeout(() => {
   for(let i = 0; dinamicItemVideo.length > i; i++){
     dinamicItemVideo[i].style.transitionDuration =  timeDelayMaj + 'ms';
   }
   for(let i = 0; dinamicItemVideo.length > i; i++){
     dinamicItemVideo[i].style.left = '0px';
   }
   counterSlide = 0;
 }, timeDelayMin);
}

function twoStepLefting(){
  counterSlide = -2;
  result = sizeStep * counterSlide;
  for(let i = 0; dinamicItemVideo.length > i; i++){
    dinamicItemVideo[i].style.transitionDuration = 'unset';
    dinamicItemVideo[i].style.left = result + 'px'; 
    dinamicItemVideo[i].style.right = 'unset';
  }
  while(counterSlide != 0){
    videoList.prepend(dinamicItemVideo[dinamicItemVideo.length -1]);
    counterSlide++;
  }
  setTimeout(() => {
    for(let i = 0; dinamicItemVideo.length > i; i++){
      dinamicItemVideo[i].style.transitionDuration =  timeDelayMaj + 'ms';
    }
    for(let i = 0; dinamicItemVideo.length > i; i++){
      dinamicItemVideo[i].style.left = '0px';
    }
    counterSlide = 0;
  }, timeDelayMin);
}

function threeFourStepLefting(differentStepDot) {
    arrItems.length = 0;
  let counter = differentStepDot;
  let index = 0;
  result = sizeStep * differentStepDot;
  while(differentStepDot != 0){
    arrItems.push(dinamicItemVideo[(dinamicItemVideo.length -1) - index].cloneNode(true));
    index++;
    differentStepDot++;
  }
  index = 0;
  while(counter != 0){
    videoList.prepend(arrItems[index]);
    index++;
    counter++;
  }
  for(let i = 0; dinamicItemVideo.length > i; i++){
    dinamicItemVideo[i].style.transitionDuration = 'unset';
    dinamicItemVideo[i].style.left = result + 'px';
    dinamicItemVideo[i].style.right = 'unset';
  }
  setTimeout(() => {
    for(let i = 0; dinamicItemVideo.length > i; i++){
      dinamicItemVideo[i].style.transitionDuration =  timeDelayMaj + 'ms';
    }
    for(let i = 0; dinamicItemVideo.length > i; i++){
      dinamicItemVideo[i].style.left = '0px';
    }
  }, timeDelayMin);
  setTimeout(() => {
    while(index != 0){
      dinamicItemVideo[dinamicItemVideo.length -1].remove();
      index--;
    }
  }, timeDelayMaj);
}

function loging(){
  console.log('||||||||||||||||||||||||||||||||');
  console.log('counterSlide: ',counterSlide);
  console.log('direction: ',direction);
  console.log('sizeStep: ',sizeStep);
  console.log('result: ',result);
  console.log('permissionButton: ',permissionButton);
  console.log('timeDelayMaj: ',timeDelayMaj);
  console.log('timeDelayMin: ',timeDelayMin);
  console.log('dotCode: ',dotCode);
  console.log('switchIndexDot: ',switchIndexDot);
  console.log('differentStepDot: ',differentStepDot);
  console.log('indexDinamic: ',indexDinamic);
  console.log('arrItems: ',arrItems);
  console.log('buttonCode: ',buttonCode);
  console.log('indexVideo: ',indexVideo);
  console.log('right: ',window.getComputedStyle(dinamicItemVideo[0], "").right);
  console.log('left: ',window.getComputedStyle(dinamicItemVideo[0], "").left);
}