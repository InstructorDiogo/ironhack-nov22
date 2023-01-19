class Player extends Component {

    constructor(x, y, w, h) {
        super(x, y, w, h)
        this.img = new Image()
        this.img.src = "../img/Player.png"

        this.gravity = 0.1
        this.ySpeed = 0
        this.xSpeed = 1
    }

    // This render() is ONLY FOR THE PLAYER
    render() {
        const ctx = myGameArea.context
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    moveLeft() {
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