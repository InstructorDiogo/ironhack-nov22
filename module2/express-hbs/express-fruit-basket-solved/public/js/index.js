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
        let domFruit = document.createElement("span")
        domFruit.innerHTML = fruit
        basket.appendChild(domFruit)
    })

}

let insertFruit = () => {
    return new Promise((resolve, reject) => {
        fetch('/fruits', { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                resolve(data)
            })
    })
}

let insertBanana = () => {
    return new Promise((resolve, reject) => {
        fetch('/banana', { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                resolve(data)
            })
    })
}

let insertApple = () => {
    return new Promise((resolve, reject) => {
        fetch('/apple', { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                resolve(data)
            })
    })
}

let insertGrapes = () => {
    return new Promise((resolve, reject) => {
        fetch('/grapes', { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                resolve(data)
            })
    })
}

document.querySelector("#add-banana").addEventListener('click', async () => {
    let response = await insertBanana()
    setFruitsDOM()
})

document.querySelector("#add-apple").addEventListener('click', async () => {
    let response = await insertApple()
    setFruitsDOM()
})

document.querySelector("#add-grapes").addEventListener('click', async () => {
    let response = await insertGrapes()
    setFruitsDOM()
})

window.onload = async () => {

    setFruitsDOM()

}