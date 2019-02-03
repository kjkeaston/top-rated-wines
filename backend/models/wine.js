const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let WineSchema = new Schema({
  description: String, 
  points: Number, 
  price: Number, 
  state: String,
  region: String,
  variety: String 
});

let Wine = mongoose.model("Wine", WineSchema);

module.exports = Wine;