# UseEffect in React

# 1. Why Does useEffect exists?

- React components have two jobs:
  - Render UI

  ```js
  function App() {
    return <h1>Hello</h1>;
  }
  ```

  This is React's primary responsibility.
  - Perform Side Effects
    - API Calls
    - Timers
    - Event Listeners
    - Local Storage
    - Web sockets
    - Analytics tracking

    - These are called side effects.
    - A side effect is anything that interacts with the outside world.

  ```js
  fetch(...)
  setInterval(...)
  localStorage.setItem(...)
  window.addEventListener(...)
  ```

  React needs a special place for these operations.

  ```js
  useEffect();
  ```

---

# 2. Component Lifecycle

- Before hooks, class components had:

```js
componentDidMount();
componentDidUpdate();
componentWillUnmount();
```

- Hooks replaced these
- Think useEffect() as combination of:

```js
componentDidMount;
componentDidUpdate;
componentWillUnmount;
```

---

# 3. Basic Syntax

```js
import { useEffect } from "react";

useEffect(() => {
  console.log("Effect executed");
});
```

- What Happens:

```txt
Render -> Effect Runs
```

- For Every Render because there `no dependency array` exists:

```txt
Render #1
Effect Runs

Render #2
Effect Runs

Render #3
Effect Runs
```

---

# 4. Dependency Array

- Syntax:

```js
useEffect(() => {}, []);
```

The second argument controls when the effect runs

- `case 1: No Dependency Array`:
  - runs on every render

  ```js
  useEffect(() => {
    console.log("Run at every render");
  });
  ```

- `case 2: Empty Dependency Array`:
  - only once after initial render
  - equivalent to `componentDidMount()`

  ```js
  useEffect(() => {
    console.log("Run at initial render only");
  }, []);
  ```

- `case 3: Dependency Present`:
  - runs on `initial render` + whenever `dependency variable` value changes
  ```js
  useEffect(() => {
    console.log("Count Changed");
  }, [count]);
  ```

---

# 5. Fetch Data automatically
- using useEffect with empty dependency array, fetches data when page initially renders

    ```js
    const [todos, setTodos] = useState([]);

    useEffect(() => {
    const getTodos = async () => {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
        );

        const data = await response.json();

        setTodos(data);
    };

    getTodos();
    }, []);
    ```

--- 

# 6. Infinite Loop Problem

## Example 1:

```js
    const [cout, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    });
```

- on initial render, state value is initialed, count = 0
- on initial render useEffect runs, setCount updates count = 1
- since state changed, therefore, useEffect again runs, and setCount again updates
- so this inifinite loop occurs, `app crashes`

## Example 2:

```js
    useEffect(() => {
        getTodos();
    });
```

---

# 7. Multiple Dependencies

```js
    useEffect(() => {
    console.log("Changed");
    }, [count, name]);
```

- either `count` or `name` changes, effect runs again

---

# 8. Cleanup Functions

- cleanup runs
    - before effect runs again
    OR
    - when components unmounts

    ```js
    useEffect(() => {
        return () => {
            // cleanup
        };
    }, []);
    ```

## Example 1: Timer
- In following code snippet, `Memory Leak` happens

    ```js
    useEffect(() => {
        setInterval(() => {
            console.log("Tick");
        }, 1000);
    }, []);
    ```

- Solution:
    ```js
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Tick");
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    ```

## Example 2: Event Listener
- In following code snippet, `listener never removed`

    ```js
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);
    ```

- Solution

    ```js
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeListener("resize", handleResize);
        };
    }, []);
    ```

---

# 9. Modern Rule for usage of UseEffect

- Use useEffect only when `synchronizing` with something outside react
- Examples
    - API requests
    - WebSocket connections
    - Browser APIs
    - Event listeners
    - Timers
    - Local Storage
    - Third-party integrations
    - Analytics tracking

- Not use for:
    - Calculations
    - Filtering arrays
    - Derived state

--- 

# 10. Real-World Examples

## Example 1: Local Storage
```js
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
```

## Example 2: Search API
```js
    useEffect(() => {
        fetchResults(searchTerm); 
    }, [searchTerm]);
```

--- 

# 11. Custom Hook Example
- Rather than repeating useEffect everywhere, create custom hook
- This is how large react apps are built

```js
    function useDocumentTitle(title) {
        useEffect(() => {
            document.title = title;
        }, [title]);
    }

    // usage
    useDocumentTitle("Dashboard");
```

---

# 12. useEffect Dependency Rule

- Every `reactive value` used inside an effect should usually appear in the dependency array.

- bad example: uses `count` but not included in dependency array
```js
    useEffect(() => {
    console.log(count);
    }, []);
```

- EsLint gives warning: `Missing dependency`

- Solution:
```js
    useEffect(() => {
        console.log(count);
    }, [count]);
```
