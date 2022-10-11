const Trip = require("../models/trip.model");
const createError = require("http-errors"); //para utilizar createError

module.exports.list = (req, res, next) => {
  Trip.find()
    .then((trips) => res.json(trips))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const trip = req.body;

  Trip.create(trip)
    .then((trip) => res.status(201).json(trip))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Trip.findById(req.params.id)
    .then((trip) => {
      if (trip) {
        res.json(trip);
      } else {
        next(createError(404, "trip not found"));
      }
    })
    .catch(next);
};


module.exports.update = (req, res, next) => {
  const trip = req.body;

  Trip.findByIdAndUpdate(req.params.id, trip, 
    {
    new: true,
    runValidators: true,
    })
    .then((trip) => {
      if (trip) {
        res.json(trip);
      } else {
        next(createError(404, "trip not found"));
      }
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Trip.findByIdAndDelete(req.params.id)
    .then((trip) => {
      if (trip) {
        res.status(204).send();
      } else {
        next(createError(404, "trip not found"));
      }
    })
    .catch(next);
};
