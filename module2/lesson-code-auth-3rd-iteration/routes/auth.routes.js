// routes/auth.routes.js

const { Router } = require("express");
const router = new Router();

const mongoose = require("mongoose"); // <== has to be added
const bcryptjs = require("bcryptjs");
const saltRounds = 10;

const User = require("../models/User.model");

// require (import) middleware functions
const { isLoggedIn, isLoggedOut, isAdmin } = require("../middleware/route-guard.js");

// GET route ==> to display the signup form to users
//                     .: ADDED :.
router.get("/signup", isLoggedOut, (req, res) => res.render("auth/signup"));

// POST route ==> to process form data
//                      .: ADDED :.
router.post("/signup", isLoggedOut, (req, res, next) => {
  // console.log("The form data: ", req.body);

  const { username, email, password } = req.body;

  // make sure users fill all mandatory fields:
  if (!username || !email || !password) {
    res.render("auth/signup", {
      errorMessage: "All fields are mandatory. Please provide your username, email and password."
    });
    return;
  }

  // make sure passwords are strong:
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.status(500).render("auth/signup", {
      errorMessage:
        "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter."
    });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(password, salt))
    .then((hashedPassword) => {
      return User.create({
        // username: username
        username,
        email,
        role: "user",
        passwordHash: hashedPassword
      });
    })
    .then((userFromDB) => {
      // console.log("Newly created user is: ", userFromDB);
      res.redirect("/userProfile");
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render("auth/signup", { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render("auth/signup", {
          errorMessage: "Username and email need to be unique. Either username or email is already used."
        });
      } else {
        next(error);
      }
    }); // close .catch()
});

//////////// L O G I N ///////////

// GET route ==> to display the login form to users

//                    .: ADDED :.
router.get("/login", isLoggedOut, (req, res) => res.render("auth/login", { layout: 'login-layout.hbs' }));

// POST login route ==> to process form data
//                     .: ADDED :.
router.post("/login", isLoggedOut, (req, res, next) => {
  console.log("SESSION =====> ", req.session);
  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both, email and password to login.",
      layout: 'login-layout.hbs'
    });
    return;
  }

  User.findOne({ email }) // <== check if there's user with the provided email
    .then((user) => {
      // <== "user" here is just a placeholder and represents the response from the DB
      if (!user) {
        // <== if there's no user with provided email, notify the user who is trying to login
        res.render("auth/login", {
          errorMessage: "Email is not registered. Try with other email.",
          layout: 'login-layout.hbs'
        });
        return;
      }
      // if there's a user, compare provided password
      // with the hashed password saved in the database
      else if (bcryptjs.compareSync(password, user.passwordHash)) {

        req.session.currentUser = user;
        res.redirect("/userProfile");
      } else {
        // if the two passwords DON'T match, render the login form again
        // and send the error message to the user
        res.render("auth/login", {
          errorMessage: "Incorrect password.",
          layout: 'login-layout.hbs'
        });
      }
    })
    .catch((error) => next(error));
});

//                         .: ADDED :.
router.get("/userProfile", isLoggedIn, (req, res) => {

  res.render('users/user-profile', {
    userInSession: req.session.currentUser,
    layout: req.session.currentUser.role == "admin"
      ? 'loggedin-admin.hbs' : 'loggedin-user.hbs'
  })

});

router.get("/assignAdmin", isLoggedIn, (req, res) => {

  res.render('users/assign-admin', {
    userInSession: req.session.currentUser,
    layout: req.session.currentUser.role == "admin"
      ? 'loggedin-admin.hbs' : 'loggedin-user.hbs'
  })

});

router.post("/assignAdmin", isLoggedIn, (req, res) => {

  const { password } = req.body
  const { _id } = req.session.currentUser

  // Change the password to hashes
  if (password == process.env.ADMIN_SECRET) {
    User.findByIdAndUpdate(_id, { role: 'admin' }, { new: true })
      .then(user => {
        req.session.currentUser = user
        res.redirect("/");
      })
  }
  else {
    res.render('users/assign-admin', {
      userInSession: req.session.currentUser,
      errorMessage: "Wrong Admin Password",
      layout: req.session.currentUser.role == "admin"
        ? 'loggedin-admin.hbs' : 'loggedin-user.hbs'
    })
  }
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
module.exports = router;
