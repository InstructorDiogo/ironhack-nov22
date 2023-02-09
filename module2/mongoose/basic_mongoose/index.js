const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

const CONN_STRING = `mongodb://localhost:27017/product`

const Product = mongoose.model('Product', { name: String })

const addNewProduct = (name) => {

    let product = new Product({ name: name })

    return product.save()
        .then(newProduct => {
            console.log("New product added.")
        })

}

const listProducts = () => {
    return Product.find()
}

const findProductById = (id) => {
    return Product.findOne({ _id: id })
}

const addMyProducts = async () => {
    await mongoose.connect(CONN_STRING)
    await addNewProduct("banana")
    await addNewProduct("banana")
    await addNewProduct("banana")
    mongoose.connection.close()
}

mongoose.connect(CONN_STRING)

findProductById("63e5360e3a5d4f6c6a1e0424").then(product => {
    console.log("product found!")
    console.log(product)
})

listProducts().then((products) => {
    console.log(products)
})