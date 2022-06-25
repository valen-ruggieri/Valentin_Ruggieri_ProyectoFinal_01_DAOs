require("dotenv").config();
let cartDao;
let productsDao;
let chatDao;
let userDao;

switch (process.env.DB_CONNECTION) {
  case "mongoDB":

  console.log('mongoDB active')
    const MongoDBProducts = require("./products/mongoDBProducts");
    productsDao = new MongoDBProducts();

    const MongoDBCart = require("./carts/mongoDBCart");
    cartDao = new MongoDBCart();

    const MongoDBChat = require("./chats/mongoDBChat");
    chatDao = new MongoDBChat();

    const MongoDBUser = require("./users/mongoDBUser");
    userDao = new MongoDBUser();

    break;
  case "firebase":
    console.log('firebaseDB active')
    const FirebaseProducts = require("./products/firebaseProducts");
    productsDao = new FirebaseProducts();

    const FirebaseCart = require("./carts/firebaseCart");
    cartDao = new FirebaseCart();

    const FirebaseChat = require("./chats/firebaseChat");
    chatDao = new FirebaseChat();

    const FirebaseUser = require("./users/firebaseUser");
    userDao = new FirebaseUser();

    break;
  default:
    throw new Error("No se ha definido una conexión a la base de datos");
}

module.exports = { productsDao, cartDao, userDao, chatDao };
