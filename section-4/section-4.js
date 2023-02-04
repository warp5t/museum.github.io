let button = document.getElementById('button'); 
  let playListArr = ['Qifmo4r1nFY','0UUK4VDblXM','yx-HYerClEA'];
 
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
       'modestbranding':1,
       'showinfo': 0,
       'autohide':0
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
videoPlayer.controls = false;

// video.addEventListener('durationchange',function(e){
//   console.log(e);
// })


videoPlayer.onclick = function(){
 if(videoPlayer.paused){
  videoPlayer.play()
 }
 else{
  videoPlayer.pause();
 }
}

videoPlayer.addEventListener('mousemove',function(){
  controllPannel.style.bottom = '0px';
  // setTimeout(function(){
  //   controllPannel.style.bottom = '-80px';
  // },6000)
})