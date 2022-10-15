const Trip = require("../models/trip.model")
const createError = require("http-errors");

module.exports.isOwnedByUser = (req, res, next) => {
  const { id } = req.params;
  Trip.findById(id)
    .then((trip) => {
      if (trip?.owner == req.user?.id) {
        req.trip = trip;
        next();
      } else if (trip) {
        next(createError(403, "This action is forbidden"));
      } else {
        next(createError(404, "Trip not found"));
      }
    })
    .catch(next);
};