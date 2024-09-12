const Movie = require('../Modules/todo');

// Get all movies
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render('index', { movies });
    } catch (err) {
        console.error('Error fetching movies:', err);
        res.status(500).send('Server error');
    }
};

// Add Movie Page
const addMoviePage = (req, res) => {
    res.render('add');
};

// Add a new movie
const addMovie = async (req, res) => {
    try {
        const { title, description, releaseDate, genre, rating } = req.body;
        const posterPath = req.file ? req.file.path : '';

        const newMovie = new Movie({
            title,
            description,
            releaseDate,
            genre,
            rating,
            poster: posterPath,
        });

        await newMovie.save();
        res.redirect('/');
    } catch (err) {
        console.error('Error adding movie:', err);
        res.status(500).send('Server error');
    }
};

// Edit Movie Page
const editMoviePage = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.render('edit', { movie });
    } catch (err) {
        console.error('Error fetching movie:', err);
        res.status(500).send('Server error');
    }
};

// Update a movie
const updateMovie = async (req, res) => {
    try {
        const { title, description, releaseDate, genre, rating } = req.body;
        const posterPath = req.file ? req.file.path : req.body.existingPoster;

        await Movie.findByIdAndUpdate(req.params.id, {
            title,
            description,
            releaseDate,
            genre,
            rating,
            poster: posterPath,
        });

        res.redirect('/');
    } catch (err) {
        console.error('Error updating movie:', err);
        res.status(500).send('Server error');
    }
};

// Delete a movie
const deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error('Error deleting movie:', err);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getAllMovies,
    addMoviePage,
    addMovie,
    editMoviePage,
    updateMovie,
    deleteMovie,
};