import { useState } from "react";
import MenuButton from "../components/MenuButton";
// import Slider from '@mui/material/Slider';
// import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
// import { Tab } from '@headlessui/react'
// import diceImage from "/images/dice_image.jpg";

export default function GameStart(props) {

  // const [displaySlide, setDisplaySlide] = useState(false)
  // const [playerName, setPlayerName] = useState('Daniel')
  const [newGameButton, setNewGameButton] = useState("New Game");
  const [isLoading, setIsloading] = useState(false);


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
    setNewGameButton("Starting...");
    setIsloading(true);
    // props.setStartCount(true)
    setTimeout(() => {
      props.setGameLoad(false);
      props.setStartCount(true)
      // props.setTimeCount(true)
    }, 2000);
  }

  // function showLevelSlide() {
  //     return (
  //         setDisplaySlide(prevDisplay => !prevDisplay)
  //     )
  // }


  return (
    <div className="landing-page" style={{ position: "relative" }}>
      <div
        className="landing-page-container"
        // style={{ backgroundImage: `url(${diceImage})` }}
      >
        
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <img
            src="/images/dice_image.jpg" alt="Dice"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className='menu-button'><MenuButton /></div>
        <div className="play-box" style={{ position: "relative", zIndex: 10 }}>
          <div className="welcome-note">Hello, playerName!</div>
          <button
            className="button start-game"
            onClick={handleGameLoad}
            disabled={isLoading}
          >
            {newGameButton}
          </button>
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
    </div>
  );
}
