

const Order = require('../models/Orders');

const createOrder = (orderDetails) => {
    const order = new Order(orderDetails);
    return order.save();
};



const getOrderById = async (id) => {
    return await Order.findById(id);
};

const deleteOrder = async (id) => {
    const order = await getOrderById(id);
    if (!order) {
        return null;
    }

    await order.remove();
    return order;
};
const updateOrder = async (id, orderDetails) => {
    const order = await getOrderById(id);
    if (!order) {
        return null;
    }
    Object.assign(order, orderDetails); // Copy properties from orderDetails to order
    return await order.save();
};


const getAllOrders = async (options = {}) => {
    return await Order.find(options);
};

const getOrdersByDate = async () => {
    const ordersByDates = await Order.aggregate([
        {
            $group: {
                _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ]);
    return ordersByDates;
};

module.exports = {
    createOrder,
    getOrderById,
    deleteOrder,
    updateOrder,
    getAllOrders,
    getOrdersByDate,
};
