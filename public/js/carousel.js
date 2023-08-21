// public/carousel.js
const carouselContainer = document.querySelector('.carousel');

// Fetch products for carousel
fetch('/dishes/api?limit=5')
  .then(response => response.json())
  .then(products => {
    // Populate the carousel with fetched product data
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.imgUrl}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <span>Price:${product.Price}₪</span>
        
      `;
      carouselContainer.appendChild(productElement);
    });
  });
