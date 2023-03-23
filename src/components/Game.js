export default function Game(props) {

    return (
        <main className="tenzies-game">
            <div className="title">Tenzies</div>
            <div className='display-time' style={{
                color: props.displayTime < 6 ? 'red' : '#000' 
            }}> 
                {props.displayTime < 10 ? '0:0' : '0:'}{props.displayTime}
            </div>
            <div className="sub-title">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</div>
            <main className="dice-container">{props.dieTiles}</main>
            <div className="button" onClick={props.rollDice}>Roll</div>
        </main> 
    )
    
}

