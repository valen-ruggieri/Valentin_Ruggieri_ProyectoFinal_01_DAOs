const MongoDBClass = require("../../containers/mongoDBClass");
const usersSchema = require("../../models/users");



 class MongoDBUser extends MongoDBClass{
    constructor(){
        super('Users',usersSchema)
    }
 }

 module.exports = MongoDBUser;