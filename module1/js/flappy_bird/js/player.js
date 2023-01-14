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
    }

    moveRight() {
        this.x += this.xSpeed
    }

    moveUp() {
        this.ySpeed = 3
    }

}