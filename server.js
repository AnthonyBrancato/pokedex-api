const express = require("express");
const logger = require("morgan");
const fetch = require("node-fetch");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3200;

const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const firstGen = 151;

app.use(logger("dev"));

app.get("/create-first-gen", (req, res) => {

  fetch(`${API_URL}?limit=${firstGen}`)
    .then(response => response.json())
    .then(data => {
      let results = data.results.map(item => item.url)

      for(let i = 0; i < results.length; i++) {
        fetch(`${API_URL}${i}`)
          .then(response => response.json())
          .then(data => {
            fs.writeFileSync(`./data/${data.name}.json`, JSON.stringify(data))
            res.end()
          })
          .catch(err => { console.error(err); })
      }

    })
    .catch(err => { console.error(err); })
    res.end()
});

app.get('/pokemons', (req,res) => {
  console.log(req);
})

app.get('/pokemons/:name', (req, res) => {
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
