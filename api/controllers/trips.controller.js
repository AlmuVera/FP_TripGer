const Trip = require("../models/trip.model");
const createError = require("http-errors"); //para utilizar createError

module.exports.list = (req, res, next) => {
  Trip.find()
    .populate("owner", "name email")
    .then((trips) => res.status(200).json(trips))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const trip = req.body;
  trip.owner = req.user.id;

  Trip.create(trip)
    .then((trip) => res.status(201).json(trip))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Trip.findById(req.params.id)
    .populate("owner", "name email")
    .populate("docs")
    .then((trip) => {
      if (trip) {
        res.status(200).json(trip);
      } else {
        next(createError(404, "trip not found"));
      }
    })
    .catch(next);
};

//con trips.mid evoluciona y se simplifican los controladores así:
module.exports.update = (req, res, next) => {
  const data = req.body;
  delete data.owner;

  const trip = Object.assign(req.trip, data);
  trip
    .save()
    .then((trip) => res.status(200).json(trip))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Trip.deleteOne({ _id: req.trip.id })
    .then(() => res.status(204).send())
    .catch(next);
};

//before trips.mid:

// module.exports.update = (req, res, next) => {
//   const trip = req.body;
//   delete trip.owner;

//   Trip.findByIdAndUpdate(req.params.id, trip, {
//     new: true,
//     runValidators: true,
//   })
//     .then((trip) => {
//       if (trip) {
//         res.json(trip);
//       } else {
//         next(createError(404, "trip not found"));
//       }
//     })
//     .catch(next);
// };


// module.exports.delete = (req, res, next) => {
//   Trip.findByIdAndDelete(req.params.id)
//     .then((trip) => {
//       if (trip) {
//         res.status(204).send();
//       } else {
//         next(createError(404, "trip not found"));
//       }
//     })
//     .catch(next);
// };
