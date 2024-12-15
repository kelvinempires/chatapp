const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-20 rounded-full">
          <img
            alt="Tailwind CSS chat bobble component"
            src={
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>hi! whats up</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-100">
        12:42
      </div>
    </div>
  );
};

export default Message;

//STARTER CODE
// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-20 rounded-full">
//           <img
//             alt="Tailwind CSS chat bobble component"
//             src={
//               "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//             }
//           />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white bg-blue-500`}>hi! whats up</div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
//     </div>
//   );
// };

// export default Message;
