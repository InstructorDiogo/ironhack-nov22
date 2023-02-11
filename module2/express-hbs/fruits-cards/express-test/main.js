const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

// Create three other pages
// In the diogo page, add a javascript file that alerts ("Heyo diogo")

app.get('/', (request, response, next) => {

    response.send("Hello everyone.")

})

app.get('/diogo', (request, response, next) => {

    response.sendFile(__dirname + '/main.html')

})

app.get('/kitty', (request, response, next) => {

    response.sendFile(__dirname + '/kate.jpg')

})

app.get('*', (request, response, next) => {

    response.send("404 error")

})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})