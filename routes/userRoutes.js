const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser }= require('../controllers/userController');

// Define routes Purpose: Handle HTTP requests and define API endpoints
router.get('/users', getUsers); // GET route for fetching users
router.post('/users', createUser); // POST route for creating users
router.put('/users/:id', updateUser); // PUT route for updating users
router.delete('/users/:id', deleteUser); // DELETE route for deleting users


module.exports = router; // Export the router 