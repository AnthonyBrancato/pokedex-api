const express = require("express");
const logger = require("morgan");
const cors = require('cors')
const helmet = require("helmet");
const pino = require("pino-http");
const compression = require("compression");

const pokemonsRouter = require("./routes/pokemons");

const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(pino());
app.use(cors())
app.use(compression())

app.use("/api/pokemons", pokemonsRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Worked.' })
})

// errors handler
app.get("*", function (req, res) {
  const error = new Error(`${req.ip} tried to access ${req.originalUrl}`);

  console.error(error);
  res.status(500).json(error);
});

module.exports = app;
