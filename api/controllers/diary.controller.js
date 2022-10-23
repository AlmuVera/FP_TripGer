const DiaryPost = require("../models/diaryPosts.model");
const createError = require("http-errors");

module.exports.list = (req, res, next) => {
  DiaryPost.find()

    .then((diaryPost) => res.status(200).json(diaryPost))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  console.log(req.path)
  DiaryPost.create({
    title: req.body.title,
    text: req.body.text,
    image: req.file.path,
    // date: req.body,date,
    trip: req.params.id,
    user: req.user.id,
  })
    .then((diaryPost) => {res.status(201).json(diaryPost)})
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  DiaryPost.findById(req.params.diaryPostId)
    .then((diaryPostId) => {
      if (diaryPostId) {
        res.status(200).json(diaryPostId);
      } else {
        next(createError(404, "Post not found"));
      }
    })
    .catch(next);
};

module.exports.update = (req, res, next) => {
  console.log("lalalalalalalalala")
  console.log(req.params)
  req.diaryPost.title = req.body.title;


  req.diaryPost
    .save()
    .then((diaryPost) => res.status(200).json(diaryPost))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  DiaryPost.deleteOne({ _id: req.diaryPost.id })
    .then(() => res.status(204).send())
    .catch(next);
};
