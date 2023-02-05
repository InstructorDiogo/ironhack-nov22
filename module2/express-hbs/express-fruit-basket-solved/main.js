const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

// /css/styles.css

let fruits = []

app.get('/', (req, res) => {

    res.sendFile('index.html', {root: __dirname});

})

app.get('/fruits', (req, res) => {

    res.json(fruits);

})

app.post('/banana', (req, res) => {
    fruits.push('🍌')
    res.json({message: "ok"});
})

app.post('/apple', (req, res) => {
    fruits.push('🍎')
    res.json({message: "ok"});
})

app.post('/grapes', (req, res) => {
    fruits.push('🍇')
    res.json({message: "ok"});
})

app.get('*', (req, res) => {

    res.send("404 error")

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})