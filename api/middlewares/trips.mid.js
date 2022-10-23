const Trip = require("../models/trip.model")
const Doc = require('../models/documents.model')

const Diary = require('../models/diaryPosts.model')
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

module.exports.documentOwnedByUser = (req, res, next) => {
  const { documentId, fileId } = req.params;

  Doc.findById(documentId, fileId )
    .then((doc) => {
      if (doc) {
        if (doc.user == req.user.id) {
          req.doc = doc;
          next();
        } else {
          next(createError(403, "This action is forbidden"));
        }
      } else {
        next(createError(404, "Document not found"));
      }
    })
    .catch(next);
};


//diary mid en testeo
module.exports.postOwnedByUser = (req, res, next) => {
  const { diaryPostId, fileId } = req.params;

  Diary.findById(diaryPostId, fileId )
    .then((diaryPost) => {
      if (diaryPost) {
        if (diaryPost.user == req.user.id) {
          req.diaryPost = diaryPost;
          next();
        } else {
          next(createError(403, "This action is forbidden"));
        }
      } else {
        next(createError(404, "Post not found"));
      }
    })
    .catch(next);
};
