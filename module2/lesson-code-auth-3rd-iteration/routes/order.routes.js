
const { Router } = require("express");
const router = new Router();
const Product = require("./../models/Product.model")
const Order = require("./../models/Order.model")

const mongoose = require("mongoose"); // <== has to be added

// require (import) middleware functions
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middleware/route-guard.js");

// Get All Orders
router.get("/orders", isLoggedIn, isAdmin, (req, res) => {

  res.send("Getting all the Orders")

})

// Creating an Order
router.post("/orders/:userId", isLoggedIn, isAdmin, (req, res) => {

  const { userId } = req.params
  let { cart } = req.body

  cart = JSON.parse(cart)

  // Renaming Cart to Products (needs to be fixed)
  let products = []
  cart.forEach(element => {
    products.push({
      productId: element.id,
      amount: element.amount
    })
  });

  Order.create({
    user: userId,
    products: products,
    price: 0 // change to actual price
  }).then(order => {
    res.send("order created.")
  }).catch(err => next(err))

})

module.exports = router;
