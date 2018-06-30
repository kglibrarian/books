const router = require('express').Router();
const bookRoutes = require('./books');
//api routes into a table of contents

//Book routes
router.use('/books', bookRoutes);

//Magazine routes


module.exports = router; 