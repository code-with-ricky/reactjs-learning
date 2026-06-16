import { Toaster } from "react-hot-toast";
import SetItem from "./components/SetItem";
import GetItem from "./components/GetItem";
import RemoveItem from "./components/RemoveItem";

const App = () => {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#f8f9fa",
            color: "#333",
          },
        }}
      />

      <div className="min-h-screen w-full bg-[#222] px-6 py-4 flex flex-col gap-y-3">
        <header className="py-6 rounded-lg bg-[#7b2cbf] text-center">
          <h1 className="text-[#e0aaff] text-4xl font-bold">
            Local Storage Playground
          </h1>
        </header>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {/* Set Item */}
          <SetItem />

          {/* Get Item */}
          <GetItem />

          {/* Remove Item */}
          <RemoveItem />
        </div>
      </div>
    </>
  );
};

export default App;
