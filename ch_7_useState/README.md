# React Hooks

* `useState` : for basic state management
* `useEffect` : for side effects handling like API calls, DOM manipulation, event listeners, etc.
* `useContext` : for making data globally available and avoiding prop drilling
* `useReducer` : for complex state management (small version of Redux)
* `useRef` : for holding mutable values that should not trigger re-renders, or for accessing DOM elements
* `useMemo` & `useCallback` : for optimization and avoiding unnecessary re-renders

---

# useState

## Syntax

```js
const [state, setState] = useState(initialValue);
```

### Parameters

* `state` → current state value
* `setState` → function used to update state
* `initialValue` → initial value of the state

### Example

```js
const [num, setNum] = useState(0);
```

---

# Updating State

```js
setNum(num + 1);
```

Updates state using the value from the current render.

```js
setNum(prev => prev + 1);
```

Updates state using the latest available state value.

### Rule

Use functional updates whenever the new state depends on the previous state.

Examples:

```js
setCount(prev => prev + 1);
setOpen(prev => !prev);
setItems(prev => [...prev, newItem]);
```

---

# State Updates are Asynchronous

```js
const [value, setValue] = useState(10);

setValue(value + 10);
console.log(value);
```

### Output

Console will show the old value because React schedules state updates and performs re-rendering later.

### Example

```js
const buttonClick = () => {
  setValue(value + 10);
  console.log(value);
};
```

---

# Conditional State Updates

```js
const [username, setUsername] = useState("User");

const checkLogin = (isLoggedIn) => {
  if (isLoggedIn) {
    setUsername("Amrik");
  }
};
```

State can be updated conditionally based on business logic.

---

# Handling Form Inputs

```js
const [name, setName] = useState("");

const changeValue = (e) => {
  setName(e.target.value);
};
```

### Input Binding

```js
<input onChange={changeValue} />
```

### Notes

* `e.target.value` returns the current input value.
* State and UI stay synchronized.
* This is called a **controlled component**.

---

# Working with Objects

## Object State

```js
const [user, setUser] = useState({
  name: "Amrik",
  age: 22
});
```

### ❌ Wrong

```js
user.name = "Ricky";
setUser(user);
```

Mutating state directly can prevent React from detecting changes.

### ✅ Correct

```js
const newUser = { ...user };
newUser.name = "Ricky";
setUser(newUser);
```

or

```js
setUser({
  ...user,
  name: "Ricky"
});
```

### Notes

* Always create a new object.
* Use the spread operator (`...`) to copy existing properties.

---

# Working with Arrays

## Array State

```js
const [fruits, setFruits] = useState([
  "apple",
  "banana",
  "kiwi",
  "watermelon"
]);
```

### ❌ Wrong

```js
fruits[0] = "Mango";
setFruits(fruits);
```

### ✅ Correct

```js
const newFruits = [...fruits];
newFruits[0] = "Mango";
setFruits(newFruits);
```

### Example

```js
const updateFruit = () => {
  const newFruits = [...fruits];
  newFruits[fruitIndex] = newFruitName;
  setFruits(newFruits);
};
```

### Notes

* Never mutate arrays directly.
* Create a new array before updating.
* React detects changes through new references.

---

# Batch Updates

Consider:

```js
setNumber(number + 1);
setNumber(number + 1);
setNumber(number + 1);
```

If `number = 10`, React sees:

```js
setNumber(11);
setNumber(11);
setNumber(11);
```

Final value:

```txt
11
```

Not:

```txt
13
```

---

## Correct Way

```js
setNumber(prev => prev + 1);
setNumber(prev => prev + 1);
setNumber(prev => prev + 1);
```

Execution:

```txt
10 → 11
11 → 12
12 → 13
```

Final value:

```txt
13
```

---

# setState(value) vs setState(prev => value)

### Using Current State Variable

```js
setNum(num + 1);
```

Uses the value captured in the current render.

### Using Functional Update

```js
setNum(prev => prev + 1);
```

Uses the latest state value maintained by React.

---

## Example

```js
setNum(num + 1);
setNum(num + 1);
setNum(num + 1);
```

Result:

```txt
+1 only once
```

---

```js
setNum(prev => prev + 1);
setNum(prev => prev + 1);
setNum(prev => prev + 1);
```

Result:

```txt
+3
```

---

## Why Functional Updates are Better

### 1. Safe for Batch Updates

```js
setCount(prev => prev + 1);
```

Each update receives the latest state.

### 2. Prevents Stale State Issues

Useful in:

* setTimeout
* setInterval
* Promises
* Async operations
* Event listeners

Example:

```js
setTimeout(() => {
  setCount(prev => prev + 1);
}, 1000);
```

Always uses the latest state.

---

# Important Rules

1. Never mutate state directly.
2. Always use setter functions (`setState`).
3. State updates are asynchronous.
4. Updating state causes re-rendering.
5. Use spread operators for objects and arrays.
6. Use functional updates when the next state depends on the previous state.
7. Prefer controlled form inputs.
8. React compares references to detect state changes.
9. Functional updates are safer for batch and async updates.
