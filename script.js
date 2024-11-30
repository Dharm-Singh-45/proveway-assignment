document.querySelectorAll('.bogo-options input').forEach((input) => {
  input.addEventListener('change', (event) => {
    const totalPrice = document.querySelector('.total-section b');
    const selectedValue = event.target.value;

    switch (selectedValue) {
      case '1':
        totalPrice.textContent = '$10.00 USD';
        break;
      case '2':
        totalPrice.textContent = '$18.00 USD';
        break;
      case '3':
        totalPrice.textContent = '$24.00 USD';
        break;
      default:
        totalPrice.textContent = '$0.00 USD';
    }
  });
});
