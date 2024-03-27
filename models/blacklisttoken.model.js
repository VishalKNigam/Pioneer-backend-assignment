const mongoose = require("mongoose")

const blacklistSchema = mongoose.Schema({
    accessToken:String
})

const BlackListModel = mongoose.model("blacklist",blacklistSchema)


module.exports={
    BlackListModel
}