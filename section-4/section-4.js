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
let index = 0;
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

// ---                 --- carousel video / postering main video ---                        ---

let videoYouTube = document.querySelectorAll('.video__you-tube');
let leftButton = document.querySelector('.video__darrows-L');
let rightButton = document.querySelector('.video__darrows-R');
let videoMover = document.querySelector('.video__mover');
let videoList = document.querySelector('.video__list-video');
let dotItems = document.querySelectorAll('.video__dot');

let delayTime = 700;

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

videoYouTube[0].style.backgroundColor = 'red';

let counterSlide = 0;
let marginCommon = 42;
let result,previousResult = 0;
let direction,sizeStep;

function xMoving() {
  sizeStep = ((videoYouTube[1].offsetWidth + marginCommon));
  result = sizeStep * counterSlide;
  videoYouTube.forEach(function (e) {
    if(direction == 'right'){
       e.style.right = result + 'px';
    }
    else if(direction == 'left' && counterSlide > 0){
      e.style.right = result + 'px';
    }
    else if(direction == 'left' && counterSlide <= 0){
      e.style.left = result*(-1) + 'px';
    }
  });
  padding();
  console.log('xMoving');
}

function padding() {
  sizeStep = ((videoYouTube[1].offsetWidth + marginCommon));
  result = sizeStep * counterSlide;
  if (direction == 'right') {
    setTimeout(function() {
      videoList.style.paddingLeft = result + 'px';
    }, delayTime);
  } else if (direction == 'left') {
      setTimeout(function() {
        if(result < 0){result *=-1}
      videoList.style.paddingLeft = result + 'px';
      }, delayTime);
  }
}

let indexVideo = 0;

function floping() {
  if (direction == 'right') {
    termItem = videoYouTube[indexVideo];
   // videoYouTube[indexVideo].remove();
    videoList.append(termItem);
    if (indexVideo >= 4) {
      indexVideo = 0;
    } else if (indexVideo >= 0) {
      indexVideo++;
    }
  } else if (direction == 'left') {
   // countItem = 4;
   // while (countItem !== 0) {
      if (indexVideo > 0) {
        indexVideo--;
      } else if (indexVideo == 0) {
        indexVideo = 4;
      }
     // termItem = videoYouTube[indexVideo];
     // videoYouTube[indexVideo].remove();
     // termItem.style.left = result *(-1) + 'px';;
    //  videoList.prepend(termItem);
    //  countItem--;
   //   console.log({countItem});
 //  }
  }
  console.log('floping');
}

let switchDot = true;
let switchIndexDot = 0;

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
    console.log({
      switchIndexDot
    });
  } else {
    dotItems[switchIndexDot].style.backgroundColor = '#333333';
  }
}
dotRecoloring();

rightButton.onclick = function() {
  direction = 'right';
  // counterSlide++;
  // xMoving();
  // setTimeout(function () {floping()}, delayTime)
  testMoving_2();
  setTimeout(function(){testMoving_1();},1000)
  
  dotRecoloring()
}



leftButton.onclick = function() {
  direction = 'left';
  // if(counterSlide == 0){
  //   videoYouTube.forEach(function(e){
  //    e.style.right = 'unset';
  //    e.style.left = '0';
  //   })
  // }
 // floping();
  patternMoving()
 // counterSlide--;

  //floping();
 // transitioning()
 // xMoving();
 // setTimeout(function() {}, delayTime);
    dotRecoloring();
}




function flipping(){
  if(direction == 'left'){
     counterSlide--;
   if (indexVideo > 0){
        indexVideo--;
      } else if (indexVideo == 0) {
        indexVideo = 4;
      }
  if(counterSlide < 0){
    sizeStep = ((videoYouTube[1].offsetWidth + marginCommon));
    result = sizeStep * counterSlide;
  videoYouTube.forEach(function (e) {
       e.style.transitionDuration = 'unset';
       e.style.left = result  + 'px';
  });
  videoList.prepend(videoYouTube[indexVideo]);
  }
  counterSlide++;
  }
  else if(direction == 'right'){
    counterSlide++;
    if (indexVideo >= 4) {
      indexVideo = 0;
    } else if (indexVideo >= 0) {
      indexVideo++;
    }
   if(counterSlide > 0){
     sizeStep = ((videoYouTube[1].offsetWidth + marginCommon));
     result = sizeStep * counterSlide;
   videoYouTube.forEach(function (e) {
        e.style.transitionDuration = '1s';
        e.style.right = result  + 'px';
   });
   videoList.append(videoYouTube[indexVideo]);
   }
   counterSlide++;
  }
}

function transitioning(){
  if(direction == 'left'){
    videoYouTube.forEach(function(e) {
    e.style.transitionDuration = '1s';
});
videoYouTube.forEach(function(e){
  e.style.right = 'unset';
  e.style.left = '0px';
 })
  }
  else if(direction == 'right'){
    videoYouTube.forEach(function(e) {
      e.style.transitionDuration = 'unset';
  });
  videoYouTube.forEach(function(e){
    e.style.right = 'unset';
    e.style.left = '0px';
   })
  }
// previousResult = result;
}

function patternMoving(){
 // counterSlide--;
  flipping();
  //counterSlide++;
  setTimeout(function(){transitioning()},10);
}

function testMoving_0(){
  counterSlide++;
  sizeStep = ((videoYouTube[1].offsetWidth + marginCommon));
  result = sizeStep * counterSlide;
  //videoYouTube.forEach(function(e){});
 // e.style.left = 'unset';
  videoYouTube.forEach(function(e){
    e.style.transitionDuration = '1s';
    e.style.right = result + 'px';
    e.style.left = 'unset';
   })
   counterSlide--;
}

function testMoving_1(){

  videoYouTube.forEach(function (e) {
  e.style.transitionDuration = 'unset';
  e.style.right = 'unset';
  e.style.left = '0px';
});
videoList.append(videoYouTube[indexVideo]);
if (indexVideo >= 4) {
  indexVideo = 0;
} else if (indexVideo >= 0) {
  indexVideo++;
}
}

function testMoving_2(){
  videoYouTube.forEach(function(e){
    e.style.left = 'unset';
   })
   videoYouTube.forEach(function(e){
    e.style.transitionDuration = '1s';
   })
    videoYouTube.forEach(function(e){
    e.style.right = '0px';
   })
setTimeout(function(){
   videoYouTube.forEach(function(e){
    e.style.right = '494px';})
   },10);
}

