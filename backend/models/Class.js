const mongoose = require('mongoose');

// Define the Class schema
const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  availableSeats: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  videoLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructorName: {
    type: String,
    required: true
  },
  instructorEmail: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['approved', 'pending', 'rejected'], // Example status values
    required: true
  },
  submitted: {
    type: Date,
    default: Date.now
  },
  totalEnrolled: {
    type: Number,
    default: 0
  },
  reason: {
    type: String,
    default: null
  }
});

// Create and export the Class model
const Class = mongoose.model('Class', classSchema);
module.exports = Class;
