import React from "react";
import NavItems from "./NavItems";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = () => {
  const {theme} = useContext(ThemeDataContext);
  console.log(theme);
  return (
    <div className="px-8 py-4 flex items-center justify-between bg-emerald-800">
      <h3 className="text-2xl font-semibold text-white">Logo</h3>
      <NavItems />
      <h3 className="text-lg font-medium capitalize text-white">Theme: {theme}</h3>
    </div>
  );
};

export default Navbar;
