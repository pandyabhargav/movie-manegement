const express = require('express');
const router = express.Router();
const controller = require('../Controlls/controler');
const upload = require('../Config/multer');

// Movie routes
router.get('/', controller.getAllMovies);
router.get('/add', controller.addMoviePage);
router.post('/add', upload.single('poster'), controller.addMovie);
router.get('/edit/:id', controller.editMoviePage);
router.post('/update/:id', upload.single('poster'), controller.updateMovie);
router.get('/delete/:id', controller.deleteMovie);

module.exports = router;