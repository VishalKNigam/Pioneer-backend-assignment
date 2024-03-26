const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("Hello Pioneer, Welcome to our Website!");
})
app.listen("8080", ()=>{
    console.log("Listening to the http://localhost:8080");
})