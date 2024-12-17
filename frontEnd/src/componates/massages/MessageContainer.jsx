import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function(unmount)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] h-screen relative py-1 flex-[5] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className=" h-full bottom-0">
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text ">To: </span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </div>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-3 items-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col
      text-center gap-2"
      >
        <p>Welcome 🫡 {authUser.fullname}</p>
        <p>Select a chat to start with</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
