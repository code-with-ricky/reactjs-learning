import React from 'react'

const DropdownField = ({
    label,
    id,
    value,
    handleChange,
    optionList
}) => {
  return (
    <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-200"
        >
          {label}
        </label>

        <select
          id={id}
          value={value}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-600 bg-[#444] px-3 py-2 text-white outline-none focus:border-[#e0aaff]"
        >
          {optionList.map((opt, index) => <option key={index} value={opt.value}>{opt.label}</option>)}
        </select>
      </div>
  )
}

export default DropdownField