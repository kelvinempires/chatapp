import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //await.conversation.save()
    //await.newMessage.save()

    // this will run in parrallel
    await Promise.all([conversation.save(), newMessage.save()]);

    //SOCET IO FUNTIONALITY
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      //io.to(<socket_id>).emit(use)used to send event to a specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessageController:", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // Populate with actual messages

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessagesController:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
