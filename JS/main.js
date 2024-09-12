function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Adicionar ao carrinho</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
  });
