const MongoDBClass = require("../../containers/mongoDBClass");
const productSchema = require("../../models/products");



 class MongoDBProducts extends MongoDBClass{
    constructor(){
        super('Products',productSchema)
    }
 }

 module.exports = MongoDBProducts;