import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Amrik";
  };
  
  return (
    <div>
      <input type="text" placeholder="Click button to focus" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus and Write Amrik</button>
    </div>
  );
};

export default FocusInput;
