// ------------------------ API youtube ----------------------------------
// const videoMoverClick = document.querySelector('.video__mover');
// videoMover.addEventListener('click', () => {
// let player_1, player_2, player_3, player_4, player_5, player_6, player_7, player_8, player_9, player_10;

// function initApiYouTube() {
//   var tag = document.createElement('script');

//   tag.src = "https://www.youtube.com/iframe_api";
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// }
// initApiYouTube()

//   videoMoverClick.classList.remove('transparent-video');

//   player_1 = new YT.Player('player_1', {
//     height: '100%',
//     width: '100%',
//     videoId: 'zp1BXPX8jcU',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

//   player_2 = new YT.Player('player_2', {
//     height: '100%',
//     width: '100%',
//     videoId: 'Vi5D6FKhRmo',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

//   player_3 = new YT.Player('player_3', {
//     height: '100%',
//     width: '100%',
//     videoId: 'NOhDysLnTvY',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

//   player_4 = new YT.Player('player_4', {
//     height: '100%',
//     width: '100%',
//     videoId: 'aWmJ5DgyWPI',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

//   player_5 = new YT.Player('player_5', {
//     height: '100%',
//     width: '100%',
//     videoId: '2OR0OCr6uRE',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

//   player_6 = new YT.Player('player_6', {
//     height: '100%',
//     width: '100%',
//     videoId: 'zp1BXPX8jcU',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

//   player_7 = new YT.Player('player_7', {
//     height: '100%',
//     width: '100%',
//     videoId: 'Vi5D6FKhRmo',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

//   player_8 = new YT.Player('player_8', {
//     height: '100%',
//     width: '100%',
//     videoId: 'NOhDysLnTvY',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

//   player_9 = new YT.Player('player_9', {
//     height: '100%',
//     width: '100%',
//     videoId: 'aWmJ5DgyWPI',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

//   player_10 = new YT.Player('player_10', {
//     height: '100%',
//     width: '100%',
//     videoId: '2OR0OCr6uRE',
//     playerVars: {
//       'playsinline': 1,
//       'controls': 1,
//       'host': 'https://www.youtube.com',
//     },
//   });

// var cardShroud = document.querySelectorAll('.video__you-tube .video__shroud');

// const mainPlayer_control = document.getElementById('video');

// let arrPlayers = [];

// let playStopPermission_1 = true,
//   playStopPermission_2 = true,
//   playStopPermission_3 = true,
//   playStopPermission_4 = true,
//   playStopPermission_5 = true,
//   playStopPermission_6 = true,
//   playStopPermission_7 = true,
//   playStopPermission_8 = true,
//   playStopPermission_9 = true,
//   playStopPermission_10 = true;

// function playingStoping(target) {

//   mainPlayer_control.pause()

//   if (target === 'shroud_1' || target === 'playBtn_1') {
//     if (playStopPermission_1) {
//       playStopPermission_1 = false;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_1.playVideo();
//       player_2.pauseVideo();
//       player_3.pauseVideo();
//       player_4.pauseVideo();
//       player_5.pauseVideo();
//       player_6.pauseVideo();
//       player_7.pauseVideo();
//       player_8.pauseVideo();
//       player_9.pauseVideo();
//       player_10.pauseVideo();
//     } else {
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_1.pauseVideo();
//     }
//   } else if (target === 'shroud_2' || target === 'playBtn_2') {
//     if (playStopPermission_2) {
//       playStopPermission_2 = false;
//       playStopPermission_1 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_2.playVideo();
//       player_1.pauseVideo();
//       player_3.pauseVideo();
//       player_4.pauseVideo();
//       player_5.pauseVideo();
//       player_6.pauseVideo();
//       player_7.pauseVideo();
//       player_8.pauseVideo();
//       player_9.pauseVideo();
//       player_10.pauseVideo();
//     } else {
//       playStopPermission_2 = true;
//       playStopPermission_1 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_2.pauseVideo();
//     }
//   } else if (target === 'shroud_3' || target === 'playBtn_3') {
//     if (playStopPermission_3) {
//       playStopPermission_3 = false;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_3.playVideo();
//       player_1.pauseVideo();
//       player_2.pauseVideo();
//       player_4.pauseVideo();
//       player_5.pauseVideo();
//       player_6.pauseVideo();
//       player_7.pauseVideo();
//       player_8.pauseVideo();
//       player_9.pauseVideo();
//       player_10.pauseVideo();
//     } else {
//       playStopPermission_3 = true;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       player_3.pauseVideo();
//     }
//   } else if (target === 'shroud_4' || target === 'playBtn_4') {
//     if (playStopPermission_4) {
//       playStopPermission_4 = false;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_4.playVideo();
//       player_1.pauseVideo();
//       player_2.pauseVideo();
//       player_3.pauseVideo();
//       player_5.pauseVideo();
//       player_6.pauseVideo();
//       player_7.pauseVideo();
//       player_8.pauseVideo();
//       player_9.pauseVideo();
//       player_10.pauseVideo();
//     } else {
//       playStopPermission_4 = true;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_4.pauseVideo();
//     }
//   } else if (target === 'shroud_5' || target === 'playBtn_5') {
//     if (playStopPermission_5) {
//       playStopPermission_5 = false;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_5.playVideo();
//       player_1.pauseVideo();
//       player_2.pauseVideo();
//       player_3.pauseVideo();
//       player_4.pauseVideo();
//       player_6.pauseVideo();
//       player_7.pauseVideo();
//       player_8.pauseVideo();
//       player_9.pauseVideo();
//       player_10.pauseVideo();
//     } else {
//       playStopPermission_5 = true;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_5.pauseVideo();
//     }
//   } else if (target === 'shroud_6' || target === 'playBtn_6') {
//     if (playStopPermission_6) {
//       playStopPermission_6 = false;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_6.playVideo();
//       player_1.pauseVideo();
//       player_2.pauseVideo();
//       player_3.pauseVideo();
//       player_4.pauseVideo();
//       player_5.pauseVideo();
//       player_7.pauseVideo();
//       player_8.pauseVideo();
//       player_9.pauseVideo();
//       player_10.pauseVideo();
//     } else {
//       playStopPermission_6 = true;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_6.pauseVideo();
//     }
//   } else if (target === 'shroud_7' || target === 'playBtn_7') {
//     if (playStopPermission_7) {
//       playStopPermission_7 = false;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_7.playVideo();
//       player_1.pauseVideo();
//       player_2.pauseVideo();
//       player_3.pauseVideo();
//       player_4.pauseVideo();
//       player_5.pauseVideo();
//       player_6.pauseVideo();
//       player_8.pauseVideo();
//       player_9.pauseVideo();
//       player_10.pauseVideo();
//     } else {
//       playStopPermission_7 = true;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_7.pauseVideo();
//     }
//   } else if (target === 'shroud_8' || target === 'playBtn_8') {
//     if (playStopPermission_8) {
//       playStopPermission_8 = false;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_8.playVideo();
//       player_1.pauseVideo();
//       player_2.pauseVideo();
//       player_3.pauseVideo();
//       player_4.pauseVideo();
//       player_5.pauseVideo();
//       player_6.pauseVideo();
//       player_7.pauseVideo();
//       player_9.pauseVideo();
//       player_10.pauseVideo();
//     } else {
//       playStopPermission_8 = true;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_9 = true;
//       playStopPermission_10 = true;
//       player_8.pauseVideo();
//     }
//   } else if (target === 'shroud_9' || target === 'playBtn_9') {
//     if (playStopPermission_9) {
//       playStopPermission_9 = false;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_10 = true;
//       player_9.playVideo();
//       player_1.pauseVideo();
//       player_2.pauseVideo();
//       player_3.pauseVideo();
//       player_4.pauseVideo();
//       player_5.pauseVideo();
//       player_6.pauseVideo();
//       player_7.pauseVideo();
//       player_8.pauseVideo();
//       player_10.pauseVideo();
//     } else {
//       playStopPermission_9 = true;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_10 = true;
//       player_9.pauseVideo();
//     }
//   } else if (target === 'shroud_10' || target === 'playBtn_10') {
//     if (playStopPermission_10) {
//       playStopPermission_10 = false;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       player_10.playVideo();
//       player_1.pauseVideo();
//       player_2.pauseVideo();
//       player_3.pauseVideo();
//       player_4.pauseVideo();
//       player_5.pauseVideo();
//       player_6.pauseVideo();
//       player_7.pauseVideo();
//       player_8.pauseVideo();
//       player_9.pauseVideo();
//     } else {
//       playStopPermission_10 = true;
//       playStopPermission_1 = true;
//       playStopPermission_2 = true;
//       playStopPermission_3 = true;
//       playStopPermission_4 = true;
//       playStopPermission_5 = true;
//       playStopPermission_6 = true;
//       playStopPermission_7 = true;
//       playStopPermission_8 = true;
//       playStopPermission_9 = true;
//       player_10.pauseVideo();
//     }
//   }
// }

// function allStopping() {
//   player_1.stopVideo();
//   player_2.stopVideo();
//   player_3.stopVideo();
//   player_4.stopVideo();
//   player_5.stopVideo();
//   player_6.stopVideo();
//   player_7.stopVideo();
//   player_8.stopVideo();
//   player_9.stopVideo();
//   player_10.stopVideo();
// }

// const mainPlayer = document.querySelector('.video__player-wrap');

// mainPlayer.addEventListener('click', () => {
//   console.log('mainPlayer 520')
//   allStopping()
// })

// cardShroud.forEach(function (item, index) {
//   item.addEventListener('click', function () {
//     playingStoping(item.id)
//   })
//   arrPlayers[index] = item;
// })
// })

function initSection4_0() {

let card_1 = document.getElementById('card_1'),
  card_2 = document.getElementById('card_2'),
  card_3 = document.getElementById('card_3'),
  card_4 = document.getElementById('card_4'),
  card_5 = document.getElementById('card_5'),
  card_6 = document.getElementById('card_6'),
  card_7 = document.getElementById('card_7'),
  card_8 = document.getElementById('card_8'),
  card_9 = document.getElementById('card_9'),
  card_10 = document.getElementById('card_10');

let player_1, player_2, player_3, player_4, player_5, player_6, player_7, player_8, player_9, player_10;

const arrCard = [card_1, card_2, card_3, card_4, card_5, card_6, card_7, card_8, card_9, card_10];
const arrPlayers = [];

const arrIsRun = [true,true,true,true,true,true,true,true,true,true];

const arrVideoId = ['zp1BXPX8jcU', 'Vi5D6FKhRmo', 'NOhDysLnTvY', 'aWmJ5DgyWPI', '2OR0OCr6uRE'];

const countId = 5;

function initApiYouTube() {
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
initApiYouTube()

arrCard.forEach((cardVideo, index) => {

  cardVideo.addEventListener('click', () => {
    if (arrIsRun[index]) {
      console.log(cardVideo.id)
      const idCard = cardVideo.id;
      const numberId = Number(cardVideo.id.slice(5, idCard.length))
      console.log(`player_${numberId}`)
      arrPlayers[index] = new YT.Player(`player_${numberId}`, {
        height: '100%',
        width: '100%',
        videoId: arrVideoId[(numberId - 1) % 5],
        playerVars: {
          'playsinline': 1,
          'controls': 1,
          'host': 'https://www.youtube.com',
        },
      });
      arrIsRun[index] = false;
    }

    // playingStoping()
  })
})

const cardShroud = document.querySelectorAll('.video__you-tube .video__shroud');
const btnPlayStop = document.querySelectorAll('.video__you-tube .video__cover-play-button');

btnPlayStop.forEach(function (item,index) {
  item.addEventListener('click', function () {
    console.log(item.id, ' - item.id')
    if(!arrIsRun[index]) {
      playingStoping(item.id)
    }
  })
})

cardShroud.forEach(function (item,index) {
  item.addEventListener('click', function () {
    console.log(item.id, ' - item.id')
    if(!arrIsRun[index]) {
      playingStoping(item.id)
    }
  })
})

const mainPlayer_control = document.getElementById('video');

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

  function iteratingCards(indexCard) {
    arrPlayers.forEach((card,index) => {
      if(card && index !== indexCard) {
        arrPlayers[index].pauseVideo();
      }
    })
  }

function playingStoping(target) {

  mainPlayer_control.pause()

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
      arrPlayers[0].playVideo();
      iteratingCards(0)
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
      arrPlayers[0].pauseVideo();
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
      arrPlayers[1].playVideo();
      iteratingCards(1)
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
      arrPlayers[1].pauseVideo();
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
      arrPlayers[2].playVideo();
      iteratingCards(2)
    } else {
      playStopPermission_3 = true;
      playStopPermission_1 = true;
      playStopPermission_2 = true;
      playStopPermission_4 = true;
      playStopPermission_5 = true;
      playStopPermission_6 = true;
      playStopPermission_7 = true;
      playStopPermission_8 = true;
      playStopPermission_9 = true;
      playStopPermission_10 = true;
      arrPlayers[2].pauseVideo();
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
      arrPlayers[3].playVideo();
      iteratingCards(3)
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
      arrPlayers[3].pauseVideo();
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
      arrPlayers[4].playVideo();
      iteratingCards(4)
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
      arrPlayers[4].pauseVideo();
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
      arrPlayers[5].playVideo();
      iteratingCards(5)
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
      arrPlayers[5].pauseVideo();
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
      arrPlayers[6].playVideo();
      iteratingCards(6)
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
      arrPlayers[6].pauseVideo();
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
      arrPlayers[7].playVideo();
      iteratingCards(7)
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
      arrPlayers[7].pauseVideo();
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
      arrPlayers[8].playVideo();
      iteratingCards(8)
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
      arrPlayers[8].pauseVideo();
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
      arrPlayers[9].playVideo();
      iteratingCards(9)
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
      arrPlayers[9].pauseVideo();
    }
  }
}

function allStopping() {
  arrPlayers.forEach((card,index) => {
    if(card) {
      arrPlayers[index].pauseVideo();
    }
  })
}

const mainPlayer = document.querySelector('.video__player-wrap');

mainPlayer.addEventListener('click', () => {
  allStopping()
})

}


const target = document.querySelector('.video__container');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         console.log('initiated 4-0')
         initSection4_0()
        }
      });
    }, {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // 0.5 means the callback will be invoked when 50% of the target is visible
    });

    observer.observe(target);