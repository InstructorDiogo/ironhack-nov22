let background;
let player;

let pipesUp = []
let pipesDown = []
let platforms = []

let updateTimer

const myGameArea = {
    canvas: document.createElement('canvas'),
    components: [],
    isGamePaused: false,
    isGameOver: false,
    isLeftKeyPressed: false,
    isRightKeyPressed: false,
    generateCanvas: function () {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    start: function () {
        // Create the Background
        background = new Component(0, 0, myGameArea.canvas.width, myGameArea.canvas.height, "pink")
        background.img = new Image();
        background.img.src = "../img/Background.png"

        // Create the Player
        player = new Player(0, 0, 24, 28)
        myGameArea.components.push(player)

        let platform1 = new Component(50, myGameArea.canvas.width - 300, 100, 200, "black");
        let platform2 = new Component(250, myGameArea.canvas.width - 100, 100, 20, "black");
        platforms.push(platform1)
        platforms.push(platform2)

        updateTimer = setInterval(myGameArea.update, 1000 / 60)
    },
    restart: function () {

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

    }, 
    pauseGame: function(){
        myGameArea.isGamePaused = true
        document.getElementById("pause-game").style.display = "flex"
    },
    resumeGame: function() {
        myGameArea.isGamePaused = false
        document.getElementById("pause-game").style.display = "none"
    },
    update: function () {

        if (myGameArea.isGamePaused) return

        const ctx = myGameArea.context

        // render the background
        ctx.drawImage(background.img, background.x, background.y, myGameArea.canvas.width, myGameArea.canvas.height)
        ctx.drawImage(background.img, background.x + background.w, background.y, myGameArea.canvas.width, myGameArea.canvas.height)

        background.x--
        if (background.x < -background.w) background.x = 0

        // update the player's vertical speed
        player.y -= player.ySpeed

        let isOnPlatform = false;

        platforms.forEach(platform => {

            if (platform.checkCollision(player)) {
                if (player.ySpeed < 0) {
                    player.y = platform.y - player.h
                    player.ySpeed = 0
                    isOnPlatform = true
                }
                else if (player.ySpeed > 0) {
                    player.y = platform.y + platform.h
                    player.ySpeed = 0
                }
            }
        })

        if (!isOnPlatform) {
            player.ySpeed = player.ySpeed - player.gravity
        }

        // update the player's horizontal speed
        if (myGameArea.isLeftKeyPressed) {
            player.moveLeft()
        }
        else if (myGameArea.isRightKeyPressed) {
            player.moveRight()
        }


        // it's not GameOver - render the game
        if (!myGameArea.isGameOver) {

            myGameArea.components.forEach(component => {
                component.render()
            })

            platforms.forEach(platform => {
                platform.render()
            })

            // Render the Up Pipes, check for collisions and check for out of bounds
            pipesUp.forEach(pipe => {

                if (pipe.checkCollision(player)) {
                    myGameArea.isGameOver = true
                    ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height)
                    document.getElementById("game-over").style.display = "flex"
                }

                pipe.x -= 1
                pipe.render()
            })

            // Render the Down Pipes
            pipesDown.forEach(pipe => {

                if (pipe.checkCollision(player)) {
                    myGameArea.isGameOver = true
                    ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height)
                    document.getElementById("game-over").style.display = "flex"
                }

                pipe.x -= 1
                pipe.render()
            })
        }
        else {
            ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height)
        }
    }
}

myGameArea.generateCanvas()