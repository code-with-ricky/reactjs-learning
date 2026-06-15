const FormField = ({
  label='label',
  isRequired = false,
  name='',
  id='',
  placeholder='',
  type = "text",
  value,
  handleChange,
}) => {
  return (
    <div className="form-field flex flex-col gap-y-2">
      <label htmlFor={id} className="text-[#eee] font-semibold">
        {label}{" "}
        {isRequired && <span className="text-[#00a6fb] font-bold">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="outline-none px-3 py-2 placeholder:text-[#ccc]/50 font-normal border border-[#5c5c5c] rounded-lg text-white focus:border-[#00a6fb] transition-all ease-linear"
      />
    </div>
  );
};

export default FormField;
