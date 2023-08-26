const User = require('../models/Users'); 

const bcrypt = require('bcrypt');

const createUser = async ({username, password, firstName, lastName, userTaz}) => {
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User ({username, password: hashedPassword, firstName, lastName, userTaz});
    await user.save();
    return user;
};

const getUser = async (userId) => {
    return await User.findById(userId);
};

getUserByUserName = async (username) => {
    return user = await User.findOne( {username} );
};





module.exports = {
    createUser,
    getUser,
    getUserByUserName
};