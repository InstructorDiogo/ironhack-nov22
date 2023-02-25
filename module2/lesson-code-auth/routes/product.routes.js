
const { Router } = require("express");
const router = new Router();

const mongoose = require("mongoose"); // <== has to be added

// require (import) middleware functions
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middleware/route-guard.js");


// Creates a Product in the Application
router.post("/product", isLoggedIn, isAdmin, (req, res) => {

  res.send("Creating a Product")

})

// Get all the Products
router.get("/products", isLoggedIn, (req, res) => {

  // Here it's also possible to have (+) and (-)
  // buttons to add products into LOCALSTORAGE
  res.send("Getting all the Products")

})

// Get a specific Product
router.get("/product/:productId", isLoggedIn, (req, res) => {

  res.send("Getting a Specific Product.")

})

// Changes a Product in the Application
router.post("/product/:productId", isLoggedIn, isAdmin, (req, res) => {

  res.send("Change a Product.")

})

// Delete a Product in the Application
router.post("/product/:productId", isLoggedIn, isAdmin, (req, res) => {

  res.send("Deleted a Product.")

})