function initFormaTicket() {

  const dateTicket = document.getElementById('start');
  const date = document.getElementById('date');

  const timeDate = document.getElementById('timeDate')
  const resultTime = document.getElementById('resultTime')

  const resultData = document.getElementById('resultData');

  const ticketType = document.getElementById('ticketType');
  const typeSelectTicket = document.getElementById('typeSelectTicket');
  const resultType = document.getElementById('resultType');

  const ticket18 = document.getElementById('ticket18');
  const ticket65 = document.getElementById('ticket65');
  const ticket18forma_0 = document.getElementById('ticket18forma');
  const ticket65forma_0 = document.getElementById('ticket65forma');
  ticket18forma_0.value = ticket18.value;
  ticket65forma_0.value = ticket65.value;

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

  function wrapTicketChange() {
    typeSelectTicket.innerText = ticketType.value;
    resultType.innerText = ticketType.value;
    refreshPreorder()
    console.log('wrapTicketChange 54')
  }

  ticketType.addEventListener('change', () => {
    wrapTicketChange()
    console.log('click 59', ticketType.value)
  })

  const selectedValue = document.querySelector('input[name="type-ticket"]:checked').value
  typeSelectTicket.innerText = selectedValue;
  resultType.innerText = selectedValue;

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
    const priceBasic = document.getElementById('priceBasic');
    const totalBasic = document.getElementById('totalBasic');
    const priceSenior = document.getElementById('priceSenior');
    const totalSenior = document.getElementById('totalSenior');
    const countBasic = document.getElementById('countBasic');
    const countSenior = document.getElementById('countSenior');

    const ticket18forma = document.getElementById('ticket18forma');
    const ticket65forma = document.getElementById('ticket65forma');

    countBasic.innerText = ticket18forma.value;
    countSenior.innerText = ticket65forma.value;
    
    const totalPricePreorder = document.getElementById('totalPricePreorder');

    if (typeSelectTicket.innerText === 'Permanent exhibition') {
      priceBasic.innerText = `Basic (${20} €)`;
      priceSenior.innerText = `Senior (${10} €)`;
      totalBasic.innerText = `${ticket18forma.value * 20} €`;
      totalSenior.innerText = `${ticket65forma.value * 10} €`;
      totalPricePreorder.innerText = `${(ticket18forma.value * 20) + (ticket65forma.value * 10)} €`;
    } else if (typeSelectTicket.innerText === 'Temporary exhibition') {
      priceBasic.innerText = `Basic (${25} €)`;
      priceSenior.innerText = `Senior (${12} €)`;
      totalBasic.innerText = `${ticket18forma.value * 25} €`;
      totalSenior.innerText = `${ticket65forma.value * 12} €`;
      totalPricePreorder.innerText = `${(ticket18forma.value * 25) + (ticket65forma.value * 12)} €`;
    } else if (typeSelectTicket.innerText === 'Combined Admission') {
      console.log('tek-dek-tek')
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

  // ------------------------------- card ------------------------------

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

  const ownerCardInput = document.getElementById('ownerCard');
  ownerCardInput.value = '';

  ownerCardInput.addEventListener('input', () => {
    const ownerName = ownerCardInput.value;
    const ownerNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (ownerNameRegex.test(ownerName)) {
      ownerCardInput.setCustomValidity('');
    } else {
      ownerCardInput.classList.add('false-validation')
      ownerCardInput.value = 'Invalid credit card number';
    }
  });

  ownerCardInput.addEventListener('click', () => {
    ownerCardInput.classList.remove('false-validation')
    ownerCardInput.value = '';
  });

}

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

  const wrapFormaTicket = document.createElement('div');
  wrapFormaTicket.classList.add('wrap-forma-ticket');
  wrapFormaTicket.innerHTML = formaTicketHTML;
  const yCoord = window.scrollY || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;
  const offset = yCoord + 0.25 * viewportHeight;
  wrapFormaTicket.style.top = offset + 'px';
  document.body.prepend(wrapFormaTicket);

  initFormaTicket()

  courtain.addEventListener('click', () => {
    courtain.remove()
    wrapFormaTicket.remove()
    bodyTag.classList.remove('scroll-stop');
  })

  const closeCross = document.getElementById('close-cross');

  closeCross.addEventListener('click', () => {
    console.log('close')
    courtain.remove()
    wrapFormaTicket.remove()
    bodyTag.classList.remove('scroll-stop');
  })
})

var formaTicketHTML = `
<div class="forma-tickets border-1023">
<div class="forma-tickets__close-cross" id="close-cross">
  <img src="/forma-tickets/Close(1).svg" alt="icon">
</div>
<div class="forma-tickets__contaiter _container">
  <div class="forma-tickets__sub-containter">
    <div class="forma-tickets__wrap-logo">
      <img src="forma-tickets/logo.png" alt="logo">
    </div>
    <h2 class="forma-tickets__title">booking tickets</h2>
    <div class="forma-tickets__tour-to-louvre">
      Tour to Louvre
    </div>
    <fieldset class="forma-tickets__forma-tickets forma-tickets">
      <div class="forma-tickets__data-time">
        <div class="forma-tickets__wrap-data">
          <div class="forma-tickets__wrap-icon-forma">
            <img class="forma-tickets__icon" src="forma-tickets/date.svg" alt="date">
          </div>
          <div id="date">Date</div>
          <input class="forma-tickets__data" type="date" id="start" name="date">
        </div>
        <div class="forma-tickets__wrap-time">
          <div class="forma-tickets__wrap-icon-forma">
            <img class="forma-tickets__icon" src="forma-tickets/time.svg" alt="date">
          </div>
          <select class="forma-tickets__time" name="timeDate" id="timeDate">
            <option value="none">Time</option>
            <option value="9 : 00">9:00</option>
            <option value="9 : 30">9:30</option>
            <option value="10 : 00">10:00</option>
            <option value="10 : 30">10:30</option>
            <option value="11 : 00">11:00</option>
            <option value="11 : 30">11:30</option>
            <option value="12 : 00">12:00</option>
            <option value="12 : 30">12:30</option>
            <option value="13 : 00">13:00</option>
            <option value="13 : 30">13:30</option>
            <option value="14 : 00">14:00</option>
            <option value="14 : 30">14:30</option>
            <option value="15 : 00">15:00</option>
            <option value="15 : 30">15:30</option>
            <option value="16 : 00">16:00</option>
            <option value="16 : 30">16:30</option>
            <option value="17 : 00">17:00</option>
            <option value="17 : 30">17:30</option>
            <option value="18 : 00">18:00</option>
          </select>
        </div>
      </div>
      <div class="forma-tickets__wrap-setting">
        <div class="forma-tickets__wrap-icon">
          <img src="forma-tickets/name.svg" alt="icon">
        </div>
        <input class="forma-tickets__data-owner" id="nameCustomer" type="text" placeholder="Name">
      </div>
      <div class="forma-tickets__wrap-setting">
        <div class="forma-tickets__wrap-icon">
          <img src="forma-tickets/email.svg" alt="icon">
        </div>
        <input class="forma-tickets__data-owner" id="e-mailCustomer" type="email" placeholder="E-mail">
      </div>
      <div class="forma-tickets__wrap-setting">
        <div class="forma-tickets__wrap-icon">
          <img src="forma-tickets/tel.svg" alt="icon">
        </div>
        <input class="forma-tickets__data-owner" id="phoneCustomer" type="tel" placeholder="Phone">
      </div>
      <div class="forma-tickets__wrap-setting">
        <div class="forma-tickets__wrap-icon">
          <img src="forma-tickets/ballot.svg" alt="icon">
        </div>
        <select class="forma-tickets__data-owner" name="ticketType" id="ticketType">
          <option value="Ticket Type">Ticket Type</option>
          <option value="Permanent exhibition">Permanent exhibition</option>
          <option value="Temporary exhibition">Temporary exhibition</option>
          <option value="Combined Admission">Combined Admission</option>
        </select>
        <div class="forma-tickets__data-owner" id="typeSelectTicket">Ticket Type</div>
      </div>
      <div class="forma-tickets__wrap-setting">
        <div class="forma-tickets__entry-ticket">Entry Ticket</div>
        <div class="forma-tickets__setting-client">
          <div class="forma-tickets__one-ticket-inf" id="oneTicket18">Basic 18+ (20 €)</div>
          <div class="forma-tickets__counter-tickets">
            <button class="forma-tickets__button minusBtn18" type="button"
              onclick="this.nextElementSibling.stepDown()">−</button>
            <input class="forma-tickets__number countTickets18" id="ticket18forma" type="number" value="0" min="0"
              max="50" readonly="">
            <button class="forma-tickets__button plusBtn18" type="button"
              onclick="this.previousElementSibling.stepUp()">+</button>
          </div>
        </div>
        <div class="forma-tickets__setting-client">
          <div class="forma-tickets__one-ticket-inf" id="oneTicket65">Senior 65+ (10 €)</div>
          <div class="forma-tickets__counter-tickets">
            <button class="forma-tickets__button minusBtn65" type="button"
              onclick="this.nextElementSibling.stepDown()">−</button>
            <input class="forma-tickets__number countTickets65" id="ticket65forma" type="number" value="0" min="0"
              max="50" readonly="">
            <button class="forma-tickets__button plusBtn65" type="button"
              onclick="this.previousElementSibling.stepUp()">+</button>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
  <div class="forma-tickets__sub-containter">
    <div class="forma-tickets__subwrap-container">
      <h3 class="forma-tickets__title-overview">
        Overview
      </h3>
      <div class="forma-tickets__tour-to-louvre-2">
        Tour to Louvre
      </div>
      <div class="forma-tickets__result-wrap">
        <img class="forma-tickets__icon-dt" src="forma-tickets/date.svg" alt="icon">
        <div class="forma-tickets__result" id="resultData">
          Friday, August 19
        </div>
      </div>
      <div class="forma-tickets__result-wrap">
        <img class="forma-tickets__icon-dt" src="forma-tickets/time.svg" alt="icon">
        <div class="forma-tickets__result" id="resultTime">
          16 : 30
        </div>
      </div>
      <div class="forma-tickets__result-wrap tech-result-wrap">
        <img class="forma-tickets__icon-dt" src="forma-tickets/check_circle_outline.svg" alt="icon">
        <div class="forma-tickets__result" id="resultType">
          Temporary exhibition
        </div>
      </div>
      <div class="forma-tickets__wrap-piramid">
        <img class="forma-tickets__piramid" src="forma-tickets/Rectangle4.jpg" alt="piramid">
      </div>
      <div class="forma-tickets__wrap-tickets-count">
        <div class="forma-tickets__wrap-info-tickets">
          <div class="forma-tickets__count-tickets" id="countBasic">2</div>
          <div class="forma-tickets__subwrap-price">
            <div class="forma-tickets__price" id="priceBasic">Basic (20 €)</div>
            <div class="forma-tickets__price" id="totalBasic">40 €</div>
          </div>
        </div>
        <div class="forma-tickets__wrap-info-tickets">
          <div class="forma-tickets__count-tickets" id="countSenior">2</div>
          <div class="forma-tickets__subwrap-price">
            <div class="forma-tickets__price" id="priceSenior">Senior (10 €)</div>
            <div class="forma-tickets__price" id="totalSenior">20 €</div>
          </div>
        </div>
      </div>
      <div class="forma-tickets__wrap-total">
        <div class="forma-tickets__text-total">Total:</div>
        <div class="forma-tickets__total total-price" id="totalPricePreorder">60 €</div>
      </div>
      <div class="forma-tickets__credit-card credit-card">
        <div class="credit-card__front-card">
          <div class="credit-card__card-subscribe">Card number</div>
          <fieldset class="credit-card__fieldset">
            <input id="cardNumber" type="text">
            <div class="credit-card__card-subscribe">Expiration date</div>
            <div class="credit-card__wrap-expiration">
            <div class="credit-card__wrap-input">
              <input class="credit-card__number" id="expitarionFrom" type="number" value="03" min="0" max="10"
                readonly>
              <div class="credit-card__wrap-buttons">
                <button class="credit-card__button" type="button" onclick="this.previousElementSibling.stepUp()">
                  <img class="credit-card__icon" src="/forma-tickets/arrow(1).svg" alt="icon">
                </button>
                <button class="credit-card__button" type="button" onclick="this.nextElementSibling.stepDown()">
                  <img class="credit-card__icon" src="/forma-tickets/arrow(2).svg" alt="icon">
                </button>
              </div>
            </div>
            <div class="credit-card__wrap-input">
              <input class="credit-card__number" id="expitarionTo" type="number" value="2024" min="0" max="10"
                readonly>
              <div class="credit-card__wrap-buttons">
                <button class="credit-card__button" type="button" onclick="this.previousElementSibling.stepUp()">
                  <img class="credit-card__icon" src="/forma-tickets/arrow(1).svg" alt="icon">
                </button>
                <button class="credit-card__button" type="button" onclick="this.nextElementSibling.stepDown()">
                  <img class="credit-card__icon" src="/forma-tickets/arrow(2).svg" alt="icon">
                </button>
              </div>
            </div>
            </div>
            <div class="credit-card__card-subscribe">Cardholder name</div>
            <input id="ownerCard" type="text">
            <div class="credit-card__wrap-logo">
              <img class="credit-card__logo" src="forma-tickets/Visa.svg" alt="icon">
              <img class="credit-card__logo" src="forma-tickets/Mastercard.svg" alt="icon">
            </div>
          </fieldset>
        </div>
        <div class="credit-card__back-card">
          <div class="credit-card__back-subwrap">
            <div class="credit-card__back-CVV">CVC/CVV</div>
            <input id="CVC-CVV" type="password" maxlength="4">
            <div class="credit-card__back-CVV">
              The last <br>
              3 or 4 digits <br>
              on back <br>
              of the card
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="credit-card__btn">Book</button>
  </div>
</div>
</div>
`;