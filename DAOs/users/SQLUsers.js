const SQLClass = require("../../containers/SQLClass");


class SQLUser extends SQLClass{
    constructor(){
        super('Users')
    }
 }

 module.exports = SQLUser;