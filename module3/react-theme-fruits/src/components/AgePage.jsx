/*

  2. Create a page that has an age, ie. "You are 20 years old"
      and, depending on the age, say if you're a kid, a teenager, adult, elder, etc.
      Create a button that increases your age by 1.

      */

import { useState } from 'react'



function AgePage() {

    const [age, setAge] = useState(0)
    const [message, setMessage] = useState(getMessage())

    function getMessage(){
        if (age <= 2) return "You a baby"
        else if (age <= 5) return "You a toddler"
        else if (age <= 12) return "You a kid"
        else if (age <= 17) return "You a teen"
        else if (age <= 65) return "You a adult"
        else return "You a Senior"
    }

    function handleClick(){
        setAge(age + 1)
        setMessage(getMessage())
    }

    return (
        <div>
            <div>You are {age} years old. </div>
            <div>{message}</div>
            <button onClick={handleClick}> Increase Age </button>
        </div>
    )

}

export default AgePage