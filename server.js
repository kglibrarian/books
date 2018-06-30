const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001; 

//define middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//routes
app.use(routes);

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist');

//sart the API server
app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}`);
}); 