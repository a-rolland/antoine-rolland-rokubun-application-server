const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoritePlaceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Title is required."],
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    place: {
      address: {
        type: String,
      },
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

const FavoritePlace = mongoose.model("FavoritePlace", favoritePlaceSchema);
module.exports = FavoritePlace;
