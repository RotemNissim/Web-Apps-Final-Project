const bcrypt = require('bcrypt');

const User = require('../models/Users'); // Replace with your User model

const createUser = async ({ username, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return user;
};

const getUser = async (username) => {
    const user = await User.findOne({ username });
    return user;
};

const getUsers = async (options = {}) => {
    const users = await User.find(options);
    return users;
};

const updateUser = async (id, newUser) => {
    const user = await User.findByIdAndUpdate(id, newUser, { new: true, runValidators: true });
    return user;
};

const deleteUser = async (id) => {
    const user = await User.findByIdAndDelete(id);
    return user;
};

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
};
