// userRouter.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./UserModel");

const userRouter = express.Router();
userRouter.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user with the same email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 5);

        // Create new user
        const newUser = new UserModel({ name, email, password: hashedPassword });
        await newUser.save();

        // Create and send JWT token
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
        res.status(201).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Login Route
userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Create and send JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

userRouter.post("/logout", async (req, res) => {
    try {
        const { authorization } = req.headers;
        if (!authorization || !authorization.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Extract token from authorization header
        const token = authorization.split(" ")[1];

        // Check if token is in the blacklist
        const blacklistedToken = await BlackListModel.findOne({ accessToken: token });
        if (blacklistedToken) {
            return res.status(401).json({ message: "Token is already blacklisted" });
        }

        // Add token to the blacklist
        const newBlacklistedToken = new BlackListModel({ accessToken: token });
        await newBlacklistedToken.save();

        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});


module.exports = userRouter;
