const axios = require('axios') 
  
  module.exports.getData = (req, res, next) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${req.params.city}&apikey=${process.env.TICKETMASTER_TOKEN}`)
    .then((data) => {
      res.status(200).send(data.data._embedded)
    })
    .catch((error) => next(error));
  };
