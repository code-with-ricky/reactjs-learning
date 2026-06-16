import { useState } from "react";
import toast from "react-hot-toast";
import InputField from "./InputField";

const GetItem = () => {
  const [keyName, setKeyName] = useState("");
  const [retrievedValue, setRetrievedValue] = useState(null);

  const handleGetItem = () => {
    if (!keyName.trim()) {
      toast.error("Please enter a key name");
      return;
    }

    const storedValue = localStorage.getItem(keyName);

    if (storedValue === null) {
      toast.error(`No value found for "${keyName}"`);
      setRetrievedValue(null);
      return;
    }

    try {
      const parsedValue = JSON.parse(storedValue);
      setRetrievedValue(parsedValue);
      toast.success("Value fetched successfully");
    } catch {
      setRetrievedValue(storedValue);
      toast.success("Value fetched successfully");
    }
  };

  const handleClear = () => {
    setKeyName("");
    setRetrievedValue(null);
  };

  return (
    <div className="rounded-lg bg-[#333333] px-6 py-5 flex flex-col gap-y-4">
      <h2 className="text-[#e0aaff] text-2xl font-semibold mb-3">
        Get Item from LocalStorage
      </h2>

      <InputField
        label="Key"
        type="text"
        name="keyName"
        id="get-key-name"
        placeholder="Enter key name"
        value={keyName}
        onChange={(e) => setKeyName(e.target.value)}
        isRequired={true}
      />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleGetItem}
          className="rounded-md bg-[#9d4edd] px-5 py-2 font-semibold text-white transition hover:opacity-90"
        >
          Get Item
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="rounded-md bg-gray-600 px-5 py-2 font-semibold text-white transition hover:opacity-90"
        >
          Clear
        </button>
      </div>

      {retrievedValue !== null && (
        <div className="mt-2 flex flex-col gap-y-2">
          <h3 className="text-lg font-medium text-[#e0aaff]">
            Retrieved Value
          </h3>

          <pre className="overflow-auto rounded-lg bg-[#222] p-4 text-sm text-[#edede9] border border-[#eee]/10">
            {typeof retrievedValue === "string"
              ? retrievedValue
              : JSON.stringify(retrievedValue, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default GetItem;