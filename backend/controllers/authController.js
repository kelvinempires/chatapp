import bcrypt from "bcrypt";
import User from "../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send("user already exists");
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const boyProfileImage = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfileImage = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfileImage : girlProfileImage,
    });

    await newUser.save();

    res.status(201).send({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
  } catch (err) {
    console.log("error in signup controller", err.message);
    res.status(500).send({ err: "internal server err" });
  }
};



export const login = (req, res) => {
  res.send("login user");
  console.log("login");
};

export const logout = (req, res) => {
  res.send("logout user");
  console.log("logout");
};
