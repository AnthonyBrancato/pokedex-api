const dbConnection = require("../database/dbConnection");
const PokemonsModel = require("../models/pokemons");

exports.getPokemons = (req, res) => { 
  try {
    dbConnection();
    PokemonsModel
      .find()
      .sort()
      .exec()
      .then(docs => {
        res.json(docs)
      })
      .catch(err => {
        console.log(err)
      })
  } catch (err) {
    console.log(err);
  }
}