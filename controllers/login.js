const bcrypt = require('bcryptjs');

const adminService = require('../services/admin');

const index = (req, res) => {
    res.render('../views/login.ejs', {errors: [], username: ''});
};
login = async (req, res) => {
    const { username, password } = req.body;
    const admin = await adminService.getAdmin(username);

    console.log(admin);
    if (!admin) {
        console.log('not found');
        return res.status(404).json({errors: ['invalid username or password']});
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return res.render('../views/login.ejs', {errors: ['invalid username or password'], username: admin.username});
            // return res.status(404).json({errors: ['invalid username or password']});
    }
    console.log('login success');
    console.log(admin);
    req.session.adminId = admin._id;
    return res.redirect('/admin');
    // return res.status(200).json({messsge: 'login success'});
};

module.exports = {
    index,
    login
};