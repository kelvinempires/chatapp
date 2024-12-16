import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRout.js";
import messageRouter from "./routes/messageRoute.js";
import userRouter from "./routes/userRoute.js";

import connectToMongoDB from "./db/conn.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);
// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

app.listen(port, () => {
  connectToMongoDB();
  console.log(`server is running on port http://localhost:${port}`);
});
