import useGetConversations from "../../Hooks/useGetConversation";
import { getRandomEmojis } from "../../utels/emoji";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-hidden">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmojis()}
          lastIdx= {idx === conversations.length -1}
        />
      ))}
      {loading ? (
        <span className="text-gray-600 loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// }

// export default Conversations
