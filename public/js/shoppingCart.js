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


document.addEventListener('DOMContentLoaded', function () {
  const removeButtons = document.querySelectorAll('.btn-remove');
  
  removeButtons.forEach(button => {
      button.addEventListener('click', function () {
          const productId = button.getAttribute('data-product-id');
          removeProductFromCart(productId);
      });
  });
});

function removeProductFromCart(productName) {
 // Get the cart items from local storage
 const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

 // Find the index of the product with the matching productId
 const index = cartItems.findIndex(item => item.name === productName);

 if (index !== -1) {
     // Remove the product from the cart
     cartItems.splice(index, 1);
     
     // Update local storage with the modified cart
     localStorage.setItem('cart', JSON.stringify(cartItems));
     
     // Refresh the page to reflect the updated cart
     window.location.reload();
 }
}
