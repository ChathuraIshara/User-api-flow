const express = require('express');
const router = express.Router();
const { getUsers, createUser }= require('../controllers/userController');

// Define routes
router.get('/users', getUsers);
router.post('/users', createUser);

module.exports = router; // Export the router 