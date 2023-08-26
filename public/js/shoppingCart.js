


document.addEventListener('DOMContentLoaded', function () {
  const cartContainer = document.getElementById('cart-container');
  if (cartContainer) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let items = '';
    cart.forEach(function (item) {
      items += `<div class="product">
      <p>${item.name}</p>
      <p>${item.price}</p>
      <button class="btn-remove" data-product-name="${item.name}">Remove from Cart</button>
  </div>`
    })
    cartContainer.innerHTML = items;
  }
  

  const removeButtons = document.querySelectorAll('.btn-remove');
  
  removeButtons.forEach(button => {
      button.addEventListener('click', function () {
          const productId = button.getAttribute('data-product-name');
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
