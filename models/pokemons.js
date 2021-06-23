const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  sprites: {
    front_default: String
  }
})

module.exports = mongoose.model('firstGeneration', pokemonSchema, 'firstGeneration')