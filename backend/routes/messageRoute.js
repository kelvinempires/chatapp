import express from "express";
import { sendMessage, getMessages } from "../controllers/messageModel.js";
import protectRoute from "../middleware/protectRout.js";

const router = express.Router();
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
export default router;
