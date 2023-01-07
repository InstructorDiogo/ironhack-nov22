let domSquareOne = document.getElementById("square-one")
let domSquareTwo = document.getElementById("square-two")
let domSquareThree = document.getElementById("square-three")
let domSquareFour = document.getElementById("square-four")

let computerNumbers = []
let playerNumbers = []


// changing the color of the square

let highlight = (color) => {

    console.log(color)

    switch(color)
    {
        case 1:
            domSquareOne.style.backgroundColor = "red"

            setTimeout(() => {
                domSquareOne.style.backgroundColor = "darkred"
            }, 300)

            break;
        case 2:
            domSquareTwo.style.backgroundColor = "green"

            setTimeout(() => {
                domSquareTwo.style.backgroundColor = "darkgreen"
            }, 300)

            break;
        case 3:
            domSquareThree.style.backgroundColor = "blue"

            setTimeout(() => {
                domSquareThree.style.backgroundColor = "darkblue"
            }, 300)

            break;
        case 4:
            domSquareFour.style.backgroundColor = "yellow"

            setTimeout(() => {
                domSquareFour.style.backgroundColor = "darkgoldenrod"
            }, 300)

            break;
    }

}

let computerTurn = () => {

    let randomNumber = getRandomNumber()
    computerNumbers.push(randomNumber)

    computerNumbers.forEach((element, index) => {

        setTimeout(() => {
            
            highlight(element)

            // add an offset
        }, index * 1000 + 1000)

        // index starts at zero, computerNumbers.length starts at 1
        if (index == computerNumbers.length - 1)
        {
            // after all the colors got played, set 
            // isPlayerTurn to true
            setTimeout(() => { 
                isPlayerTurn = true
            }, index * 1000 + 500)
        }

    })

    // the player's turn actually begins after the computerTurn, once isComputerTurn = false
    isPlayerTurn = true
}

let playerClick = (numberClicked) => {

    if (!isPlayerTurn) return

    playerNumbers.push(numberClicked)
    let areArraysEqual = checkIfArraysAreEqual()

    if (areArraysEqual) {

        // highlight only if the arrays are equal !!!
        highlight(numberClicked)
    
        // check for last item of the arrays
        if (playerNumbers.length == computerNumbers.length)
        {
            isPlayerTurn = false
            computerTurn()

            // empty array please !!
            playerNumbers = []
        }
    }
    else
    {
        alert("game over!!")
    }
}

let checkIfArraysAreEqual = () => {

    slicedNumbers = computerNumbers.slice(0, playerNumbers.length)
    
    for (let i = 0; i < slicedNumbers.length; i++)
    {
        if (slicedNumbers[i] != playerNumbers[i])
        {
            return false
        }
    }

    // here means no elements were different
    return true

}

let getRandomNumber = () => Math.floor(Math.random() * 4) + 1

// works as a "main" because it's the beginning of the code
computerTurn()