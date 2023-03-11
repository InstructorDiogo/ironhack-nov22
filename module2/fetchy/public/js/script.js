// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("fetchy JS imported successfully!");

  const form = document.querySelector("#user-form")
  const usersGetButton = document.querySelector("#users-get")

  form.onsubmit = (event) => {

    event.preventDefault()
    console.warn("The request is ready to send.")

    const userId = form.userId.value
    if (!userId) {
      alert("Please insert a user id.")
      return
    }

    // call the server
    fetch(`http://localhost:3000/users/${userId}/`, {
      method: "GET", // assign the method
      headers: {
        "Content-Type": "application/json", // say we work with json
      }
    })
      .then((response) => response.json()) // get a response (turn to json)
      .then((data) => {

        document.querySelector('.user-name').innerText = data.name

      })
      .catch((error) => {
        console.error("Error:", error); // if there's errors...
      });

  }

  usersGetButton.onclick = () => {
     // call the server
     fetch(`http://localhost:3000/users/`, {
      method: "GET", // assign the method
      headers: {
        "Content-Type": "application/json", // say we work with json
      }
    })
      .then((response) => response.json()) // get a response (turn to json)
      .then((data) => {

        let html = ""
        data.forEach(user => {
          html += `${user._id} > ${user.name} <br>`
        })

        document.querySelector('#users').innerHTML = html

      })
      .catch((error) => {
        console.error("Error:", error); // if there's errors...
      });

  }


});
