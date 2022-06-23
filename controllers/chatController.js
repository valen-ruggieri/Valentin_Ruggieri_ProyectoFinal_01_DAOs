const Chats = require("../models/chats");
const UserController = require("./usersController");
const userController = new UserController();

class ChatController {
  // >| getMessages
  async getMessages(req, res) {
    try {
      const uID = await userController.dataUser();
      const messages = await Chats.find();
      res.render("chatPage.ejs", { messages, uID });
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
      const chat = new Chats({ autor, date: dateNow, text });
      await chat.save();
      res.redirect("/chat");
    } catch (error) {
      console.log(error);
    }
  }

  // >|  deleteMessages
  async deleteMessages() {
    try {
      await Chats.deleteMany();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ChatController;
