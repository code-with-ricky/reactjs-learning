import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const buttonClick = () => {
    console.log(navigate);
    navigate("/");

    // navigate(-1); // return to last route visited
    // navigate(+1); // return to next route
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-red-600">Page Not Found</h1>
      <button
        onClick={buttonClick}
        className="bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 text-white"
      >
        Return To Home
      </button>
    </div>
  );
};

export default NotFound;
