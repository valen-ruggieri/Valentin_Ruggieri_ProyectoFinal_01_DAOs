const SQLClass = require("../../containers/SQLClass");


class SQLCart extends SQLClass{
    constructor(){
        super('Cart')
    }
 }

 module.exports = SQLCart;