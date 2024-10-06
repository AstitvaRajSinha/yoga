const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,  // Data type is String
        required: true // This field is required
    },
    email: {
        type: String,  // Data type is String
        required: true, // This field is required
        unique: true   // The email must be unique
    }
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
