const TextAreaField = ({
  label,
  isRequired = false,
  name = "",
  id = "",
  placeholder = "",
  value,
  handleChange,
}) => {
  return (
    <div className="form-field flex flex-col gap-y-2 flex-1">
      <label htmlFor="title" className="text-[#eee] font-semibold">
        {label}{" "}
        {isRequired && <span className="text-[#00a6fb] font-bold">*</span>}
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="outline-none px-3 py-2 placeholder:text-[#ccc]/50 font-normal border border-[#5c5c5c] rounded-lg text-white focus:border-[#00a6fb] transition-all ease-linear resize-none flex-1"
      />
    </div>
  );
};

export default TextAreaField;
