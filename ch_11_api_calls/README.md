# API Call using Fetch and Axios

This project demonstrates how to fetch data from an API using JavaScript's built-in **Fetch API** and **axios** library.

---

# What is an API?

**API (Application Programming Interface)** allows one application to communicate with another application.

For example:

* Frontend (React App) requests data.
* Backend (API Server) sends data back.
* The data is usually returned in **JSON format**.

Example API:

```txt
https://jsonplaceholder.typicode.com/todos
```

Response:

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
]
```

---

# What is Fetch API?

`fetch()` is a built-in browser function used to make HTTP requests.

Example:

```js
fetch("https://jsonplaceholder.typicode.com/todos");
```

The `fetch()` function returns a **Promise**.

---

# What is a Promise?

A Promise represents the result of an asynchronous operation.

A Promise can be in one of three states:

| State     | Meaning                          |
| --------- | -------------------------------- |
| Pending   | Operation is still running       |
| Fulfilled | Operation completed successfully |
| Rejected  | Operation failed                 |

Example:

```js
const promise = fetch(
  "https://jsonplaceholder.typicode.com/todos"
);
```

Immediately after execution:

```txt
Promise { <pending> }
```

The request is still being processed.

---

# Why Do We Need Async Operations?

API calls take time because:

* Data travels over the internet.
* Server processes the request.
* Response comes back to the browser.

JavaScript should not freeze the UI while waiting.

Therefore API calls are asynchronous.

---

# Syntax 1: Using async/await (Recommended)

Modern JavaScript usually uses `async/await`.

```js
const getTodos = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
```

## Explanation

### Step 1

```js
const response = await fetch(url);
```

* Sends an HTTP request.
* `await` pauses execution until the Promise resolves.
* Returns a Response object.

### Step 2

```js
const data = await response.json();
```

* Converts JSON response into a JavaScript object/array.
* Returns another Promise.
* Requires another `await`.

### Step 3

```js
console.log(data);
```

* Access the actual API data.

### Step 4

```js
catch(error)
```

* Handles network errors.
* Prevents application crashes.

---

# Syntax 2: Using then/catch

Before async/await, Promise chaining was commonly used.

```js
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

## Explanation

### First then()

```js
.then((response) => response.json())
```

Converts the response body into JSON.

### Second then()

```js
.then((data) => {
  console.log(data);
})
```

Receives parsed JSON data.

### catch()

```js
.catch((error) => {
  console.log(error);
})
```

Handles errors.

---

# async/await vs then/catch

| async/await                 | then/catch        |
| --------------------------- | ----------------- |
| Easier to read              | More chaining     |
| Looks like synchronous code | More nested       |
| Preferred in modern React   | Still widely used |
| Uses try/catch              | Uses catch()      |

Example:

### async/await

```js
const data = await fetch(url);
```

### then/catch

```js
fetch(url)
  .then(...)
  .catch(...);
```

Both achieve the same result.

---

# Why Do We Use try/catch?

Without error handling:

```js
const response = await fetch(url);
```

If the request fails:

```txt
Unhandled Promise Rejection
```

Using:

```js
try {
  // code
} catch (error) {
  console.log(error);
}
```

allows us to gracefully handle failures.

---

# React State and API Data

In React, data received from an API is usually stored in state.

```js
const [todos, setTodos] = useState([]);
```

### Initial State

```js
[]
```

Initially no data exists.

### After API Success

```js
setTodos(data);
```

React updates state and re-renders the UI.

---

# Rendering Data in React

```jsx
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>
      {todo.title}
    </li>
  ))}
</ul>
```

## What map() Does

Transforms an array into JSX elements.

Example:

```js
const numbers = [1, 2, 3];

numbers.map((num) => num * 2);
```

Output:

```js
[2, 4, 6]
```

React uses the same concept to create UI elements.

---

# Why Is key Important?

Incorrect:

```jsx
<li>{todo.title}</li>
```

Correct:

```jsx
<li key={todo.id}>{todo.title}</li>
```

React uses the `key` to:

* Track list items
* Improve rendering performance
* Update only changed elements

---

# Important Interview Questions

## Does fetch() return data directly?

No.

It returns a Promise.

```js
const response = fetch(url);
```

Output:

```txt
Promise { <pending> }
```

---

## Why do we use await twice?

```js
const response = await fetch(url);
const data = await response.json();
```

Because:

1. `fetch()` returns a Promise.
2. `response.json()` also returns a Promise.

Both need to be resolved.

---

## Does fetch reject on 404 or 500?

No.

`fetch()` only rejects for network failures.

Example:

```js
const response = await fetch(url);

if (!response.ok) {
  throw new Error("Request Failed");
}
```

Recommended:

```js
if (!response.ok) {
  throw new Error(`HTTP Error: ${response.status}`);
}
```

---

# Complete React Example

```jsx
import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const data = await response.json();

      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={getTodos}>
        Get Data
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

---

# Axios

## What is Axios?

Axios is a popular JavaScript library used to make HTTP requests.

Like Fetch API, Axios allows applications to communicate with servers and APIs.

Before using Axios, it must be installed:

```bash
npm install axios
```

Import it into your component:

```js
import axios from "axios";
```

---

# Why Use Axios?

Axios provides several features that Fetch does not provide by default:

* Automatic JSON parsing
* Better error handling
* Request and response interceptors
* Request cancellation
* Request timeout support
* Cleaner syntax for many use cases

Because of these features, Axios is commonly used in React applications.

---

# Making a GET Request with Axios

Example:

```js
const getComments = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const data = response.data;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
```

---

# Understanding the Axios Response Object

When using Fetch:

```js
const response = await fetch(url);
```

You receive a Response object:

```js
const data = await response.json();
```

When using Axios:

```js
const response = await axios.get(url);
```

You receive an object containing:

```js
{
  data: [...],
  status: 200,
  headers: {},
  config: {}
}
```

The actual API data is already available in:

```js
response.data
```

No additional `.json()` call is required.

---

# Why Doesn't Axios Need response.json()?

Fetch returns a raw Response object:

```js
const response = await fetch(url);
const data = await response.json();
```

Axios automatically parses JSON responses:

```js
const response = await axios.get(url);
const data = response.data;
```

This is one of the biggest differences between Fetch and Axios.

---

# Axios Error Handling

Fetch and Axios handle errors differently.

## Fetch

```js
const response = await fetch(url);

if (!response.ok) {
  throw new Error(`HTTP Error: ${response.status}`);
}
```

Fetch only rejects Promises for:

* Network failures
* CORS issues
* Browser-level failures

Fetch does NOT automatically reject for:

* 400 Bad Request
* 401 Unauthorized
* 404 Not Found
* 500 Internal Server Error

You must manually check:

```js
response.ok
```

or

```js
response.status
```

---

## Axios

```js
try {
  const response = await axios.get(url);
} catch (error) {
  console.log(error);
}
```

Axios automatically rejects the Promise for:

* 4xx responses
* 5xx responses
* Network failures

This means Axios automatically enters the `catch` block when the request fails.

Because of this, code such as:

```js
if (response.status !== 200) {
  throw new Error();
}
```

is usually unnecessary.

---

# Accessing Error Information in Axios

Axios provides detailed error information.

Example:

```js
try {
  const response = await axios.get(url);
} catch (error) {
  console.log(error.message);
  console.log(error.response?.status);
  console.log(error.response?.data);
}
```

Useful properties:

| Property              | Description         |
| --------------------- | ------------------- |
| error.message         | Error message       |
| error.response        | Server response     |
| error.response.status | HTTP status code    |
| error.response.data   | Error response body |

---

# Axios Using then/catch Syntax

Axios also supports Promise chaining.

```js
axios
  .get("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
```

This is equivalent to:

```js
const response = await axios.get(url);
console.log(response.data);
```

---

# Fetch vs Axios

| Feature                 | Fetch    | Axios       |
| ----------------------- | -------- | ----------- |
| Built into browser      | ✅ Yes    | ❌ No        |
| Requires installation   | ❌ No     | ✅ Yes       |
| JSON parsing            | ❌ Manual | ✅ Automatic |
| Uses response.json()    | ✅ Yes    | ❌ No        |
| Rejects on 404/500      | ❌ No     | ✅ Yes       |
| Request timeout support | ❌ Manual | ✅ Built-in  |
| Interceptors            | ❌ No     | ✅ Yes       |
| Popular in React apps   | ✅ Yes    | ✅ Yes       |

---

# When Should You Use Fetch?

Use Fetch when:

* You don't want additional dependencies.
* The project is small.
* You only need simple API calls.
* You prefer browser-native APIs.

Example:

```js
const response = await fetch(url);
const data = await response.json();
```

---

# When Should You Use Axios?

Use Axios when:

* The application makes many API calls.
* You need centralized API configuration.
* You need request/response interceptors.
* You want simpler error handling.
* You want automatic JSON parsing.

Example:

```js
const response = await axios.get(url);
const data = response.data;
```

---

# Interview Questions

## Does Axios return a Promise?

Yes.

```js
const promise = axios.get(url);
```

Output:

```txt
Promise { <pending> }
```

---

## Does Axios automatically convert JSON into JavaScript objects?

Yes.

```js
const response = await axios.get(url);
```

The JSON response is automatically available in:

```js
response.data
```

---

## Which is better: Fetch or Axios?

Neither is universally better.

Use:

* Fetch when you want a lightweight browser-native solution.
* Axios when you want additional features and simpler API handling.

Both are widely used in professional React applications.

---

# Summary

* APIs allow applications to communicate and exchange data.
* API responses are commonly returned in JSON format.
* `fetch()` is a built-in browser API for making HTTP requests.
* `axios` is a third-party library used for making HTTP requests.
* Both Fetch and Axios return Promises.
* Promises have three states: Pending, Fulfilled, and Rejected.
* API calls are asynchronous because network requests take time to complete.
* `async/await` provides a cleaner way to work with Promises.
* `then/catch` is the traditional Promise chaining syntax.
* `fetch()` returns a Response object.
* `response.json()` returns a Promise and must be awaited.
* Axios automatically parses JSON responses.
* Axios stores the parsed response data inside `response.data`.
* Fetch requires manual HTTP status checking using `response.ok` or `response.status`.
* Axios automatically rejects Promises for 4xx and 5xx HTTP responses.
* `try/catch` is commonly used with `async/await` for error handling.
* `.catch()` is commonly used with Promise chaining for error handling.
* React components often store API data in state using `useState`.
* Updating state triggers a React re-render.
* Conditional rendering can be used to display data only when it exists.
* `Array.map()` is commonly used to render lists in React.
* Every rendered list item should have a unique `key` prop.
* Fetch is a good choice when you want a lightweight browser-native solution.
* Axios is a good choice when you need automatic JSON parsing, better error handling, interceptors, or advanced request configuration.
* Understanding Fetch, Axios, Promises, async/await, and React state management is essential for building real-world React applications.

