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

const docsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    file: {
      type: String,
      required: "File is required",
      trim: true,
      validate: {
        validator: isURL,
        message: "URL is not valid",
    },
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
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Doc = mongoose.model("Doc", docsSchema);
module.exports = Doc;
