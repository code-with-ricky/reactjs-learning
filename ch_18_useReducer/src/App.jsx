// following is moved to countReducer

import Counter from "./components/Counter.jsx";

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };

//     case "decrement":
//       return { ...state, count: state.count - 1 };

//     case "reset":
//       return { ...state, count: 0 };

//     default:
//       return state;
//   }
// };

const App = () => {
  return <div>
    <Counter/>
  </div>;
};

export default App;
