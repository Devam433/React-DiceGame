import React, { useState } from 'react'
import "./home.css"
import dicesImg from "/assets/dices1.png"
function Home({handleClick}) {

  return (
    <main>
        <div>
            <div className='dicesImg-container'>
                <img src={dicesImg} alt=""/>
            </div>
            <div className='game-start-container'>
                <h1>Dice Game</h1>
                <button onClick={handleClick}>Play Now</button>
            </div>
        </div>
    </main>
  )
}
export default Home 