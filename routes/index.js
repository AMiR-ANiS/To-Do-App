const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.use('/add-item', require('./add_item'));

router.get('/', homeController.home);


module.exports = router;