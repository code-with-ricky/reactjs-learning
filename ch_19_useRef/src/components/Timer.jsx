import { useRef, useEffect, useState } from "react";

const Timer = () => {
    const [count, setCount] = useState(0); // value of count is persisted across renders
    const intervalRef = useRef(null);

    console.log("Timer Rendered!");

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        () => {
            clearInterval(intervalRef.current);
        }
    }, []);
  return <div>
    <h1>Timer: {count}</h1>
    <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
  </div>;
};

export default Timer;
