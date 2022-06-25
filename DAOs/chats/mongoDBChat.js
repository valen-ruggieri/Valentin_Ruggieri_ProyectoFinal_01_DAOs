const MongoDBClass = require("../../containers/mongoDBClass");
const chatSchema = require("../../models/chats");



 class MongoDBChat extends MongoDBClass{
    constructor(){
        super('Chats',chatSchema)
    }
 }

 module.exports = MongoDBChat;