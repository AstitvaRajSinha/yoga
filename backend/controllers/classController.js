const Class = require("../models/Class");

exports.createClass = async (req, res) => {
    const { name, image, availableSeats, price, videoLink, description, instructorName, instructorEmail, status, totalEnrolled, reason } = req.body;
        const newClass = await Class.create({
            name,
            image,
            availableSeats,
            price,
            videoLink,
            description,
            instructorName,
            instructorEmail,
            status,
            totalEnrolled,
            reason
        });
        res.status(201).json({
            message: 'Class created successfully',
            class: newClass
        });

};

exports.getClass = async (req, res) => {
    try {
        const classes = await Class.find({ status: 'approved' }); // Find all classes
        res.status(200).json(classes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching classes', error });
    }
};
