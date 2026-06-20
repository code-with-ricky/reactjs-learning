import React from "react";
import { LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";
import ThemeToggleButton from "./ThemeToggleButton";

const UserPanel = () => {
  return (
    <div className="p-4 border-t border-gray-200">
      <UserAvatar />

      <div className="w-full flex items-center justify-center gap-x-2">
        <button className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2.5 rounded-lg hover:bg-red-100 transition">
          <LogOut size={18} />
          Logout
        </button>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default UserPanel;
