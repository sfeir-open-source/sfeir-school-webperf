document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    if (event.target.id === 'increase-qty') {
      let quantityInput = document.getElementById('quantity');
      let qty = parseInt(quantityInput.value, 10) || 0;
      quantityInput.value = qty + 1;
    }

    if (event.target.id === 'decrease-qty') {
      let quantityInput = document.getElementById('quantity');
      let qty = parseInt(quantityInput.value, 10) || 0;
      if (qty > 1) {
        quantityInput.value = qty - 1;
      }
    }
  });
});
