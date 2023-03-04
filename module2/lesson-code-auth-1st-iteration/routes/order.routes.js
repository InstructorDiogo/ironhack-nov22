
const { Router } = require("express");
const router = new Router();

const mongoose = require("mongoose"); // <== has to be added

// require (import) middleware functions
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middleware/route-guard.js");


router.post("/order", isLoggedIn, (req, res) => {

  res.send("Creating an Order.")

})

// Get All Orders
router.get("/orders", isLoggedIn, isAdmin, (req, res) => {

  res.send("Getting all the Orders")

})

module.exports = router;
