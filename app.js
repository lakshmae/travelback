const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const detailsRoute = require('./routes/details');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS and configure the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection without deprecated options
async function main() {
    try {
        await mongoose.connect('mongodb://localhost:27017/travel'); // Simplified connection string
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

main();

// Routes
app.use('/', detailsRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
