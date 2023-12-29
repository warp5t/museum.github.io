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
  if (selectedValue === 'Permanent exhibition') {
    summary = numberType * 20;
  } else if (selectedValue === 'Temporary exhibition') {
    summary = numberType * 25;
  } else if (selectedValue === 'Combined Admission') {
    summary = numberType * 40;
  }
  console.log('calculatePrice18')
  return summary;
}

function calculatePrice65(contTickets) {
  const selectedValue = document.querySelector('input[name="type-ticket"]:checked').value;
  let summary = 0;
  const numberType = Number(contTickets);
  console.log(numberType)
  if (selectedValue === 'Permanent exhibition') {
    summary = numberType * 10;
  } else if (selectedValue === 'Temporary exhibition') {
    summary = numberType * 12;
  } else if (selectedValue === 'Combined Admission') {
    summary = numberType * 20;
  }
  return summary;
}

function refreshTotalPrice() {
  totalPrice.innerHTML = `Total €${summary18 + summary65}`
}

const plusBtn65All = document.querySelectorAll('.plusBtn65');
const arrPlusBtn65 = Array.from(plusBtn65All);

const minusBtn65All = document.querySelectorAll('.minusBtn65');
const arrMinusBtn65 = Array.from(minusBtn65All);

const minusBtn18All = document.querySelectorAll('.minusBtn18');
const arrMinusBtn18 = Array.from(minusBtn18All);

const plusBtn18All = document.querySelectorAll('.plusBtn18');
const arrPlusBtn18 = Array.from(plusBtn18All);

const countTickets18 = document.querySelectorAll('.countTickets18');
const arrCountTickets18 = Array.from(countTickets18);

const countTickets65 = document.querySelectorAll('.countTickets65');
const arrCountTickets65 = Array.from(countTickets65);


let supportNumber18 = '0',
  supportNumber65 = '0';

function updateArray18(arr) {
  if (arr[1] === supportNumber18) {
    arr[1] = arr[0];
    supportNumber18 = arr[0];
  } else if (arr[0] === supportNumber18) {
    arr[0] = arr[1];
    supportNumber18 = arr[1];
  }
}

function updateArray65(arr) {
  if (arr[1] === supportNumber65) {
    arr[1] = arr[0];
    supportNumber65 = arr[0];
  } else if (arr[0] === supportNumber65) {
    arr[0] = arr[1];
    supportNumber65 = arr[1];
  }
}

function synchronizeTickets18(arr) {
  arrCountTickets18.forEach((el) => {
    arr.push(el.value)
  })
  updateArray18(arr)
  localStorage.setItem('supportNumber18', supportNumber18);
  console.log(arr)
  arrCountTickets18.forEach((el, index) => {
    el.value = arr[index]
  })
}

function synchronizeTickets65(arr) {
  arrCountTickets65.forEach((el) => {
    arr.push(el.value)
  })
  updateArray65(arr)
  localStorage.setItem('supportNumber65', supportNumber65);
  console.log(arr)
  arrCountTickets65.forEach((el, index) => {
    el.value = arr[index]
  })
}

function wrapRefresh18() {
  const arrCountTicket = [];
  synchronizeTickets18(arrCountTicket)
  console.log('check plus18')
  summary18 = calculatePrice18(arrCountTicket[0])
  refreshTotalPrice()
}

function wrapRefresh65() {
  const arrCountTicket = [];
  synchronizeTickets65(arrCountTicket)
  console.log('check plus65')
  summary65 = calculatePrice65(arrCountTicket[0])
  refreshTotalPrice()
}

arrPlusBtn18.forEach((el) => {
  el.addEventListener('click', () => {
    wrapRefresh18()
  })
})

arrMinusBtn18.forEach((el) => {
  el.addEventListener('click', () => {
    wrapRefresh18()
  })
})

arrPlusBtn65.forEach((el) => {
  el.addEventListener('click', () => {
    wrapRefresh65()
  })
})

arrMinusBtn65.forEach((el) => {
  el.addEventListener('click', () => {
    wrapRefresh65()
  })
})

window.addEventListener('beforeunload', () => {
  localStorage.setItem('countTickets18', ticket18.value);
  localStorage.setItem('countTickets65', ticket65.value);
})

window.addEventListener('DOMContentLoaded', () => {
  const countTickets18 = Number(JSON.parse(localStorage.getItem('countTickets18')));
  const countTickets65 = Number(JSON.parse(localStorage.getItem('countTickets65')));
  const savedSupportNumber18 = JSON.parse(localStorage.getItem('supportNumber18'));
  const savedSupportNumber65 = JSON.parse(localStorage.getItem('supportNumber65'));
  if (savedSupportNumber18 !== supportNumber18 && savedSupportNumber18 !== null) {
    supportNumber18 = String(savedSupportNumber18)
  }
  if (savedSupportNumber65 !== supportNumber65 && savedSupportNumber65 !== null) {
    supportNumber65 = String(savedSupportNumber65)
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
  item.addEventListener('click', () => {
    summary18 = calculatePrice18(ticket18.value)
    summary65 = calculatePrice65(ticket65.value)
    refreshTotalPrice()
  })
})

