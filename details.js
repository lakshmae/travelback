// routes/details.js
const express = require('express');
const router = express.Router();
const TravelDetails = require('../models/TravelDetails');

// Home route to display the travel planner form
router.get('/', (req, res) => {
    res.render('home');
});

// POST route to handle form submission and save to MongoDB
router.post('/submit', async (req, res) => {
    const { departure, destination, fromDate, toDate } = req.body;

    const travelDetails = new TravelDetails({
        departure,
        destination,
        fromDate,
        toDate
    });

    try {
        // Save to MongoDB
        const savedDetails = await travelDetails.save();
        console.log("Saved details:", savedDetails); // Debugging log
        res.render('retrieveDetails', { 
            departure: savedDetails.departure, 
            destination: savedDetails.destination, 
            fromDate: savedDetails.fromDate.toISOString().split('T')[0], 
            toDate: savedDetails.toDate.toISOString().split('T')[0] 
        });
    } catch (error) {
        console.error("Error saving details:", error);
        res.status(500).send("Failed to save travel details.");
    }
});

module.exports = router;
