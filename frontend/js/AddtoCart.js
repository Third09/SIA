// Load cart data (from localStorage or start empty)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render cart items on page
function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("total-price").innerText = "0 PHP";
    return;
  }

  cart.forEach((item, index) => {
    container.innerHTML += `
      <div class="cart-item">
        <div class="left">
          <input type="checkbox" ${item.selected ? "checked" : ""} onchange="toggleSelect(${index}, this)">
          <div class="product-image" style="background-image:url('${item.img || ''}')"></div>
          <div class="product-info">
            <p class="product-name">${item.name}</p>
            <p class="description">${item.desc}</p>
            <p class="variation">${item.variation}</p>
            <p class="price">${item.price} PHP</p>
          </div>
        </div>
        <div class="right">
          <div class="quantity">
            <button onclick="updateQty(${index}, 'sub')">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQty(${index}, 'add')">+</button>
          </div>
          <button class="remove" onclick="removeItem(${index})">×</button>
        </div>
      </div>
    `;
  });

  updateTotal();
}

// Update item quantity
function updateQty(index, action) {
  if (action === "add") cart[index].quantity++;
  if (action === "sub" && cart[index].quantity > 1) cart[index].quantity--;
  saveCart();
}

// Toggle individual selection
function toggleSelect(index, checkbox) {
  cart[index].selected = checkbox.checked;
  saveCart();
}

// Toggle all selection
function toggleSelectAll(checkbox) {
  cart.forEach(item => item.selected = checkbox.checked);
  saveCart();
}

// Remove an item
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

// Save to localStorage and re-render
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Calculate total price
function updateTotal() {
  let total = 0;
  cart.forEach(item => {
    if (item.selected) total += item.price * item.quantity;
  });
  document.getElementById("total-price").innerText = `${total.toLocaleString()} PHP`;
}

// Initial render when page loads
renderCart();
