const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WineSchema = new Schema({
  description: String, 
  points: Number, 
  price: Number, 
  state: String,
  region: String,
  variety: String 
});

const Wine = mongoose.model("Wine", WineSchema);

module.exports = Wine;
