const express = require('express');
const router = express.Router();

const addItemController = require('../controllers/add_item_controller');

router.post('/', addItemController.addItem);

module.exports = router;