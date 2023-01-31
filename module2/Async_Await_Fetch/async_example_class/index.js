let body = document.body





window.onload = () => {


    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(json => {

            json.forEach(elem => {

                let newElem = document.createElement('div')
                newElem.innerHTML = `Title: ${elem.title} <br> Body: ${ elem.body } <br><br>`
                body.appendChild(newElem)
                
            })
            console.log(json)
        })



}