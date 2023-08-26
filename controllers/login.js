const bcrypt = require('bcryptjs');

const adminService = require('../services/admin');
const userService = require('../services/users');

const index = (req, res) => {
    res.render('../views/login.ejs', {errors: [], username: ''});
};

const login = async (req, res) => {
    const { username, password } = req.body;
    let user;
    let isAdmin = false;

    const admin = await adminService.getAdmin(username);
    if (admin) {
        user = admin;
        isAdmin = true;
    } else {
        user = await userService.getUserByUserName(username);
    }
    if (!user) {
        return res.status(404).render('../views/login.ejs',{errors: ['invalid username / password'], username: req.body.username });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.render('../views/login.ejs',{errors: ['invalid username / password']});
    }

    if (isAdmin) {
        req.session.adminId = user._id;
        return res.redirect('/admin');
    } else {
        req.session.userId = user._id;
        req.session.username = username;
        return res.redirect('/users/'+ user._id);
    }
};

    // (admin);
    // if (!admin) {
    //     ('not found');
    //     return res.status(404).json({errors: ['invalid username or password']});
    // }
    // const isMatch = await bcrypt.compare(password, admin.password);
    // if (!isMatch) {
    //     return res.render('../views/login.ejs', {errors: ['invalid username or password'], username: admin.username});
    //         // return res.status(404).json({errors: ['invalid username or password']});
    // }
    // ('login success');
    // req.session.adminId = admin._id;
    // return res.redirect('/admin');
    // // return res.status(200).json({messsge: 'login success'});


module.exports = {
    index,
    login
};