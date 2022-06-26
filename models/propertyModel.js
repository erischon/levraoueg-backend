const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a title for this property"],
    },
    propertyType: {
      type: String,
      required: [true, "Please enter a type for this property"],
      enum: {
        values: ["livre", "film", "série", "bd", "musique", "jeu vidéo"],
        message: "Please select correct type",
      },
    },
    upc: {
      type: String,
    },
    images: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
