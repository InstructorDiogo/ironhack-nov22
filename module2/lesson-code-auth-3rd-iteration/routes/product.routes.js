
const { Router } = require("express");
const router = new Router();
const Product = require("./../models/Product.model")
const Order = require("./../models/Order.model")

const mongoose = require("mongoose"); // <== has to be added

// require (import) middleware functions
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middleware/route-guard.js");

// Creates a Product in the Application (get form)
router.get("/products/add", isLoggedIn, isAdmin, (req, res) => {

  res.render('admin/product-add', {
    product,
    layout: 'loggedin-admin.hbs'
  })

})

// Creates a Product in the Application (submit data)
router.post("/products", isLoggedIn, isAdmin, (req, res) => {

  const { title, price, description } = req.body

  Product.create({
    title,
    price,
    description
  }).then(product => res.redirect('/adminDashboard')
  ).catch(err => next(err))


})

// Get all the Products
router.get("/products", isLoggedIn, (req, res) => {

  Product.find().then(products => {

    // Render different layout based on user
    res.render('products/products-list', {
      products,
      layout: req.session.currentUser.role == "admin"
        ? 'loggedin-admin.hbs' : 'loggedin-user.hbs'
    })

  })

})


// Get a specific Product
router.get("/products/:productId", isLoggedIn, (req, res, next) => {

  const { productId } = req.params

  Product.findById(productId).then(product => {

    res.render('products/product-details', {
      product,
      layout: req.session.currentUser.role == "admin"
        ? 'loggedin-admin.hbs' : 'loggedin-user.hbs'
    })

  }).catch(err => next(err))

})

router.get("/adminDashboard", isLoggedIn, isAdmin, (req, res) => {

  Product.find().then(products => {

    res.render('admin/products-dashboard', {
      products,
      layout: 'loggedin-admin.hbs'
    })

  })

})

// Changes a Product in the Application (submits data)
router.post("/products/:productId/edit", isLoggedIn, isAdmin, (req, res) => {

  const { productId } = req.params
  const { title, price, description } = req.body

  Product.findByIdAndUpdate(productId,
    { title, price, description }, { new: true })
    .then(newProduct => res.redirect('/adminDashboard')
    ).catch(err => next(err))

})

// Changes a Product in the Application (gets form)
router.get("/products/:productId/edit", isLoggedIn, isAdmin, (req, res) => {

  const { productId } = req.params

  Product.findById(productId).then(product => {
    res.render('admin/product-edit', {
      product,
      layout: 'loggedin-admin.hbs'
    })
  })

})

// Cart Page
router.get("/cart", isLoggedIn, (req, res) => {

  const { ids } = req.query
  const idsArray = ids.split(",")

  if (ids) {

    Product.find({ _id: { $in: idsArray } }).then(products => {
      res.render('products/cart', {
        products,
        layout: req.session.currentUser.role == "admin"
          ? 'loggedin-admin.hbs' : 'loggedin-user.hbs'
      })
    })

  }
  else {
    res.render('products/cart', {
      layout: req.session.currentUser.role == "admin"
        ? 'loggedin-admin.hbs' : 'loggedin-user.hbs'
    })
  }

})

// Set Language Page
router.get("/lang/:lang", (req, res) => {

  const { lang } = req.params
  req.session.lang = lang
  res.send("Language Set.")

})

// Test Language Page
router.get("/page", (req, res) => {

  let data = {}

  if (req.session.lang == "es") {
    data.welcome_greeting = "Bienvenido"
    data.weather_today = "Tiempo para hoy"
  }
  else {
    data.welcome_greeting = "Welcome"
    data.weather_today = "Weather Today"
  }

  res.render("page", { data: data, userInSession: req.session.currentUser })

})

// Checkout Page
router.get("/checkout", isLoggedIn, (req, res) => {

  const { ids } = req.query
  const idsArray = ids.split(",")

  Product.find({ _id: { $in: idsArray } }).then(products => {
    res.render('products/checkout', {
      products,
      userInSession: req.session.currentUser,
      layout: req.session.currentUser.role == "admin"
        ? 'loggedin-admin.hbs' : 'loggedin-user.hbs'
    })
  })

})






module.exports = router;
