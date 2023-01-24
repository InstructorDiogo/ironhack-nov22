class Player extends Component {

    constructor(x, y, w, h) {
        super(x, y, w, h)
        this.img = new Image()
        this.img.src = "./img/player/pumpkin_sheet.png"

        this.currentFrame = 0

        this.gravity = 0.1
        this.ySpeed = 0
        this.xSpeed = 1
        this.lastDirection = "right"

    }

    // This render() is ONLY FOR THE PLAYER
    render() {
        const ctx = myGameArea.context

        // rendering the player sprite

        if (myGameArea.isLeftKeyPressed) {
            // save the context as it is to do some fancy inversion
            ctx.save()

            // do the fancy inversion
            ctx.scale(-1, 1)
            ctx.drawImage(player.img, this.img.width * this.currentFrame / 8, 0,
                this.img.width / 8, this.img.height, - (this.x + this.w), this.y, this.w, this.h)

            // redo the normal scale
            ctx.restore()
        }
        else if (myGameArea.isRightKeyPressed) {
            // Here render the animated sprites to the right
            ctx.drawImage(player.img, this.img.width * this.currentFrame / 8, 0,
                this.img.width / 8, this.img.height, this.x, this.y, this.w, this.h)
        }
        else {
            // Drawing the idle player involves knowing where
            // it was turning last

            if (this.lastDirection == "right") {
                ctx.drawImage(player.img, 0, 0,
                    this.img.width / 8, this.img.height, this.x, this.y, this.w, this.h)
            }
            else if (this.lastDirection == "left") {
                // save the context as it is to do some fancy inversion
                ctx.save()

                // do the fancy inversion
                ctx.scale(-1, 1)
                ctx.drawImage(player.img, 0, 0,
                    this.img.width / 8, this.img.height, - (this.x + this.w), this.y, this.w, this.h)

                // redo the normal scale
                ctx.restore()
            }

        }

        // reference - drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    }

    animate() {

        this.lastDirection = "right"

        // animate in a different time scale than 60fps
        player.currentFrame++
        player.currentFrame = player.currentFrame % 8

    }

    moveLeft() {

        this.lastDirection = "left"

        this.x -= this.xSpeed

        platforms.forEach(platform => {

            if (this.checkCollision(platform)) {

                if (this.x < platform.x + platform.w) {
                    this.x = platform.w + platform.x
                }
            }
        })
    }

    moveRight() {

        this.lastDirection = "right"

        this.x += this.xSpeed

        platforms.forEach(platform => {

            if (this.checkCollision(platform)) {

                if (this.x > platform.x - player.w) {
                    this.x = platform.x - this.w
                }

            }
        })
    }

    moveUp() {
        this.ySpeed = 3
    }

}