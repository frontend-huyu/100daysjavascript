const btn = document.querySelector('.btn');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const error = document.querySelector('.error');

const bill = document.getElementById('bill')
const rate = document.getElementById('rate');

const hideError = () => {
  return setTimeout(() => {
    error.style.display = 'none';
  }, 5000);
};

const calculateTip = () => {
  let billValue = bill.value;
  let rateValue = rate.value;
  
  if (Number(billValue) === 0 || isNaN(billValue)) {
    error.textContent = 'Please add a number';
    error.style.display = 'block';
    hideError();
    tip.textContent = `Tip Amount: $0`;
    total.textContent = `Total Amount: $0`;
  } else if (Number(rateValue) < 0.05) {
    error.textContent = 'At least 5% included';
    error.style.display = 'block';
    hideError();
    tip.textContent = `Tip Amount: $0`;
    total.textContent = `Total Amount: $0`;
  } else {
    let tipAmount = Number(billValue) * Number(rateValue);
    // tipAmount = Math.ceil(tipAmount);
    tip.textContent = `Tip Amount: $${tipAmount}`;

    let totalBill = Number(billValue) + tipAmount;
    total.textContent = `Total Amount: $${totalBill}`;
  }
}

btn.addEventListener('click', calculateTip);