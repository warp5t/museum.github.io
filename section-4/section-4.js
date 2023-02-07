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
let soundButton = document.querySelector('.controll-pannel__wrap-volume');
let soundIcon = document.querySelector('.controll-pannel__volume');
let fullscreenButton = document.querySelector('.controll-pannel__wrap-screen');
videoPlayer.controls = false;

// video.addEventListener('durationchange',function(e){
//   console.log(e);
// })
// ---                       --- play/pause ---                        ---
let playPermission = false;

videoPlayer.onclick = function() {
  if (videoPlayer.paused) {
    videoPlayer.play()
    playIcon.style.zIndex = 8;
    playPermission = true;
  } else {
    videoPlayer.pause();
    playIcon.style.zIndex = 10;
    playPermission = false;
  }
}

playButton.onclick = function() {
  if (playPermission == false) {
    playIcon.style.zIndex = 8;
    playPermission = true;
    videoPlayer.play()
  } else {
    playIcon.style.zIndex = 10;
    playPermission = false;
    videoPlayer.pause();
  }
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

let scaleVolume = document.querySelector('.controll-pannel__progress-volume');
let progessVolume = document.querySelector('.controll-pannel__passed_volume');

let permissionVolume = false;
let widthProgress,volumeLevel;

function widthProgressing(progress){
  if(permissionVolume){
  widthProgress = progress;
  progessVolume.style.width = progress+ 'px';
  }
}

function voluming(){
  if(permissionVolume){
  volumeLevel = widthProgress / (scaleVolume.offsetWidth -1);
  videoPlayer.volume = volumeLevel;
  if(volumeLevel <= 0.05){
    videoPlayer.muted = true;
    soundIcon.style.zIndex = 8;
  }
  else if(volumeLevel > 0.05){
    videoPlayer.muted = false;
    soundIcon.style.zIndex = 10;
  }
}
}

scaleVolume.addEventListener('mousedown',function(e){
  permissionVolume = true;
  widthProgressing(e.layerX);
  voluming();
});

scaleVolume.addEventListener('mousemove',function(e){
  widthProgressing(e.layerX);
  voluming();
});

scaleVolume.addEventListener('mouseup',function(e){
  permissionVolume = false;
});

// scaleVolume.addEventListener('mouseout',function(e){
//   permissionVolume = false;
// })

let soundPermission = false;

soundButton.onclick = function() {
  if (soundPermission) {
    soundIcon.style.zIndex = 10;
    videoPlayer.muted = false;
    soundPermission = false;
    progessVolume.style.width = ((scaleVolume.offsetWidth -1) * videoPlayer.volume) + 'px';
  } else {
    soundIcon.style.zIndex = 8;
    videoPlayer.muted = true;
    soundPermission = true;
    progessVolume.style.width = '0px';
  }
}

// ---                       --- fullscreen mode ---                        ---

let playerWrap = document.querySelector('.video__player-wrap');

function getFullscreenElement() {
  return document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullscreenElement ||
    document.msFullscreenElement;
}

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    playerWrap.requestFullscreen();
  }
}

fullscreenButton.addEventListener('click',function(){
  toggleFullscreen();
  console.log(scaleVideo.offsetWidth);
});

videoPlayer.addEventListener('dblclick',function(){
  toggleFullscreen();
});

// ---                       --- video progress control ---                        ---

let scaleVideo = document.querySelector('.controll-pannel__progress-time');
let progressVideo = document.querySelector('.controll-pannel__passed-time');

let permissionVideo = false;
let pastTime;


scaleVideo.addEventListener('mousedown',function(e){
  permissionVideo = true;
  videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo.offsetWidth;
  progressVideo.style.width = e.layerX + 'px';
})

scaleVideo.addEventListener('mousemove',function(e){
 if (permissionVideo){
    videoPlayer.currentTime = (videoPlayer.duration * e.layerX) / scaleVideo.offsetWidth;
    progressVideo.style.width = e.layerX + 'px';
    if(videoPlayer.paused){
       playIcon.style.zIndex = 10;
    }
    else{
      playIcon.style.zIndex = 8;
    }
    playPermission = false;
 }
})

scaleVideo.addEventListener('mouseup',function(){
  permissionVideo = false;
})

videoPlayer.addEventListener('timeupdate',function(){
  console.log(videoPlayer.currentTime);

  pastTime = (videoPlayer.currentTime * scaleVideo.offsetWidth) / videoPlayer.duration;
  progressVideo.style.width = pastTime + 'px';

  if(videoPlayer.ended){
    progressVideo.style.width = '0px';
    playIcon.style.zIndex = 10;
  }
})