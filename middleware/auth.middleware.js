const jwt = require("jsonwebtoken");
const { BlackListModel } = require("../models/blacklisttoken.model");
require("dotenv").config();

/**
 * Middleware for authentication using JWT token.
 * Verifies the provided JWT token and checks if it's blacklisted.
 * If token is valid and not blacklisted, it calls the next middleware.
 * Otherwise, returns 401 Unauthorized response.
 */
const auth = async (req, res, next) => {
  try {
    // Extract JWT token from Authorization header
    let token = req.headers.authorization?.split(" ")[1];

    // Check if token exists
    if (!token) {
      return res.status(401).json({ Message: "Please login to continue" });
    }

    // Check if token is blacklisted
    let expiredToken = await BlackListModel.findOne({ accessToken: token });
    if (expiredToken) {
      return res.status(401).json({ Message: "Invalid token" });
    }

    // Verify JWT token
    let result = jwt.verify(token, process.env.SECRET_KEY);
    if (!result) {
      return res.status(401).json({ Message: "Invalid token" });
    }

    // Call next middleware if token is valid
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ Message: "Unauthorized" });
  }
};

module.exports = {
  auth,
};
