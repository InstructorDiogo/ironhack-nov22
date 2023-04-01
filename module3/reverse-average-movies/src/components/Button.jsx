import { useState } from 'react'

function Button() {

    const [color, setColor] = useState("red")

    const handleClick = () => {

        setColor(color == "red" ? "blue" : "red")

    }

    return (
        <button style={{ backgroundColor: color }} onClick={handleClick}>Click</button>
    )

}

export default Button