// controllers/userController.js
const User = require('../models/User'); // Import the User model

// Create a new user
 exports.createUser = async (req, res) => {
    const { name, email } = req.body;

    const newUser = new User({ name, email });

    try {
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
        res.status(400).json({ error: 'Error creating user', details: err });
    }
};


