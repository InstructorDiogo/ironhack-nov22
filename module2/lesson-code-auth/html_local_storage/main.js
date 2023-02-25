const products = [{ "id": 1, "title": "Smart Water Bottle", "price": 29.99, "description": "Stay hydrated and on top of your daily water intake with this smart water bottle. It tracks your water consumption, reminds you to drink, and syncs with your smartphone." }, { "id": 2, "title": "Noise-Cancelling Headphones", "price": 149.99, "description": "Block out distractions and immerse yourself in your music with these noise-cancelling headphones. They feature advanced noise-cancellation technology and comfortable ear cups." }, { "id": 3, "title": "Electric Toothbrush", "price": 69.99, "description": "Upgrade your oral care routine with this electric toothbrush. It features multiple brush modes, a timer, and pressure sensor to ensure a thorough and gentle clean." }, { "id": 4, "title": "Fitness Tracker Watch", "price": 89.99, "description": "Keep track of your fitness goals with this smartwatch. It tracks your steps, heart rate, and sleep quality, and offers personalized insights and coaching." }, { "id": 5, "title": "Portable Bluetooth Speaker", "price": 49.99, "description": "Bring your music anywhere with this portable Bluetooth speaker. It delivers powerful sound, has a long battery life, and is waterproof for worry-free outdoor use." }, { "id": 6, "title": "Air Fryer", "price": 79.99, "description": "Enjoy crispy and delicious fried food without the guilt with this air fryer. It uses hot air to fry food with little to no oil, making it a healthier alternative to traditional frying." }, { "id": 7, "title": "Robot Vacuum Cleaner", "price": 249.99, "description": "Keep your floors clean without lifting a finger with this robot vacuum cleaner. It navigates around your home and automatically returns to its charging dock when done." }, { "id": 8, "title": "Instant Pot", "price": 99.99, "description": "Make healthy and delicious meals in minutes with this versatile Instant Pot. It functions as a pressure cooker, slow cooker, rice cooker, and more." }, { "id": 9, "title": "Kindle Paperwhite", "price": 129.99, "description": "Enjoy reading your favorite books anywhere with this Kindle Paperwhite. It features a glare-free display, long battery life, and waterproof design." }, { "id": 10, "title": "Wireless Charging Pad", "price": 39.99, "description": "Charge your smartphone without the hassle of cords with this wireless charging pad. It supports fast charging and works with compatible devices." }]

const productsList = document.getElementById("products")

const getCart = () => {
    const cart = localStorage.getItem("cart")
    if (!cart) {
        return []
    }
    else {
        return JSON.parse(cart)
    }
}

window.onload = () => {

    products.forEach(product => {

        let productHTML = document.createElement('div');
        productHTML.setAttribute("product-id", product.id)
        productHTML.innerHTML =
            `
            <div>${product.title}</div>
            <div>${product.price}</div>
            <div>${product.description}</div>
            
            <button onclick="add(${product.id})">+</button>
            <span class="amount">0</span>
            <button onclick="remove(${product.id})">-</button>
        `

        productsList.appendChild(productHTML)

    })

    refreshList()

}

let refreshList = () => {

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