// username password firstName lastName userTaz

function createUser() {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const username = $('#username').val();
    const userTaz = $('#userTaz').val();
    const password = $('#password').val();
   
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        userTaz: userTaz,
        password: password,
    
    };
  

    ("Sending data:", newUser);
    $.ajax({
      type: 'POST',
      url: '/users/signup', // Route to handle the user creation on the server side
      data: JSON.stringify(newUser),
      contentType: 'application/json', // Set the content type to JSON
      dataType: 'json', //
      success: function(data) {
        // Handle the response here (e.g., show success message)
        ('User created successfully', data);
        window.location.href = '/users/' + data.id;
      },
      error: function(error) {
        // Handle the error here (e.g., show error message)
        console.error('Error creating User:', error.responseJSON);
      }
    });
  }
  
  
  
  