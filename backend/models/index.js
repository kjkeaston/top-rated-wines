const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/top-rated-us-wines');

module.exports.Wine = require("./wine.js");