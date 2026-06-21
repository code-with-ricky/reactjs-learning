import { useUser } from "../contexts/UserContext.jsx";

const UserAvatar = () => {
  const user = useUser();
  return (
    <div className="flex items-center gap-3 mb-4">
      <img
        src="https://i.pravatar.cc/100"
        alt="user"
        className="w-12 h-12 rounded-full object-cover"
      />

      <div>
        <h3 className="font-semibold text-gray-800">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.role}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
