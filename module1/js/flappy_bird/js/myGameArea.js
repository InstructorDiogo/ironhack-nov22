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
    update: function () {

        if (myGameArea.isGamePaused) return

        const ctx = myGameArea.context

        // render the background
        ctx.drawImage(background.img, background.x, background.y, myGameArea.canvas.width, myGameArea.canvas.height)
        ctx.drawImage(background.img, background.x + background.w, background.y, myGameArea.canvas.width, myGameArea.canvas.height)

        background.x--
        if (background.x < -background.w) background.x = 0

        // update the player's vertical speed
        player.ySpeed = player.ySpeed - player.gravity
        player.y -= player.ySpeed

        // update the player's horizontal speed
        if (myGameArea.isLeftKeyPressed) {
            player.moveLeft()
        }
        else if (myGameArea.isRightKeyPressed) {
            player.moveRight()
        }

        // game logic
        for (let i = 0; i < pipesUp.length; i++) {

            let pipe = pipesUp[i]

            if (pipe.x < 0 - pipe.w) {

                let newX = pipesUp[pipesUp.length - 1].x + 60

                pipesUp.push(new Pipe(newX, "up"))
                pipesDown.push(new Pipe(newX, "down"))

                pipesUp.shift()
                pipesDown.shift()


            }
        }

        // it's not GameOver - render the game
        if (!myGameArea.isGameOver) {

            myGameArea.components.forEach(component => {
                component.render()
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