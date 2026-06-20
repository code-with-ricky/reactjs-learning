import React from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";
import UserPanel from "./UserPanel";
import AddProductButton from "./AddProductButton";

const Sidebar = () => {
  // const menuItems = [
  //   { title: "Dashboard", icon: <LayoutDashboard size={20} /> },
  //   { title: "Users", icon: <Users size={20} /> },
  //   { title: "Analytics", icon: <BarChart3 size={20} /> },
  //   { title: "Settings", icon: <Settings size={20} /> },
  // ];

  return (
    <aside className="w-72 h-screen bg-white shadow-xl flex flex-col border-r border-gray-200">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-200">Admin Panel</h1>
        <p className="text-sm text-gray-500">Management Dashboard</p>
      </div>

      {/* Menu section */}
      <div className="flex-1 px-4 py-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-4">
          Main Menu
        </p>

        <nav className="space-y-2">
          {/* {menuItems.map((item) => (
            <button
              key={item.title}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
            >
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </button>
          ))} */}
          <AddProductButton/>
        </nav>
      </div>

      {/* user panel */}
      <UserPanel/>
    </aside>
  );
};

export default Sidebar;
