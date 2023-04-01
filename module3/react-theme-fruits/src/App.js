import logo from './logo.svg';
import './App.css';
import Fruit from './components/Fruit'
import Button from './components/Button'
import AgePage from './components/AgePage'
import FamPage from './components/FamPage'
import { useState, useEffect } from 'react'

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = event => {
    setTheme(event.target.value)
  }

  return (

    <div className={`App ${theme}`}>

      <AgePage />
      <FamPage />

      <Fruit />
      <Fruit />
      <Fruit />

      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

    </div>
  );
}


export default App;


