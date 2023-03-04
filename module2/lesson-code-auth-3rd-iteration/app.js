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


const authRouter = require("./routes/auth.routes"); // <== has to be added
app.use("/", authRouter); // <== has to be added

const productRouter = require("./routes/product.routes"); // <== has to be added
app.use("/", productRouter); // <== has to be added

const orderRouter = require("./routes/order.routes"); // <== has to be added
app.use("/", orderRouter); // <== has to be added

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;




/*

    1st ITERATION
    2-4PM

    v 1st - Familiarize yourself with the HTML Code attached
    v 2nd - Do the route for Get All Products
    v 3rd - Do the View for Get All Products (this can be the user dashboard) - localStorage!
    v 4th - Do the route/view for See Product (get product by Id)


    2nd ITERATION:

    v 1st - Implement Admin Dashboard -> Products List but with the Option to Change the product
            Do the route for Get All Products Admin

    v 2nd - Do the route/view for CHANGE Product (get product by Id and change it)
    v 3rd - Create a different layout for signed out user, for user and for Admin


    3rd ITERATION:

    v 1st - Implement the Cart Page (A page that contains the Cart and the Products in it)
    v 2nd - Implement the Checkout Page (A page that contains the elements and the Finish Purchase)
    v 3rd - Finish Purchase adds an Order (implement that route)

    BONUS:
    > Page of Orders that can be Validated
    > A route for the admin to validade an order

*/