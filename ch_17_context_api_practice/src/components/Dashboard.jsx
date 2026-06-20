import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../contexts/ThemeContext";
import Content from "./Content";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex h-screen w-screen ${theme === "light" ? "bg-[#eee]" : "bg-[#333]"}`}
    >
      <Sidebar />
      <Content />
    </div>
  );
};

export default Dashboard;
