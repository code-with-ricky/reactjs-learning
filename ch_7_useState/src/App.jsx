import React from "react";
import { useState } from "react";

const App = () => {
  // const [variable, setFunction] = useState(initialValue of variable);
  // setFunction is used to change the state/value of the useState variable
  const [num, setNum] = useState(0);
  const [username, setUsername] = useState("User");

  const checkLogin = (isLoggedIn = false) => {
    if (isLoggedIn) setUsername("Amrik");
  };

  const [name, setName] = useState("");

  const changeValue = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  // Note: Async behavior of setFunction of useState
  const [value, setValue] = useState(10);
  const buttonClick = () => {
    setValue(value + 10); // this runs asynchronously, so value gets updated, updated value displayed in ui
    console.log(value); // bt when print this, old value is only visible
  };

  // Working with objects
  const [user, setUser] = useState({ name: "Amrik", age: 22 });
  const updateUser = () => {
    const newUser = { ...user };
    newUser.name = "Ricky";
    setUser(newUser);
  };

  // working with array
  const [fruits, setFruits] = useState([
    "apple",
    "banana",
    "kiwi",
    "watermelon",
  ]);
  const [newFruitName, setNewFruitName] = useState("");
  const [fruitIndex, setFruitIndex] = useState(0);

  const updateFruit = () => {
    const newFruits = [...fruits];
    newFruits[fruitIndex] = newFruitName;
    setFruits(newFruits);
  }


  // Batch Update
  const[number, setNumber] = useState(10);
  function updateNumber() {

    // following doesnot work as its seems
    // following will not update number by 3
    // it updates only ones
    // setNumber(number + 1);
    // setNumber(number + 1);
    // setNumber(number + 1);

    // rather do following
    setNumber(prev => prev + 1);
    setNumber(prev => prev + 1);
    setNumber(prev => prev + 1);
  }

  return (
    <div>
      <h1>Value of a is {num}</h1>
      <button onClick={() => setNum(num + 1)}>Increase</button>
      <button onClick={() => setNum(num - 1)}>Decrease</button>

      <h1>Username: {username}</h1>
      <button onClick={() => checkLogin(true)}>Login</button>

      <h1>My name is: {name}</h1>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter name"
        onChange={changeValue}
      />

      <h1>Value: {value}</h1>
      <button onClick={buttonClick}>Update Value</button>

      <h1>
        {user.name}, {user.age}
      </h1>
      <button onClick={updateUser}>Update User</button>

      <h1>Fruits:</h1>
      <ol>
        {fruits.map((fruit) => <li>{fruit}</li>)}
      </ol>
      <input
        type="text"
        placeholder="Enter fruit name"
        onChange={(e) => setNewFruitName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter fruit index"
        onChange={(e) => setFruitIndex(e.target.value)}
      />
      <button onClick={updateFruit}>Update</button>

      <h1>{number}</h1>
      <button onClick={updateNumber}>Click</button>
    </div>
  );
};

export default App;
