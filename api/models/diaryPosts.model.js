const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const isURL = (value) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};

const diaryPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    text: String,

    image: {
      type: String,
      // required: "File is required",
      trim: true,
      validate: {
        validator: isURL,
        message: "URL is not valid",
    },

    date: {
      type: Date,
      // required: true,

    }
  },

    user: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    trip: {
      ref: "Trip",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    }
    
  },

  {
    timestamps: true,
    toJSON: {
      transform: (diaryPost, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const DiaryPost = mongoose.model("DiaryPost", diaryPostSchema);
module.exports = DiaryPost;
