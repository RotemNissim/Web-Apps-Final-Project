
$(document).ready(() => {
  // Your jQuery code here
  
  $('#search-button').on('click', async () => {
      const price = $('#max-price')[0].value;

      try {
          const response = await $.get(`/dishes/api?maxPrice=${price}`);
          let dishes = '';
          for (let i = 0; i < response.length; i++) {
              dishes += `<div class="dish">
                  <img class="dish-img" src="${response[i].imgUrl}"/>
                  <h2>${response[i].name}</h2>
                  <p>${response[i].description}</p>
                  <p>${response[i].Price}</p>
                  <!-- Add more details or formatting as needed -->
              </div>`;
          }
          $('.dishes-list').html(dishes);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  });

  // Other jQuery code here
});

// Other vanilla JavaScript code here



function createDish() {
  const name = $('#name').val();
  const price = $('#Price').val();
  const chef = $('#chef').val();
  const tags = $('#tags').val();
  const type = $('#type').val();
  const imgUrl = $('#imgUrl').val();
  const description = $('#description').val();
  const allergenics = $('#allergenics').val();
  const restaurant = $('#restaurant').val();

  const newDish = {
    name: name,
    Price: price,
    chef: chef,
    tags: tags,
    type: type,
    imgUrl: imgUrl,
    description: description,
    allergenics: allergenics,
    restaurant: restaurant
  };

  console.log("Sending data:", newDish);
  $.ajax({
    type: 'POST',
    url: '/admin/api/createDish', // Route to handle the dish creation on the server side
    data: JSON.stringify(newDish),
    contentType: 'application/json', // Set the content type to JSON
    dataType: 'json', //
    success: function(data) {
      // Handle the response here (e.g., show success message)
      console.log('Dish created successfully', data);
    },
    error: function(error) {
      // Handle the error here (e.g., show error message)
      console.error('Error creating dish:', error);
    }
  });
}



