const express = require('express');

const {
    index,
    createDishForm,
    manageDishesForm,
    createRestaurantForm,
    manageRestaurantsForm,
    createAdminForm,
    manageAdminsForm
} = require('../controllers/admin');

const { requireAdminLogin } = require('../middlewares/login');
const { createAdmin,getAdmin, deleteAdmin } = require('../controllers/admin');

const router = express.Router();
router.get("/",requireAdminLogin('/admin'),index);

router.get("/createDishForm",requireAdminLogin('/admin'),createDishForm);

router.get("/manageDishesForm",requireAdminLogin('/admin'),manageDishesForm);

router.get("/createRestaurantForm",requireAdminLogin('/admin'),createRestaurantForm);

router.get("/manageRestaurantsForm",requireAdminLogin('/admin'),manageRestaurantsForm);

router.get("/createAdminForm",requireAdminLogin('/admin'),createAdminForm);

router.get("/manageAdminsForm",requireAdminLogin('/admin'),manageAdminsForm);

router.route("/api").post(createAdmin).get(getAdmins);
router.route("/api/:id").delete(deleteAdmin);

module.exports = router;