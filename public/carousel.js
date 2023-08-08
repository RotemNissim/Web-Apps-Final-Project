// public/carousel.js
const carouselContainer = document.querySelector('.carousel');

// Fetch products for carousel
fetch('/carousel/products')
  .then(response => response.json())
  .then(products => {
    // Populate the carousel with fetched product data
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <span>Price: $${product.price}</span>
      `;
      carouselContainer.appendChild(productElement);
    });
  });
