let ctx = document.getElementById('canvas').getContext('2d');
let player = new Player()
let powerup = new Powerup(200, 200)
let game = new Game()

let update = () => {

    player.move()
    if (!player.onGround)
    {
        game.groundCheck()
    }
    game.collisionCheck(player, powerup)

}

let render = () => {

    // Clear Screen
    ctx.clearRect(0, 0, 300, 300)

    // Render Background
    ctx.drawImage(game.background, 0, 0, 300, 300)

    // Render Player
    ctx.fillStyle = player.color
    ctx.fillRect(player.x, player.y, player.w, player.h)

    // Render Powerup
    if (powerup.exists) {
        ctx.fillStyle = powerup.color
        ctx.fillRect(powerup.x, powerup.y, powerup.w, powerup.h)
    }

}

window.onload = () => {

    setInterval(() => {
        update()
        render()
    }, 1000 / 60)

}

// Arrow Keys
window.addEventListener("keydown", (event) => {

    switch (event.key) {
        case "Up": // IE/Edge specific value
        case "ArrowUp":
            player.jump();
            break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
            player.moving = true
            player.direction = "left"
            break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
            player.moving = true
            player.direction = "right"
            break;
        default:
            return;
    }

}, true);


// To check keys that were no longer pressed
window.addEventListener("keyup", (event) => {

    switch (event.key) {
        case "Left":
        case "ArrowLeft":
            //player.moving = false
            if (player.direction == "left")
            {
                player.moving = false
            }
            player.direction = ""
            break;
        case "Right":
        case "ArrowRight":
            if (player.direction == "right")    
            {
                player.moving = false
            }
            break;
        default:
            return;
    }

}, true);
