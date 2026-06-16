import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  // case 1
  useEffect(() => {
    console.log("Runs on every render");
  });

  // case 2
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  const [count, setCount] = useState(0);
  // case 3
  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  const [todos, setTodos] = useState([]);

  // fetch api automatically
  // on initial render of the page, fetchTodos method automaticallyu executed and it fetch todos data
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return (
    <div className="p-10 bg-[#333]">
      <h1 className="text-3xl font-bold text-[#eee] mb-3">{count}</h1>
      <button
        className="px-3 py-2 bg-amber-600 rounded-md"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click
      </button>

      <ul>
        {todos.map((todo) => (<li>{todo.title}</li>))}
      </ul>
    </div>
  );
};

export default App;
