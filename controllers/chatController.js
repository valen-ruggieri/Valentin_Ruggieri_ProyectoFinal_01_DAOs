
const { chatDao, cartDao, productsDao } = require("../DAOs/swicht");
const UserController = require("./usersController");
const userController = new UserController();

class ChatController {
  // >| getMessages
  async getMessages(req, res) {
    try {
      const uID = await userController.dataUser();
      const messages = await chatDao.getAll();
      const productsCount = await productsDao.countAll()
      const cartCount = await cartDao.countAll()
      res.render("chatPage.ejs", { messages, uID,productsCount ,cartCount});
    } catch (error) {
      console.log(error);
    }
  }

  // >|  addMessages
  async addMessages(req, res) {
    try {
      const { autor, text } = req.body;
      const date = new Date();
      const dateNow = ` ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
      await chatDao.create({ autor, date: dateNow, text });
      res.redirect("/chat");
    } catch (error) {
      console.log(error);
    }
  }

  // >|  deleteMessages
  async deleteMessages() {
    try {
      await chatDao.deleteAll();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ChatController;
