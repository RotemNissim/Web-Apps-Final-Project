// public/carousel.js
document.addEventListener('DOMContentLoaded', () => {
  const carouselContainer = document.querySelector('.carousel-container');
  const carouselPrev = document.querySelector('.carousel-prev');
  const carouselNext = document.querySelector('.carousel-next');
  
  const productsPerSlide = 3;
  let currentIndex = 0;
  
  // Fetch products for carousel and populate the carousel
  fetch('/dishes/api?limit=9')
    .then(response => response.json())
    .then(products => {
      
      function updateCarousel() {
        carouselContainer.innerHTML = ''; // Clear previous content
        for (let i = currentIndex; i < currentIndex + productsPerSlide; i++) {
          const product = products[i % products.length]; // Create a loop effect
          const productElement = document.createElement('div');
          productElement.classList.add('product');
          productElement.innerHTML = `
            <img src="${product.imgUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <span>Price: ${product.Price}₪</span>
          `;
          carouselContainer.appendChild(productElement);
        }
      }
  
      updateCarousel();
  
      carouselPrev.addEventListener('click', (event) => {
        event.preventDefault();
        currentIndex = (currentIndex - productsPerSlide + products.length) % products.length;
        updateCarousel();
        event.stopPropagation();
      });
  
      carouselNext.addEventListener('click', (event) => {
        event.preventDefault();
        currentIndex = (currentIndex + productsPerSlide) % products.length;
        updateCarousel();
        event.stopPropagation();
      });
    });
});
