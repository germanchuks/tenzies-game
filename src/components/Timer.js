 import { useEffect } from 'react'

export default function Timer({timeCount,setTimeCount,tenzies,deadline,stopCount,setStopCount}) {
    

    // const getTime = () => {
    //     const time = Date.now();
    //     const seconds = Math.floor((time / 1000) % 60);
    //     setTimeCount(seconds);
    // }

    useEffect(() => {
        if (tenzies) {
            setStopCount(false)
        }

        if (timeCount === deadline ) {
            setStopCount(false)
        }
    }, [stopCount, timeCount, deadline, setStopCount, tenzies])

    useEffect(() => {
        
        const interval = stopCount && setInterval(() => setTimeCount(prevCount => prevCount + 1), 1000);
    
        return () => clearInterval(interval);
        }, [timeCount, stopCount, setTimeCount]);
    

}