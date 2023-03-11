const express = require('express');
const router = express.Router();
const fileUploader = require('../config/cloudinary.config')

router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/insertImage", fileUploader.single('image'), (req, res, next) => {

  const data = {
    imageURL: req.file.path
  }

  res.render("image-page", data)

});

module.exports = router;
