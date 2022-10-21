// models/trip.model.js
tripSchema = new Schema({
  ...
  tips: [{
    text: String
  }]
})

tripSchema.virtual('tips', {
  ref: 'Tip',
  foreignKey: 'trip',
  key: '_id' 
})

// models/tip.model.js
tipSchema = new Schema({
  trip: mongoose.Types.ObjectId,
  text: {
    type: String,
  },
  icon: String
})

//data/tips/base.js

const tips = [
  { text: 'Cepillo de dientes' },
  { text: 'Secador' },
]

module.exports = tips;

//data/tips/international.js

const tips = [
  { text: 'adaptador de enchufe' },
]

module.exports = tips;

//data/tips/long.js

const tips = [
  { text: 'Maleta grande' },
]

module.exports = tips;

/// controllers/trip.controller.js
// POST /trip
const baseTips = require('../data/tips/base');
const longTips = require('../data/tips/long');
const internationalTips = require('../data/tips');

module.exports.list  = (req, res, next) => {
  Trip.find()
    .populate('tips')
}

module.exports.create = (req, res, next) => {
  Trip.crate(req.body)
    .then(trip => {
      return Tip.create(defaultTips.map(tip => {
        tip.trip = trip.id;
        return tip;
      }))
    })
    .catch(next)
}


// Ejemplo del modelo de trip
const tip = {
  ...
  _id: 1234,
  title: 'Nos vamos a Berlin!',
  tips: [
    {
      icon: 'picture-o',
      text: 'Pasaporte'
    },
    {
      icon: 'bag',
      text: 'Maleta de mano'
    },
    {
      icon: 'bag',
      text: 'Cepillo de dientes!'
    }
  ]
}