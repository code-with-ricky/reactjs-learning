# useRef hook
- useRef hook provides a way to access and interact with DOM elements to persist values across renders without causing a re-render

- Use of useRef
    - interact with DOM element
    - persist data across renders

## Example 1: Interact with DOM Element

```jsx
import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Amrik";
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Click button to focus"
        ref={inputElement}
      />
      <button onClick={() => focusInput()}>
        Focus and Write Amrik
      </button>
    </div>
  );
};

export default FocusInput;
```

### Explanation

* `useRef()` is a React Hook used to create a mutable reference that persists across component re-renders.
* `const inputElement = useRef(null);`

  * Creates a ref object with an initial value of `null`.
  * React stores the referenced element inside the `.current` property.
* `ref={inputElement}`

  * Connects the ref to the `<input>` element.
  * After rendering, `inputElement.current` points to the actual DOM input element.
* When the button is clicked, the `focusInput()` function executes.
* `inputElement.current.focus();`

  * Programmatically places the cursor inside the input field.
* `inputElement.current.value = "Amrik";`

  * Directly updates the value of the input field to `"Amrik"`.
* Since refs do not trigger re-renders, updating `.current` does not cause the component to render again.
* This behavior differs from `useState()`, where state updates trigger a re-render.

### Flow of Execution

1. Component renders.
2. `useRef(null)` creates a ref object.
3. React assigns the input DOM element to `inputElement.current`.
4. User clicks the button.
5. `focusInput()` is called.
6. The input field receives focus.
7. The input value is updated to `"Amrik"`.
8. No re-render occurs.

### Why Use `useRef` Here?

* Access DOM elements directly.
* Programmatically focus an input field.
* Read or modify DOM properties.
* Work with third-party libraries that require direct DOM access.
* Store mutable values that persist across renders without causing updates.

### Important Note

```js
inputElement.current.value = "Amrik";
```

While direct DOM manipulation works, React generally recommends using `useState()` for managing form values (controlled components).

Common use cases for `useRef` include:

* Managing focus
* Text selection
* Scrolling to elements
* Media playback controls
* Accessing DOM measurements
* Integrating external JavaScript libraries

### Visual Representation

```text
useRef(null)
      │
      ▼
inputElement
      │
      ▼
inputElement.current
      │
      ▼
<input />

Button Click
      │
      ▼
focusInput()
      │
      ├── focus()
      └── value = "Amrik"
```

### Key Takeaways

* `useRef` provides direct access to DOM elements.
* Ref values persist between renders.
* Updating a ref does not trigger a component re-render.
* In this example, `useRef` is used to focus the input field and update its value when the button is clicked.

---

## Example 2: Persist Data Across Renders

```jsx id="wy1x5q"
import { useRef, useEffect, useState } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    console.log("Timer Rendered!");

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            <h1>Timer: {count}</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>
                Stop Timer
            </button>
        </div>
    );
};

export default Timer;
```

> **Note:** The original code snippet is missing the `return` statement inside the cleanup function. The corrected version above properly clears the interval when the component unmounts.

### Explanation

* `useState(0)` creates a state variable named `count`.
* `count` stores the timer value and persists across component re-renders.
* `setCount()` updates the state value and triggers a re-render.
* `useRef(null)` creates a mutable reference object named `intervalRef`.
* `intervalRef.current` stores the interval ID returned by `setInterval()`.
* Unlike state variables, updating a ref does **not** trigger a re-render.
* The interval ID remains available throughout the component lifecycle.
* This allows us to access and clear the interval whenever needed.

### Understanding the Ref

```js id="8j6qwb"
const intervalRef = useRef(null);
```

After the interval starts:

```js id="k5l31y"
intervalRef.current = setInterval(...);
```

The value stored in `intervalRef.current` looks similar to:

```js id="b6thxw"
{
  current: 5 // interval ID
}
```

This interval ID can later be used to stop the timer.

### How `useEffect` Works Here

```js id="8q4f77"
useEffect(() => {
    intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
        clearInterval(intervalRef.current);
    };
}, []);
```

* The empty dependency array `[]` means the effect runs only once when the component mounts.
* `setInterval()` executes every 1000 milliseconds (1 second).
* Every second:

  * `setCount()` updates the count.
  * React re-renders the component.
* The interval ID is stored inside `intervalRef.current`.
* When the component unmounts, the cleanup function clears the interval to prevent memory leaks.

### Why Use `useRef` Instead of `useState`?

If we stored the interval ID in state:

```js id="4z31xj"
const [intervalId, setIntervalId] = useState(null);
```

Every update would trigger an unnecessary re-render.

Using `useRef` is better because:

* The interval ID is not displayed in the UI.
* We only need to store and access it.
* Updating refs does not cause re-renders.
* The value persists across renders.

### Flow of Execution

1. Component renders for the first time.
2. `count` is initialized to `0`.
3. `intervalRef.current` is initialized to `null`.
4. `useEffect()` runs after the initial render.
5. `setInterval()` starts a timer.
6. The interval ID is stored in `intervalRef.current`.
7. Every second:

   * `setCount()` increments the count.
   * React re-renders the component.
8. User clicks **Stop Timer**.
9. `clearInterval(intervalRef.current)` stops the timer.
10. Count value remains unchanged until another update occurs.

### Visual Representation

```text id="y4c3v8"
Component Mount
       │
       ▼
useEffect()
       │
       ▼
setInterval()
       │
       ▼
Store ID in intervalRef.current
       │
       ▼
Every 1 Second
       │
       ▼
setCount()
       │
       ▼
Component Re-renders
       │
       ▼
User Clicks Stop Timer
       │
       ▼
clearInterval(intervalRef.current)
```

### Why `useRef` is Useful Here

* Store interval IDs.
* Store timeout IDs.
* Persist values between renders.
* Avoid unnecessary re-renders.
* Keep mutable values available throughout the component lifecycle.

### Key Takeaways

* `useState` stores values that affect the UI and trigger re-renders.
* `useRef` stores mutable values that should persist across renders without causing re-renders.
* In this example, the timer count is stored in state because it is displayed on the screen.
* The interval ID is stored in a ref because it is only needed for managing the timer.
* This is a common React pattern for timers, subscriptions, and external resources.
