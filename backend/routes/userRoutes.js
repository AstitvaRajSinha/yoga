const express = require('express');
// const { createUser } = require('../controllers/userController'); // Import the createUser controller
const { createClass, getClass,  } = require('../controllers/classController');
const router = express.Router();
// router.post('/users', createUser);
router.post('/new-class', createClass);
router.get('/class', getClass);
module.exports = router;