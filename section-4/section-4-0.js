// ------------------------ API youtube ----------------------------------

let player_1, player_2, player_3, player_4, player_5, player_6, player_7, player_8, player_9, player_10;

function initApiYouTube() {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
initApiYouTube()

const videoMoverClick = document.querySelector('.video__mover');

videoMover.addEventListener('click', () => {
  console.log('videoMover 17')
// function onYouTubeIframeAPIReady() {
  player_1 = new YT.Player('player_1', {
    height: '100%',
    width: '100%',
    videoId: 'zp1BXPX8jcU',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });

  player_2 = new YT.Player('player_2', {
    height: '100%',
    width: '100%',
    videoId: 'Vi5D6FKhRmo',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });

  player_3 = new YT.Player('player_3', {
    height: '100%',
    width: '100%',
    videoId: 'NOhDysLnTvY',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });

  player_4 = new YT.Player('player_4', {
    height: '100%',
    width: '100%',
    videoId: 'aWmJ5DgyWPI',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });

  player_5 = new YT.Player('player_5', {
    height: '100%',
    width: '100%',
    videoId: '2OR0OCr6uRE',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });

  player_6 = new YT.Player('player_6', {
    height: '100%',
    width: '100%',
    videoId: 'zp1BXPX8jcU',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });

  player_7 = new YT.Player('player_7', {
    height: '100%',
    width: '100%',
    videoId: 'Vi5D6FKhRmo',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });

  player_8 = new YT.Player('player_8', {
    height: '100%',
    width: '100%',
    videoId: 'NOhDysLnTvY',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });

  player_9 = new YT.Player('player_9', {
    height: '100%',
    width: '100%',
    videoId: 'aWmJ5DgyWPI',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });

  player_10 = new YT.Player('player_10', {
    height: '100%',
    width: '100%',
    videoId: '2OR0OCr6uRE',
    playerVars: {
      'playsinline': 1,
      'controls': 1,
      'host': 'https://www.youtube.com',
    },
  });
// }
})


let cardPlayer = document.querySelectorAll('.video__you-tube .video__wrap-upper');
var cardShroud = document.querySelectorAll('.video__you-tube .video__shroud');
let coverPlayer = document.querySelector('.video__wrap-cover');
let dinamicCards = document.querySelector('.video__list-video').getElementsByClassName("video__you-tube");

let arrPlayers = [];

cardShroud.forEach(function (item, index) {
  item.addEventListener('click', function () {
    playingStoping(item.id)
  })
  arrPlayers[index] = item;
})

let playStopPermission_1 = true,
  playStopPermission_2 = true,
  playStopPermission_3 = true,
  playStopPermission_4 = true,
  playStopPermission_5 = true,
  playStopPermission_6 = true,
  playStopPermission_7 = true,
  playStopPermission_8 = true,
  playStopPermission_9 = true,
  playStopPermission_10 = true;

function playingStoping(target) {
  if (target === 'shroud_1' || target === 'playBtn_1') {
    if (playStopPermission_1) {
      playStopPermission_1 = false;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_1.playVideo();
      player_2.pauseVideo();
      player_3.pauseVideo();
      player_4.pauseVideo();
      player_5.pauseVideo();
      player_6.pauseVideo();
      player_7.pauseVideo();
      player_8.pauseVideo();
      player_9.pauseVideo();
      player_10.pauseVideo();
    } else {
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_1.pauseVideo();
    }
  } else if (target === 'shroud_2' || target === 'playBtn_2') {
    if (playStopPermission_2) {
      playStopPermission_2 = false;
      playStopPermission_1 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_2.playVideo();
      player_1.pauseVideo();
      player_3.pauseVideo();
      player_4.pauseVideo();
      player_5.pauseVideo();
      player_6.pauseVideo();
      player_7.pauseVideo();
      player_8.pauseVideo();
      player_9.pauseVideo();
      player_10.pauseVideo();
    } else {
      playStopPermission_2 = true;
      playStopPermission_1 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_2.pauseVideo();
    }
  } else if (target === 'shroud_3' || target === 'playBtn_3') {
    if (playStopPermission_3) {
      playStopPermission_3 = false;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_3.playVideo();
      player_1.pauseVideo();
      player_2.pauseVideo();
      player_4.pauseVideo();
      player_5.pauseVideo();
      player_6.pauseVideo();
      player_7.pauseVideo();
      player_8.pauseVideo();
      player_9.pauseVideo();
      player_10.pauseVideo();
    } else {
      playStopPermission_3 = true;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      player_3.pauseVideo();
    }
  } else if (target === 'shroud_4' || target === 'playBtn_4') {
    if (playStopPermission_4) {
      playStopPermission_4 = false;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_4.playVideo();
      player_1.pauseVideo();
      player_2.pauseVideo();
      player_3.pauseVideo();
      player_5.pauseVideo();
      player_6.pauseVideo();
      player_7.pauseVideo();
      player_8.pauseVideo();
      player_9.pauseVideo();
      player_10.pauseVideo();
    } else {
      playStopPermission_4 = true;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_4.pauseVideo();
    }
  } else if (target === 'shroud_5' || target === 'playBtn_5') {
    if (playStopPermission_5) {
      playStopPermission_5 = false;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_5.playVideo();
      player_1.pauseVideo();
      player_2.pauseVideo();
      player_3.pauseVideo();
      player_4.pauseVideo();
      player_6.pauseVideo();
      player_7.pauseVideo();
      player_8.pauseVideo();
      player_9.pauseVideo();
      player_10.pauseVideo();
    } else {
      playStopPermission_5 = true;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_5.pauseVideo();
    }
  } else if (target === 'shroud_6' || target === 'playBtn_6') {
    if (playStopPermission_6) {
      playStopPermission_6 = false;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_6.playVideo();
      player_1.pauseVideo();
      player_2.pauseVideo();
      player_3.pauseVideo();
      player_4.pauseVideo();
      player_5.pauseVideo();
      player_7.pauseVideo();
      player_8.pauseVideo();
      player_9.pauseVideo();
      player_10.pauseVideo();
    } else {
      playStopPermission_6 = true;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_6.pauseVideo();
    }
  } else if (target === 'shroud_7' || target === 'playBtn_7') {
    if (playStopPermission_7) {
      playStopPermission_7 = false;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_7.playVideo();
      player_1.pauseVideo();
      player_2.pauseVideo();
      player_3.pauseVideo();
      player_4.pauseVideo();
      player_5.pauseVideo();
      player_6.pauseVideo();
      player_8.pauseVideo();
      player_9.pauseVideo();
      player_10.pauseVideo();
    } else {
      playStopPermission_7 = true;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_7.pauseVideo();
    }
  } else if (target === 'shroud_8' || target === 'playBtn_8') {
    if (playStopPermission_8) {
      playStopPermission_8 = false;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_8.playVideo();
      player_1.pauseVideo();
      player_2.pauseVideo();
      player_3.pauseVideo();
      player_4.pauseVideo();
      player_5.pauseVideo();
      player_6.pauseVideo();
      player_7.pauseVideo();
      player_9.pauseVideo();
      player_10.pauseVideo();
    } else {
      playStopPermission_8 = true;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      player_8.pauseVideo();
    }
  } else if (target === 'shroud_9' || target === 'playBtn_9') {
    if (playStopPermission_9) {
      playStopPermission_9 = false;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_10 = true;
      player_9.playVideo();
      player_1.pauseVideo();
      player_2.pauseVideo();
      player_3.pauseVideo();
      player_4.pauseVideo();
      player_5.pauseVideo();
      player_6.pauseVideo();
      player_7.pauseVideo();
      player_8.pauseVideo();
      player_10.pauseVideo();
    } else {
      playStopPermission_9 = true;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_10 = true;
      player_9.pauseVideo();
    }
  } else if (target === 'shroud_10' || target === 'playBtn_10') {
    if (playStopPermission_10) {
      playStopPermission_10 = false;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      player_10.playVideo();
      player_1.pauseVideo();
      player_2.pauseVideo();
      player_3.pauseVideo();
      player_4.pauseVideo();
      player_5.pauseVideo();
      player_6.pauseVideo();
      player_7.pauseVideo();
      player_8.pauseVideo();
      player_9.pauseVideo();
    } else {
      playStopPermission_10 = true;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_3 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      player_10.pauseVideo();
    }
  }
}

function allStopping() {
  player_1.stopVideo();
  player_2.stopVideo();
  player_3.stopVideo();
  player_4.stopVideo();
  player_5.stopVideo();
  player_6.stopVideo();
  player_7.stopVideo();
  player_8.stopVideo();
  player_9.stopVideo();
  player_10.stopVideo();
}