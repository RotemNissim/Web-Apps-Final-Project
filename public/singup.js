// public/signup.js
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;
  const address = e.target.address.value; // Added for address

  // You should implement your signup logic here, e.g., using fetch to create a new user

  // Example fetch request (you should modify this according to your server endpoints)
  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, address }),
  });

  if (response.ok) {
    // Handle successful signup, e.g., redirect to login page
    window.location.href = '/login.html';
  } else {
    // Handle signup error, e.g., display an error message
    console.error('Signup failed');
  }
});
