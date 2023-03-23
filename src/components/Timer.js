import { useEffect } from "react";

// Set timer feature
//  export const Timer = ({ deadline = new Date().toString() }) => {
//    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
//    const [time, setTime] = useState(parsedDeadline - Date.now());

//    useEffect(() => {
//      const interval = setInterval(
//          () => setTime(parsedDeadline - Date.now()),
//          1000,
//      );
//      return () => clearInterval(interval);
//     }, [parsedDeadline]);

//     return (
//         <div className="timer">
//            {(time / SECOND) % 60}
//         </div>
//     );
// };

export default function Timer({
  timeCount,
  setTimeCount,
  tenzies,
  deadline,
  stopCount,
  setStopCount,
  gameLoad,
}) {
  // const getTime = () => {
  //     const time = Date.now();
  //     const seconds = Math.floor((time / 1000) % 60);
  //     setTimeCount(seconds);
  // }

  useEffect(() => {
    console.log("time 1");
    if (tenzies) {
      setStopCount(false);
    }

    if (timeCount === deadline) {
      setStopCount(false);
    }
  }, [stopCount, timeCount, deadline, setStopCount, tenzies]);

  useEffect(() => {
    console.log("time 2");

    const interval =
      stopCount &&
      !gameLoad &&
      setInterval(() => setTimeCount((prevCount) => prevCount + 1), 1000);

    return () => clearInterval(interval);
  }, [timeCount, stopCount, setTimeCount]);
}
