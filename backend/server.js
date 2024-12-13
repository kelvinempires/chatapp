import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRout.js";
import dbConnection from "./db/conn.js";
import messageRouter from "./routes/messageRoute.js";

dotenv.config();
dbConnection();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRouter);

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

app.listen(port, () => {
  dbConnection();
  console.log(`server is running on port http://localhost:${port}`);
});
