const Order = require('../models/Orders');
const User = require('../models/Users'); // Make sure to require your User model here

const getCheckoutPage = (req, res) => {
  // Render your checkout page here
  // You might want to fetch the user's cart details and display them on the checkout page
  // Also, display the total cart price
  res.render('checkout', { cart: req.session.cart, totalPrice: req.session.totalPrice,user: req.session.user});
};

const createOrder = async (req, res) => {
  try {
    const { userId, cart, totalPrice, email, TA, delivery } = req.body;

    // Create a new order record in the database
    const order = new Order({
      user: req.session.user._id,
      dishes: req.session.cart,
      totalPrice: req.session.totalPrice,
      email: email,
      TA: TA,
      delivery: delivery,
    });
    
    // Save the order to the database
    await order.save();

    // Clear the user's cart in the session
    req.session.cart = [];
    req.session.totalPrice = 0;

    res.status(201).json({ message: 'Order placed successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while placing the order.' });
  }
};

module.exports = {
  getCheckoutPage,
  createOrder,
};
