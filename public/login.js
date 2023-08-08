// public/login.js
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;

  // Send login data to the server
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    // Handle successful login, e.g., redirect to user dashboard
    window.location.href = '/dashboard.html';
  } else {
    // Handle login error, e.g., display an error message
    console.error('Login failed');
  }
});
