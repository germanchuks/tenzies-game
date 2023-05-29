import { useState } from "react";
// import {BrowserRouter as Link} from 'react-router-dom';
import MenuButton from "../components/MenuButton";
import ProfileAvatar from "./ProfileAvatar";
// import Avatar from '@mui/material/Avatar';
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
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          minWidth: "100%", 
          height: '50px',
          position: 'absolute',
          top:0,
          alignItems:'center',
          padding: 5,
          justifyContent: "space-between"}}
          >
            <MenuButton 
              playerName={props.playerName}
              setPlayerName={props.setPlayerName}
              avatarImage={props.avatarImage}
              setAvatarImage={props.setAvatarImage}
              />
            <a href='/' style={{
              textDecoration: 'none',
              position: 'relative', 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-around', 
              alignItems: 'center',
              padding: 10,
              }}>
                <div style={{padding: '10px'}}>{props.playerName}</div>
                <ProfileAvatar avatarImage={props.avatarImage} setAvatarImage={props.setAvatarImage} />
                
            </a>
        </div>

        <div className="play-box" style={{ position: "relative", zIndex: 10 }}>
          <div className="welcome-note">Welcome, {props.playerName}!</div>
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
