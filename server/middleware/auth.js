import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access Denied: No token found" });
  }
  try {
    const secretKey = process.env.JWT_SECRET_KEY;
    const verifiedToken = jwt.verify(token, secretKey);

    req.user = verifiedToken;

    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};
