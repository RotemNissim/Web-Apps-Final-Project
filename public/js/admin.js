// admin-script.js

// Make an HTTP GET request to the server's API endpoint for getting dishes
fetch('http://localhost:8080/dishes/api')
  .then(response => response.json())
  .then(data => {
    // Update the admin page's content with the fetched data
    displayDishes(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Function to update the admin page with fetched dishes
function displayDishes(dishes) {
  const adminDataContainer = document.getElementById('adminDataContainer');

  // Generate HTML to display the fetched dishes
  const dishesHTML = dishes.map(dish => `
    <p>Dish ID: ${dish._id}</p>
    <p>Name: ${dish.name}</p>
    <p>Type: ${dish.type}</p>
    <!-- ... Other dish properties you want to display -->
    <hr>
  `).join('');
  adminDataContainer.innerHTML = dishesHTML;
}
$(document).ready(() => {
  // Your jQuery code here
  
  $('#search-button').on('click', async () => {
    // ... Existing code for fetching dishes
  });

  $('#admin-register-button').on('click', () => {
    const username = $('#admin-username').val();
    const password = $('#admin-password').val();

    const newAdmin = {
      username: username,
      password: password
    };

    console.log("Sending data:", newAdmin);

    $.ajax({
      type: 'POST',
      url: '/admin/api/createAdmin', // Route to handle admin creation on the server side
      data: JSON.stringify(newAdmin),
      contentType: 'application/json',
      dataType: 'json',
      success: function(data) {
        console.log('Admin created successfully', data);
        // Handle the response here (e.g., show success message)
      },
      error: function(error) {
        console.error('Error creating admin:', error);
        // Handle the error here (e.g., show error message)
      }
    });
  });
  
  // Other jQuery code here
});

// Other vanilla JavaScript code here
