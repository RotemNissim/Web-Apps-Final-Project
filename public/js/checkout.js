const cart = JSON.parse(localStorage.getItem('cart'));
let totalPrice = 0;
cart.forEach(item => {
  totalPrice += parseInt(item.price)
})
document.getElementById('totalPrice').value = totalPrice;

function createOrder() {
  const userId = $('#user').val();
  const email = $('#email').val();
  //const totalPrice = $('#totalPrice').val();
  const TA = $('#TA').val();
  const delivery = $('#delivery').val();

  const newOrder = {
    //user: userId,
    totalPrice: totalPrice,
    email: email,
    TA: TA,
    delivery: delivery
  };

console.log(newOrder);

$.ajax({
  type: 'POST',
url:'/checkout/place-order',
data: JSON.stringify(newOrder),
contentType: 'application/json',
dataType: 'json',
success: function(data) {
  console.log('order created', newOrder);
},
error:function(error) {
  console.error('order error', error);
}
});
}
