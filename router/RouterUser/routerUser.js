const express = require("express");
const routerUser = express.Router();
const path = require("path");
const validation = require("../../utils/Middlewares/validationMiddleware");
const userschema = require("../../Validations/userValidation");
const UserController= require("../../controllers/usersController");
const SessionController = require("../../controllers/sessionController");
const userController = new UserController();
const sessionController = new SessionController();

routerUser.use(express.static(path.join(__dirname + "/public")));


//>|  getUser
routerUser.get("/user", (req, res) => {
  res.render("user.ejs");
});

//>|  postUser
routerUser.post("/user", validation(userschema), async (req, res) => {
  userController.addUser(req, res);
});

//>|  userSignOut
routerUser.get("/user/signOut", async (req, res) => {
  sessionController.signOutGoToHome(req,res);
});

module.exports = routerUser;
