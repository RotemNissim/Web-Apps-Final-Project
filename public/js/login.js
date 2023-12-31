const renderError = ({ errors }) => {
  const errorsElement = document.getElementById("errors-container");

  errorsElement.innerHTML = "";

  for (let i = 0; i < errors.length; i++) {
    const errorElement = document.createElement("div");
    errorElement.innerHTML = errors[i];
    errorsElement.appendChild(errorElement);
  }

  errorsElement.style.display = "block";
};

const handleLogin = () => {
  const username = $("#username").val();
  const password = $("#password").val();

  const clientSideValidationErrors = [];

  if (username.length == 0) {
    clientSideValidationErrors.push(`Username can't be empty`);
  }

  if (password.length == 0) {
    clientSideValidationErrors.push(`password can't be empty`);
  }

  if (clientSideValidationErrors.length > 0) {
    renderError({ errors: clientSideValidationErrors });
  } else {
    $.ajax({
      url: "/login",
      method: "POST",
      data:JSON.stringify( { username, password }),
      contentType: "application/json",
      followRedirects: true,
      xhrFields: { withCredentials: true },
      success: function (data, textStatus, jqXHR) {
        if (jqXHR.status == 200) {
          const path = window.location.search.split("=")[1]
          window.location.href = path;
        } else {
        }
      },
      error: function (error) {
        renderError(error.responseJSON);
      },
    });
  }
};