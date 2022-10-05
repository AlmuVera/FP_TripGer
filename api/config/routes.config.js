const express = require('express');
const router = express.Router();
const trips = require('../controllers/trips.controller')

router.get('/trips', trips.list)



module.exports = router