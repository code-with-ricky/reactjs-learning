import { useState } from "react";
import toast from "react-hot-toast";
import InputField from "./InputField";
import DropdownField from "./DropdownField";

const SetItem = () => {
  const [valueType, setValueType] = useState("string/integer/boolean");
  const [keyName, setKeyName] = useState("");

  // UI states only
  const [primitiveValue, setPrimitiveValue] = useState("");

  const [objectEntries, setObjectEntries] = useState([{ key: "", value: "" }]);

  const [arrayEntries, setArrayEntries] = useState([{ index: 0, value: "" }]);

  const optionList = [
    { label: "String/Integer/Boolean", value: "string/integer/boolean" },
    { label: "Object", value: "object" },
    { label: "Array", value: "array" },
  ];

  const handleKeyChange = (e) => {
    setKeyName(e.target.value);
  };

  const handleValueTypeChange = (e) => {
    setValueType(e.target.value);
  };

  const handleObjectKeyChange = (index, value) => {
    const updated = [...objectEntries];
    updated[index].key = value;
    setObjectEntries(updated);
  };

  const handleObjectValueChange = (index, value) => {
    const updated = [...objectEntries];
    updated[index].value = value;
    setObjectEntries(updated);
  };

  const addObjectProperty = () => {
    setObjectEntries([
      ...objectEntries,
      {
        key: "",
        value: "",
      },
    ]);
  };

  const handleArrayIndexChange = (index, value) => {
    const updated = [...arrayEntries];
    updated[index].index = value;
    setArrayEntries(updated);
  };

  const handleArrayValueChange = (index, value) => {
    const updated = [...arrayEntries];
    updated[index].value = value;
    setArrayEntries(updated);
  };

  const addArrayElement = () => {
    setArrayEntries([
      ...arrayEntries,
      {
        index: arrayEntries.length,
        value: "",
      },
    ]);
  };

  const handleSave = () => {
    if (!keyName.trim()) {
      toast.error("Please enter a key name");
      return;
    }

    let finalValue;

    if (valueType === "string/integer/boolean") {
      finalValue = primitiveValue;
    }

    if (valueType === "object") {
      finalValue = {};

      objectEntries.forEach((entry) => {
        if (entry.key.trim()) {
          finalValue[entry.key] = entry.value;
        }
      });
    }

    if (valueType === "array") {
      finalValue = [];

      arrayEntries.forEach((entry) => {
        const idx = Number(entry.index);

        if (!Number.isNaN(idx)) {
          finalValue[idx] = entry.value;
        }
      });
    }

    localStorage.setItem(keyName, JSON.stringify(finalValue));
    toast.success(`"${keyName}" saved successfully`);
    resetForm();
  };

  const resetForm = () => {
    setKeyName("");
    setValueType("string/integer/boolean");
    setPrimitiveValue("");

    setObjectEntries([
      {
        key: "",
        value: "",
      },
    ]);

    setArrayEntries([
      {
        index: 0,
        value: "",
      },
    ]);
  };

  return (
    <div className="rounded-lg bg-[#333333] px-6 py-5 flex flex-col gap-y-4">
      <h2 className="text-[#e0aaff] text-2xl font-semibold mb-3">
        Set Item in LocalStorage
      </h2>

      <InputField
        label="Key"
        type="text"
        name="keyName"
        id="keyName"
        placeholder="Enter key name"
        value={keyName}
        onChange={handleKeyChange}
        isRequired={true}
      />

      <DropdownField
        label="Value Type"
        id="valueType"
        value={valueType}
        handleChange={handleValueTypeChange}
        optionList={optionList}
      />

      {/* Primitive Value */}
      {valueType === "string/integer/boolean" && (
        <InputField
          label="Value"
          type="text"
          name="value"
          id="value"
          placeholder="Enter value"
          value={primitiveValue}
          onChange={(e) => setPrimitiveValue(e.target.value)}
        />
      )}

      {/* Object UI */}
      {valueType === "object" && (
        <div className="flex flex-col gap-y-3">
          <h3 className="text-lg font-medium text-[#e0aaff]">
            Object Properties
          </h3>

          {objectEntries.map((entry, index) => (
            <div key={index} className="grid grid-cols-2 gap-3">
              <InputField
                label="Key"
                type="text"
                name={`obj-key-${index}`}
                id={`obj-key-${index}`}
                placeholder="Property key"
                value={entry.key}
                onChange={(e) => handleObjectKeyChange(index, e.target.value)}
              />

              <InputField
                label="Value"
                type="text"
                name={`obj-value-${index}`}
                id={`obj-value-${index}`}
                placeholder="Property value"
                value={entry.value}
                onChange={(e) => handleObjectValueChange(index, e.target.value)}
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addObjectProperty}
            className="self-start rounded-md bg-[#e0aaff] px-4 py-2 font-medium text-[#333]"
          >
            + Add Property
          </button>
        </div>
      )}

      {/* Array UI */}
      {valueType === "array" && (
        <div className="flex flex-col gap-y-3">
          <h3 className="text-lg font-medium text-[#e0aaff]">Array Elements</h3>

          {arrayEntries.map((entry, index) => (
            <div key={index} className="grid grid-cols-2 gap-3">
              <InputField
                label="Index"
                type="number"
                name={`array-index-${index}`}
                id={`array-index-${index}`}
                placeholder="Index"
                value={entry.index}
                onChange={(e) => handleArrayIndexChange(index, e.target.value)}
              />

              <InputField
                label="Value"
                type="text"
                name={`array-value-${index}`}
                id={`array-value-${index}`}
                placeholder="Value"
                value={entry.value}
                onChange={(e) => handleArrayValueChange(index, e.target.value)}
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addArrayElement}
            className="self-start rounded-md bg-[#e0aaff] px-4 py-2 font-medium text-[#333]"
          >
            + Add Element
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={handleSave}
        className="mt-4 rounded-md bg-[#9d4edd] px-5 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Save To LocalStorage
      </button>
    </div>
  );
};

export default SetItem;
