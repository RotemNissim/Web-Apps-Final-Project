// admin-script.js

// Make an HTTP GET request to the server's API endpoint for getting dishes
// fetch('http://localhost:8080/dishes/api')
//   .then(response => response.json())
//   .then(data => {
//     // Update the admin page's content with the fetched data
//     displayDishes(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// // Function to update the admin page with fetched dishes
// function displayDishes(dishes) {
//   const adminDataContainer = document.getElementById('adminDataContainer');

//   // Generate HTML to display the fetched dishes
//   const dishesHTML = dishes.map(dish => `
//     <p>Dish ID: ${dish._id}</p>
//     <p>Name: ${dish.name}</p>
//     <p>Type: ${dish.type}</p>
//     <!-- ... Other dish properties you want to display -->
//     <hr>
//   `).join('');
//   adminDataContainer.innerHTML = dishesHTML;
// }

function createAdmin() {
  const username = $('#username-field').val();
  const password = $('#password-field').val();

  const newAdmin = {
    username: username,
    password: password
  };

  console.log(newAdmin);

  $.ajax({
    type: 'POST',
    url: '/admin/api/createAdmin',
    data: JSON.stringify(newAdmin),
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      console.log('admin created successfully', newAdmin);
    },
    error: function(error) {
      console.error('error creating admin', error);
    }
  });
}