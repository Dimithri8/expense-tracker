import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export const createUser = async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const plainPassword = user.password;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    user.password = hashedPassword;

    const secretKey = process.env.JWT_SECRET_KEY;
    const jwtToken = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });
    const newUser = await user.save();
    const userResponse = newUser.toObject();
    delete userResponse.password;
    res.status(201).json({
      user: userResponse,
      jwtToken: jwtToken,
      message: "Account created successfully",
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: error.message, message: "Unable to create the account" });
  }
};
