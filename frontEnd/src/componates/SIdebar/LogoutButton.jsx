import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/userLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="text-gray-600 loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;

//STATER CODE
// import { BiLogOut } from "react-icons/bi";
// const LogoutButton = () => {
//   return (
//     <div className="mt-auto">
//       <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
//     </div>
//   );
// };

// export default LogoutButton;
