
const emptyCart = () => {
    localStorage.removeItem("cart")
}

const getCart = () => {
    const cart = localStorage.getItem("cart")
    if (!cart) {
        return []
    }
    else {
        return JSON.parse(cart)
    }
}

let refreshList = () => {

    const productsList = document.getElementById("products")

    let cart = getCart()

    cart.forEach(product => {

        let productHTML = productsList.querySelector(`[product-id="${product.id}"]`)
        productHTML.querySelector('.amount').innerHTML = product.amount

    })

}

let add = (id) => {

    let cart = getCart()

    // See if the product already exists
    let product = cart.find(product => product.id == id)
    if (product) {
        // changing the amount of the product that exists in the cart
        cart[cart.indexOf(product)].amount++
    }
    else {
        cart.push({ id, amount: 1 })
    }

    // Save the cart in the memory
    localStorage.setItem('cart', JSON.stringify(cart))

    refreshList()

}

let remove = (id) => {

    let cart = getCart()

    // See if the product exists
    let product = cart.find((product) => product.id == id)
    if (product) {
        // changing the amount of the product that exists in the cart
        cart[cart.indexOf(product)].amount--

        // if the amount is zero, remove the item from the array (use index! and splice)
        if(cart[cart.indexOf(product)].amount <= 0)
        {
            cart.splice(cart.indexOf(product), 1)
        }
    }

    // Save the cart in the memory
    localStorage.setItem('cart', JSON.stringify(cart))

    refreshList()

}