const handleOrderSubmission = () => {
   const user = $('#user').val();
   const email = $('#email').val();
if (user === "" || !/^[A-Za-z\s]+$/.test(user)) {
    alert("Please enter a valid username");
        return false;
    }
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    orderSubmittion({user, email});
    return false;
};
