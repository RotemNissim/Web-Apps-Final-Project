function createRestaurant() {
    const name = $('#name').val();
    const address = $('#address').val();
    const cuisine = $('#cuisine').val();
    const dishes = $('#dishes').val();

    const newRest = {
        name: name,
        address: address,
        cuisine: cuisine,
        dishes: dishes
    };

    console.log("sending data:",newRest);
    $.ajax({
        type: 'POST',
        url: '/admin/api/createRestaurant',
        data: JSON.stringify(newRest),
        contentType: 'application/json',
        dataType: 'json',
        success: function(data) {
            console.log('Restaurant created successfully',data);
        },
        error: function(error) {
            console.error('error creating restaurant',error);
        }
    });
}