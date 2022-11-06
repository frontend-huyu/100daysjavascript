// trigger
const btn = document.querySelector('.btn');
// output
const coupon = document.querySelector('.coupon');

const randomCoupon = () => {
  let value = Math.random().toString(16).substring(2, 10);
  console.log(value);
  coupon.value = value;
};

const copyText = (e) => {
  e.preventDefault();
  const couponValue = coupon.value;

  // focus and select all the text in the <input> element
  coupon.focus();
  coupon.select();

  // or select part/all of the text
  coupon.setSelectionRange(0, couponValue.length);
  // difference: select() => all text; setSelectionRange() => part or all text

  // solution 1 // document.execCommand is Deprecated
  // document.execCommand("copy");
  // btn.textContent = "Copied!!";
  // setTimeout(() => {
  //   btn.textContent = "Copy";
  // }, 2000);

  /**
   * Press button to copy text:
   * document.execCommand is Deprecated
   * Clipboard API will return Promise
   * need Permissions API returns true
   */
  navigator.clipboard.writeText(couponValue).then(
    () => {
      btn.textContent = 'Copied!!';
      alert('Successfully copied!');
      setTimeout(() => {
        btn.textContent = 'Copy';
      }, 1000);
    },
    (err) => alert('Please refresh the page.')
  );
};

window.addEventListener('load', randomCoupon);
btn.addEventListener('click', copyText);
