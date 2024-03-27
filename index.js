const express = require("express");
const app = express();
const cors = require("cors");
const { connnection } = require("./db");
const userRouter = require("./routes/user.route");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.get("/", (req, res) => {
    res.send(`🌟 Welcome to Pioneer! 🌟

                 Step into the world of endless possibilities and innovation! 🚀 Here at Pioneer, we're thrilled to have you join our community.
                 
                 Whether you're a seasoned explorer or just starting your journey, our platform offers a seamless experience for all.

               🔑 Login: Enter your credentials and unlock a realm of opportunities tailored just for you.

               🚪 Logout: Need a break? Simply logout and return whenever you're ready to continue your adventure.

               💡 API Magic: Behind the scenes, our cutting-edge API fuels the creation of different endpoints, ensuring a smooth and dynamic 
               
                browsing experience.

                Let's embark on this exciting voyage together! Start exploring, connecting, and discovering on Pioneer. 🌌✨`);
});
app.listen(PORT, async () => {
    try {
        await connnection;
        console.log("Successfully connected to the DB!")

    } catch (error) {
        console.log(error);
        res.send("error during connnection to DB", error);
    }
    console.log(`Listening to the PORT http://localhost:${PORT}`);
})