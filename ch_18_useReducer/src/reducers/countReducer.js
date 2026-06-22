export const initialValue = { count: 0 };

export const countReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };

        case "decrement":
            return { ...state, count: state.count - 1 };

        case "reset":
            return { ...state, count: 0 };

        case "incrementByValue":
            return { ...state, count: state.count + action.payload };

        case "decrementByValue":
            return { ...state, count: state.count - action.payload };

        default:
            return state;
    }
}