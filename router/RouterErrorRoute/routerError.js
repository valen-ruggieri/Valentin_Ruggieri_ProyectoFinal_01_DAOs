const express = require("express");
const routerError = express.Router();
const path = require("path");
const SessionController = require("../../controllers/sessionController");
const sessionController = new SessionController();

routerError.use(express.static(path.join(__dirname + "/public")));

routerError.get("/errorRoute", (req, res) => {
  sessionController.signOutErrorRoute(req, res);
});

module.exports = routerError;
