import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message", // Reference to the Message model
      default: [],
    },
  ],
},
{ timestamp: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;