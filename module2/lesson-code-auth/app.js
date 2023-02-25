// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();
//     |
//     |-----------------------------|
// use session here:                 V
require("./config/session.config")(app);
//                                  ^
//                                  |
// the "app" that gets passed here is the
// previously defined Express app (const app = express();)

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// default value for title local
const projectName = "basic-auth";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with Ironlauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

// authRouter needs to be added so paste the following lines:
const authRouter = require("./routes/auth.routes"); // <== has to be added
app.use("/", authRouter); // <== has to be added

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;




/*

    1st ITERATION
    2-4PM

    > 1st - Familiarize yourself with the HTML Code attached
    > 2nd - Do the route for Get All Products
    > 3rd - Do the View for Get All Products (this can be the user dashboard) - localStorage!
    > 4th - Do the route/view for See Product (get product by Id)


    2nd ITERATION:

    > 1st - Implement Admin Dashboard -> Products List but with the Option to Change the product
            Do the route for Get All Products Admin

    > 2nd - Do the route/view for CHANGE Product (get product by Id and change it)
    > 3rd - Create a different layout for signed out user, for user and for Admin


    3rd ITERATION:

    > 1st - Implement the Cart Page (A page that contains the Cart and the Products in it)
    > 2nd - Implement the Checkout Page (A page that contains the elements and the Finish Purchase)
    > 3rd - Finish Purchase adds an Order (implement that route)

    BONUS:
    > Page of Orders that can be Validated
    > A route for the admin to validade an order

*/