// const buttonDebugging = document.createElement('button');
// buttonDebugging.style.height = '130px';
// buttonDebugging.style.width = '130px';
// buttonDebugging.style.background = 'green';
// const body_00 = document.getElementById('body');
// body_00.append(buttonDebugging);


// let clonedIframe_1, clonedIframe_2, clonedIframe_3, clonedIframe_4, clonedIframe_5;
// let clonePlayer_1, clonePlayer_2, clonePlayer_3, clonePlayer_4, clonePlayer_5;

// const btnClear = document.createElement('button');
// btnClear.style.height = '130px';
// btnClear.style.width = '130px';
// btnClear.style.background = 'red';
// body_00.append(btnClear);

// let containerVideoClone;

// buttonDebugging.addEventListener('click', () => {
//     containerVideoClone = document.createElement('div');
//     body_00.appendChild(containerVideoClone)
//     containerVideoClone.innerText = 'check';
//     containerVideoClone.style.color = 'black';

//     const btnVideo_1 = document.createElement('button');
//     const btnVideo_2 = document.createElement('button');
//     const btnVideo_3 = document.createElement('button');
//     const btnVideo_4 = document.createElement('button');
//     const btnVideo_5 = document.createElement('button');
//     btnVideo_1.classList.add('button-technic');
//     btnVideo_2.classList.add('button-technic');
//     btnVideo_3.classList.add('button-technic');
//     btnVideo_4.classList.add('button-technic');
//     btnVideo_5.classList.add('button-technic');
//     containerVideoClone.appendChild(btnVideo_1);
//     containerVideoClone.appendChild(btnVideo_2);
//     containerVideoClone.appendChild(btnVideo_3);
//     containerVideoClone.appendChild(btnVideo_4);
//     containerVideoClone.appendChild(btnVideo_5);


//     clonedIframe_1 = document.createElement('div');
//     clonedIframe_2 = document.createElement('div');
//     clonedIframe_3 = document.createElement('div');
//     clonedIframe_4 = document.createElement('div');
//     clonedIframe_5 = document.createElement('div');

//     let arrID = [];
//     arrID.length = 5;
//     for (let i = 0; arrID.length > i; i++) {
//         const randNumber = Math.trunc((Math.random().toString(10)) * 1000);

//         if (arrID.includes(randNumber)) {
//             i--
//         } else {
//             arrID[i] = randNumber
//         }
//     }

//     let newId_1 = 'player_' + arrID[0];
//     let newId_2 = 'player_' + arrID[1];
//     let newId_3 = 'player_' + arrID[2];
//     let newId_4 = 'player_' + arrID[3];
//     let newId_5 = 'player_' + arrID[4];

//     console.log(newId_1)

//     clonedIframe_1.setAttribute('id', newId_1);
//     clonedIframe_2.setAttribute('id', newId_2);
//     clonedIframe_3.setAttribute('id', newId_3);
//     clonedIframe_4.setAttribute('id', newId_4);
//     clonedIframe_5.setAttribute('id', newId_5);



//     var tag = document.createElement('script');

//     tag.src = "https://www.youtube.com/iframe_api";
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     containerVideoClone.appendChild(tag, firstScriptTag);




//     function initApiYouTube() {
//     clonePlayer_1 = new YT.Player(newId_1, {
//         height: '100%',
//         width: '100%',
//         videoId: 'zp1BXPX8jcU',
//         playerVars: {
//             'playsinline': 1,
//             'controls': 1,
//             'host': 'https://www.youtube.com',
//         },
//         // events: {
//         //     'onReady': onPlayerReady
//         // }
//     });

//     clonePlayer_2 = new YT.Player(newId_2, {
//         height: '100%',
//         width: '100%',
//         videoId: 'Vi5D6FKhRmo',
//         playerVars: {
//             'playsinline': 1,
//             'controls': 1,
//             'host': 'https://www.youtube.com',
//         },
//         // events: {
//         //     'onReady': onPlayerReady
//         // }
//     });

//     clonePlayer_3 = new YT.Player(newId_3, {
//         height: '100%',
//         width: '100%',
//         videoId: 'NOhDysLnTvY',
//         playerVars: {
//             'playsinline': 1,
//             'controls': 1,
//             'host': 'https://www.youtube.com',
//         },
//         // events: {
//         //     'onReady': onPlayerReady
//         // }
//     });

//     clonePlayer_4 = new YT.Player(newId_4, {
//         height: '100%',
//         width: '100%',
//         videoId: 'aWmJ5DgyWPI',
//         playerVars: {
//             'playsinline': 1,
//             'controls': 1,
//             'host': 'https://www.youtube.com',
//         },
//         // events: {
//         //     'onReady': onPlayerReady
//         // }
//     });

//     clonePlayer_5 = new YT.Player(newId_5, {
//         height: '100%',
//         width: '100%',
//         videoId: '2OR0OCr6uRE',
//         playerVars: {
//             'playsinline': 1,
//             'controls': 1,
//             'host': 'https://www.youtube.com',
//         },
//         // events: {
//         //     'onReady': onPlayerReady
//         // }
//     });

//     function onPlayerReady(event) {
//         event.target.playVideo(); // Call playVideo() method when the player is ready
//     }


//     }

//     containerVideoClone.appendChild(clonedIframe_1)
//     containerVideoClone.appendChild(clonedIframe_2)
//     containerVideoClone.appendChild(clonedIframe_3)
//     containerVideoClone.appendChild(clonedIframe_4)
//     containerVideoClone.appendChild(clonedIframe_5)
//     clonedIframe_1.innerText = 'check_item'
//     clonedIframe_2.innerText = 'check_item'
//     clonedIframe_3.innerText = 'check_item'
//     clonedIframe_4.innerText = 'check_item'
//     clonedIframe_5.innerText = 'check_item'

//     btnVideo_1.addEventListener('click', () => {
//         let permiss = true;
//         if (permiss) {
//             clonePlayer_1.playVideo()
//             permiss = false;
//         } else {
//             clonePlayer_1.pauseVideo()
//             permiss = true;
//         }
//     })
//     btnVideo_2.addEventListener('click', () => {
//         let permiss = true;
//         if (permiss) {
//             clonePlayer_2.playVideo()
//             permiss = false;
//         } else {
//             clonePlayer_2.pauseVideo()
//             permiss = true;
//         }
//     })
//     btnVideo_3.addEventListener('click', () => {
//         let permiss = true;
//         if (permiss) {
//             clonePlayer_3.playVideo()
//             permiss = false;
//         } else {
//             clonePlayer_3.pauseVideo()
//             permiss = true;
//         }
//     })
//     btnVideo_4.addEventListener('click', () => {
//         let permiss = true;
//         if (permiss) {
//             clonePlayer_4.playVideo()
//             permiss = false;
//         } else {
//             clonePlayer_4.pauseVideo()
//             permiss = true;
//         }
//     })
//     btnVideo_5.addEventListener('click', () => {
//         let permiss = true;
//         if (permiss) {
//             clonePlayer_5.playVideo()
//             permiss = false;
//         } else {
//             clonePlayer_5.pauseVideo()
//             permiss = true;
//         }
//     })

//     // initYouTubePlayerAPI()
// })

// function clearNode() {
//     containerVideoClone.innerHTML = '';
// }

// btnClear.onclick = clearNode;


