$(document).ready(function () {
  $(document).on('click', '#increase-qty', function () {
    let qty = parseInt($('#quantity').val(), 10) || 0;
    $('#quantity').val(qty + 1);
  });

  $(document).on('click', '#decrease-qty', function () {
    let qty = parseInt($('#quantity').val(), 10) || 0;
    if (qty > 1) {
      $('#quantity').val(qty - 1);
    }
  });
});
