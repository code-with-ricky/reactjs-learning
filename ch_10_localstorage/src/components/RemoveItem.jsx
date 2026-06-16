import { useState } from "react";
import toast from "react-hot-toast";
import InputField from "./InputField";

const RemoveItem = () => {
  const [keyName, setKeyName] = useState("");
  const [showClearModal, setShowClearModal] = useState(false);

  const handleRemoveItem = () => {
    if (!keyName.trim()) {
      toast.error("Please enter a key name");
      return;
    }

    const item = localStorage.getItem(keyName);
    if (item === null) {
      toast.error(`Key "${keyName}" does not exist`);
      return;
    }

    localStorage.removeItem(keyName);
    toast.success(`Key "${keyName}" removed successfully`);
    setKeyName("");
  };

  const handleClearStorage = () => {
    setShowClearModal(true);
  };

  const confirmClearStorage = () => {
    localStorage.clear();

    toast.success("LocalStorage cleared successfully");

    setKeyName("");
    setShowClearModal(false);
  };

  const cancelClearStorage = () => {
    setShowClearModal(false);
  };

  return (
    <div className="rounded-lg bg-[#333333] px-6 py-5 flex flex-col gap-y-4">
      <h2 className="text-[#e0aaff] text-2xl font-semibold mb-3">
        Remove Item from LocalStorage
      </h2>

      <InputField
        label="Key"
        type="text"
        name="keyName"
        id="remove-key-name"
        placeholder="Enter key name"
        value={keyName}
        onChange={(e) => setKeyName(e.target.value)}
        isRequired={true}
      />

      <div className="flex flex-wrap gap-3 mt-2">
        <button
          type="button"
          onClick={handleRemoveItem}
          className="rounded-md bg-[#9d4edd] px-5 py-2 font-semibold text-white transition hover:opacity-90"
        >
          Remove Item
        </button>

        <button
          type="button"
          onClick={handleClearStorage}
          className="rounded-md bg-red-700 px-5 py-2 font-semibold text-white transition hover:opacity-90"
        >
          Clear LocalStorage
        </button>
      </div>

      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-md rounded-xl bg-[#333333] p-6 shadow-xl border border-[#e0aaff]/20">
            <h3 className="text-xl font-semibold text-[#e0aaff]">
              Clear LocalStorage
            </h3>

            <p className="mt-3 text-[#edede9]">
              Are you sure you want to remove all items from LocalStorage? This
              action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={cancelClearStorage}
                className="rounded-md border border-[#666] px-4 py-2 text-white hover:bg-[#444]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={confirmClearStorage}
                className="rounded-md bg-red-700 px-4 py-2 font-semibold text-white hover:opacity-90"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveItem;
