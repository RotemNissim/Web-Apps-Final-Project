const errors = document.getElementById('errors');
$(document).ready(() => {
  $('#search-button').on('click', async () => {
    errors.innerHTML = '';
    let minPrice = $('#min-price')[0].value; // Get the minimum price
    let maxPrice = $('#max-price')[0].value; // Get the maximum price
    let searchTerm = $('#search-term').val(); // Get the search term
    const clientSideValidations = [];
    if(minPrice === '')
      minPrice = 0;
    if(maxPrice === '')
      maxPrice = 1000000000;
    minPrice = Number(minPrice);
    maxPrice = Number(maxPrice);
    if(typeof minPrice !== 'number')
      clientSideValidations.push("Mininum price is should be a number");
    if(typeof maxPrice !== 'number')
      clientSideValidations.push("Maximum price is should be a number");
    if(minPrice < 0 || maxPrice < 0)
      clientSideValidations.push("Maximum price and minimum price should be a positive number");
    if(minPrice > maxPrice)
      clientSideValidations.push("Mininum price should be less than maximum price");
    try {
      const response = [];
      if(clientSideValidations.length > 0) {
        errors.innerHTML = clientSideValidations.join('<br>');
        return;
      }
      $.ajax({
        url: "/dishes",
        method: "POST",
        data: { minPrice, maxPrice, searchTerm },
        followRedirects: true,
        xhrFields: { withCredentials: true },
        success: function (data, textStatus, jqXHR) {
          if (jqXHR.status == 200) {
            jqXHR.responseJSON.forEach((item) => {
              data = {
                name: item.name,
                Price: item.Price,
                chef: item.description,
                imgUrl: item.imgUrl
              }
              response.push(data);
            });
            let dishes = '';
            if(!response || response.length === 0) {
              dishes += '<div style="width: 100%; font-size: 2em">No Dishes Found!</div>';
            }
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
          } else {
            dishes += '<div style="width: 100%; font-size: 2em">No Dishes Found!</div>';
            $('.dishes-list').html(dishes);
          }
        },
        error: function () {
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
    // Other jQuery code here
});


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



