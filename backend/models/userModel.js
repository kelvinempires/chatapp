import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true, // Corrected the spelling from 'require' to 'required'
    trim: true,
  },
  gender: {
    type: String,
    required: true, // Corrected the spelling from 'require' to 'required'
    enum: ["male", "female"],
  },
  profilePic: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    required: true, // Corrected the spelling from 'require' to 'required'
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true, // Corrected the spelling from 'require' to 'required'
    minlength: 6,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
