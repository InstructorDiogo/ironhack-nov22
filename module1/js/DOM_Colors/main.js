
let button = document.getElementById('main-button')
let highlightedBlock = document.getElementById('highlighted-block')

let mainBlock = document.getElementById('main-block')



button.onclick = () => {

    mainBlock.classList.toggle('highlighted-block')
    
}