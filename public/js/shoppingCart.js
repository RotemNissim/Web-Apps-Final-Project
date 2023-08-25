document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const addToCartButton = document.getElementById('addToCartBtn');

  addToCartButton.addEventListener('click', () => {
    const productName = addToCartButton.getAttribute('data-name');
    const productPrice = addToCartButton.getAttribute('data-price');

    // Add the product to the cart
    cart.push({
      name: productName,
      price: productPrice,
    });
console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = `/shoppingCart?cart=${encodeURIComponent(JSON.stringify(cart))}`;
    // You might also want to display a message to the user
    alert('Product added to cart!');
  });

  // ... Your previous cart rendering logic here ...
});
