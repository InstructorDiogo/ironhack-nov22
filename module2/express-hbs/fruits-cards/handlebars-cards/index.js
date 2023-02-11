const express = require("express");
const hbs = require("hbs");
const app = express();
const port = 3000

app.use(express.static('public'))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

app.get("/", (request, response, next) => {
    response.render("index")
});

app.get("/contact", (request, response, next) => {
    response.render("contact")
});

/*

    Create Diogo's Page
    Diogo's page will display diogo's cards

    Create Dani's Page
    Dani's page will display dani's cards

    #1 You have to create a Card Partial, which has an image, a title and a description
    #2 In Diogo's Page, Render all the Cards in a yellow background
    #3 In Dani's Page, Render all the Cards in a blue background

    #4 (super super optional) Clicking a Card should delete it from the list

*/

app.get("/fruits", (request, response, next) => {

    let data = {

        cards: [],
        buttons: [
            { src:"/img/down.svg", text:"Remove Fruit" },
            { src:"/img/key.svg", text:"Add Banana" },
            { src:"/img/key.svg", text:"Add Apple" },
            { src:"/img/key.svg", text:"Add Martini" },
            { src:"/img/down.svg", text:"Empty Basket" },
        ],
        firstName: "Diogo"

    }

    response.render("fruits", data)
});

app.listen(port);
console.log(`App listening on port ${port}`)


