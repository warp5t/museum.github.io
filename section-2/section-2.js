// ---------------------------- longing line decor ------------------------------
let cardTour = document.querySelectorAll('.card-tour__wrap');
let lineDecor_0 = document.querySelectorAll('.card-tour__line-decor');

cardTour.forEach(function(item,index){
  item.addEventListener('mouseover',function(){
    lineDecor_0[index].classList.add('longing-line');
   // console.log('longing');
  })
  item.addEventListener('mouseout',function(){
    lineDecor_0[index].classList.remove('longing-line');
   // console.log('longing');
  })
})

