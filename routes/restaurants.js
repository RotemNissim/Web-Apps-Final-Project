const express = require('express');

const {getRestaurants, createRestaurant, deleteRestaurant, editRestaurant} = require('../controllers/restController');

const router = express.Router();

router.route('/').get(getRestaurants).post(createRestaurant);

router.route('/:id').delete(deleteRestaurant).put(editRestaurant);

module.exports = router;
