
let names = ["😀", "😃", "😄", "😁", "😆", "😅", "🤣"]
let superText = document.getElementById("emojis-text")

function addEmoji()
{
    // I need to loop through the array here! consider using the counter
    let emoji = 
    superText.innerHTML += emoji
}

let counter = 0;

// Add an emoji every second
// (if it reaches the end, go back to the beginning of the array)

setInterval(() => {
    addEmoji()
}, 1000)

/*

// Example for timeout

setTimeout(() => {
    addEmoji()
}, 1000)

*/ 