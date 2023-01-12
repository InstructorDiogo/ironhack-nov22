class Player {

    constructor() {
        this.x = 0
        this.y = 100
        this.w = 50
        this.h = 50
        this.xSpeed = 1
        this.ySpeed = 0
        this.gravity = -0.1
        this.color = "purple"
        this.moving = false;
        this.direction = ""
        this.onGround = false;
    }

    move = () => {

        if (!player.onGround)
        {
            this.y -= this.ySpeed + this.gravity
            this.ySpeed += this.gravity
        }

        if (player.moving) {
            if (this.direction == "left") {
                this.x -= this.xSpeed;
            }
            else {
                this.x += this.xSpeed;
            }
        }
    }

    jump = () => {

        if (this.onGround)
        {
            this.onGround = false;
            this.y = 250
            this.ySpeed = 6
        }
    }

}