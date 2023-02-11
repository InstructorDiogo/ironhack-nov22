let basket = document.getElementById("basket")

let getFruits = () => {
    return new Promise((resolve, reject) => {
        fetch('/fruits', { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                resolve(data)
            })
    })
}

let setFruitsDOM = async() => {

    basket.innerHTML = ""

    let fruits = await getFruits()
    console.log(fruits)

    fruits.forEach(fruit => {
        let domFruit = document.createElement("div")
        domFruit.innerHTML = fruit
        basket.appendChild(domFruit)
    })

}

// #2 Create 3 functions:
// 1 for inserting Banana
// 1 for inserting Apple
// 1 for inserting Grapes

let insertFruit = () => {
    return new Promise((resolve, reject) => {
        fetch('/fruits', { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                resolve(data)
            })
    })
}

// #3 Don't forget to create one button for each of the fruits, and events for all of them

document.querySelector("#add-fruit").addEventListener('click', async () => {
    let response = await insertFruit()
    setFruitsDOM()
})

// #4 Erase the Add Fruit Event and Add Fruit Button

// #6 - Create fancy css for the fruit basket

window.onload = async () => {

    setFruitsDOM()

}