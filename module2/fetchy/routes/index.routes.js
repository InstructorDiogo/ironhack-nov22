const express = require('express');
const router = express.Router();
const User = require('./../models/User.model')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET fetchy page */
router.get("/fetchy", (req, res, next) => {
  res.render("fetchy");
});

const users =  [
  {id: 1, name: "Diogo"},
  {id: 2, name: "Steve"},
  {id: 3, name: "Wilk"},
  {id: 4, name: "Hulk"},
  {id: 5, name: "Hannah"}
]

router.get("/users/", (req, res, next) => {

  User.find().then(users => {

    res.json(users)

  })

});

router.get("/users/:userId", (req, res, next) => {

  const { userId } = req.params
  const user = users.find(user => user.id == userId)
  if (!user) res.status(404).send("no user present")
  else res.json(user)

});

module.exports = router;
