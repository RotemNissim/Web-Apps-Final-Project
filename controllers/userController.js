const userServices = require('../services/users');

const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

// Create a new user
const createUser = async (req, res) => {
        try {
            const user = await userServices.createUser(req.body);
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    };
module.exports = { createUser };