const SQLClass = require("../../containers/SQLClass");


class SQLProducts extends SQLClass{
    constructor(){
        super('Products')
    }
 }

 module.exports = SQLProducts;