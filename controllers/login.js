const bcrypt = require('bcryptjs');

const adminService = require('../services/admin');
const userService = require('../services/user'); // Import user service

const index = (req, res) => {
    res.render('../views/login.ejs', {errors: [], username: ''});
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const admin = await adminService.getAdmin(username);
    const user = await userService.getUser(username); // Fetch user by username

    if (!admin && !user) {
        console.log('User not found');
        return res.status(404).json({errors: ['Invalid username or password']});
    }

    let isAuthenticated = false;
    
    if (admin) {
        isAuthenticated = await bcrypt.compare(password, admin.password);
    } else if (user) {
        isAuthenticated = await bcrypt.compare(password, user.password);
    }

    if (!isAuthenticated) {
        return res.render('../views/login.ejs', {errors: ['Invalid username or password'], username: username});
    }

    if (admin) {
        req.session.adminId = admin._id;
        return res.redirect('/admin');
    } else if (user) {
        req.session.userId = user._id; // Store user ID in session
        return res.redirect('/dashboard'); // Redirect to user dashboard
    }
};

module.exports = {
    index,
    login
};
