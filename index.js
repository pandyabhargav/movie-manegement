const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./Router');
require('./Config/mongose');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Correctly set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'views')));
// Serve images from 'storage' folder
app.use('/storage', express.static(path.join(__dirname, 'storage')));

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the router for handling routes
app.use('/', router);

// Start the server
app.listen(port, (err) => {
    if (!err) {
        console.log(`Server running at http://localhost:${port}`);
    }
});