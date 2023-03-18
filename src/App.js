import './App.css';
import { useState, useEffect } from 'react'
import Tile from './components/Tile'
import {nanoid} from 'nanoid'
import Game from './components/Game';
import GameStart from './components/GameStart';
import GameEnd from './components/GameEnd';


function App() {
  
  //Loads homepage first until state is changed on button click.
  const [gameLoad, setGameLoad] = useState(true)
  
  const [dice, setDice] = useState(allNewDice())
  const [rollCount, setRollCount] = useState(0)
  
  //State changes if user wins the game
  const [tenzies, setTenzies] = useState(false)
  
  //State changes if player runs out of time
  const [gameLost, setGameLost] = useState(false)

  //Sets difficulty level
  const [level, setLevel] = useState(0)

  //Sets Game Reload Button Label
  const [reloadButtonLabel, setReloadButtonLabel] = useState(gameLost ? 'Try Again' : 'Restart')

  //Runs everytime to check to game won
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    
    //Takes one of the die value as reference to check equality with other dice
    const refValue = dice[0].value
    const allValue = dice.every(die => die.value === refValue)

    if (allHeld && allValue) {
      setTenzies(true)
      setGameLost(false)
    }
  }, [dice])


  //Sets timer function to declare game lost after 25seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      !gameLoad && setGameLost(true)
      !gameLoad && setTenzies(true)
    }, 25000);
    return () => clearTimeout(timer);
  },[tenzies,gameLost,gameLoad]);


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
      setTenzies(false)
      setDice(allNewDice)
      setRollCount(0)
    }, 2000)
    
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
            level={level} 
            setLevel={setLevel} 
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
            />   
      }
    </div>
  )
}

export default App;
