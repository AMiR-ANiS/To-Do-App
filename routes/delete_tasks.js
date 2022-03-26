const express = require('express');
const router = express.Router();

const deleteTasksController = require('../controllers/delete_tasks_controller');

router.get('/', deleteTasksController.deleteItem);

module.exports = router;