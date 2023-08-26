

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
    Order.assign(order, orderDetails); // Copy properties from orderDetails to order
    return await order.save();
};


const getAllOrders = async (options = {}) => {
    return await Order.find(options);
};

const getOrdersByDate = async () => {
    console.log("Fetching orders by date...");
    try {
        const ordersByDates = await 
        Order.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
                    totalPrice: { $sum: '$dishes.price' }, // Sum of prices in the dishes array
                },
            },
        ]);
        console.log("Aggregation result:", ordersByDates);
        return ordersByDates;
    } catch (error) {
        console.error("Error fetching orders by date:", error);
        throw error;
    }
};



module.exports = {
    createOrder,
    getOrderById,
    deleteOrder,
    updateOrder,
    getAllOrders,
    getOrdersByDate,
};
