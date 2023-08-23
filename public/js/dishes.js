document.addEventListener("DOMContentLoaded", function() {
    // Your custom JavaScript code that depends on jQuery

    // For example:
    $(document).ready(async () => {
        $('#search-button').on('click', async () => {
            const price = $('#max-price')[0].value;

            const response = await $.get(`/dishes/api?maxPrice=${price}`)
            $('.dishes-list')[0].innerHTML = '';
            let dishes = ''
            for (let i = 0; i < response.length; i++) {
                dishes += `<div class="dish">
                <img class="dish-img" src="${response[i].imgUrl}"/>
                <h2>${response[i].name}</h2>
                <p>${response[i].description}</p>
                <p>${response[i].Price}</p>
                <!-- Add more details or formatting as needed -->
              </div>`
            }
            $('.dishes-list')[0].innerHTML = dishes;

        })
        
        // Your jQuery code here
    });

    // Other vanilla JavaScript code here
});

function createDish() {
    const name = $('#name').val();
    const price = $('#price').val();
    const description = $('#description').val();
    const allergenics = $('#allergenics').val();
    const chef = $('#chef').val();
    const tags = $('#tags').val();
    const type = $('#type').val();
    const imgUrl = $('#imgUrl').val();
    // ... Get other form values
    
    const newDish = {
      name: name,
      price: price,
      description: description,
      allergenics: allergenics,
      chef: chef,
      tags: tags,
      type: type,
      imgUrl: imgUrl
      // ... Include other properties
    };
    console.log("Sending data:", newDish);
    $.ajax({
      type: 'POST',
      url: '/admin/api/createDish', // Route to handle the dish creation on the server side
      data: newDish,
      success: function(newDish) {
        // Handle the response here (e.g., show success message)
        console.log('Dish created successfully');
      },
      error: function(error) {
        // Handle the error here (e.g., show error message)
        console.error('Error creating dish:', error);
      }
    });
  }
  


  