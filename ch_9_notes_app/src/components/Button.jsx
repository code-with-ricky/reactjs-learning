const Button = ({ type = "button", variant = "primary", children, action }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all ease-linear outline-none";
  
  const variants = {
    primary: "bg-[#00a6fb] text-white hover:bg-[#0089cc] active:scale-95",
    secondary: "bg-transparent border-2 border-[#5c5c5c] text-[#ccc] hover:border-[#00a6fb] hover:text-[#00a6fb] active:scale-95"
  };

  const className = `${baseStyles} ${variants[variant]}`;

  return (
    <button type={type} onClick={action} className={className}>
      {children}
    </button>
  );
};

export default Button;
