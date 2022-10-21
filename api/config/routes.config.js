const express = require('express');
const router = express.Router();
const trips = require('../controllers/trips.controller')
const docs = require('../controllers/documents.controller')
const auth = require("../controllers/auth.controller");
const secure = require("../middlewares/secure.mid");
const tripsMid = require("../middlewares/trips.mid");

router.post("/register", auth.register);
router.get("/profile", secure.isAuthenticated, auth.profile);
router.post("/authenticate", auth.authenticate);
router.delete("/logout", auth.logout);

router.get('/trips', secure.isAuthenticated, trips.list);
router.post('/trips', secure.isAuthenticated, trips.create);
router.get('/trips/:id', secure.isAuthenticated, trips.detail);
router.patch('/trips/:id', secure.isAuthenticated, tripsMid.isOwnedByUser, trips.update);
router.delete('/trips/:id', secure.isAuthenticated, tripsMid.isOwnedByUser, trips.delete);

// router.get('/trips/:id/documents', secure.isAuthenticated, docs.list);
router.post('/trips/:id/documents', secure.isAuthenticated, docs.create);
router.get('/trips/:id/documents/:documentId', secure.isAuthenticated, docs.detail);
router.patch('/trips/:id/documents/:documentId', secure.isAuthenticated,tripsMid.documentOwnedByUser, docs.update);
router.delete('/trips/:id/documents/:documentId', secure.isAuthenticated,tripsMid.documentOwnedByUser, docs.delete);



module.exports = router;