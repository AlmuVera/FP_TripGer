require("dotenv").config();

const createError = require('http-errors')
const express = require('express');
const logger = require("morgan");


require("./config/db.config");

const app = express();

app.use(logger("dev"));

// Configure routes
const routes = require("./config/routes.config");
app.use("/api/v1", routes);

// Errors middleware
app.use((req, res, next) => next(createError(404, "Route not found")));
app.use((error, req, res, next) => {
  console.error(error);

  const status = error.status || 500;
  const message = error.message;
  res.status(status).json({ message })
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`TripGer api running at port ${port}`))