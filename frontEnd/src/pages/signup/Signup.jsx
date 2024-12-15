import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
      bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SIgn Up <span className="text-blue-500"> {"let's"} Chat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-500">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-500">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-500">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-500">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckBox />
          <a
            className=" text-gray-500 text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            href="a"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


// STARTER CODE FOR THE SIGN UP PARt
// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div
//         className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//       bg-opacity-0"
//       >
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SIgn Up <span className="text-blue-500"> {"let's"} Chat</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-500">
//                 Full Name
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your Name"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-500">
//                 Username
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-500">
//                 Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-500">
//                 Confirm Password
//               </span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <GenderCheckBox />
//           <a
//             className=" text-gray-500 text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             href="a"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
