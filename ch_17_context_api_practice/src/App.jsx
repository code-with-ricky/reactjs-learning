import Dashboard from "./components/Dashboard";
import { UserContext, UserProvider } from "./contexts/UserContext";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <Dashboard />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
