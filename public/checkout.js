// public/checkout.js
const checkoutForm = document.getElementById('checkoutForm');

checkoutForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const address = e.target.address.value;
  // Additional data like payment, date, and time can be obtained here

  // Send checkout data to the server and process the order
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ address }),
  });

  if (response.ok) {
    // Handle successful order, e.g., redirect to success page
    window.location.href = '/success.html';
  } else {
    // Handle order error, e.g., display an error message
    console.error('Order failed');
  }
});
checkoutForm.addEventListener('submit', async (e) => {
    // ... (previous code)
  
    if (response.ok) {
      // Determine whether it's a delivery or reservation
      const actionType = /* Determine action type based on your logic */
      window.location.href = `/success.html?action=${actionType}`;
    } else {
      // Handle order error, e.g., display an error message
      console.error('Order failed');
    }
  });
