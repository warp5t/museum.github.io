const plus18 = document.getElementById('plus18');
const minus18 = document.getElementById('minus18');
const ticket18 = document.getElementById('ticket18');

const plus65 = document.getElementById('plus65');
const minus65 = document.getElementById('minus65');
const ticket65 = document.getElementById('ticket65');

const totalPrice = document.getElementById('totalPrice');

let summary18, summary65;

function calculatePrice18(contTickets) {
  const selectedValue = document.querySelector('input[name="type-ticket"]:checked').value;
  let summary = 0;
  const numberType = Number(contTickets);
  console.log(numberType)
  if (selectedValue === 'permanent') {
    summary = numberType * 20;
  } else if (selectedValue === 'temporary') {
    summary = numberType * 25;
  } else if (selectedValue === 'combined') {
    summary = numberType * 40;
  }
  return summary;
}

function calculatePrice65(contTickets) {
  const selectedValue = document.querySelector('input[name="type-ticket"]:checked').value;
  let summary = 0;
  const numberType = Number(contTickets);
  console.log(numberType)
  if (selectedValue === 'permanent') {
    summary = numberType * 10;
  } else if (selectedValue === 'temporary') {
    summary = numberType * 12;
  } else if (selectedValue === 'combined') {
    summary = numberType * 20;
  }
  return summary;
}

function refreshTotalPrice() {
  totalPrice.innerHTML = `Total €${summary18 + summary65}`
}

// plus18.addEventListener('click', () => {
//   summary18 = calculatePrice18(ticket18.value)
//   refreshTotalPrice()
// })

// minus18.addEventListener('click', () => {
//   summary18 = calculatePrice18(ticket18.value)
//   refreshTotalPrice()
// })

// plus65.addEventListener('click', () => {
//   summary65 = calculatePrice65(ticket65.value)
//   refreshTotalPrice()
// })

// minus65.addEventListener('click', () => {
//   summary65 = calculatePrice65(ticket65.value)
//   refreshTotalPrice()
// })


const plusBtn18All = document.querySelectorAll('.plusBtn18');
const arrPlusBtn18 = Array.from(plusBtn18All);

const plusBtn65All = document.querySelectorAll('.plusBtn65');
const arrPlusBtn65 = Array.from(plusBtn65All);

const minusBtn18All = document.querySelectorAll('.minusBtn18');
const arrMinusBtn18 = Array.from(minusBtn18All);

const minusBtn65All = document.querySelectorAll('.minusBtn65');
const arrMinusBtn65 = Array.from(minusBtn65All);

const countTickets18 = document.querySelectorAll('.countTickets18');
const arrCountTickets18 = Array.from(countTickets18);

let supportNumber = '0';

function updateArray(arr) {
  if (arr[1] === supportNumber) {
    arr[1] = arr[0]; 
    supportNumber = arr[0];
    localStorage.setItem('supportNumber', supportNumber);
  } else if (arr[0] === supportNumber) {
    arr[0] = arr[1]; 
    supportNumber = arr[1];
    localStorage.setItem('supportNumber', supportNumber);
  }
  console.log(arr)
}

function synchronizeTickets18() {
  const arrCountTicket = [];
  arrCountTickets18.forEach((el) => {
    arrCountTicket.push(el.value)
  })
  updateArray(arrCountTicket)
  console.log(arrCountTicket)
  arrCountTickets18.forEach((el,index) => {
    el.value = arrCountTicket[index]
  })
}

arrPlusBtn18.forEach((el)=> {
  el.addEventListener('click',() => { 
    console.log('check plus18')
    summary18 = calculatePrice18(ticket18.value)
    refreshTotalPrice()
    synchronizeTickets18()
  })
})

arrMinusBtn18.forEach((el)=> {
  el.addEventListener('click',() => { 
    console.log('check minus18')
    summary18 = calculatePrice18(ticket18.value)
    refreshTotalPrice()
    synchronizeTickets18()
  })
})

arrPlusBtn65.forEach((el)=> {
  el.addEventListener('click',() => { 
    console.log('check plus65')
    summary65 = calculatePrice65(ticket65.value)
    refreshTotalPrice()
  })
})

arrMinusBtn65.forEach((el)=> {
  el.addEventListener('click',() => { 
    console.log('check minus65')
    summary65 = calculatePrice65(ticket65.value)
    refreshTotalPrice()
  })
})

window.addEventListener('beforeunload', () => {
  localStorage.setItem('countTickets18', ticket18.value);
  localStorage.setItem('countTickets65', ticket65.value);
})

window.addEventListener('DOMContentLoaded', () => {
  const countTickets18 = Number(JSON.parse(localStorage.getItem('countTickets18')));
  const countTickets65 = Number(JSON.parse(localStorage.getItem('countTickets65')));
  const savedSupportNumber = JSON.parse(localStorage.getItem('supportNumber'));
  if(savedSupportNumber !== supportNumber && savedSupportNumber !== null) {
    supportNumber = String(savedSupportNumber)
  }
  summary18 = calculatePrice18(countTickets18)
  summary65 = calculatePrice65(countTickets65)
  ticket18.value = countTickets18;
  ticket65.innerText = countTickets65;
  refreshTotalPrice()
});

// ------------------------------------ tickets Type ------------------------------------------

const ticketsType = document.querySelectorAll('.tickets__subwrap-radio');

const arrTicketsType = Array.from(ticketsType);

arrTicketsType.forEach((item) => {
  item.addEventListener('click', ()=> {
    summary18 = calculatePrice18(ticket18.value)
    summary65 = calculatePrice65(ticket65.value)
    refreshTotalPrice()
  })
})

// ---------------------- buyForma ---------------------

const btnBuy = document.getElementById('btnBuy');

const wrap = document.querySelector('.wrap');
const bodyTag = document.getElementById('body');

function onOffmain() {
  console.log(bodyTag.offsetHeight)
}

btnBuy.addEventListener('click', () => {
  const courtain = document.createElement('div');
  courtain.classList.add('shadow');
  bodyTag.prepend(courtain)
  courtain.style.height = wrap.offsetHeight + 'px';
  bodyTag.classList.add('scroll-stop');

  courtain.addEventListener('click', () => {
    courtain.remove()
  })
})


