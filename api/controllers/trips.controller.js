const Trip = require("../models/trip.model");

module.exports.list = (req, res, next) => {
  Trip.find()
    .then((trips) => res.json(trips))
    .catch((error) => next(error));
};
