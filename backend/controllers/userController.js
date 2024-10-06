// controllers/userController.js
const User = require('../models/User'); // Import the User model

// Create a new user
const createUser = async (req, res) => {
    console.log(req.body); // Check what is being sent
    const { name, email } = req.body;

    try {
        const newUser = await User.create({ name, email });
        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({ message: 'Error creating user', error });
    }
};

// Export the controller functions
module.exports = {
    createUser
};
