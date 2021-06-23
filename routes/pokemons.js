const express = require("express");
const router = express.Router();

//controllers
const pokemonController = require('../controllers/pokemonController.js')

router.get("/first-gen", pokemonController.getPokemons);

module.exports = router;
