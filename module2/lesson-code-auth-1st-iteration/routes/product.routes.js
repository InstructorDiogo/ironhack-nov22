
const { Router } = require("express");
const router = new Router();
const Product = require("./../models/Product.model")

const mongoose = require("mongoose"); // <== has to be added

// require (import) middleware functions
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middleware/route-guard.js");


// Creates a Product in the Application
router.post("/products", isLoggedIn, isAdmin, (req, res) => {

  res.send("Creating a Product")

})

// Get all the Products
router.get("/products", isLoggedIn, (req, res) => {

  Product.find().then(products => {
    res.render('products/products-list', { products })
  })

})

// Get a specific Product
router.get("/products/:productId", isLoggedIn, (req, res, next) => {

  const { productId } = req.params

  Product.findById(productId).then(product => {
    res.render("products/product-details", { product })
  }).catch(err => next(err))

})

// Changes a Product in the Application
router.post("/products/:productId", isLoggedIn, isAdmin, (req, res) => {

  res.json("Change a Product.")

})

// Delete a Product in the Application
router.post("/products/:productId", isLoggedIn, isAdmin, (req, res) => {

  res.send("Deleted a Product.")

})

module.exports = router;
