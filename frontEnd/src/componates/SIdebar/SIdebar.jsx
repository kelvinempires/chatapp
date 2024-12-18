import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchINput from "./SearchINput";

const SIdebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex-col overflow-auto">
      <SearchINput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default SIdebar;
//......border-r flex-[2] border-slate-500 overflow-y-scroll p-4 px-10 w-[23rem] flex-col mt-12
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
