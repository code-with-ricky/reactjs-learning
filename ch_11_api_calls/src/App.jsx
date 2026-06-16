import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  // useState creates a state variable and a function to update it.
  // todos = current state value
  // setTodos = function used to update the state
  // [] = initial value (an empty array)
  const [todos, setTodos] = useState([]);

  const [comments, setComments] = useState([]);

  // method 1: fetch api
  const getTodos = async () => {
    try {
      // fetch() sends an HTTP GET request to the API.
      // fetch returns a Promise immediately.

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      // await pauses execution until the Promise resolves.
      // response is a Response object containing metadata
      // such as status, headers, etc.

      // response.json() also returns a Promise because
      // converting the response body into JavaScript objects
      // takes time.

      const todos = await response.json();

      // Updating state triggers a re-render.
      // React compares the new state with the old state
      // and updates the UI accordingly.
      console.log(todos);
      setTodos(todos);
    } catch (error) {
      // Handles network errors or any exception thrown
      // inside the try block.

      console.log(error);
    }
  };

  // method 2: axios library
  const getComments = async () => {
    try {
      // axios is a third-party HTTP client library.
      // Unlike fetch, axios automatically:
      // 1. Parses JSON responses
      // 2. Rejects promises for non-2xx status codes
      // 3. Provides a cleaner API

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments",
      );

      // Axios returns a response object.

      // response.data   -> actual API data
      // response.status -> HTTP status code
      // response.headers -> response headers

      console.log(response);

      // Unlike fetch(), we do NOT need:
      // await response.json()

      // Axios automatically converts JSON
      // into JavaScript objects.

      const data = response.data;

      console.log(data);

      // Updating state triggers a re-render.
      // React will display the comments list.

      setComments(data);
    } catch (error) {
      // Axios automatically enters catch for:
      // - Network errors
      // - 4xx responses
      // - 5xx responses

      console.log(error);

      // Useful properties available on axios errors:
      // error.message
      // error.response
      // error.response.status
      // error.response.data

      console.log(error.response?.status);
    }
  };

  return (
    <div>
      {/* When the button is clicked,
          React executes getTodos() */}
      <button className="btn" onClick={getTodos}>
        Get Todos
      </button>
      <button className="btn" onClick={getComments}>
        Get Comments
      </button>

      {todos.length > 0 && (
        <ul>
          {/* map() transforms each todo object
            into a React element (<li>) */}

          {todos.map((todo) => (
            // React requires a unique "key" prop when rendering lists.
            // Using todo.id is better than using the array index.

            <li key={todo.id} className="todo">
              {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
            </li>
          ))}
        </ul>
      )}

      {comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            // React requires a unique "key" prop when rendering lists.
            // Using todo.id is better than using the array index.

            <li key={comment.id} className="todo">
              {comment.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
