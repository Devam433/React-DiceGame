import React from 'react'
import './game.css'
import { useState } from 'react'
export const Button = ({handleOnClick,btnIsClicked,dataValue}) => {
    console.log(btnIsClicked)

    const [btnClicked,setBtnClicked] = useState(false);
  return (
    <button
    className={`btn`} 
    onClick={(e)=>{handleOnClick(e); setBtnClicked(prev=>!prev)}}
    style={btnClicked ? {backgroundColor:'black',color:'white'} : {backgroundColor:'white'}}
    >
        <div className={`choice`} data-value={dataValue}> 
        {dataValue}</div>
    </button>
  )
}
 