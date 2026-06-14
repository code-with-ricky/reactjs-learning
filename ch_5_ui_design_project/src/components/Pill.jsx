const Pill = ({ text }) => {
  return (
    <span className="px-3 py-2 bg-black text-white uppercase rounded-3xl text-sm tracking-widest">
      {text}
    </span>
  );
};

export default Pill;
