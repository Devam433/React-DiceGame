import React, { useState } from 'react'
import "./game.css"
import dice1 from "/public/assets/dice_1.png"
import { DieImages } from './allDieImages'
import { Button } from './Button';
const NumArray =[1,2,3,4,5,6];
function Game() {
    //to set 'clicked' className in div.dice-img-container, to trigger animation
    const [isClicked,setIsClicked] = useState(false);
    //to set 'clicked' className in div.choice, to update UI(so the user can be aware of what he choosed)
    const [btnIsClicked,setBtnIsClicked] = useState(false);

    const [allDieImages,setAllDieImages] = useState(DieImages);
    const [currentDieImage, setCurrentDieImage] = useState(allDieImages[0].img);
    const [selectedDieNum,setSelectedDieNum] = useState('0');
    const [score,setScore] = useState(0);

    function handleOnClick(e) {
        console.log(e.target)
        const { dataset:{value} } = e.target; //typeof value -> string
        setBtnIsClicked(prev=>!prev);
        setSelectedDieNum(value);
    }
    function handleDiceRoll() {
        setIsClicked(true);
        const randomDieNum = getRandomNumber(0,5);
        setCurrentDieImage(allDieImages[randomDieNum].img);
        checkGame(randomDieNum+1)

        //to update the state 1s later so that the animation can complete before updating the state 
        setTimeout(()=>{
            setIsClicked(false)
        },1000)
    }
    function checkGame(currentDieNum) {
        if(selectedDieNum == currentDieNum)
        {
            console.log("winner!")
            setScore(prev=>prev+20)
        }
        else
        {
            console.log("sorry...")
            if(score > 0)
            {
                setScore(prev=>prev-10);
            }
        }
    }
    function getRandomNumber(start,end) {
        return Math.abs(Math.floor(Math.random() * (start - end) + start));
    }
  return (
    <>
    <section>
        <header className='game-header'>
            <div className="score-container">
                <h1 className='m-0 score'>{score}</h1>
                <p style={{fontSize:'30px'}} className='m-0'>Total Score</p>
            </div>
            <div className="choice-selector-container">
                <div className='choices'>
                    {NumArray.map((num)=>{
                        return <Button 
                                    key={num}
                                    handleOnClick={handleOnClick}
                                    btnIsClicked={btnIsClicked}
                                    dataValue={num}
                                />
                    })}
                </div>
                <p style={{fontSize:'25px', alignSelf:'self-end'}} className='m-0'>Select Dice Number</p>
            </div>
        </header>

        <div className='main-game-container'>
            <div className={`dice-img-container ${isClicked ? 'clicked' : ''}`} onClick={handleDiceRoll}>
                <img src={currentDieImage} alt="" />
            </div>
            <div className='reset-btn-container'>
                <button onClick={()=>{setScore(0)}}>Reset Score</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Game