const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true },
    poster: { type: String, required: true }, // Path to the uploaded poster image
});

module.exports = mongoose.model('Movie', movieSchema);