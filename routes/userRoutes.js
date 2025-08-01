const express = require('express');
const router = express.Router();
const { getUsers }= require('../controllers/userController');

// Define routes
router.get('/users', getUsers);

module.exports = router; // Export the router 