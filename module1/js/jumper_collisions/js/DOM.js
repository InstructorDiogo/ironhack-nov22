
document.getElementById("play").addEventListener('click', (event) => {

    myGameArea.start()

    document.getElementById("main-menu").style.display = "none"
    document.getElementById("restart").disabled = false
    document.getElementById("pause").disabled = false
})

document.getElementById("restart").addEventListener('click', (event) => {

    myGameArea.restart()
    myGameArea.isGameOver = false
    document.getElementById("game-over").style.display = "none"

})

document.getElementById("restart-game-over").addEventListener('click', (event) => {

    myGameArea.restart()
    myGameArea.isGameOver = false
    document.getElementById("game-over").style.display = "none"

})

// Create a Pause / Unpause function (you can also create your HTML for it)
document.getElementById("pause").addEventListener('click', (event) => {

    myGameArea.pauseGame()

})


// Create a Pause / Unpause function (you can also create your HTML for it)
document.getElementById("resume").addEventListener('click', (event) => {

    myGameArea.resumeGame()

})

document.addEventListener('keydown', ({ key }) => {

    if (myGameArea.isGamePaused) return

    switch (key) {
        case "Up": case "ArrowUp":
            player.moveUp()
            break;
        case "Left": case "ArrowLeft":
            myGameArea.isLeftKeyPressed = true
            break;
        case "Right": case "ArrowRight":
            myGameArea.isRightKeyPressed = true
            break;

        default:
            return; // Quit when this doesn't handle the key event.
    }
})

document.addEventListener('keyup', ({ key }) => {

    if (myGameArea.isGamePaused) return

    switch (key) {
        case "Left": case "ArrowLeft":
            myGameArea.isLeftKeyPressed = false
            break;
        case "Right": case "ArrowRight":
            myGameArea.isRightKeyPressed = false
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
})