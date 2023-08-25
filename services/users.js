const User = require('../models/Users'); 

const bcrypt = require('bcrypt');

const createUser = async ({username, password, firstName, lastName, userTaz}) => {
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User ({username, password: hashedPassword, firstName, lastName, userTaz});
    await user.save();
    return user;
};

const getUser = async (userId) => {
try {
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
} catch(error) {
    throw error;
}
};





module.exports = {
    createUser,
    getUser
};