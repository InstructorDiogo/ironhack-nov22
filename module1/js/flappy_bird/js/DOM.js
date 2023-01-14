
document.getElementById("play").addEventListener('click', (event) => {

    // Create the Background
    background = new Component(0, 0, myGameArea.canvas.width, myGameArea.canvas.height, "pink")
    background.img = new Image();
    background.img.src = "../img/Background.png"

    // Create the Player
    player = new Player(0, 0, 24, 28)
    myGameArea.components.push(player)

    // Generate Pipes
    for (let i = 0; i <= 10; i++) {
        pipesUp.push(new Pipe(300 + i * 60, "up"))
        pipesDown.push(new Pipe(300 + i * 60, "down"))
    }

    updateTimer = setInterval(myGameArea.update, 1000 / 60)

    document.getElementById("main-menu").style.display = "none"
    document.getElementById("restart").disabled = false
    document.getElementById("pause").disabled = false
})

document.getElementById("restart").addEventListener('click', (event) => {

    restart()
    myGameArea.isGameOver = false
    document.getElementById("game-over").style.display = "none"

})

document.getElementById("restart-game-over").addEventListener('click', (event) => {

    restart()
    myGameArea.isGameOver = false
    document.getElementById("game-over").style.display = "none"

})

// Create a Pause / Unpause function (you can also create your HTML for it)
document.getElementById("pause").addEventListener('click', (event) => {

    pauseGame()

})


// Create a Pause / Unpause function (you can also create your HTML for it)
document.getElementById("resume").addEventListener('click', (event) => {

    resumeGame()

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