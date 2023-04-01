import { useState } from 'react'

function Fruit({fruit, setFruit, spoil}) {
    
    const handleClick = e => setFruit(e.target.getAttribute("fruit"))

    return (
        <div>
            {fruit} &lt;-
            <button fruit="🍎" onClick={handleClick}>Set 🍎</button>
            <button fruit="🍍" onClick={handleClick}>Set 🍍</button>
            <button fruit="🫐" onClick={handleClick}>Set 🫐</button>
            <button onClick={spoil}> Spoil </button>
        </div>
    )

}

export default Fruit