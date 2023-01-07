/*
using what you've learned of the arrays part, create (and style if possible)
a page that displays all the todos gotten from the api

for each of the element inside the data array,
put inside a new string an HTML line that can be the following
<div> <strong> Title: </strong> {name of the title}  </div>
*/

function populateHTML(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        let todosHTML

        data.forEach(element => {
            todosHTML += `<strong> title: </strong> ${element.title} <br>`
        })

        todos.innerHTML = todosHTML
    })
}