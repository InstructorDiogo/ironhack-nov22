class Game {

    constructor()
    {
        let background = new Image()
        background.src = "./../img/background.png"
        this.background = background
    }

    groundCheck(){
        if (player.y > 300 - player.h) {

            player.onGround = true
            player.y = 250
            player.ySpeed = 0
    
        } else {
            player.onGround = false
        }
    }

    collisionCheck(target1, target2){

        if (
            target1.x < target2.x + target2.w &&
            target1.x + target1.w > target2.x &&
            target1.y < target2.y + target2.h &&
            target1.h + target1.y > target2.y
        ) {
            powerup.exists = false;
            player.xSpeed += 0.2;
        } else {
            // Nothing happens
        }
    
    }
    

}