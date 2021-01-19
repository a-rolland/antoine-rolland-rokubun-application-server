const express = require("express");
const mongoose = require("mongoose");
const FavoritePlace = require("../models/favorite-place-model");

const postNewPlace = async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const author = req.user.username;
  const place = req.body.place;

  if (!name) {
    res.status(400).json({ message: "Please provide a name" });
    return;
  }

  if (!place) {
    res.status(400).json({ message: "Please select a place" });
    return;
  }

  const newFavoritePlaceObject = {
    name: name,
    description: description,
    author: author,
    place: place
  };

  // One author cannot create two places with the same name, but two different authors can
  FavoritePlace.findOne({ name, author }, async (err, foundName) => {
    if (err) {
      res.status(500).json({ message: "Name check went bad." });
      return;
    }

    if (foundName) {
      res.status(400).json({
        message:
          "You already created a favorite place with the same name. Please choose another one.",
      });
      return;
    }

    try {
      const newFavoritePlace = await FavoritePlace.create(newFavoritePlaceObject);
      console.log("Place created !", newFavoritePlace);
      res.status(200).json(newFavoritePlace);
    } catch (error) {
      res.json(error);
    }
  });
};

const getFavoritePlaces = async (req, res, next) => {
  try {
    const favoritePlaces = await FavoritePlace.find({author: req.user.username});
    res.status(200).json(favoritePlaces);
  } catch (error) {
    res.json(error);
  }
};

const deletePlace = async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  try {
    const deletedPlace = await FavoritePlace.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedPlace);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  postNewPlace,
  getFavoritePlaces,
  deletePlace,
};
