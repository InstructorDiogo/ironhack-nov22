let sound = document.createElement('audio')
sound.src = "sound.mp3"

let music = document.createElement('audio')
music.setAttribute("loop", "")
music.volume = 0.05
music.src = "music.mp3"

// function for "jumping with the player"
let jump = () => {

    // The player jumped.
    sound.play()

}

// function for "starting the game"
let start = () => {

    music.play()

    // if you want play the music slowly:
    // music.playbackRate = 0.2

}

// function for "pausing the game"
let pause = () => {

    music.pause()

}

document.getElementById("play-sound").onclick = jump
document.getElementById("play-music").onclick = start
document.getElementById("pause-music").onclick = pause
