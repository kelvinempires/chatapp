import express, { Router } from "express";
import protectRoute from "../middleware/protectRout.js";
import { getUserForSidebar } from "../controllers/userController.js";

const router = express.Router();

router.get("/",protectRoute, getUserForSidebar);
export default router;
