import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utels/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-20 rounded-full">
          <img alt="Tailwind CSS chat bobble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}${shakeClass} pb-2`}>{message.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
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
//             ={
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
