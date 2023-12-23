// const selectedValue = document.querySelector('input[name="type-ticket"]:checked').value;

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

plus18.addEventListener('click', () => {
  summary18 = calculatePrice18(ticket18.value)
  refreshTotalPrice()
})

minus18.addEventListener('click', () => {
  summary18 = calculatePrice18(ticket18.value)
  refreshTotalPrice()
})

plus65.addEventListener('click', () => {
  summary65 = calculatePrice65(ticket65.value)
  refreshTotalPrice()
})

minus65.addEventListener('click', () => {
  summary65 = calculatePrice65(ticket65.value)
  refreshTotalPrice()
})


window.addEventListener('beforeunload', () => {
  localStorage.setItem('countTickets18', ticket18.value);
  localStorage.setItem('countTickets65', ticket65.value);
})

window.addEventListener('load', () => {
  const countTickets18 = Number(JSON.parse(localStorage.getItem('countTickets18')));
  const countTickets65 = Number(JSON.parse(localStorage.getItem('countTickets65')));
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
    // console.log('check94',item.value)

    // console.log(ticket18.value)
    // console.log(ticket65.value)
  })
})