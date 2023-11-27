const playBtn = document.querySelectorAll('.video__cover-play-button');

const arrPlayBtn = Array.from(playBtn);

arrPlayBtn.forEach((el) => {
    el.addEventListener('click', () => {
        playingStoping(el.id)
    })
});
console.log('section4-1')
