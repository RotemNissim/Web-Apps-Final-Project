// Add event listener to the logout button
document.getElementById('logoutBtn').addEventListener('click', async () => {
    try {
      const response = await fetch('/logout', { method: 'GET' });
      const data = await response.json();
      if (data.message === 'Logout successful') {
        // Redirect to the home page after successful logout
        window.location.href = '/';
      } else {
        console.error('Logout failed:', data.message);
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  });
  