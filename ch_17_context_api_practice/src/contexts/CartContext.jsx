import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";

export const CartContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartOpen = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({ cart, dispatch, isCartOpen, toggleCartOpen }),
    [cart, dispatch, isCartOpen, toggleCartOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
