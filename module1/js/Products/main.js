const productNameDom = document.getElementById('product-name');
const addProductButtonDom = document.getElementById('add-product-button');
const productsDom = document.getElementById('products')

addProductButtonDom.onclick = () => {

    // Get the name from the input
    const productName = productNameDom.value

    // Removes the product itself
    const removeButton = document.createElement('button')
    removeButton.onclick = (event) => {
        productsDom.removeChild(event.currentTarget.parentNode)
    }

    removeButton.innerHTML = "Remove"
    
    const newProduct = document.createElement('div')
    const newProductTitle = document.createElement('h3')
    newProductTitle.innerHTML = productName

    newProduct.appendChild(newProductTitle)
    newProduct.appendChild(removeButton)
    productsDom.appendChild(newProduct)

}