

export default function Tile(props) {

    const styles = {
        backgroundColor: props.isHeld ? 'rgba(89, 227, 145, 1)' : '#FFFFFF'  
    }
    
    return (
        <div 
            style={styles} 
            className='die-box'
            onClick={()=>props.holdDice(props.id)}
        >
            {props.value}
        </div>
    )
}