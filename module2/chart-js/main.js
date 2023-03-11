window.onload = () => {


    const canvas = document.querySelector("#my-canvas")
    const ctx = canvas.getContext('2d')

    fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((data) => {


            const users = data.map(user => {
                return {
                    name: user.name,
                    age: Math.floor(Math.random() * 50)
                }
            })

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: users.map(user => user.name),
                    datasets: [
                        {
                            backgroundColor: 'green',
                            label: "Users by Age",
                            data: users.map(user => user.age)
                        }
                    ]
                },
                options: {
                    scale: {
                        y: {
                            min: 0
                        }
                    }
                }
            });


        })




}