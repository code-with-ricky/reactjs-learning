import React from "react";

const App = () => {
  function clickMe() {
    console.log("Button Clicked");
  }

  const trackTyping = (e) => {
    e.preventDefault();
    // e.tagrte -> <input/> tag
    console.log(e.target.value);
  };

  return (
    <div className="my-container">
      {/* just pass the function name as reference */}
      <button onClick={clickMe} className="btn">
        Click Me
      </button>

      {/* dont write clickMe(), then without button click the function will be called at first */}
      {/* and if you click, it will not execute  */}
      {/* <button onClick={clickMe()} className="btn">Click Me2</button> */}

      {/* on mouse enter */}
      <button
        onMouseEnter={() => console.log("Mouse Enter")}
        onMouseLeave={function mouseLeave() {
          console.log("Mouse Leave");
        }}
        className="btn"
      >
        Mouse Enter and Leave
      </button>

      {/* track typing in input field using onChjange */}
      <input
        type="text"
        name="name"
        id="name"
        onChange={trackTyping}
        placeholder="Enter name"
        className="input-field"
      />
    </div>
  );
};

export default App;
