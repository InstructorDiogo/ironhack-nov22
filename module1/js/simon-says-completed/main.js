let domSquareOne = document.getElementById("square-one")
let domSquareTwo = document.getElementById("square-two")
let domSquareThree = document.getElementById("square-three")
let domSquareFour = document.getElementById("square-four")

let computerNumbers = []
let playerNumbers = []
let isPlayerTurn = false
let timerOffset = 1000

// changing the color of the square (and animate it back)
let highlight = (color) => {
    switch(color)
    {
        case 1:
            domSquareOne.style.backgroundColor = "red"
            setTimeout(() => domSquareOne.style.backgroundColor = "darkred" , 300)
            break;
        case 2:
            domSquareTwo.style.backgroundColor = "green"
            setTimeout(() => domSquareTwo.style.backgroundColor = "darkgreen", 300)
            break;
        case 3:
            domSquareThree.style.backgroundColor = "blue"
            setTimeout(() => domSquareThree.style.backgroundColor = "darkblue", 300)
            break;
        case 4:
            domSquareFour.style.backgroundColor = "yellow"
            setTimeout(() => domSquareFour.style.backgroundColor = "darkgoldenrod", 300)
            break;
    }
}

// the computer turn first fetches a randomNumber, inserts it in the array 
// and create a bunch of timeouts that will play in order
let computerTurn = () => {

    let randomNumber = getRandomNumber()
    computerNumbers.push(randomNumber)

    computerNumbers.forEach((element, index) => {

        setTimeout(() => highlight(element), index * 1000 + timerOffset) // add an offset so things play correctly (so the computer can play a bit after loading the page)

        // index starts at zero, computerNumbers.length starts at 1
        if (index == computerNumbers.length - 1)
        {
            setTimeout(() => isPlayerTurn = true, index * 1000 + timerOffset) // remember the offset here too.
        }
    })
}

// the player may click to make its move and insert their plays into the array
let playerClick = (numberClicked) => {

    if (!isPlayerTurn) return

    playerNumbers.push(numberClicked)
    let areArraysEqual = checkIfArraysAreEqual()

    if (areArraysEqual) {

        // highlight only if the arrays are equal (this is for the UI)
        highlight(numberClicked)
    
        // check for last item of the arrays - if it is, we can declare the computer turn
        if (playerNumbers.length == computerNumbers.length)
        {
            isPlayerTurn = false
            computerTurn()

            // empty the array of player numbers to use it on next turn
            playerNumbers = []
        }
    }
    else
    {
        alert("game over!!") // think how you could create a Game Over panel and even reset the game!
    }
}

// Every playerClick, loop through the arrays to see if every value is the same
let checkIfArraysAreEqual = () => {

    // we need to slice the computer array into the amount of the plays the number has made
    slicedNumbers = computerNumbers.slice(0, playerNumbers.length)
    
    for (let i = 0; i < slicedNumbers.length; i++)
    {
        if (slicedNumbers[i] != playerNumbers[i])
        {
            // here means something different was found
            return false
        }
    }

    // here means no elements were different
    return true

}

// ES6 random number generating
let getRandomNumber = () => Math.floor(Math.random() * 4) + 1

// we begin with the computer turn!
computerTurn()