const orderService = require('./services/order');

const index = (req, res) => {
 res.render('../views/orderDishes.ejs');
};

const createOrder = async (req, res) => {
    const order = await orderService.createOrder(req.body.orderDetails);
    res.json(order);
};

const deleteOrder = async (req, res) => {
const order = await orderService.deleteOrder(req.params.id);
    res.json(order);
};

const getOrders = async (req, res) => {
    const orders = await orderService.getOrders();
    res.json(orders);
};

const getOrdersByDate = async (req, res) => {
    const orders = await orderService.getOrdersByDate();
    res.json(orders);
};

const updateOrder = async (req, res) => {
    const order = await orderService.updateOrder(req.body.orderDetails);
    res.json(order);
};

module.exports = {
    index,
    createOrder,
    deleteOrder,
    getOrders,
    getOrdersByDate,
    updateOrder
};