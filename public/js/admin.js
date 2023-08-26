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