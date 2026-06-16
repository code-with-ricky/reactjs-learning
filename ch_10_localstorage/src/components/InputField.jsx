import React from "react";

const InputField = ({
  label,
  type,
  name,
  id,
  placeholder,
  isRequired,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={id} className="text-[#edede9] font-medium">
        {label} {isRequired && <span>*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="outline-none rounded-lg px-4 py-2 bg-[#464646]/50 placeholder:text-[#ccc]/50 text-[#eeeeee] border 
        border-[#eee]/20 focus:border-[#e0aaff]"
      />
    </div>
  );
};

export default InputField;
