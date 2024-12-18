import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRout.js";
import messageRouter from "./routes/messageRoute.js";
import userRouter from "./routes/userRoute.js";

import connectToMongoDB from "./db/conn.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const port = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

app.use(express.static(path.join(__dirname, "/frontEnd/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontEnd", "dist", "index.html"));
});

server.listen(port, () => {
  connectToMongoDB();
  console.log(`server is running on port http://localhost:${port}`);
});
