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


  