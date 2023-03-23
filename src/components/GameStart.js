import {useState } from 'react'
// import Slider from '@mui/material/Slider';
// import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
// import { Tab } from '@headlessui/react'
import diceImage from '../images/dice_image.jpg'


export default function GameStart(props) {
   
    // const [displaySlide, setDisplaySlide] = useState(false)
    // const [playerName, setPlayerName] = useState('Daniel')
    const [newGameButton, setNewGameButton] = useState('New Game')
    
    
            
    // const marks = [
    // {
    //     value: 0,
    //     label: 'Easy',
    // },
    // {
    //     value: 1,
    //     label: 'Normal',
    // },
    // {
    //     value: 2,
    //     label: 'Hard',
    // },
    // ];
    
  


    // function handleLevelChange(event, newLevel) {
    //     props.setLevel(newLevel)
        
    // }


    function handleGameLoad() {
        setNewGameButton('Starting...')
        setTimeout(() => {
            props.setGameLoad(prevState => !prevState)
            
          }, 2000);
       setTimeout(() => {
            props.setStartCount(true)
       }, 2700);
    }



    return (
        <div className="landing-page">
            <div className='landing-page-container' style={{backgroundImage:`url(${diceImage})`}}>
                <div className='welcome-note'>Hello, playerName!</div>
                <div className="button start-game" onClick={handleGameLoad} >{newGameButton}</div>
                {/* <button className="button" onClick={showLevelSlide}>Difficulty</button> */}
                {/* <Slider
                    aria-label="Custom marks"
                    defaultValue={0}
                    step={1}
                    valueLabelDisplay="auto"
                    size='medium'
                    marks={marks}
                    min={0}
                    max={2}
                    style={{
                        width:'300px',
                        display: displaySlide ? 'inline-block' : 'none'
                    }}
                    onChange={handleLevelChange}
                /> */}
                {/* <button className="button">Leaderboard</button> */}
            </div>
            
        </div>
    )
}