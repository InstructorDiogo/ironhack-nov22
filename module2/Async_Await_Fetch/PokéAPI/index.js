const pokeButton = document.querySelector("#poke-button")
const pokemonName = document.querySelector("#pokemon-name")
const pokeImage = document.querySelector("#poke-image")

const loadPokemon = (pokemonName) => {
    return new Promise((resolve, reject) => {

        console.log(pokemonName)

        // #1 use fetch and target the URL https://pokeapi.co/api/v2/pokemon/{yourPokémonName} 
        // with a GET method to obtain its information
        
        let pokémonInfo = {
            // #2 set the info you got from the fetch API (a filter where you only return the image)
        }

        resolve(pokémonInfo)
    })
}

pokeButton.onclick = () => {

    loadPokemon(pokemonName.value).then((pokémon) => {

        // #3 set the pokémon image source (src) to the image that was returned in the object of loadPokemon()

    })
}

// #4 Change this script to have .catch() blocks
// #5 Change this code to async await (and use try{} catch{} instead)