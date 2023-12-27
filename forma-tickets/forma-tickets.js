const dateTicket = document.getElementById('start');
const date = document.getElementById('date');

const timeDate = document.getElementById('timeDate')
const resultTime = document.getElementById('resultTime')

const resultData = document.getElementById('resultData');

const ticketType = document.getElementById('ticketType');
const typeSelectTicket = document.getElementById('typeSelectTicket');
const resultType = document.getElementById('resultType');


dateTicket.addEventListener('change', () => {
  const selectedDate = new Date(dateTicket.value);
  const currentDate = new Date();
  if (selectedDate < currentDate) {
    dateTicket.value = ''; 
    resultData.innerText = 'Forbidden';
    date.innerText = 'Forbidden';
    resultData.classList.add('false-validation')
    date.style.padding = '0px';
  } else {
    resultData.classList.remove('false-validation')
    date.innerText = dateTicket.value;
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };
    const formattedDate = selectedDate.toLocaleDateString('en-US', options);
    resultData.innerText = formattedDate;
    date.style.padding = '0px';
  }
});


timeDate.addEventListener('change', () => {
  console.log()
  resultTime.innerText = timeDate.value;
})

ticketType.addEventListener('change', () => {
  typeSelectTicket.innerText = ticketType.value;
  resultType.innerText = ticketType.value;
  refreshPreorder()
})

// ------------------------------- validation ----------------------------------

const phoneInput = document.getElementById('phoneCustomer');
const phonePattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
phoneInput.value = '';

phoneInput.addEventListener('change', () => {
  if (phonePattern.value === phoneInput.value) {
    phoneInput.setCustomValidity('');
  } else {
    phoneInput.setCustomValidity('Please enter a valid phone number');
    phoneInput.value = 'Please enter a valid phone number';
    phoneInput.classList.add('false-validation')
  }
});

phoneInput.addEventListener('click', () => {
  phoneInput.classList.remove('false-validation')
  phoneInput.value = '';
});

const emailInput = document.getElementById('e-mailCustomer');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
emailInput.value = '';

emailInput.addEventListener('blur', () => {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('false-validation')
    emailInput.value = 'Please enter a valid e-mail';
  }
});

emailInput.addEventListener('click', () => {
  emailInput.classList.remove('false-validation')
  emailInput.value = '';
});



const nameInput = document.getElementById('nameCustomer');
nameInput.value = '';

nameInput.addEventListener('change', () => {
  const name = nameInput.value;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (nameRegex.test(name)) {
    nameInput.setCustomValidity('');
  } else {
    nameInput.classList.add('false-validation')
    nameInput.value = 'Please enter a valid name';
  }
});


nameInput.addEventListener('click', () => {
  nameInput.classList.remove('false-validation')
  nameInput.value = '';
});


// ------------------------------- overview --------------------------

const formaCountBtn = document.querySelectorAll('.forma-tickets__button')
const arrFormaCountBtn = Array.from(formaCountBtn);

function refreshPreorder() {
  const countBasic = document.getElementById('countBasic');
  const countSenior = document.getElementById('countSenior');
  const priceBasic = document.getElementById('priceBasic');
  const totalBasic = document.getElementById('totalBasic');
  const priceSenior = document.getElementById('priceSenior');
  const totalSenior = document.getElementById('totalSenior');
  

  const ticket18forma = document.getElementById('ticket18forma');
  const ticket65forma = document.getElementById('ticket65forma');
  const oneTicket18 = document.getElementById('oneTicket18');
  const oneTicket65 = document.getElementById('oneTicket65');
  const ticketType = document.getElementById('ticketType');


  const totalPricePreorder = document.getElementById('totalPricePreorder');
  
  countBasic.innerText = ticket18forma.value;
  countSenior.innerText = ticket65forma.value;

  if(ticketType.value === 'Permanent exhibition') {
    priceBasic.innerText = `Basic (${20} €)`;
    priceSenior.innerText = `Senior (${10} €)`;
    totalBasic.innerText = `${ticket18forma.value * 20} €`;
    totalSenior.innerText = `${ticket65forma.value * 10} €`;
    totalPricePreorder.innerText = `${(ticket18forma.value * 20) + (ticket65forma.value * 10)} €`;
  } else if(ticketType.value === 'Temporary exhibition') {
    priceBasic.innerText = `Basic (${25} €)`;
    priceSenior.innerText = `Senior (${12} €)`;
    totalBasic.innerText = `${ticket18forma.value * 25} €`;
    totalSenior.innerText = `${ticket65forma.value * 12} €`;
    totalPricePreorder.innerText = `${(ticket18forma.value * 25) + (ticket65forma.value * 12)} €`;
  } else if(ticketType.value === 'Combined Admission') {
    priceBasic.innerText = `Basic (${40} €)`;
    priceSenior.innerText = `Senior (${20} €)`;
    totalBasic.innerText = `${ticket18forma.value * 40} €`;
    totalSenior.innerText = `${ticket65forma.value * 20} €`;
    totalPricePreorder.innerText = `${(ticket18forma.value * 40) + (ticket65forma.value * 20)} €`;
  }

}

refreshPreorder()

arrFormaCountBtn.forEach((el) => {
  el.addEventListener('click', () => {
    refreshPreorder()
  })
})

// ------------------------------- card number ----------------------------

const cardNumber = document.getElementById('cardNumber');
cardNumber.value = '';

cardNumber.addEventListener('change', () => {
  const valueCard = cardNumber.value;
  const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12})$/;
  if (cardNumberRegex === valueCard) {
    cardNumber.setCustomValidity('');
  } else {
    cardNumber.classList.add('false-validation')
    cardNumber.value = 'Invalid credit card number';
  }
  console.log('change')
});

cardNumber.addEventListener('click', () => {
  cardNumber.classList.remove('false-validation')
  cardNumber.value = '';
});