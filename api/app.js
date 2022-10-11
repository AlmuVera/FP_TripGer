require("dotenv").config();

const createError = require('http-errors')
const express = require('express');
const logger = require("morgan");
const mongoose = require("mongoose");


require("./config/db.config");

const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.set("Access-Control-Allow-Headers", "content-type");
  res.set("Access-Control-Allow-Methods", "*");
  res.set("Access-Control-Allow-Credentials", "true");
  next();
});

/** Middlewares */
app.use(express.json());
app.use(logger("dev"));

// Configure routes
const routes = require("./config/routes.config");
app.use("/api/v1", routes);

// Errors middleware
app.use((req, res, next) => next(createError(404, "Route not found")));

app.use((error, req, res, next) => {
  const data = {};

  console.error(error);

  if (error instanceof mongoose.Error.ValidationError || error.status === 400) {
    error.status = 400;
    data.errors = error.errors;
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, "Resource not found");
  }

  data.message = error.message;
  res.status(error.status);
  res.json(data);

  // const status = error.status || 500;
  // const message = error.message;
  // res.status(status).json({ message })
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`TripGer api running at port ${port}`))