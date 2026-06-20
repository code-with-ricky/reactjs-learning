import { Plus } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const AddProductButton = () => {
  const { dispatch } = useContext(CartContext);
  const handleAdd = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id: Date.now(), name: "Sample Product", price: 345.0 },
    });
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 py-2.5 rounded-xl hover:bg-indigo-100 transition mt-2"
    >
        <Plus size={18} />
        Add Sample Product
    </button>
  );
};

export default AddProductButton;
