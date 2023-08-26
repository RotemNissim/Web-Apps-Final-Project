const userServices = require('../services/users');


const createUser = async (req, res) => {
    try {
        const newUser = await userServices.createUser(req.body);
        res.status(201).send({ id: newUser.id });
        // res.redirect('/users/' + newUser.id);
    } catch (error) {
        res.status(400).send(error);
    }
};



const getUserArea = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userServices.getUser(userId);
        res.render('../views/userView.ejs', { user: user });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    createUser,
    getUserArea
};