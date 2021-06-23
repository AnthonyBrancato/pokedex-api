const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const pino = require("pino-http");

const pokemonsRouter = require("./routes/pokemons");

const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(pino());

app.use("/api/pokemons", pokemonsRouter);

// errors handler
app.get("*", function (req, res) {
  const error = new Error(`${req.ip} tried to access ${req.originalUrl}`);

  console.error(error);
  res.status(500).json(error);
});

module.exports = app;
