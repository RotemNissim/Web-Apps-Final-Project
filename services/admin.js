const bcrypt = require('bcrypt');

const Admin = require('../models/Admin');

const createAdmin = async ({username,password}) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin ({username,password:hashedPassword});
    await admin.save();
    return admin;
};
const getAdmin = async (username) => {
    const admin = await Admin.findOne({username});
        return admin;
    };
    const getAdmins = async (options = {}) => {
        const admins = await Admin.find(options);
        return admins;
    };
    const updateAdmin = async (id, newAdmin) => {
        const admin = await Admin.findByIdAndUpdate(id, newAdmin, {new:true,runValidators:true});
        return admin;
    }
    const deleteAdmin = async (id) => {
        const admin = await Admin.findByIdAndDelete(id);
        return admin;
    }

    module.exports = {
        createAdmin,
        getAdmin,
        getAdmins,
        updateAdmin,
        deleteAdmin
    };
