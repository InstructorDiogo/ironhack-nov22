class Player extends Component {

    constructor(x, y, w, h) {
        super(x, y, w, h)
        this.img = new Image()

    
        this.sprites = []
        
        // load all the sprites
        for (let i = 1; i <= 4; i++)
        {
            let sprite = new Image()
            sprite.src = `./img/player/pumpkin_${i}.png`
            console.log(`./img/player/pumpkin_${i}.png`)
            this.sprites.push(sprite)
        }

        
        this.currentFrame = 0

        this.gravity = 0.1
        this.ySpeed = 0
        this.xSpeed = 1
    
    }

    // This render() is ONLY FOR THE PLAYER
    render() {
        const ctx = myGameArea.context
        
        
        player.sprites.forEach((sprite, index) => {
            
            if (player.currentFrame == index)
            {
                ctx.drawImage(sprite, this.x, this.y, this.w, this.h)
            }
        })
        
    }

    animate() {

        // animate in a different time scale than 60fps
        player.currentFrame++
        player.currentFrame = player.currentFrame % player.sprites.length
        player.img = player.sprites[player.currentFrame]

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