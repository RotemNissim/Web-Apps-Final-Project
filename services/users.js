const User = require('../models/Users'); 


const createUser = async ({username, password, firstName, lastName, userTaz}) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User ({username, password:hashedPassword, firstName, lastName, userTaz});
    await user.save();
    return user;
};