import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, send, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "unauthorized not token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_COOKIES);
    if (!decoded) {
      return res.status(401).json({ error: "unauthorized invalid token" });
    }

    const user = await User.findById(decoded.userId).select(".password");
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectingRoute middleWare:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
