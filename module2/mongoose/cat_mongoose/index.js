const mongoose = require("mongoose")
mongoose.set("strictQuery", false)

const cats = require('./cats')

const Cat = require('./model/Cat.model')
const CONN_STRING = `mongodb://localhost:27017/cats`

mongoose.connect(CONN_STRING)
    .then(() => {


        // Remove a given value
        /*
        Cat.updateMany({}, { $unset: { behaviour: "" } }).then((stat) => {
            console.log(stat)
        })
        */
    


        // To count cats
        // console.log(Cat.countDocuments({ fur: "black" }).then(count => console.log(count)))

        // Insert many cats
        
        Cat.insertMany(cats).then(res => {
            console.log("all cats inserted")
        }).then(() => {
            mongoose.connection.close()
        })
        

        /*
        Cat.deleteMany({}).then(() => {
            console.log("oh no where are all the cats")
        })
        */

        /*
        Cat.updateOne({ _id: "63e544cbbe35f691de7b5764" }, {name: "Dieeeoooogo"}).then(response => {
            console.log(response)
            console.log(" all cats are now unfunny ")
        })
        */


        // To Find a Cat based on criteria

        /*
        Cat.find({ $or: [{ age: { $lte: 10 } }, {fur: 'gray'}] }).then(cats => {
            console.log(cats)
        })
        */

        // To Create a Cat

        /*
        Cat.create({
            name: "Moncho",
            fur: "black",
            age: 5
        }).then(newCat => {
            console.log("cat inserted!!")
        })
        */

    })



