const cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function getCartTotal() {
  return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
}

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach((product, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <p>${product.name} - $${product.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  document.getElementById('cart-total').innerText = getCartTotal();
}
