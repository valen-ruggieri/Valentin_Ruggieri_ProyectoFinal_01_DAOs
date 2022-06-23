const express = require("express");
const routerChat = express.Router();
const path = require("path");
const ChatController = require("../../controllers/chatController");
const { userPermissionCliente } = require("../../Validations/userPermission");
const chatController = new ChatController();

routerChat.use(express.static(path.join(__dirname + "/public")));
routerChat.use(express.static("views"));

//>| postChat
routerChat.post("/chat", userPermissionCliente(), async (req, res) => {
  chatController.addMessages(req, res);
});

//>|  getChat
routerChat.get("/chat", userPermissionCliente(), async (req, res) => {
  await chatController.getMessages(req, res);
});

//>|  deleteChat
routerChat.get("/chat/delete", userPermissionCliente(), async (req, res) => {
  await chatController.deleteMessages();
  res.redirect("/chat");
});

module.exports = routerChat;
