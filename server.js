/* require('dotenv').config()
const express = require("express");
const logger = require("morgan");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require('path')
const cache = require('memory-cache')
const app = express();

const PORT = process.env.PORT || 3200;

// const API_URL = process.env.API_URL;
const API_URL = 'https://pokeapi.co/api/v2/pokemon/'
const firstGen = 151;

app.use(logger("dev"));

app.get("/create-first-gen", (req, res) => {
  for(let i = 0; i < firstGen; i++) {
    fetch(`${API_URL}${i}`)
      .then(response => response.json())
      .then(new Promise(resolve => setTimeout(resolve, 1000)))
      .then(data => {
        let pokemonObj = {
          name: data.name,
          id: data.id,
          sprites: data.sprites
        }
        fs.writeFileSync(`./data/first-generation/${data.name}.json`, JSON.stringify(pokemonObj))
        res.end()
      })
      .catch(err => { console.error(err); })
  }
    res.end()
});

app.get('/pokemons/first-gen', (req,res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).sendFile(path.resolve('./data/firstGeneration.json'))
})

app.get('/pokemons/:name', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).sendFile(__dirname + `/data/${req.params.name}.json`)
})

app.get("*", (req, res) => {
  res.status(404).json({
    error: "Error 404. Resource Not Found.",
  });
});

app.listen(PORT, () => {
  console.log(`Server starts at http://localhost:${PORT}/`);
});
 */