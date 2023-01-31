const jokeButton = document.querySelector("#joke-button")
const jokeText = document.querySelector("#joke-text")

const loadJoke = () => {
    return new Promise((resolve, reject) => {

        /* example:
            fetch('https://api.chucknorris.io/jokes/random')
                .then(response => response.json())
                .then(json => console.log(json))
        */

        // #1 use fetch and target the URL https://api.chucknorris.io/jokes/random with a GET method to obtain a joke
        resolve(`the joke that came from the API`)
    })
}

jokeButton.onclick = () => {
    // #2 call loadJoke(), and use .then() to set the joke into the jokeText.innerHTML

    loadJoke().then(joke => {
        jokeText.innerHTML = joke
    })
}

// #3 Change this script to have .catch() blocks
// #4 Change this code to async await (and use try{} catch{} instead)