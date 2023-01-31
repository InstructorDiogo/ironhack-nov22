let barFraction = 20; // #1 change this to 0 (so you know how this works)
const barFill = document.querySelector(".bar-fill")

const loadFraction = () => {
    return new Promise((resolve, reject) => {

        // Create a Timeout every 0.5 seconds

    })
}

window.onload = () => {

    barFill.style.width = `${barFraction}%`

    // #2 Call your promises, increase the fraction and change the CSS
    
    // #3 After all the promises are called, alert("Loaded!"). Consider Promise.all()

}