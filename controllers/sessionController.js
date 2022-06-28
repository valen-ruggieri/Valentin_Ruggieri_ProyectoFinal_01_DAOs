const CartController = require("./cartsController");
const ChatController = require("./chatController");
const UserController = require("./usersController");
const cartController = new CartController();
const chatController = new ChatController();
const usersController = new UserController();

class SessionController {
  

  async signOutGoToHome(req,res) {
    try {
      cartController.closeCart()
      chatController.deleteMessages();
      usersController.deleteUser();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
  async signOutErrorRoute(req,res) {
    try {
      cartController.closeCart()
      chatController.deleteMessages();
      usersController.deleteUser();
      res.render('errorRoute.ejs')
    } catch (error) {
      console.log(error);
    }
  }
}


module.exports= SessionController;