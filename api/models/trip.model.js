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

const tripSchema = new Schema(
  {
    city: {
      type: String,
      required: "City is required",
      trim: true,
      minLength: [4, `City must be <= 4 chars`],
      maxLength: [50, `City must be >= 50 chars`],
    },
    description: {
      type: String,
      // required: "Description is required",
    },
    coverPhoto: {
      type: String,
      required: "coverPhoto is required",
      trim: true,
      validate: {
        validator: isURL,
        message: "URL is not valid",
      },
    },
    startDate: {
      type: Date,
      default: Date.now,
      required: "StartDate is required",
    },
    endDate: {
      type: Date,
      default: Date.now,
      required: "StartDate is required",
    },
    // travelers: Number,
    // budget: Number,

    owner: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
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

const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
