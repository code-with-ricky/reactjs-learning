import { useReducer, useState } from "react";
import { countReducer, initialValue } from "../reducers/countReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialValue);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByValue", payload: +inputValue });
    setInputValue(0);
  }

  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByValue", payload: +inputValue })
    setInputValue(0);
  }

  return (
    <>
      <h1>Count: {state.count}</h1>
      <div className="button-container">
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>

      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="button-container">
          <button onClick={handleIncrementByAmount}>
            + by value
          </button>
          <button onClick={handleDecrementByAmount}>
            - by value
          </button>
          <button onClick={() => setInputValue(0)}>Reset Input</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
