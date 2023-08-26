function createAdmin() {
  const username = $('#username-field').val();
  const password = $('#password-field').val();

  const newAdmin = {
    username: username,
    password: password
  };

  (newAdmin);

  $.ajax({
    type: 'POST',
    url: '/admin/api/createAdmin',
    data: JSON.stringify(newAdmin),
    contentType: 'application/json',
    dataType: 'json',
    success: function (data) {
      ('admin created successfully', newAdmin);
    },
    error: function(error) {
      console.error('error creating admin', error);
    }
  });
}
function deleteDish(id) {
  $.ajax({
      url: '/admin/api/deleteDish',
      method: "DELETE",
      data: { id },
      followRedirects: true,
      xhrFields: { withCredentials: true },
      success: function (data, textStatus, jqXHR) {
        alert("Dish Removed!");
        location.reload();
      },
      error: function () {
        alert("Uable to delete this dish!");
      },
  });
}