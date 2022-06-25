const MongoDBClass = require("../../containers/mongoDBClass");
const cartSchema = require("../../models/carts");



 class MongoDBCart extends MongoDBClass{
    constructor(){
        super('Cart',cartSchema)
    }
 }

 module.exports = MongoDBCart;