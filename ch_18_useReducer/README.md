# useReducer Hook

- useReducer is a hook that is similar to useState, but it is designed for more complex state objects or state transitions that involves multiple sub values.
- it allows you to manage state in a functional, immutable way

## Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### Components:

- **initialState**: This is the starting value for the state when the component first renders

- **reducer**: This is a function that describes how the state should change based on actions. It takes `current state` and `action` as inputs and returns a new state

- **state**: the current state value, which you can use in your component

- **dispatch**: A function you call to send actions to the reducer, which then updates the state.

---

## Example of Counter App

### Initial Value

```js
const initialState = { count: 0 };
```

### Create Reducer function

```js
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};
```

### Create useReducer variable

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### Use state value in UI

```js
<h1>Count: {state.count}</h1>
```

### Use dispatch

```js
<button onClick={() => dispatch({ type: 'increment' })}>+</button>
<button onClick={() => dispatch({ type: "decrement" })}>-</button>
<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
```

---

## Payload passed in dispatch

```js
dispatch({ type: "increaseByValue", payload: 45 });
```

- now in reducer function access using `action.payload`
- in this case `action.payload` = 45

- Now if following is passed as payload

```js
dispatch({ type: "update_user", payload: { name: "Amrik", age: 78 } });
```

- so here `action.payload` = { name: "Amrik", age: 78 }
- we can also do `action.payload.age` to access age
