const express = require('express');

const {
    index,
    createDishForm,
    manageDishesForm,
    createRestaurantForm,
    manageRestaurantsForm,
    createAdminForm,
    manageAdminsForm
} = require('../controllers/adminController');

const { requireAdminLogin } = require('../middlewares/login');
const { createAdmin,getAdmins, deleteAdmin } = require('../controllers/adminController');
const { createDish } = require('../controllers/dishController');
const { createRestaurant } = require('../controllers/restController');

const router = express.Router();
router.get("/",requireAdminLogin('/admin'),index);

router.get("/createDishForm",requireAdminLogin('/admin'),createDishForm);

router.get("/manageDishesForm",requireAdminLogin('/admin'),manageDishesForm);

router.get("/createRestaurantForm",requireAdminLogin('/admin'),createRestaurantForm);

router.get("/manageRestaurantsForm",requireAdminLogin('/admin'),manageRestaurantsForm);

router.get("/createAdminForm",requireAdminLogin('/admin'),createAdminForm);

router.get("/manageAdminsForm",requireAdminLogin('/admin'),manageAdminsForm);

router.route("/api/createDish").post(createDish);
router.route("/api/createAdmin").post(createAdmin);
router.route("/api/createRestaurant").post(createRestaurant);
router.route("/api").post(createAdmin).get(getAdmins);
router.route("/api/:id").delete(deleteAdmin);

module.exports = router;