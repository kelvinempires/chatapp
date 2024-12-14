import User from "../models/userModel.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filterUser = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    res.status(200).json(filterUser);
  } catch (error) {
    console.error("error in getUserForSidebar:", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
