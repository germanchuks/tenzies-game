import './App.css';
import { useState, useEffect } from 'react'
import Tile from './components/Tile'
import {nanoid} from 'nanoid'
import Game from './components/Game';
import GameStart from './components/GameStart';
import GameEnd from './components/GameEnd';
import Timer from './components/Timer';

function App() {
  
  //Sets timer
  const [timeCount, setTimeCount] = useState(0);

  //Stops timer
  const [stopCount, setStopCount] = useState(true);

  //Set Deadline
  const [deadline, setDeadline] = useState(15)
  const deadlineCount = deadline * 1000

  //Loads homepage first until state is changed on button click.
  const [gameLoad, setGameLoad] = useState(true)
  
  const [dice, setDice] = useState(allNewDice())
  const [rollCount, setRollCount] = useState(0)
  
  //State changes if user wins the game
  const [tenzies, setTenzies] = useState(false)
  
  //State changes if player runs out of time
  const [gameLost, setGameLost] = useState(false)


  //Sets Game Reload Button Label
  const [reloadButtonLabel, setReloadButtonLabel] = useState(gameLost ? 'Try Again' : 'Restart')

  //Runs everytime to check to game won
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    
    //Takes one of the die value as reference to check equality with other dice
    const refValue = dice[0].value
    const allValue = dice.every(die => die.value === refValue)

    if (allHeld && allValue) {
      setGameLost(false)
      setTimeout(() => {
        setTenzies(true)
      }, 800)
      
    }
  }, [dice])


  //Sets timer function to declare game lost after 25seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // if (!gameLoad && !tenzies) {setGameLost(true)}
      // (!gameLoad && !tenzies) && setTenzies(true)
      if (!gameLoad && !tenzies) {
        setStopCount(false)
        setGameLost(true)
        setTenzies(true)
        
      }
    }, deadlineCount);
    return () => clearTimeout(timer);
  },[tenzies,gameLoad, deadlineCount]);


  //Creates new array of random values, set isHeld prop to default and generates id
  function generateNewDice(){
    return {
      value: Math.ceil(Math.random()*6), 
      isHeld: false,
      id: nanoid()
    }
  }

  //Passes generated random arrays to a list
  function allNewDice() {
    const newDice = []
    for (let i=0; i<10; i++) {
      newDice.push(generateNewDice())
    }
    return newDice
  }

  //Generates new values for each die when roll is clicked
  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDice()}
      ))
    setRollCount(prevCount => prevCount + 1)
  }

  //Freezes die
  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map((die) => {
          return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
  })
  }

  //Creates a new game by setting all states variables to default
  function newGame() {
    setTimeout(() => {
      setStopCount(true)
      setTenzies(false)
      setDice(allNewDice)
      setRollCount(0)
      
      setTimeCount(0)
    }, 800)
    
  }

  //Takes player back to homepage
  function goHome() {
    setGameLoad(prevState => !prevState)
    newGame()
  }


  //Passes prop parameters to the tile component
  const dieTiles = dice.map(die => (
    <Tile 
        key={die.id}
        id={die.id}
        value={die.value} 
        isHeld={die.isHeld}
        holdDice={holdDice}
    />
  ))
  

  return (



    <div className="App">
      {
        gameLoad ?
          <GameStart 
            setDeadline={setDeadline} 
            gameLoad={gameLoad} 
            setGameLoad={setGameLoad} 
          />
        :
          !tenzies ?
            <Game 
              dieTiles={dieTiles} 
              rollDice={rollDice} 
            />
          : 
            <GameEnd 
              newGame={newGame} 
              rollCount={rollCount} 
              gameLost={gameLost} 
              goHome={goHome} 
              reloadButtonLabel={reloadButtonLabel} 
              setReloadButtonLabel={setReloadButtonLabel}
              timeCount={timeCount}
            />   
      }
      <Timer 
        timeCount={timeCount}
        setTimeCount={setTimeCount}
        deadline={deadline}
        stopCount={stopCount}
        setStopCount={setStopCount}
        tenzies={tenzies}
      />
    </div>
  )
}

export default App;
