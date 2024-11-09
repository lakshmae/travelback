// models/TravelDetails.js
const mongoose = require('mongoose');

const travelDetailsSchema = new mongoose.Schema({
    departure: { type: String, required: true },
    destination: { type: String, required: true },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true }
});

module.exports = mongoose.model('TravelDetails', travelDetailsSchema);
