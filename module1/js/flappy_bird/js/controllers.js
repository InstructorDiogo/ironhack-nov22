let background;
let player;

let pipesUp = []
let pipesDown = []

let updateTimer

let restart = () => {

    pipesUp = []
    pipesDown = []

    player.x = 0
    player.y = 0
    player.ySpeed = 0

    // Generate Pipes
    for (let i = 0; i <= 10; i++) {
        pipesUp.push(new Pipe(300 + i * 60, "up"))
        pipesDown.push(new Pipe(300 + i * 60, "down"))
    }

}

let pauseGame = () => {
    myGameArea.isGamePaused = true
    document.getElementById("pause-game").style.display = "flex"
}

let resumeGame = () => {
    myGameArea.isGamePaused = false
    document.getElementById("pause-game").style.display = "none"
}