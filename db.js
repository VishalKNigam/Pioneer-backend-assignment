const mongoose = require("mongoose");
require("dotenv").config();
const connnection = mongoose.connect(process.env.MongoURL);
module.exports  = {connnection};