const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  getOneUser,
  postSignup,
  postLogin,
  postLogout,
  getLoggedIn,
  toggleAddToFavorites,
} = require("../controllers/auth-controller");

router
  .get("/getUser/:userId", getOneUser)
  .post("/signup", postSignup)
  .post("/login", postLogin)
  .post("/logout", postLogout)
  .get("/loggedIn", getLoggedIn)
  .put("/toggleAddToFavorites/:id", toggleAddToFavorites)

module.exports = router;
