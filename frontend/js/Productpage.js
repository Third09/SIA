const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const qty = document.getElementById('quantity');

plus.addEventListener('click', () => {
  qty.value = parseInt(qty.value) + 1;
});

minus.addEventListener('click', () => {
  if (parseInt(qty.value) > 1) qty.value = parseInt(qty.value) - 1;
});

