import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRout.js";
import dbConnection from "./db/conn.js";

dotenv.config();
dbConnection();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

app.listen(port, () => {
  dbConnection();
  console.log(`server is running on port http://localhost:${port}`);
});
