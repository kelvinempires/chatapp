import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchINput from "./SearchINput";

const SIdebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex-col">
      <SearchINput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default SIdebar;



// const SIdebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex-col">
//       <SearchINput />
//       <div className="divider px-3"></div>
//       <Conversations />
//       <LogoutButton />
//     </div>
//   );
// };

// export default SIdebar;
