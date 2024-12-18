import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    // Automatically added `createdAt` and `updatedAt` fields
  },
  { timestamps: true } // Corrected to 'timestamps'
);

const  Message = mongoose.model("Message", messageSchema);

export default Message;
