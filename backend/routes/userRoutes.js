// routes/userRoutes.js
const express = require('express');
const { createUser } = require('../controllers/userController'); // Import the createUser controller
const router = express.Router();

// Define the route for creating a new user
router.post('/users', createUser);

module.exports = router;

