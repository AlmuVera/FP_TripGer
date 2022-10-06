const express = require('express');
const router = express.Router();
const trips = require('../controllers/trips.controller')

router.get('/trips', trips.list);
router.post('/trips', trips.create);
router.get('/trips/:id', trips.detail);
router.patch('/trips/:id', trips.update);
router.delete('/trips/:id', trips.delete);



module.exports = router;