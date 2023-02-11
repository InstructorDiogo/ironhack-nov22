const express = require("express");
const hbs = require("hbs");
const app = express();
const port = 3000

const { posts, comments, users, todos } = require("./data")

app.use(express.static('public'))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")


app.get("/", (req, res, next) => {

    res.send("hello")

});

app.get("/posts", (req, res, next) => {

    res.json(posts)

});

app.get("/jsonplaceholder", (req, res, next) => {

    res.render('jsonplaceholder')

});

app.get("/posts/:id", (req, res, next) => {

    let paramId = req.params.id

    let post = posts.find(arrayPost => arrayPost.id == paramId)

    // if a post was found
    if (post) {
        res.json(post)
    }
    // no post was found
    else {
        res.send("error no post found")
    }

});

app.get("/comments", (req, res, next) => res.json(posts));

app.get("/comments/:id", (req, res, next) => {

    let paramId = req.params.id

    let comment = comments.find(arraycomment => arraycomment.id == paramId)

    // if a comment was found
    if (comment) {
        res.json(comment)
    }
    // no comment was found
    else {
        res.send("error no comment found")
    }

})

app.get("/posts/:postId/comments", (req, res, next) => {

    // get all the comments from a given post
    let postId = req.params.postId

    let filteredComments = comments.filter(comment => comment.postId == postId)

    res.json(filteredComments)

})

app.get("/posts/:postId/comments/:commentId", (req, res, next) => {

    // get all the comments from a given post
    let postId = req.params.postId
    let commentId = req.params.commentId

    let comment = comments.find(comment => comment.id == commentId && comment.postId == postId)

    if (comment) res.json(comment)
    else res.send("error no comment found")

})

app.get("/users", (req, res, next) => res.json(users));

app.get("/users/:id", (req, res, next) => {

    let paramId = req.params.id

    let user = users.find(user => user.id == paramId)

    // if a user was found
    if (user) {
        res.json(user)
    }
    // no user was found
    else {
        res.send("error no user found")
    }

})

// Working here !!!

app.get("/todos/", (req, res, next) => {

    let { completed, wordToSearch } = req.query

    // Generating a copy of the array
    let filteredTodos = [...todos]

    // Does the query have the "completed" attribute in the query? If it does, filter!
    if (completed)
    {
        filteredTodos = filteredTodos.filter(todo => {
            // switching boolean to string  
            return (`${todo.completed}` == completed)
         })
    }
    
    // Does the query have the "Word To Search" attribute in the query? If it does, filter!
    if (wordToSearch)
    {
        filteredTodos = filteredTodos.filter(todos => todos.title.includes(wordToSearch))
    }
    
    let data = {
        filteredTodos: filteredTodos
    }

    // use .map() to insert the userName into each object
    // remember the userName comes from the 'users' array
    // you have to assign it by the userId using .map()

    filteredTodos.map(todo => {

        todo.userName = users.find(user => user.id == todo.userId).name

    })

    res.render('index', data)

});


app.get("/todos/containsUllam", (req, res, next) => {
    res.json(todos.filter(todo => todo.title.includes("ullam")))
})

app.get("/fruits", (request, response, next) => {

    let data = {
        buttons: [
            { src: "/img/down.svg", text: "Remove Fruit" },
            { src: "/img/key.svg", text: "Add Banana" },
            { src: "/img/key.svg", text: "Add Apple" },
            { src: "/img/key.svg", text: "Add Martini" },
            { src: "/img/down.svg", text: "Empty Basket" },
        ]
    }

    response.render("fruits", data)
});

app.listen(port);
console.log(`App listening on port ${port}`)


