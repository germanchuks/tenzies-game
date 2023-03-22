import Confetti from 'react-confetti'
import ReplayIcon from '@mui/icons-material/Replay';
import HouseIcon from '@mui/icons-material/House';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function GameEnd(props) {

    return (
        <div className='replay-screen'>
            {
                !props.gameLost ?
                    <>
                        <div className='game-tag'>Congratulations. You won!</div>
                        <div className='records'>
                        <p className='time-record'>Time: {props.timeCount}<span>sec</span></p>
                        <p className='roll-record'>Rolls: {props.rollCount}</p>
                        </div>
                        
                        {/* <div className="button" onClick={props.newGame}><ReplayIcon /><span></span> New Game</div> */}
                        <Confetti />
                    
                    </> 
                : 
                    <>
                        <div className='game-tag'>
                            Sorry, you ran out of time <SentimentVeryDissatisfiedIcon fontSize='500px'/>
                        </div>
                        {/* <div className="button" onClick={props.newGame}><ReplayIcon /> Try Again</div> */}
                    </>
            }
            <div className="button" onClick={props.newGame}><ReplayIcon /> <span style={{paddingLeft:'8px'}}>{props.reloadButtonLabel}</span></div>
            <div className="button" onClick={props.goHome}><HouseIcon /> <span style={{paddingLeft:'8px'}}>Home</span></div>
        </div> 
    )
   
}