const express = require("express");
const router = express.Router();

const {
  postNewPlace,
  getFavoritePlaces,
  deletePlace,
} = require("../controllers/favorite-place-controller");

router
  .post("/newPlace", postNewPlace)
  .get("/favoritePlaces", getFavoritePlaces)
  .delete("/favoritePlaces/:id", deletePlace)

module.exports = router;
