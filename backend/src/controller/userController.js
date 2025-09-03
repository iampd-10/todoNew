import dotenv from "dotenv";
dotenv.config();
import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyEmail } from "../verifyEmail/verifyEmail.js";


const JWT_SECRET = process.env.secretKey;

//user Resistration
export const userRegistration = async (req, res) => {
  const { fullname, email, password } = req.body;
  console.log(req.body);
  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    //check user already exists
    //check user already exists
    const existingUser = await userSchema.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    console.log(`This is salt passworod ${salt}`);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(` This is hashed passworod ${hashedPassword}`);

    //create new user
    const newUser = new userSchema({
      fullname,
      email,
      password: hashedPassword,
    });
    //create token
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log("Generated Token:", token); // Debugging line to check the token value
    newUser.token = token;

    // sent email verification
    await verifyEmail(token, email, fullname, password);
    //save user
    await newUser.save();
    return res.status(201).json({
      sucess: true,
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      message: `Server error ${error.message}`,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const checkUser = await userSchema.findOne({ email: email });
    if (!checkUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, checkUser.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!checkUser.isVerified) {
      return res.status(400).json({ message: "Please verify your email" });
    }

    if (checkUser.token) {
      return res.status(400).json({ message: "Verification pending" });
    }

    // generate tokens
    const accessToken = jwt.sign({ id: checkUser._id }, JWT_SECRET, {
      expiresIn: "10d",
    });

    const refreshToken = jwt.sign({ id: checkUser._id }, JWT_SECRET, {
      expiresIn: "30d",
    });

    checkUser.isLoggedIn = true;
    await checkUser.save();

    return res.status(200).json({
      success: true,
      message: `Login successful. Welcome ${checkUser.fullname}`,
      accessToken,
      refreshToken,
      user: checkUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error.message}`,
    });
  }
};
export const logoutUser = async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  try {
    const user = await userSchema.findOne({ email: email });
    user.isLoggedIn = false;

    await user.save();
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error.message}`,
    });
  }
};
