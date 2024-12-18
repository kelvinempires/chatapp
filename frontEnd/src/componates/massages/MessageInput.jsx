import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../Hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className=" absolute inset-y-0 end-0 flex items-center pe-3 "
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

//...w-[80%] my-3 flex items-center  justify-between rounded-md  ml-3 bg-gray-700  border-gray-600 absolute bottom-0

//STARTER CODE
// import { BsSend } from "react-icons/bs"
// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
//           placeholder="Message"
//         />
//         <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//             <BsSend/>

//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;
