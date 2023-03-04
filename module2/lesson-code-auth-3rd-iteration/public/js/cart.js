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

    console.warn(page)

    if (page == "products-list")
    {
        const productsList = document.getElementById("products")
        
        let cart = getCart()
        
        cart.forEach(product => {
            
            let productHTML = productsList.querySelector(`[product-id="${product.id}"]`)
            productHTML.querySelector('.amount').innerHTML = product.amount
            
        })
    }
    else if (page == "cart")
    {
        const productsList = document.getElementById("products")
        
        let cart = getCart()
        
        cart.forEach(product => {
            
            let productHTML = productsList.querySelector(`[product-id="${product.id}"]`)
            productHTML.querySelector('.amount').innerHTML = product.amount
            
        })

        //totalPrice: Number(products.reduce((accum, curr) => accum + curr.price, 0).toFixed(2))
    }
    else if (page == "checkout")
    {
        const productsList = document.getElementById("products")
        
        let cart = getCart()
        
        let total = 0

        cart.forEach(product => {
            
            let productHTML = productsList.querySelector(`[product-id="${product.id}"]`)
            let price = productHTML.querySelector('.price').innerHTML.trim()
            let combinedPrice = parseFloat((product.amount * price).toFixed(2))
            productHTML.querySelector('.amount').innerHTML = product.amount
            productHTML.querySelector('.combined-price-product').innerHTML = combinedPrice
            total += combinedPrice
            
        })

        document.querySelector('.total-price-product').innerHTML = total

        
    }

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