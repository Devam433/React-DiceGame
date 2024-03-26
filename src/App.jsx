import React, {useState} from 'react'
import Home from './components/Home.jsx'
import Game from './components/game.jsx';
import './App.css'

function App() {
  const[isPlay,setIsPlay] = useState(false);

  function handleClick() {
    setIsPlay(prev=>!prev);
  }
  return (
    <>
      {isPlay ? <Game /> : <Home handleClick={handleClick}/>}
    </>
  )
}

export default App