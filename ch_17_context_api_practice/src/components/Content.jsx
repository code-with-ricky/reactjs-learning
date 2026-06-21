import { useCart } from "../contexts/CartContext";

const Content = () => {
  const { cart, dispatch } = useCart();
  const handleRemove = (itemId) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: itemId,
    });
  };
  const handleClear = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <main className="flex flex-col gap-y-5 flex-1 px-6 py-5">
      <h1 className="text-3xl font-semibold">Cart Summary</h1>
      <button
        onClick={handleClear}
        className="w-fit px-5 py-2 rounded-lg bg-[#333] text-white"
      >
        Clear Cart
      </button>
      {cart.length > 0 ? (
        <ol className="mt-4">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center gap-x-3 my-2">
              <p>
                {item.name} -- Rs.{item.price}
              </p>{" "}
              <button
                onClick={() => handleRemove(item.id)}
                className="h-7 w-7 rounded-lg text-white bg-red-700 hover:bg-red-400 transition cursor-pointer"
              >
                X
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-4">No items in cart</p>
      )}
    </main>
  );
};

export default Content;
