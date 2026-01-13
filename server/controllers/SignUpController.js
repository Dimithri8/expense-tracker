import bcrypt from "bcrypt";
import User from "../models/User.js";

export const createUser = async (req, res) => {
  const user = await User.create({
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

    const newUser = await user.save();
    res
      .status(201)
      .json({ user: newUser, message: "Account created successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ error: error.message, message: "Unable to create the account" });
  }
};
