const express = require('express');
const router = express.Router();
const movieRouter=require('./movie.router');
const genreRouter=require('./genre.router');
const actorRouter=require('./actor.router');
const directorRouter=require('./director.router');

// colocar las rutas aquí
router.use("/movies", movieRouter);

router.use("/genres", genreRouter);

router.use("/actors", actorRouter);

router.use("/directors", directorRouter);

module.exports = router;