const Doc = require("../models/documents.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  Doc.find()

    .then((doc) => res.status(200).json(doc))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  Doc.create({
    title: req.body.title,
    file: req.body.file,
    trip: req.params.id,
    user: req.user.id,
  })
    .then((doc) => res.status(201).json(doc))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Doc.findById(req.params.documentId)
    .then((docId) => {
      if (docId) {
        res.status(200).json(docId);
      } else {
        next(createError(404, "Document not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  req.doc.title = req.body.title;

  req.doc
    .save()
    .then((doc) => res.status(200).json(doc))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Doc.deleteOne({ _id: req.doc.id })
    .then(() => res.status(204).send())
    .catch(next);
};
