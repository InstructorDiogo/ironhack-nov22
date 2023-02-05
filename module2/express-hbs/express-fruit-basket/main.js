const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

let fruits = []

app.get('/', (req, res) => {

    res.sendFile('index.html', {root: __dirname});

})

app.get('/fruits', (req, res) => {

    res.json(fruits);

})

// #1 Create 3 routes:
// 1 for inserting Banana
// 1 for inserting Apple
// 1 for inserting Grapes

app.post('/fruits', (req, res) => {
    fruits.push('🍌')
    res.json({message: "ok"});
})

// #5 Get rid of the fruits route

app.get('*', (req, res) => {

    response.send("404 error")

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})