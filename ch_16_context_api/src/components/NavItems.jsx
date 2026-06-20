import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="flex items-center justify-center gap-x-4 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default NavItems;
